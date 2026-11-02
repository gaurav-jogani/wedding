import { motion } from 'framer-motion';
import LuxuryCard from './LuxuryCard';
import AttireIllustration from './decor/AttireIllustration';
import FloralDivider from './decor/FloralDivider';
import { wardrobe } from '../data/content';

export default function Wardrobe() {
  return (
    <section className="relative px-4 py-16 sm:py-24 bg-linen">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-script text-4xl sm:text-5xl text-brick">Dress for the Moment</h2>
          <p className="font-heading tracking-[0.2em] text-wine/80 text-xs sm:text-sm uppercase mt-2">
            Wardrobe Planner
          </p>
          <div className="text-champagne-500 w-48 mx-auto mt-4">
            <FloralDivider />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {wardrobe.map((item, i) => (
            <motion.div
              key={item.occasion}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <LuxuryCard className="h-full">
                <div className="flex flex-col items-center text-center gap-3">
                  <AttireIllustration palette={item.palette} />
                  <h3 className="font-serif text-xl sm:text-2xl text-brick">{item.occasion}</h3>
                  <p className="font-body italic text-taupe text-sm sm:text-base">{item.style}</p>
                  <div className="flex gap-2 mt-1">
                    {item.palette.map((color) => (
                      <span
                        key={color}
                        className="w-5 h-5 rounded-full border border-champagne-500/40"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </LuxuryCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
