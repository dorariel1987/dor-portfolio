import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Cloud, Database, Boxes } from 'lucide-react';
import { techStack } from '../constants';
import { useTranslation } from '../i18n';

const categoryMeta = {
  frontend: { icon: Layers, accent: 'cyan' },
  backend: { icon: Server, accent: 'magenta' },
  cloud: { icon: Cloud, accent: 'violet' },
  data: { icon: Database, accent: 'lime' },
  other: { icon: Boxes, accent: 'cyan' },
};

const accentText = {
  cyan: 'text-neon-cyan',
  magenta: 'text-neon-magenta',
  violet: 'text-neon-violet',
  lime: 'text-neon-lime',
};

const accentBorder = {
  cyan: 'hover:border-neon-cyan/50 hover:text-neon-cyan',
  magenta: 'hover:border-neon-magenta/50 hover:text-neon-magenta',
  violet: 'hover:border-neon-violet/50 hover:text-neon-violet',
  lime: 'hover:border-neon-lime/50 hover:text-neon-lime',
};

const Tech = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="heading-eyebrow">{t('stack.eyebrow')}</p>
        <h2 className="heading-section mt-3">{t('stack.title')}</h2>
        <p className="mt-4 max-w-2xl text-ink-dim text-base leading-relaxed">
          {t('stack.subtitle')}
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {techStack.map((cat, idx) => {
          const meta = categoryMeta[cat.category] || categoryMeta.other;
          const Icon = meta.icon;
          return (
            <motion.div
              key={cat.category}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="panel panel-hover p-6 sm:p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`inline-flex w-10 h-10 items-center justify-center rounded-lg border border-bg-border bg-bg-panel/70 ${accentText[meta.accent]}`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.6} />
                </span>
                <h3 className="font-display font-semibold text-lg text-ink">
                  {t(`stack.categories.${cat.category}`)}
                </h3>
                <span className="ms-auto text-[10px] font-mono text-ink-mute">
                  {String(cat.items.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`chip transition-all duration-200 ${accentBorder[meta.accent]} hover:-translate-y-0.5`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
