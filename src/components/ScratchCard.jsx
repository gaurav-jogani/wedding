import { useCallback, useEffect, useRef, useState } from 'react';
import { playChimeSound } from '../utils/sound';

const REVEAL_THRESHOLD = 0.5;
const SAMPLE_GRID = 14;

export default function ScratchCard({ reveal, label }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const scratchingRef = useRef(false);
  const revealedRef = useRef(false);
  const [revealed, setRevealed] = useState(false);

  const drawFoil = useCallback((ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#a9701b');
    grad.addColorStop(0.3, '#f3dd8f');
    grad.addColorStop(0.5, '#ecc658');
    grad.addColorStop(0.7, '#f3dd8f');
    grad.addColorStop(1, '#a9701b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = '#fff6da';
    for (let i = -h; i < w; i += 7) {
      ctx.beginPath();
      ctx.moveTo(i, h);
      ctx.lineTo(i + h, 0);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    ctx.fillStyle = 'rgba(61, 10, 40, 0.55)';
    ctx.font = `600 ${Math.max(11, w * 0.11)}px "Cinzel", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SCRATCH', w / 2, h / 2);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const setup = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFoil(ctx, rect.width, rect.height);
    };

    setup();
    window.addEventListener('resize', setup);
    return () => window.removeEventListener('resize', setup);
  }, [drawFoil]);

  const erase = (clientX, clientY) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  };

  const checkReveal = () => {
    if (revealedRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    let cleared = 0;
    let total = 0;
    for (let i = 0; i < SAMPLE_GRID; i++) {
      for (let j = 0; j < SAMPLE_GRID; j++) {
        const x = Math.floor((rect.width / SAMPLE_GRID) * (i + 0.5));
        const y = Math.floor((rect.height / SAMPLE_GRID) * (j + 0.5));
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const pixel = ctx.getImageData(x * dpr, y * dpr, 1, 1).data;
        total += 1;
        if (pixel[3] < 20) cleared += 1;
      }
    }
    if (cleared / total >= REVEAL_THRESHOLD) {
      revealedRef.current = true;
      playChimeSound();
      setRevealed(true);
      const rectFull = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rectFull.width, rectFull.height);
    }
  };

  const toLocal = (e) => {
    if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  };

  const handleDown = (e) => {
    scratchingRef.current = true;
    const { x, y } = toLocal(e);
    erase(x, y);
  };
  const handleMove = (e) => {
    if (!scratchingRef.current) return;
    const { x, y } = toLocal(e);
    erase(x, y);
  };
  const handleUp = () => {
    if (!scratchingRef.current) return;
    scratchingRef.current = false;
    checkReveal();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-28 h-36 sm:w-36 sm:h-44 select-none"
      style={{ clipPath: 'url(#heartClip)' }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-magenta-50 border-2 border-gold-500/60">
        <span className="font-display text-magenta-800 text-2xl sm:text-3xl tracking-wider">
          {reveal}
        </span>
        <span className="mt-1 font-heading text-[9px] sm:text-[10px] tracking-[0.2em] text-magenta-600 uppercase">
          {label}
        </span>
      </div>
      {!revealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 cursor-pointer touch-none"
          onMouseDown={handleDown}
          onMouseMove={handleMove}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onTouchStart={handleDown}
          onTouchMove={handleMove}
          onTouchEnd={handleUp}
        />
      )}
    </div>
  );
}
