function Bloom({ cx, cy, scale = 1, color }) {
  const petals = Array.from({ length: 6 });
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      {petals.map((_, i) => {
        const angle = (i * 360) / 6;
        return (
          <ellipse
            key={i}
            cx="0"
            cy="-7"
            rx="5.5"
            ry="8"
            fill={color}
            opacity="0.92"
            transform={`rotate(${angle})`}
          />
        );
      })}
      <circle r="3.2" fill="#D4AF37" opacity="0.9" />
    </g>
  );
}

function Leaf({ x, y, rotate, scale = 1 }) {
  return (
    <path
      d="M0 0 C10 -3 18 3 22 14 C12 13 3 9 0 0 Z"
      fill="#7C8A6D"
      opacity="0.85"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

/** A small flat-style floral garland used to cap the top/bottom edge of the hero pill card. */
export default function PillFlowerCap({ className = '' }) {
  return (
    <svg viewBox="0 0 160 56" className={className} aria-hidden="true">
      <Leaf x={14} y={38} rotate={-30} scale={0.9} />
      <Leaf x={136} y={36} rotate={210} scale={0.9} />
      <Leaf x={80} y={48} rotate={0} scale={0.7} />
      <Bloom cx={40} cy={26} scale={0.85} color="#C97B8F" />
      <Bloom cx={80} cy={15} scale={1.05} color="#D99BAA" />
      <Bloom cx={120} cy={26} scale={0.85} color="#C97B8F" />
    </svg>
  );
}
