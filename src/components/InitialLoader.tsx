// "use client";

// import React, { useEffect, useRef, useState } from "react";

// export default function InitialLoader({
//   text = "AI Community Chandigarh",
//   morphDelayMs = 1500,
//   zIndex = 99999,
// }: {
//   text?: string;
//   morphDelayMs?: number;
//   zIndex?: number;
// }) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const rafRef = useRef<number | null>(null);
//   const startedRef = useRef(false);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     if (!visible || startedRef.current) return;
//     startedRef.current = true;

//     const canvas = canvasRef.current!;
//     const container = containerRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     const dpr = Math.max(1, window.devicePixelRatio || 1);

//     function resize() {
//       const w = container.clientWidth;
//       const h = container.clientHeight;
//       canvas.width = w * dpr;
//       canvas.height = h * dpr;
//       canvas.style.width = w + "px";
//       canvas.style.height = h + "px";
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     }

//     resize();
//     window.addEventListener("resize", resize);

//     const w = container.clientWidth;
//     const h = container.clientHeight;

//     // initial bouncing dots
//     const dotCount = 3;
//     const spacing = Math.max(20, Math.min(40, Math.floor(Math.min(w, h) * 0.02)));
//     const bigDots = new Array(dotCount).fill(0).map((_, i) => ({
//       x: w / 2 + (i - 1) * spacing,
//       y: h / 2,
//       r: Math.max(6, Math.min(10, Math.floor(Math.min(w, h) * 0.01))),
//       delay: i * 120,
//     }));

//     let particles: {
//       x: number;
//       y: number;
//       tx: number;
//       ty: number;
//       vx: number;
//       vy: number;
//       r: number;
//       ease: number;
//     }[] = [];

//     let formationStarted = false;

//     function getTextDotsPositions(textStr: string, sample = 8) {
//       const off = document.createElement("canvas");
//       const ctxOff = off.getContext("2d")!;
//       const fontSize = Math.min(160, Math.max(48, Math.floor(w / (textStr.length * 0.7))));
//       off.width = w;
//       off.height = h;
//       ctxOff.clearRect(0, 0, off.width, off.height);
//       ctxOff.fillStyle = "white";
//       ctxOff.textBaseline = "middle";
//       ctxOff.textAlign = "center";
//       ctxOff.font = `bold ${fontSize}px Inter, ui-sans-serif, system-ui`;
//       ctxOff.fillText(textStr, off.width / 2, off.height / 2);

//       const positions: { x: number; y: number }[] = [];
//       const img = ctxOff.getImageData(0, 0, off.width, off.height).data;
//       for (let py = 0; py < off.height; py += sample) {
//         for (let px = 0; px < off.width; px += sample) {
//           const idx = (py * off.width + px) * 4;
//           if (img[idx + 3] > 128) positions.push({ x: px, y: py });
//         }
//       }

//       const MAX = 1200;
//       if (positions.length > MAX) {
//         const step = Math.ceil(positions.length / MAX);
//         return positions.filter((_, i) => i % step === 0);
//       }
//       return positions;
//     }

//     let startTime = performance.now();

//     function draw(time: number) {
//       ctx.clearRect(0, 0, w, h);

//       const t = time - startTime;

//       if (!formationStarted) {
//         const g = ctx.createLinearGradient(0, 0, w, h);
//         g.addColorStop(0, "rgba(255,255,255,0.98)");
//         g.addColorStop(1, "rgba(250,250,255,0.98)");
//         ctx.fillStyle = g;
//         ctx.fillRect(0, 0, w, h);

//         // draw bouncing dots
//         bigDots.forEach((d, i) => {
//           const bounceStrength = Math.max(8, Math.min(22, Math.floor(Math.min(w, h) * 0.02)));
//           const y = h / 2 + Math.sin((t + d.delay) / 160) * bounceStrength;
//           const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
//           const color = colors[i % colors.length];
//           ctx.beginPath();
//           ctx.fillStyle = color;
//           ctx.arc(d.x, y, d.r + 1, 0, Math.PI * 2);
//           ctx.fill();
//         });
//       } else {
//         ctx.fillStyle = "rgba(255,255,255,0.98)";
//         ctx.fillRect(0, 0, w, h);

//         particles.forEach((p) => {
//           ctx.beginPath();
//           ctx.fillStyle = "#0f172a";
//           ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//           ctx.fill();
//         });
//       }

//       rafRef.current = requestAnimationFrame(draw);
//     }

//     rafRef.current = requestAnimationFrame(draw);

//     const morphTimeout = window.setTimeout(() => {
//       formationStarted = true;
//       const positions = getTextDotsPositions(text, Math.max(4, Math.floor(Math.min(w, h) / 80)));

//       particles = positions.map((pos) => {
//         const sx = w / 2 + (Math.random() - 0.5) * 60;
//         const sy = h / 2 + (Math.random() - 0.5) * 60;
//         return {
//           x: sx,
//           y: sy,
//           tx: pos.x,
//           ty: pos.y,
//           vx: 0,
//           vy: 0,
//           r: Math.max(1.2, 3 - (pos.x / w) * 2),
//           ease: 0.06 + Math.random() * 0.06,
//         };
//       });

//       let iter = 0;
//       const maxIters = 2200;

//       function animateToTargets() {
//         iter++;
//         let allClose = true;
//         for (const p of particles) {
//           const dx = p.tx - p.x;
//           const dy = p.ty - p.y;
//           p.vx += dx * p.ease * 0.35;
//           p.vy += dy * p.ease * 0.35;
//           p.vx *= 0.86;
//           p.vy *= 0.86;
//           p.x += p.vx;
//           p.y += p.vy;
//           if (Math.hypot(dx, dy) > 1.5) allClose = false;
//         }

//         if (allClose || iter > maxIters) {
//           setTimeout(() => {
//             setVisible(false);
//             cleanup();
//           }, 650);
//         } else {
//           requestAnimationFrame(animateToTargets);
//         }
//       }

//       requestAnimationFrame(animateToTargets);
//     }, morphDelayMs);

//     function cleanup() {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", resize);
//       clearTimeout(morphTimeout);
//       try {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//       } catch (_) {}
//     }

//     return () => cleanup();
//   }, [text, morphDelayMs]);

//   if (!visible) return null;

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black/30"
//       style={{ zIndex }}
//       aria-hidden={!visible}
//     >
//       <div
//         ref={containerRef}
//         className="w-full max-w-5xl aspect-[16/9] sm:aspect-[4/3] flex items-center justify-center"
//       >
//         <canvas ref={canvasRef} className="w-full h-full block" />
//       </div>
//     </div>
//   );
// }
