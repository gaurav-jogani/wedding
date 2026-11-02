import { motion } from 'framer-motion';
import OmSymbol from './decor/OmSymbol';
import FloralDivider from './decor/FloralDivider';

export default function Footer() {
  return (
    <footer className="relative px-4 py-16 sm:py-20 bg-royal-velvet text-center overflow-hidden">
      <motion.div
        className="max-w-xl mx-auto flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <OmSymbol className="w-12 h-12 text-gold-300" />
        <div className="text-gold-400 w-40">
          <FloralDivider />
        </div>
        <p className="font-body text-gold-100/90 text-base sm:text-lg leading-relaxed">
          We can't wait to celebrate with you. Your presence will make our day all the more special.
        </p>
        <p className="font-script text-3xl sm:text-4xl text-gold-200 mt-2">
          With Love &amp; Warmest Wishes
        </p>
        <p className="font-heading tracking-[0.2em] text-gold-300/80 text-xs sm:text-sm uppercase">
          The Jogani &amp; Mehta Families
        </p>
        <p className="font-heading text-gold-500/50 text-[10px] tracking-[0.2em] uppercase mt-8">
          17 &ndash; 18 December 2026 &middot; Jodhpur, Rajasthan
        </p>
      </motion.div>
    </footer>
  );
}
