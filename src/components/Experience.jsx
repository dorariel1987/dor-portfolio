import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useTranslation } from '../i18n';

const Experience = () => {
  const { t } = useTranslation();
  const items = t('experience.items');

  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="heading-eyebrow">{t('experience.eyebrow')}</p>
        <h2 className="heading-section mt-3">{t('experience.title')}</h2>
        <p className="mt-4 max-w-2xl text-ink-dim text-base leading-relaxed">
          {t('experience.subtitle')}
        </p>
      </motion.div>

      <div className="relative mt-16 ps-6 sm:ps-10">
        {/* Vertical line */}
        <div
          className="absolute top-0 bottom-0 start-2 sm:start-4 w-px bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/30 to-neon-magenta/0"
          aria-hidden="true"
        />

        <ul className="space-y-12">
          {Array.isArray(items) &&
            items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative"
              >
                {/* Dot */}
                <span className="absolute -start-[1.55rem] sm:-start-[2.65rem] top-1.5 inline-flex w-5 h-5 items-center justify-center rounded-full border border-neon-cyan/50 bg-bg-base shadow-glow-cyan">
                  <Briefcase className="w-2.5 h-2.5 text-neon-cyan" />
                </span>

                <div className="panel panel-hover p-6 sm:p-7 group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-neon-cyan">
                      {item.date}
                    </p>
                    <span className="hidden sm:inline-block h-px flex-1 mx-3 bg-bg-border" />
                    <p className="text-xs sm:text-sm text-ink-dim">{item.company}</p>
                  </div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink mb-4">
                    {item.role}
                  </h3>
                  <ul className="space-y-2">
                    {Array.isArray(item.points) &&
                      item.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex gap-3 text-sm sm:text-[15px] text-ink-dim leading-relaxed"
                        >
                          <span className="mt-2 inline-block flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neon-magenta/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </motion.li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
