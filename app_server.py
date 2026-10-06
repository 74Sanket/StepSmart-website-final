#!/usr/bin/env python3
"""Local static dashboard server with a real, background scrape endpoint."""
import json
import mimetypes
import os
import threading
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
STATE = {"running": False, "last_run": None, "last_success": None, "error": None, "jobs": None}
LOCK = threading.Lock()
LOG_PATH = ROOT / "data" / "sync_log.json"

try:
    if not (ROOT / "data" / "linkedin_posts.json").exists():
        raise FileNotFoundError
    records = json.loads(LOG_PATH.read_text(encoding="utf-8"))
    latest = records[0] if records else None
    if latest and latest.get("status") == "SUCCESS":
        STATE["last_success"] = latest.get("timestamp")
        STATE["jobs"] = latest.get("total_jobs")
    elif latest and latest.get("status") == "ERROR":
        STATE["error"] = latest.get("message")
except (OSError, ValueError, TypeError):
    pass

def run_sync():
    try:
        from pipeline import run_hidden_jobs_pipeline
        jobs = run_hidden_jobs_pipeline()
        STATE.update(last_success=datetime.now(timezone.utc).isoformat(), jobs=len(jobs), error=None)
        records = []
        try:
            records = json.loads(LOG_PATH.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            pass
        records.insert(0, {"timestamp": STATE["last_success"], "status": "SUCCESS", "total_jobs": len(jobs), "message": "Dashboard-triggered live post scrape completed."})
        LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
        LOG_PATH.write_text(json.dumps(records[:50], indent=2), encoding="utf-8")
    except Exception as exc:
        STATE["error"] = str(exc)
        records = []
        try:
            records = json.loads(LOG_PATH.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            pass
        records.insert(0, {"timestamp": datetime.now(timezone.utc).isoformat(), "status": "ERROR", "total_jobs": 0, "message": str(exc)})
        LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
        LOG_PATH.write_text(json.dumps(records[:50], indent=2), encoding="utf-8")
    finally:
        STATE["running"] = False

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_json(self, code, payload):
        body = json.dumps(payload).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_HEAD(self):
        self.send_error(405)

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/status":
            if not STATE["running"] and (ROOT / "data" / "linkedin_posts.json").exists():
                try:
                    records = json.loads(LOG_PATH.read_text(encoding="utf-8"))
                    latest = records[0] if records else None
                    if latest and latest.get("status") == "SUCCESS":
                        STATE.update(last_success=latest.get("timestamp"), jobs=latest.get("total_jobs"), error=None)
                    elif latest and latest.get("status") == "ERROR":
                        STATE["error"] = latest.get("message")
                except (OSError, ValueError, TypeError):
                    pass
            self.send_json(200, STATE)
            return
        relative = {"/": "index.html", "/index.html": "index.html", "/app.js": "app.js", "/styles.css": "styles.css", "/data/linkedin_posts.json": "data/linkedin_posts.json"}.get(path)
        if not relative:
            self.send_error(404)
            return
        file_path = ROOT / relative
        if not file_path.is_file():
            self.send_error(404)
            return
        body = file_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", mimetypes.guess_type(relative)[0] or "application/octet-stream")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if urlparse(self.path).path != "/api/sync":
            self.send_error(404)
            return
        origin = self.headers.get("Origin")
        if origin and urlparse(origin).netloc != self.headers.get("Host"):
            self.send_json(403, {"error": "Cross-origin sync is not allowed"})
            return
        with LOCK:
            if STATE["running"]:
                self.send_json(409, STATE)
                return
            STATE.update(running=True, error=None, last_run=datetime.now(timezone.utc).isoformat())
        token = self.headers.get("Authorization", "")
        if token.lower().startswith("bearer "):
            os.environ["APIFY_API_KEY"] = token[7:].strip()
        thread = threading.Thread(target=run_sync, daemon=True)
        thread.start()
        self.send_json(202, {"running": True, "message": "Scrape started"})

if __name__ == "__main__":
    print("Dashboard: http://127.0.0.1:3000")
    ThreadingHTTPServer(("127.0.0.1", int(os.getenv("PORT", "3000"))), Handler).serve_forever()
