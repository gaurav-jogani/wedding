import { motion } from 'framer-motion';
import LuxuryCard from './LuxuryCard';
import GaneshaIcon from './decor/GaneshaIcon';
import FloralDivider from './decor/FloralDivider';
import { couple, blessing } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function scrollToNext() {
  const el = document.getElementById('save-the-date');
  el?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section className="relative px-4 py-16 sm:py-24 flex flex-col items-center overflow-hidden bg-linen">
      <motion.div
        className="w-full max-w-2xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <LuxuryCard>
          <div className="flex flex-col items-center text-center gap-5">
            <GaneshaIcon className="w-16 h-16 sm:w-20 sm:h-20 text-brick" />

            <p dir="ltr" lang="sa" className="font-serif text-brick/80 text-sm sm:text-base italic max-w-md leading-relaxed">
              {blessing.shloka}
            </p>

            <div className="text-champagne-500 w-40">
              <FloralDivider />
            </div>

            <p className="font-body text-charcoal/85 text-[13px] sm:text-base leading-relaxed max-w-md">
              {blessing.copy}
            </p>

            <div className="flex items-center gap-4 sm:gap-8 my-2">
              <h1 className="font-script text-5xl sm:text-7xl text-brick leading-none">
                {couple.groom.name}
              </h1>
              <span className="font-display text-3xl sm:text-4xl text-champagne-500">&</span>
              <h1 className="font-script text-5xl sm:text-7xl text-brick leading-none">
                {couple.bride.name}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 text-taupe font-serif italic text-sm sm:text-base">
              <p>{couple.groom.parents}</p>
              <span className="hidden sm:inline text-champagne-500">•</span>
              <p>{couple.bride.parents}</p>
            </div>

            <div className="text-champagne-500 w-40 rotate-180">
              <FloralDivider />
            </div>
          </div>
        </LuxuryCard>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollToNext}
        className="mt-10 px-5 py-2 rounded-full border border-champagne-500/50 text-wine font-heading text-[11px] tracking-[0.2em] uppercase flex items-center gap-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
      >
        Scroll
        <span aria-hidden="true">&darr;</span>
      </motion.button>
    </section>
  );
}
