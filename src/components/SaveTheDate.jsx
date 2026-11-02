import { motion } from 'framer-motion';
import ScratchCard from './ScratchCard';
import FloralDivider from './decor/FloralDivider';
import { saveTheDate } from '../data/content';

const labels = { day: 'Day', month: 'Month', year: 'Year' };

export default function SaveTheDate() {
  return (
    <section id="save-the-date" className="relative px-4 py-16 sm:py-20 bg-linen">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-script text-4xl sm:text-5xl text-brick">Save The Date</h2>
          <p className="font-heading tracking-[0.2em] text-wine/80 text-xs sm:text-sm uppercase mt-2">
            Reveal Our Big Day
          </p>
        </motion.div>

        <div className="text-champagne-500 w-48">
          <FloralDivider />
        </div>

        <p className="font-body text-taupe text-sm sm:text-base max-w-md -mt-2">
          Scratch the hearts to reveal
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

        <p className="font-body italic text-taupe text-sm sm:text-base mt-1">
          The start of a beautiful journey&hellip;
        </p>
      </div>
    </section>
  );
}
