import { motion } from 'framer-motion';
import OmSymbol from './decor/OmSymbol';
import FloralDivider from './decor/FloralDivider';
import { couple } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative px-4 py-16 sm:py-20 bg-rosewood-deep text-center overflow-hidden">
      <motion.div
        className="max-w-xl mx-auto flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <OmSymbol className="w-12 h-12 text-champagne-500" />
        <div className="text-champagne-500 w-40">
          <FloralDivider />
        </div>

        <h2 className="font-script text-4xl sm:text-5xl text-[#f5f0de] mt-2">
          {couple.groom.name} &amp; {couple.bride.name}
        </h2>

        <p className="font-body text-[#f5f0de]/90 text-base sm:text-lg leading-relaxed mt-2">
          We can't wait to celebrate with you. Your presence will make our day all the more special.
        </p>
        <p className="font-script text-2xl sm:text-3xl text-[#f5f0de]">With Love &amp; Warmest Wishes</p>
        <p className="font-heading tracking-[0.2em] text-[#f5f0de] text-xs sm:text-sm uppercase">
          The {couple.families} Families
        </p>
        <p className="font-heading text-[#f5f0de]/40 text-[10px] tracking-[0.2em] uppercase mt-8">
          17 &ndash; 18 December 2026 &middot; Jodhpur, Rajasthan
        </p>
      </motion.div>
    </footer>
  );
}
