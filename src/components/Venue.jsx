import { motion } from 'framer-motion';
import FloralDivider from './decor/FloralDivider';
import { venue } from '../data/content';

export default function Venue() {
  return (
    <section className="relative px-4 py-16 sm:py-24 bg-linen text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-brick tracking-[0.1em] text-base sm:text-xl leading-relaxed uppercase max-w-xl"
        >
          Under the Jodhpur sky, surrounded by those we love most, we would be honoured to celebrate with
          you
        </motion.h2>

        <div className="text-champagne-500 w-48">
          <FloralDivider />
        </div>

        <motion.div
          className="w-full rounded-2xl overflow-hidden border border-champagne-500/35 shadow-[0_18px_40px_rgba(107,42,53,0.14)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/venue.jpg"
            alt="Shri Ram International, Jodhpur — poolside courtyard at night"
            className="w-full h-56 sm:h-80 object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="text-center">
          <h3 className="font-script text-3xl sm:text-4xl text-brick">{venue.name}</h3>
          <p className="font-body text-taupe text-sm sm:text-base mt-1">{venue.city}</p>
        </div>

        <motion.a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 px-7 py-3 rounded-full font-heading tracking-[0.15em] text-xs sm:text-sm uppercase text-black shadow-lg bg-wine"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.39 7.34 11.64a1 1 0 0 0 1.32 0C12.95 21.39 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          Find Your Way
        </motion.a>
      </div>
    </section>
  );
}
