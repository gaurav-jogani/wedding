import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FloralDivider from './decor/FloralDivider';
import { gallery, couple } from '../data/content';

function GalleryPhoto({ src, alt }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="w-full aspect-[4/5] flex flex-col items-center justify-center gap-2 bg-field-bg">
        <span className="font-script text-4xl text-brick/70">{couple.monogram}</span>
        <span className="font-heading text-[10px] tracking-[0.2em] text-taupe uppercase">
          Add a photo here
        </span>
      </div>
    );
  }

  return (
    <div className="w-full aspect-[4/5] bg-field-bg">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-contain"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}
      className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 ${
        direction === 'prev' ? 'left-0 sm:-left-5' : 'right-0 sm:-right-5'
      } z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-ivory-card border border-champagne-500/40 shadow-lg items-center justify-center text-wine transition-opacity disabled:opacity-30 disabled:cursor-default hover:bg-field-bg`}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        {direction === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

export default function Gallery() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = Number(entry.target.dataset.index);
            setActive(idx);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(gallery.length - 1, i));
    cardRefs.current[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <section className="relative px-4 py-16 sm:py-24 bg-linen">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-script text-4xl sm:text-5xl text-brick">A Glimpse of Us</h2>
          <p className="font-heading tracking-[0.2em] text-wine/80 text-xs sm:text-sm uppercase mt-2">
            Our Beautiful Moments
          </p>
          <div className="text-champagne-500 w-48 mx-auto mt-4">
            <FloralDivider />
          </div>
        </motion.div>

        <div className="relative w-full">
          <ArrowButton direction="prev" onClick={() => goTo(active - 1)} disabled={active === 0} />

          <div
            ref={trackRef}
            className="no-scrollbar scroll-smooth w-full flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-proximity pb-4 px-[11%] sm:px-[18%]"
            style={{ scrollbarWidth: 'none' }}
          >
            {gallery.map((photo, i) => (
              <div
                key={photo.id}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className="shrink-0 w-[76%] sm:w-[320px] snap-center rounded-2xl overflow-hidden border border-champagne-500/30 shadow-[0_18px_40px_rgba(107,42,53,0.14)] bg-ivory-card transition-transform duration-300"
              >
                <GalleryPhoto src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>

          <ArrowButton
            direction="next"
            onClick={() => goTo(active + 1)}
            disabled={active === gallery.length - 1}
          />
        </div>

        <div className="flex items-center gap-2 mt-5">
          {gallery.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? 'w-6 bg-wine' : 'w-1.5 bg-champagne-500/40'
              }`}
            />
          ))}
        </div>

        <p className="font-body italic text-taupe text-sm sm:text-base mt-6 text-center max-w-sm">
          A moment captured in time, forever in our hearts.
        </p>
      </div>
    </section>
  );
}
