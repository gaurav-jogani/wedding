export default function LanternString({ className = '' }) {
  const lanterns = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 400 90" className={`w-full h-auto ${className}`} aria-hidden="true">
      <path
        d="M0 10 Q 200 60 400 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      {lanterns.map((i) => {
        const t = i / (lanterns.length - 1);
        const x = 20 + t * 360;
        const y = 10 + Math.sin(Math.PI * t) * 50;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <line x1="0" y1="-2" x2="0" y2="8" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <ellipse cx="0" cy="20" rx="9" ry="12" fill="currentColor" opacity="0.18" />
            <ellipse
              cx="0"
              cy="20"
              rx="9"
              ry="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.8"
            />
            <line x1="-9" y1="20" x2="9" y2="20" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
            <circle cx="0" cy="33" r="1.4" fill="currentColor" opacity="0.8" />
          </g>
        );
      })}
    </svg>
  );
}
