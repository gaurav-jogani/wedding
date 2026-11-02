import { mulberry32 } from './random';

/** Deterministic torn-paper / deckle-edge clip-path polygon, as a CSS value string. */
export function deckleClipPath(seed = 1, jitter = 1.6, stepsPerSide = 14) {
  const rand = mulberry32(seed);
  const points = [];

  const edge = (fromX, fromY, toX, toY) => {
    for (let i = 0; i <= stepsPerSide; i++) {
      const t = i / stepsPerSide;
      let x = fromX + (toX - fromX) * t;
      let y = fromY + (toY - fromY) * t;
      if (i !== 0 && i !== stepsPerSide) {
        const offset = (rand() - 0.5) * jitter;
        if (fromY === toY) y += offset;
        else x += offset;
      }
      points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }
  };

  edge(0, 0, 100, 0);
  edge(100, 0, 100, 100);
  edge(100, 100, 0, 100);
  edge(0, 100, 0, 0);

  return `polygon(${points.join(', ')})`;
}
