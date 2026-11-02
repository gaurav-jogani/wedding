export default function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="heartClip" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.9 C0.5,0.9 0.08,0.55 0.08,0.3 C0.08,0.13 0.24,0.03 0.4,0.14 C0.46,0.18 0.5,0.25 0.5,0.3 C0.5,0.25 0.54,0.18 0.6,0.14 C0.76,0.03 0.92,0.13 0.92,0.3 C0.92,0.55 0.5,0.9 0.5,0.9 Z" />
        </clipPath>
        <radialGradient id="sealGradient" cx="34%" cy="26%" r="80%">
          <stop offset="0%" stopColor="#fffdfa" />
          <stop offset="24%" stopColor="#f7f3ec" />
          <stop offset="48%" stopColor="#ece8e1" />
          <stop offset="72%" stopColor="#cfc3b8" />
          <stop offset="90%" stopColor="#a8958a" />
          <stop offset="100%" stopColor="#87726a" />
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
