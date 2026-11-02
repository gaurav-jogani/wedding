export default function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="heartClip" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.9 C0.5,0.9 0.08,0.55 0.08,0.3 C0.08,0.13 0.24,0.03 0.4,0.14 C0.46,0.18 0.5,0.25 0.5,0.3 C0.5,0.25 0.54,0.18 0.6,0.14 C0.76,0.03 0.92,0.13 0.92,0.3 C0.92,0.55 0.5,0.9 0.5,0.9 Z" />
        </clipPath>
        <radialGradient id="sealGradient" cx="34%" cy="26%" r="80%">
          <stop offset="0%" stopColor="#fffaf3" />
          <stop offset="22%" stopColor="#f9e4d9" />
          <stop offset="45%" stopColor="#e8b2bf" />
          <stop offset="68%" stopColor="#c45f85" />
          <stop offset="88%" stopColor="#832f58" />
          <stop offset="100%" stopColor="#5c1d3e" />
        </radialGradient>
        <linearGradient id="petalHiGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="petalShGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
