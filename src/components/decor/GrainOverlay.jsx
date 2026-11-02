let uid = 0;

/** Fine film-grain noise, laid over flat color so it reads as textured paper, not a vector fill. */
export default function GrainOverlay({ opacity = 0.07, blend = 'overlay', className = '' }) {
  const id = `grain-${++uid}`;
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ mixBlendMode: blend, opacity }}
      aria-hidden="true"
    >
      <defs>
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0" />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
