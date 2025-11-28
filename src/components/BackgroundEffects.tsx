// BackgroundEffects.tsx (React component)
"use client";

import { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let throttle = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => { throttle = false; }, 16); // smoother throttle

      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        // set CSS variables used by radial-gradient circle at var(--x) var(--y)
        grid.style.setProperty('--x', `${clientX}px`);
        grid.style.setProperty('--y', `${clientY}px`);
      });
    };

    const handleClick = (e: MouseEvent) => {
      const spark = document.createElement('div');
      spark.className = 'spark';
      document.body.appendChild(spark);

      const { clientX, clientY } = e;
      spark.style.left = `${clientX}px`;
      spark.style.top = `${clientY}px`;

      spark.addEventListener('animationend', () => {
        if (spark.parentElement) {
          spark.parentElement.removeChild(spark);
        }
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
        <div ref={gridRef} className="grid-bg"></div>
        <div className="lights">
            <div className="light blue"></div>
            <div className="light red"></div>
            <div className="light yellow"></div>
            <div className="light green"></div>
        </div>
    </div>
  );
}
