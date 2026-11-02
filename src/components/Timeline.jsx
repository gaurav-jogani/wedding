import { motion } from 'framer-motion';
import ParchmentCard from './ParchmentCard';
import EventIcon from './decor/EventIcon';
import FloralDivider from './decor/FloralDivider';
import { events } from '../data/content';

export default function Timeline() {
  return (
    <section className="relative px-4 py-16 sm:py-24 bg-parchment">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-script text-4xl sm:text-5xl text-magenta-800">Schedule of Events</h2>
          <p className="font-heading tracking-[0.2em] text-magenta-700/80 text-xs sm:text-sm uppercase mt-2">
            Two days of love, laughter &amp; celebration
          </p>
          <div className="text-gold-600 w-48 mx-auto mt-4">
            <FloralDivider />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-500/40 hidden sm:block" />

          <div className="flex flex-col gap-10 sm:gap-6">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  className={`relative sm:flex sm:items-center ${
                    isLeft ? 'sm:justify-start' : 'sm:justify-end'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gold-500 ring-4 ring-parchment-100 z-10" />

                  <div className={`w-full sm:w-[46%] ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <ParchmentCard seed={20 + i} withCorners={false} className="text-left">
                      <div className="flex items-start gap-4">
                        <div className="text-magenta-700 shrink-0 mt-1">
                          <EventIcon type={event.icon} className="w-9 h-9 sm:w-10 sm:h-10" />
                        </div>
                        <div>
                          <p className="font-heading text-[10px] sm:text-xs tracking-[0.2em] text-gold-700 uppercase">
                            {event.date} &middot; {event.time}
                          </p>
                          <h3 className="font-serif text-xl sm:text-2xl text-magenta-800 mt-1">
                            {event.title}
                          </h3>
                          <p className="font-body italic text-magenta-700/80 text-sm sm:text-base mt-1">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </ParchmentCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
