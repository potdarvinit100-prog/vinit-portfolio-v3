import { useEffect, useRef } from "react";

/**
 * 21st.dev-style black hole hero — canvas accretion disk with orbiting
 * particles, photon ring and event-horizon shadow. Pure 2D canvas, no WebGL.
 */
export default function BlackHoleHero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, w * DPR);
      canvas.height = Math.max(1, h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 170;
    const parts = Array.from({ length: N }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 0.95 + Math.random() * 1.7,
      s: 0.002 + Math.random() * 0.006,
      sz: 0.6 + Math.random() * 2.2,
      hue: Math.random() < 0.55 ? 258 : 174,
      ph: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const draw = () => {
      t += 1;
      const cx = w / 2;
      const cy = h * 0.52;
      const R = Math.min(w, h) * 0.16;

      ctx.clearRect(0, 0, w, h);

      // ambient deep-space glow
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 6);
      bg.addColorStop(0, "rgba(24,18,48,0.6)");
      bg.addColorStop(1, "rgba(8,8,13,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // tilted accretion disk
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.42);

      for (let i = 0; i < 3; i++) {
        const rr = R * (1.05 + i * 0.38);
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.012 + i * 1.7);
        const grad = ctx.createRadialGradient(0, 0, rr * 0.82, 0, 0, rr * 1.18);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.5, `rgba(139,123,255,${0.12 + pulse * 0.09})`);
        grad.addColorStop(0.78, `rgba(45,212,191,${0.07 + pulse * 0.05})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, rr * 1.18, 0, Math.PI * 2);
        ctx.fill();
      }

      // orbiting streak particles (inner orbits move faster)
      for (const p of parts) {
        p.a += p.s * (2.4 - p.r * 0.6);
        const x = Math.cos(p.a) * R * p.r;
        const y = Math.sin(p.a) * R * p.r;
        const tw = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.02 + p.ph));
        ctx.fillStyle = `hsla(${p.hue}, 92%, 72%, ${(0.6 * tw).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, p.sz, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // event horizon shadow
      const hole = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.04);
      hole.addColorStop(0, "rgba(0,0,0,1)");
      hole.addColorStop(0.86, "rgba(0,0,0,1)");
      hole.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = hole;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.04, 0, Math.PI * 2);
      ctx.fill();

      // photon ring
      ctx.strokeStyle = "rgba(240,236,255,0.4)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.04, 0, Math.PI * 2);
      ctx.stroke();

      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={ref} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--ink)]" />
    </div>
  );
}
