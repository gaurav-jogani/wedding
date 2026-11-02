import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingDate } from '../data/content';

function getTimeLeft() {
  const diff = Math.max(0, weddingDate.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Unit({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div
        className="w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center ornate-border"
        style={{
          background: 'radial-gradient(circle at 35% 25%, #5a1536 0%, #3d0a28 60%, #280619 100%)',
        }}
      >
        <span className="font-display text-gold-300 text-2xl sm:text-4xl tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 font-heading text-[10px] sm:text-xs tracking-[0.25em] text-gold-200/80 uppercase">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative px-4 py-16 sm:py-24 bg-royal-velvet text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-script text-4xl sm:text-5xl text-gold-200 mb-10"
      >
        The wedding begins in
      </motion.h2>

      <div className="flex items-center justify-center gap-4 sm:gap-10 flex-wrap">
        <Unit value={time.days} label="Days" delay={0} />
        <Unit value={time.hours} label="Hours" delay={0.1} />
        <Unit value={time.minutes} label="Minutes" delay={0.2} />
        <Unit value={time.seconds} label="Seconds" delay={0.3} />
      </div>
    </section>
  );
}
