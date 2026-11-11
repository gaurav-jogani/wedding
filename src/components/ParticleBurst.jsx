import { useEffect, useRef } from 'react';

const GOLD_COLORS = ['#f0dca0', '#d4af37', '#c5a059', '#fff6da'];
const PETAL_COLORS = ['#d99baa', '#c17b86', '#9c5468', '#edeadf'];

function makeParticle(cx, cy) {
  const isPetal = Math.random() < 0.35;
  const angle = Math.random() * Math.PI * 2;
  const speed = 2 + Math.random() * 7;
  return {
    x: cx,
    y: cy,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 2,
    gravity: 0.12 + Math.random() * 0.08,
    size: isPetal ? 6 + Math.random() * 6 : 2 + Math.random() * 3,
    color: isPetal
      ? PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]
      : GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.2,
    isPetal,
    life: 1,
    decay: 0.006 + Math.random() * 0.006,
    drag: 0.985,
  };
}

export default function ParticleBurst({ active, onComplete }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx2d = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    particlesRef.current = Array.from({ length: 140 }, () => makeParticle(cx, cy));

    let frame = 0;
    const maxFrames = 220;

    const tick = () => {
      frame += 1;
      ctx2d.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particlesRef.current.forEach((p) => {
        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.life -= p.decay;

        if (p.life <= 0) return;

        ctx2d.save();
        ctx2d.globalAlpha = Math.max(p.life, 0);
        ctx2d.translate(p.x, p.y);
        ctx2d.rotate(p.rotation);
        if (p.isPetal) {
          ctx2d.fillStyle = p.color;
          ctx2d.beginPath();
          ctx2d.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
          ctx2d.fill();
        } else {
          ctx2d.fillStyle = p.color;
          ctx2d.shadowColor = p.color;
          ctx2d.shadowBlur = 6;
          ctx2d.beginPath();
          for (let i = 0; i < 4; i++) {
            const a = (i * Math.PI) / 2;
            ctx2d.lineTo(Math.cos(a) * p.size, Math.sin(a) * p.size);
            ctx2d.lineTo(Math.cos(a + Math.PI / 4) * p.size * 0.35, Math.sin(a + Math.PI / 4) * p.size * 0.35);
          }
          ctx2d.closePath();
          ctx2d.fill();
        }
        ctx2d.restore();
      });

      if (frame < maxFrames) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        ctx2d.clearRect(0, 0, window.innerWidth, window.innerHeight);
        onComplete?.();
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[110] pointer-events-none"
      aria-hidden="true"
    />
  );
}
