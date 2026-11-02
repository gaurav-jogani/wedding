export default function FloralDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <line x1="10" y1="20" x2="160" y2="20" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <line x1="240" y1="20" x2="390" y2="20" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <g transform="translate(200 20)">
        <circle r="5" fill="currentColor" opacity="0.9" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <ellipse
              key={i}
              cx="0"
              cy="-13"
              rx="4.5"
              ry="9"
              fill="currentColor"
              opacity="0.55"
              transform={`rotate(${angle})`}
            />
          );
        })}
      </g>
      <g transform="translate(170 20)">
        <circle r="2.6" fill="currentColor" opacity="0.8" />
      </g>
      <g transform="translate(230 20)">
        <circle r="2.6" fill="currentColor" opacity="0.8" />
      </g>
    </svg>
  );
}
