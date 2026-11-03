"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; r: number; vx: number; vy: number; phase: number };

// Each ribbon is a bundle of thin sine lines that sway over time.
const RIBBONS = [
  { y: 0.84, amp: 0.06, freq: 1.3, speed: 0.18, spread: 40, lines: 18, colors: ["#1d4ed8", "#3b82f6", "#60a5fa"] },
  { y: 0.2, amp: 0.04, freq: 1.7, speed: -0.12, spread: 24, lines: 12, colors: ["#60a5fa", "#2563eb", "#1e40af"] },
];

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(90, (width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(Math.random() * 0.25 + 0.05),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const drawRibbons = (t: number, light: boolean) => {
      ctx.globalCompositeOperation = light ? "source-over" : "lighter";
      const step = Math.max(6, width / 180);

      for (const rb of RIBBONS) {
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, rb.colors[0]);
        grad.addColorStop(0.5, rb.colors[1]);
        grad.addColorStop(1, rb.colors[2]);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;

        for (let i = 0; i < rb.lines; i++) {
          const k = i / (rb.lines - 1); // 0..1 across the bundle
          ctx.globalAlpha = (light ? 0.1 : 0.11) * Math.sin(k * Math.PI) + 0.015;
          ctx.beginPath();
          for (let x = -step; x <= width + step; x += step) {
            const nx = x / width;
            const y =
              rb.y * height +
              Math.sin(nx * Math.PI * rb.freq + t * rb.speed + k * 0.9) * rb.amp * height +
              Math.sin(nx * Math.PI * 3.3 - t * rb.speed * 1.6) * rb.amp * 0.35 * height +
              (k - 0.5) * rb.spread * (1 + 0.5 * Math.sin(nx * 4 + t * 0.3));
            if (x === -step) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
    };

    const drawParticles = (t: number, light: boolean) => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = light ? "#2563eb" : "#93c5fd";
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        ctx.globalAlpha = (light ? 0.25 : 0.35) + 0.35 * Math.sin(t * 1.5 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = (ms: number) => {
      const t = ms / 1000;
      const light = document.body.classList.contains("light-mode");
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, width, height);
      drawRibbons(t, light);
      drawParticles(t, light);
      ctx.globalAlpha = 1;
      if (!reduceMotion) raf = requestAnimationFrame(frame);
    };

    // Pause the loop while the tab is hidden
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="bg-curve c1" />
      <div className="bg-curve c2" />
      <div className="bg-curve c3" />
      <div className="bg-glow" />
      <div className="bg-grid" />
      <div className="bg-dots d1" />
      <div className="bg-dots d2" />
      <canvas ref={canvasRef} className="bg-canvas" />
    </div>
  );
}
