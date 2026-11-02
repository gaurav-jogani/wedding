import { motion } from 'framer-motion';

export default function MusicToggle({ playing, toggle }) {
  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Mute background music' : 'Play background music'}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: 'radial-gradient(circle at 35% 30%, #f6e3ad 0%, #cf8f22 60%, #731347 100%)',
        boxShadow: '0 6px 16px rgba(0,0,0,0.45), inset 0 2px 4px rgba(255,255,255,0.35)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      whileTap={{ scale: 0.9 }}
    >
      {playing ? (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-magenta-950" fill="currentColor">
          <path d="M3 10v4h4l5 5V5L7 10H3z" />
          <path d="M16.5 12a4.5 4.5 0 0 0-2.3-3.9v7.8a4.5 4.5 0 0 0 2.3-3.9z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-magenta-950" fill="currentColor">
          <path d="M3 10v4h4l5 5V5L7 10H3z" />
          <path d="M19 9l-5 6M14 9l5 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </motion.button>
  );
}
