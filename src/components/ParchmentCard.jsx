import { useMemo } from 'react';
import { deckleClipPath } from '../utils/deckle';
import CornerFlourish from './decor/CornerFlourish';

export default function ParchmentCard({
  children,
  seed = 7,
  className = '',
  withCorners = true,
  backTint = 'bg-gold-200',
}) {
  const frontClip = useMemo(() => deckleClipPath(seed, 1.4, 16), [seed]);
  const backClip = useMemo(() => deckleClipPath(seed + 101, 1.8, 16), [seed]);

  return (
    <div className={`relative deckle-edge ${className}`}>
      <div
        className={`absolute inset-0 ${backTint} rotate-1 translate-x-1 translate-y-1`}
        style={{ clipPath: backClip }}
        aria-hidden="true"
      />
      <div className="relative bg-parchment p-6 sm:p-10" style={{ clipPath: frontClip }}>
        {withCorners && (
          <div className="pointer-events-none absolute inset-0 text-gold-600/70">
            <CornerFlourish className="absolute top-2 left-2 w-14 h-14 sm:w-20 sm:h-20" />
            <CornerFlourish className="absolute top-2 right-2 w-14 h-14 sm:w-20 sm:h-20" flip="h" />
            <CornerFlourish className="absolute bottom-2 left-2 w-14 h-14 sm:w-20 sm:h-20" flip="v" />
            <CornerFlourish className="absolute bottom-2 right-2 w-14 h-14 sm:w-20 sm:h-20" flip="hv" />
          </div>
        )}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
