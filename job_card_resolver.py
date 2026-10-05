#!/usr/bin/env python3
"""
Step 3.4 & 4: Job Card Resolver & Schema Standardizer Module
Extracts LinkedIn Job IDs from "View job" cards, standardizes schema, and resolves JD details.
"""

import re
import urllib.parse

def extract_job_card_id(text_or_url):
    if not text_or_url:
        return None
        
    # Match linkedin.com/jobs/view/123456789 or currentJobId=123456789
    patterns = [
        r'linkedin\.com/jobs/view/(\d{8,12})',
        r'currentJobId=(\d{8,12})',
        r'jobId=(\d{8,12})',
        r'jobs/(\d{8,12})'
    ]
    for p in patterns:
        match = re.search(p, str(text_or_url))
        if match:
            return match.group(1)
            
    return None

def resolve_job_card_info(post):
    text = (post.get('job_description') or post.get('text') or '').strip()
    url = post.get('post_url') or post.get('apply_link') or post.get('url') or ''
    
    job_card_id = extract_job_card_id(text) or extract_job_card_id(url)
    has_job_card = bool(job_card_id) or "view job" in text.lower() or "apply on linkedin" in text.lower()
    
    apply_url = post.get('apply_link') or post.get('apply_url')
    if job_card_id and not apply_url:
        apply_url = f"https://www.linkedin.com/jobs/view/{job_card_id}"
        
    post['job_card_id'] = job_card_id
    post['has_job_card'] = has_job_card
    if apply_url:
        post['apply_url'] = apply_url
        post['apply_link'] = apply_url

    return post

def standardize_schema(post):
    post = resolve_job_card_info(post)
    
    author_name = post.get('author_name') or post.get('relevant_contact', {}).get('name') or "Hiring Manager"
    author_headline = post.get('author_title') or post.get('relevant_contact', {}).get('headline') or "Product Recruiter"
    
    headline_lower = author_headline.lower()
    if any(k in headline_lower for k in ["founder", "cpo", "ceo", "co-founder"]):
        author_type = "founder"
    elif any(k in headline_lower for k in ["recruit", "talent", "ta lead", "hr", "headhunter"]):
        author_type = "recruiter"
    elif any(k in headline_lower for k in ["product manager", "apm", "group pm", "director", "vp", "lead pm"]):
        author_type = "hiring_manager"
    else:
        author_type = "employee"
        
    role_name = post.get('role_title') or post.get('seniority') or "Product Manager"
    company_name = post.get('company') or "Tech Company"

    raw_post_url = post.get('post_url') or post.get('job_url') or post.get('apply_url') or post.get('apply_link') or post.get('url') or post.get('link') or post.get('postUrl') or ''
    if not raw_post_url or not str(raw_post_url).startswith(('http://', 'https://')):
        encoded_q = urllib.parse.quote(f'"{role_name}" {company_name} hiring')
        raw_post_url = f"https://www.linkedin.com/search/results/content/?keywords={encoded_q}&sortBy=%22date_posted%22"

    raw_apply_url = post.get('apply_url') or post.get('apply_link') or raw_post_url
    if not str(raw_apply_url).startswith(('http://', 'https://')):
        raw_apply_url = raw_post_url

    standardized = {
        "job_id": post.get('job_id') or post.get('job_card_id') or f"post_{hash(raw_post_url)}",
        "post_url": raw_post_url,
        "author": author_name,
        "author_name": author_name,
        "author_title": author_headline,
        "author_type": author_type,
        "company": company_name,
        "role": role_name,
        "role_title": role_name,
        "location": post.get('location') or "India",
        "posted_at": post.get('posted_at') or "Past 24 hours",
        "scraped_at": post.get('scraped_at') or "",
        "job_description": post.get('job_description') or post.get('text') or '',
        "email": post.get('email') or post.get('extracted_email') or '',
        "has_email": post.get('has_email', False),
        "has_job_card": post.get('has_job_card', False),
        "job_card_id": post.get('job_card_id'),
        "apply_url": raw_apply_url,
        "apply_link": raw_apply_url,
        "contact_method": post.get('contact_method') or ("email" if post.get('has_email') else ("job_card" if post.get('has_job_card') else "DM")),
        "source": post.get('source') or "apify_serp",
        "query_id": post.get('query_id') or "q_wide_01",
        "seniority_fit": post.get('seniority_fit') or "0-2y",
        "quality_score": post.get('quality_score') or 75
    }
    
    return standardized

if __name__ == '__main__':
    sample = {
        "job_description": "We are hiring an APM at StanceBeam! View job card: https://www.linkedin.com/jobs/view/3920192831",
        "relevant_contact": {"name": "Purushottam Ratre", "headline": "Product Lead @ MakeMyTrip"}
    }
    res = standardize_schema(sample)
    print("Standardized schema example:")
    import json
    print(json.dumps(res, indent=2))
