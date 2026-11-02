export default function AttireIllustration({ palette, className = 'w-24 h-32' }) {
  const [c1, c2, c3, c4] = palette;
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <ellipse cx="50" cy="128" rx="34" ry="8" fill={c4} opacity="0.25" />
      <circle cx="50" cy="26" r="16" fill="#e8b98a" />
      <path d="M36 20 Q50 2 64 20 Q64 10 50 6 Q36 10 36 20 Z" fill={c3} />
      <path
        d="M30 46 Q50 34 70 46 L80 110 Q50 128 20 110 Z"
        fill={c2}
      />
      <path
        d="M30 46 Q50 34 70 46 L74 60 Q50 50 26 60 Z"
        fill={c1}
        opacity="0.9"
      />
      <path d="M50 50 L50 115" stroke={c4} strokeWidth="2" opacity="0.5" />
      <path d="M32 70 Q50 78 68 70" stroke={c4} strokeWidth="1.5" fill="none" opacity="0.55" />
      <path d="M28 90 Q50 100 72 90" stroke={c4} strokeWidth="1.5" fill="none" opacity="0.55" />
    </svg>
  );
}
