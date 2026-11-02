import { motion } from 'framer-motion';
import ParchmentCard from './ParchmentCard';
import OmSymbol from './decor/OmSymbol';
import FloralDivider from './decor/FloralDivider';
import LanternString from './decor/LanternString';
import { couple } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative px-4 py-16 sm:py-24 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-royal-velvet" />
      <div className="w-full max-w-md mb-2 text-gold-300/70">
        <LanternString />
      </div>

      <motion.div
        className="w-full max-w-2xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <ParchmentCard seed={3}>
          <div className="flex flex-col items-center text-center gap-5">
            <OmSymbol className="w-16 h-16 sm:w-20 sm:h-20 text-gold-600" />

            <div className="text-magenta-700/80 w-40">
              <FloralDivider />
            </div>

            <p className="font-heading text-magenta-800/90 text-[11px] sm:text-sm tracking-[0.18em] leading-relaxed max-w-md uppercase">
              Two hearts, two souls, bound together in love forever.
              <br className="hidden sm:block" /> We request the pleasure of your company to celebrate
              the marriage of our children
            </p>

            <div className="flex items-center gap-4 sm:gap-8 my-2">
              <h1 className="font-script text-5xl sm:text-7xl text-magenta-800 leading-none">
                {couple.groom.name}
              </h1>
              <span className="font-display text-3xl sm:text-4xl text-gold-600">&</span>
              <h1 className="font-script text-5xl sm:text-7xl text-magenta-800 leading-none">
                {couple.bride.name}
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10 text-magenta-700/80 font-serif italic text-sm sm:text-base">
              <p>{couple.groom.parents}</p>
              <span className="hidden sm:inline text-gold-600">•</span>
              <p>{couple.bride.parents}</p>
            </div>

            <div className="text-magenta-700/80 w-40 rotate-180">
              <FloralDivider />
            </div>
          </div>
        </ParchmentCard>
      </motion.div>
    </section>
  );
}
