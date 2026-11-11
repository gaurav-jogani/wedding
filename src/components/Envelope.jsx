import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSealSound } from '../utils/sound';
import RoseSpray from './decor/RoseSpray';
import WaxSeal from './decor/WaxSeal';
import GrainOverlay from './decor/GrainOverlay';
import { couple } from '../data/content';

const TOP_CLIP = 'polygon(0% 0%, 100% 0%, 50% 50%)';
const ENVELOPE_BG = 'linear-gradient(150deg, #9AA38B 0%, #7C8A6D 45%, #5C6B4E 78%, #3F4A34 100%)';

export default function Envelope({ onOpened, onSealClick }) {
  const [phase, setPhase] = useState('closed'); // closed -> opening -> hidden

  const handleSeal = () => {
    if (phase !== 'closed') return;
    // Start the flap animating first — audio synthesis and the particle burst
    // are deferred a frame so they don't block the opening paint and cause jank.
    setPhase('opening');
    requestAnimationFrame(() => {
      playSealSound();
      onSealClick?.();
      window.dispatchEvent(new CustomEvent('invitation:particles'));
    });

    setTimeout(() => setPhase('hidden'), 1900);
  };

  return (
    <AnimatePresence onExitComplete={onOpened}>
      {phase !== 'hidden' && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{ perspective: '2200px', background: ENVELOPE_BG }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* embossed rose sprays, bleeding slightly off the edges — each a distinct seed so they don't look like stamped copies */}
          <RoseSpray className="absolute -top-6 -left-10 w-44 sm:w-56 h-auto" seed={4} />
          <RoseSpray className="absolute -bottom-8 -left-8 w-40 sm:w-52 h-auto" seed={17} mirror />
          <RoseSpray className="absolute -top-6 -right-10 w-44 sm:w-56 h-auto" seed={31} mirror />
          <RoseSpray className="absolute -bottom-8 -right-8 w-40 sm:w-52 h-auto" seed={58} />

          <GrainOverlay />

          {/* seam lines */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <line x1="0" y1="0" x2="100" y2="100" stroke="#f5f0de" strokeOpacity="0.55" strokeWidth="0.25" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="#f5f0de" strokeOpacity="0.55" strokeWidth="0.25" />
          </svg>

          {/* top flap (opens on click), covers the upper sprays/seams until tapped.
              No live SVG filter is rendered in here — feTurbulence isn't GPU-accelerated
              and would force a full repaint every frame of the 3D rotation, which is
              what made the opening animation feel jerky. */}
          <motion.div
            className="absolute inset-0"
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'transform',
              clipPath: TOP_CLIP,
              background: ENVELOPE_BG,
            }}
            animate={{ rotateX: phase === 'closed' ? 0 : -175 }}
            transition={{ duration: 1.1, ease: [0.45, 0, 0.3, 1] }}
          />

          {/* soft vignette for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(30,10,16,0.25) 100%)',
            }}
          />

          {/* script header */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-full max-w-md px-6 text-center">
            <AnimatePresence>
              {phase === 'closed' && (
                <motion.p
                  className="font-script text-[#f5f0de] text-4xl sm:text-5xl"
                  exit={{ opacity: 0, y: -6 }}
                >
                  Tap to Reveal
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* wax seal — sits exactly where the diagonal seams cross (true center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28">
            <motion.button
              type="button"
              onClick={handleSeal}
              aria-label="Tap the wax seal to open your invitation"
              className="block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full"
              animate={phase === 'closed' ? { scale: [1, 1.05, 1] } : { scale: 0.55, opacity: 0 }}
              transition={
                phase === 'closed'
                  ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.5 }
              }
              whileHover={phase === 'closed' ? { scale: 1.08 } : {}}
              whileTap={{ scale: 0.92 }}
            >
              <WaxSeal monogram={couple.monogram} className="w-full h-full drop-shadow-xl" />
            </motion.button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[66%] w-full max-w-sm px-8 text-center">
            <AnimatePresence>
              {phase === 'closed' && (
                <motion.p
                  className="font-body italic text-[#f5f0de]/90 text-sm sm:text-base leading-relaxed animate-pulseSoft"
                  exit={{ opacity: 0, y: -6 }}
                >
                  The {couple.families} families invite you to celebrate the wedding of {couple.groom.name} &amp; {couple.bride.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
