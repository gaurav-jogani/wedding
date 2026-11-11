import { mulberry32 } from '../../utils/random';

let uid = 0;

function blobPath(cx, cy, baseR, seed, points = 48) {
  const rand = mulberry32(seed);
  const harmonics = [
    { freq: 2, amp: 0.05 + rand() * 0.02, phase: rand() * Math.PI * 2 },
    { freq: 3, amp: 0.035 + rand() * 0.02, phase: rand() * Math.PI * 2 },
    { freq: 5, amp: 0.022 + rand() * 0.015, phase: rand() * Math.PI * 2 },
    { freq: 9, amp: 0.012 + rand() * 0.008, phase: rand() * Math.PI * 2 },
  ];
  const pts = [];
  for (let i = 0; i < points; i++) {
    const t = (i / points) * Math.PI * 2;
    let r = baseR;
    harmonics.forEach((h) => {
      r += baseR * h.amp * Math.sin(h.freq * t + h.phase);
    });
    pts.push([cx + Math.cos(t) * r, cy + Math.sin(t) * r]);
  }
  let d = `M ${(pts[0][0] + pts[pts.length - 1][0]) / 2} ${(pts[0][1] + pts[pts.length - 1][1]) / 2} `;
  for (let i = 0; i < pts.length; i++) {
    const curr = pts[i];
    const next = pts[(i + 1) % pts.length];
    const mid = [(curr[0] + next[0]) / 2, (curr[1] + next[1]) / 2];
    d += `Q ${curr[0].toFixed(2)} ${curr[1].toFixed(2)} ${mid[0].toFixed(2)} ${mid[1].toFixed(2)} `;
  }
  return `${d}Z`;
}

export default function WaxSeal({ monogram = 'G & R', className = 'w-24 h-24' }) {
  const id = `seal-${++uid}`;
  const outerD = blobPath(50, 50, 35, 11);
  const innerD = blobPath(50, 50, 28, 23);

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={outerD} />
        </clipPath>
        <filter id={`${id}-emboss`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0.5" dy="2" stdDeviation="1.8" floodColor="#3f4a34" floodOpacity="0.5" />
        </filter>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
        </filter>
      </defs>

      <g filter={`url(#${id}-emboss)`}>
        <path d={outerD} fill="url(#sealGradient)" />
      </g>

      {/* directional shadow pooling toward the lower-right, clipped to the seal's own irregular edge */}
      <g clipPath={`url(#${id}-clip)`}>
        <ellipse cx="66" cy="68" rx="26" ry="22" fill="#3f4a34" opacity="0.16" />
        <ellipse cx="38" cy="32" rx="20" ry="16" fill="#fffdfa" opacity="0.35" />
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          filter={`url(#${id}-grain)`}
          opacity="0.5"
          style={{ mixBlendMode: 'multiply' }}
        />
      </g>

      <path d={innerD} fill="none" stroke="#fffdfa" strokeOpacity="0.5" strokeWidth="0.6" />

      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="21"
        fill="#3f4a34"
        opacity="0.35"
        transform="translate(0.5 0.7)"
      >
        {monogram}
      </text>
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="21"
        fill="#9c5468"
      >
        {monogram}
      </text>
    </svg>
  );
}
