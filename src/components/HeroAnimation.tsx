
import { useEffect, useRef } from "react";

export function HeroAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Mock Lottie animation with simple SVG animation
    const circles = svgRef.current?.querySelectorAll("circle");
    if (circles) {
      circles.forEach((circle, i) => {
        circle.style.animationDelay = `${i * 0.3}s`;
      });
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary animate-pulse opacity-20"
        />
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary animate-pulse opacity-40"
        />
        <circle
          cx="100"
          cy="100"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-primary animate-pulse opacity-60"
        />
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-primary animate-pulse opacity-80"
        />
        <circle
          cx="100"
          cy="100"
          r="10"
          fill="currentColor"
          className="text-primary animate-pulse"
        />
        <g className="animate-spin origin-center" style={{ animationDuration: '15s' }}>
          <circle cx="160" cy="100" r="8" fill="currentColor" className="text-accent-foreground" />
          <circle cx="40" cy="100" r="8" fill="currentColor" className="text-accent-foreground" />
          <circle cx="100" cy="160" r="8" fill="currentColor" className="text-accent-foreground" />
          <circle cx="100" cy="40" r="8" fill="currentColor" className="text-accent-foreground" />
        </g>
      </svg>
    </div>
  );
}
