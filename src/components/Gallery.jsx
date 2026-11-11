import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FloralDivider from './decor/FloralDivider';
import { gallery, couple } from '../data/content';

const AUTO_ADVANCE_MS = 3500;

const POSITION_STYLE = {
  center: { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, zIndex: 10 },
  left: { transform: 'translate(-118%, -50%) scale(0.82)', opacity: 0.9, zIndex: 6 },
  right: { transform: 'translate(18%, -50%) scale(0.82)', opacity: 0.9, zIndex: 6 },
  'far-left': { transform: 'translate(-165%, -50%) scale(0.62)', opacity: 0, zIndex: 1 },
  'far-right': { transform: 'translate(65%, -50%) scale(0.62)', opacity: 0, zIndex: 1 },
  hidden: { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0, zIndex: 0 },
};

function positionOf(index, active, total) {
  let diff = index - active;
  if (diff < -total / 2) diff += total;
  if (diff > total / 2) diff -= total;
  switch (diff) {
    case 0:
      return 'center';
    case -1:
      return 'left';
    case 1:
      return 'right';
    case -2:
      return 'far-left';
    case 2:
      return 'far-right';
    default:
      return 'hidden';
  }
}

function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path d="M4 4 Q4 34 34 34" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="4" cy="4" r="3" fill="currentColor" opacity="0.85" />
      <circle cx="19" cy="9" r="1.6" fill="currentColor" opacity="0.55" />
      <circle cx="9" cy="19" r="1.6" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

function SlidePhoto({ src, alt }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-1 bg-field-bg">
        <span className="font-script text-2xl sm:text-3xl text-brick/70">{couple.monogram}</span>
        <span className="font-heading text-[8px] sm:text-[9px] tracking-[0.2em] text-taupe uppercase">
          Add a photo
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* blurred, scaled-up copy fills the box edge-to-edge regardless of the photo's orientation */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover scale-125 blur-xl opacity-70 saturate-150"
      />
      {/* the real photo, shown whole (landscape or portrait) with no cropping */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        className="relative w-full h-full object-contain select-none"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const total = gallery.length;

  useEffect(() => {
    if (total <= 1) return undefined;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="relative px-4 py-16 sm:py-24 bg-rosewood overflow-hidden">
      <CornerFlourish className="absolute top-3 left-3 w-14 h-14 sm:w-20 sm:h-20 text-champagne-400/70" />
      <CornerFlourish className="absolute top-3 right-3 w-14 h-14 sm:w-20 sm:h-20 text-champagne-400/70 -scale-x-100" />
      <CornerFlourish className="absolute bottom-3 right-3 w-14 h-14 sm:w-20 sm:h-20 text-champagne-400/70 -scale-100" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-script text-4xl sm:text-5xl text-[#fdfbf4]">A Glimpse of Us</h2>
          <p className="font-heading tracking-[0.2em] text-champagne-400 text-xs sm:text-sm uppercase mt-2">
            Our Beautiful Moments
          </p>
          <div className="text-champagne-400 w-48 mx-auto mt-4">
            <FloralDivider />
          </div>
        </motion.div>

        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[330px] lg:h-[370px]">
          {gallery.map((photo, i) => {
            const pos = positionOf(i, active, total);
            return (
              <button
                key={photo.id}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-1/2 w-[150px] h-[188px] sm:w-[190px] sm:h-[238px] md:w-[225px] md:h-[281px] lg:w-[255px] lg:h-[319px] rounded-[22px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.25)] bg-ivory-card transition-[transform,opacity] duration-700 ease-out cursor-pointer"
                style={POSITION_STYLE[pos]}
              >
                <SlidePhoto src={photo.src} alt={photo.alt} />
              </button>
            );
          })}
        </div>

        <p className="font-body italic text-[#fdfbf4]/80 text-sm sm:text-base mt-8 text-center max-w-sm">
          A moment captured in time, forever in our hearts.
        </p>
      </div>
    </section>
  );
}
