import { motion } from 'framer-motion';
import ScratchCard from './ScratchCard';
import FloralDivider from './decor/FloralDivider';
import { saveTheDate } from '../data/content';

const labels = { day: 'Day', month: 'Month', year: 'Year' };

export default function SaveTheDate() {
  return (
    <section className="relative px-4 py-16 sm:py-20 bg-parchment">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-script text-4xl sm:text-5xl text-magenta-800">Save The Date</h2>
          <p className="font-heading tracking-[0.2em] text-magenta-700/80 text-xs sm:text-sm uppercase mt-2">
            For the wedding celebration
          </p>
        </motion.div>

        <div className="text-gold-600 w-48">
          <FloralDivider />
        </div>

        <p className="font-body text-magenta-700/70 text-sm sm:text-base max-w-md -mt-2">
          Scratch each golden heart to unveil the day we say "I do".
        </p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {saveTheDate.map((card) => (
            <ScratchCard key={card.id} reveal={card.reveal} label={labels[card.id]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
