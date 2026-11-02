import { mulberry32 } from '../../utils/random';

function petalPath(len, width, asymL, asymR) {
  return `M0,0 C${-width * 0.6 + asymL},${-len * 0.22} ${-width * 0.46},${-len * 0.66} 0,${-len} C${width * 0.46},${-len * 0.66} ${width * 0.6 + asymR},${-len * 0.22} 0,0 Z`;
}

function RoseBloom({ cx, cy, scale = 1, seed = 1 }) {
  const rand = mulberry32(seed);
  const outerCount = 7 + Math.floor(rand() * 2);
  const outerStep = 360 / outerCount;
  const innerCount = 5;
  const innerStep = 360 / innerCount;

  const petals = [];
  for (let i = 0; i < outerCount; i++) {
    const angle = i * outerStep + (rand() - 0.5) * 14;
    const len = 19 + rand() * 4;
    const width = 11 + rand() * 2.5;
    const asymL = (rand() - 0.5) * 4;
    const asymR = (rand() - 0.5) * 4;
    petals.push({ angle, d: petalPath(len, width, asymL, asymR), key: `o${i}` });
  }
  for (let i = 0; i < innerCount; i++) {
    const angle = i * innerStep + 22 + (rand() - 0.5) * 16;
    const len = 11 + rand() * 3;
    const width = 7 + rand() * 1.8;
    const asymL = (rand() - 0.5) * 3;
    const asymR = (rand() - 0.5) * 3;
    petals.push({ angle, d: petalPath(len, width, asymL, asymR), key: `i${i}`, inner: true });
  }

  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      {petals.map((p) => (
        <g key={p.key} transform={`rotate(${p.angle}) translate(0 ${p.inner ? -6 : -10})`}>
          <path d={p.d} />
        </g>
      ))}
      <circle r="4.2" />
    </g>
  );
}

function Leaf({ x, y, rotate, scale = 1 }) {
  return (
    <path
      d="M0 0 C 17 -5 32 5 39 25 C 22 24 5 17 0 0 Z"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

/**
 * An embossed rose spray — one main bloom, a smaller bud, and a couple of
 * leaves — drawn as a light-offset copy and a dark-offset copy blended with
 * soft-light so it reads as pressed into the paper. Petal shapes and
 * placement are seed-jittered per instance so repeats don't look identical.
 */
export default function RoseSpray({ className = '', style, mirror = false, seed = 1 }) {
  const rand = mulberry32(seed * 97 + 3);
  const budOffset = { x: 95 + rand() * 20, y: 92 + rand() * 18 };
  const budScale = 0.5 + rand() * 0.12;
  const budSeed = seed * 13 + 5;

  const shapes = (
    <>
      <RoseBloom cx="58" cy="54" scale={1} seed={seed} />
      <RoseBloom cx={budOffset.x} cy={budOffset.y} scale={budScale} seed={budSeed} />
      <Leaf x={68} y={76} rotate={58 + rand() * 10} />
      <Leaf x={26} y={66} rotate={-42 - rand() * 10} scale={0.85} />
      <Leaf x={budOffset.x - 18} y={budOffset.y + 14} rotate={95 + rand() * 12} scale={0.55} />
    </>
  );

  return (
    <svg
      viewBox="0 0 170 170"
      className={className}
      style={{ mixBlendMode: 'soft-light', transform: mirror ? 'scaleX(-1)' : undefined, ...style }}
      aria-hidden="true"
    >
      <g transform="translate(1.8 1.8)" fill="url(#petalShGrad)">
        {shapes}
      </g>
      <g transform="translate(-1.3 -1.3)" fill="url(#petalHiGrad)">
        {shapes}
      </g>
    </svg>
  );
}
