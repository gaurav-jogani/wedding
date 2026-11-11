import { motion } from 'framer-motion';
import GaneshaIcon from './decor/GaneshaIcon';
import FloralDivider from './decor/FloralDivider';
import PillFlowerCap from './decor/PillFlowerCap';
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
    <section className="relative px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 flex flex-col items-center overflow-hidden bg-linen">
      {/* soft sage + gold glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(154,163,139,0.22) 0%, transparent 70%), radial-gradient(45% 40% at 85% 100%, rgba(212,175,55,0.12) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="relative w-full max-w-lg"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        {/* floral caps overlapping the pill's curved top/bottom edge */}
        <PillFlowerCap className="absolute -top-7 left-1/2 -translate-x-1/2 w-36 sm:w-44 z-10" />
        <PillFlowerCap className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-36 sm:w-44 z-10 rotate-180" />

        {/* the signature oval/pill invitation card */}
        <div className="relative rounded-[999px] bg-rosewood-light shadow-[0_25px_60px_rgba(63,74,52,0.35)] px-8 py-16 sm:px-14 sm:py-20 flex flex-col items-center text-center gap-4">
          <GaneshaIcon className="w-14 h-14 sm:w-16 sm:h-16 text-[#fdfbf4]" />

          <p dir="ltr" lang="sa" className="font-serif text-[#fdfbf4]/85 text-xs sm:text-sm italic max-w-[220px] sm:max-w-xs leading-relaxed">
            {blessing.shloka}
          </p>

          <div className="text-champagne-400 w-28 sm:w-32">
            <FloralDivider />
          </div>

          <p className="font-body text-[#fdfbf4]/90 text-[13px] sm:text-base leading-relaxed max-w-[220px] sm:max-w-xs">
            {blessing.copy}
          </p>

          <div className="flex items-center gap-3 sm:gap-5 my-1">
            <h1 className="font-script text-4xl sm:text-6xl text-[#fdfbf4] leading-none">
              {couple.groom.name}
            </h1>
            <span className="font-display text-2xl sm:text-3xl text-champagne-400">&</span>
            <h1 className="font-script text-4xl sm:text-6xl text-[#fdfbf4] leading-none">
              {couple.bride.name}
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-8 text-[#fdfbf4]/70 font-serif italic text-xs sm:text-sm">
            <p>{couple.groom.parents}</p>
            <span className="hidden sm:inline text-champagne-400">•</span>
            <p>{couple.bride.parents}</p>
          </div>

          <p className="font-heading text-champagne-400 text-[10px] sm:text-xs tracking-[0.25em] uppercase pt-2">
            #{couple.hashtag}
          </p>
        </div>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollToNext}
        className="relative mt-14 px-5 py-2 rounded-full border border-champagne-500/50 text-wine font-heading text-[11px] tracking-[0.2em] uppercase flex items-center gap-2"
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
