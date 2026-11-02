export default function CornerFlourish({ className = '', flip = '' }) {
  const scaleX = flip.includes('h') ? -1 : 1;
  const scaleY = flip.includes('v') ? -1 : 1;
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={{ transform: `scale(${scaleX}, ${scaleY})` }}
      aria-hidden="true"
    >
      <path
        d="M4 4 C 40 6, 60 10, 70 30 C 78 46, 70 60, 90 66 C 100 69, 108 68, 116 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.75"
      />
      <path
        d="M4 4 C 10 30, 14 50, 30 66 C 44 80, 60 78, 66 94"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      {[
        [70, 30],
        [90, 66],
        [30, 66],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          {Array.from({ length: 6 }).map((_, j) => (
            <ellipse
              key={j}
              cx="0"
              cy="-6"
              rx="2.6"
              ry="5.5"
              fill="currentColor"
              opacity="0.55"
              transform={`rotate(${(j * 360) / 6})`}
            />
          ))}
          <circle r="2.2" fill="currentColor" opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}
