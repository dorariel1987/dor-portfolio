import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { useTranslation } from '../i18n';

const accentMap = {
  cyan: {
    border: 'group-hover:border-neon-cyan/50',
    glow: 'group-hover:shadow-glow-cyan',
    text: 'text-neon-cyan',
    bg: 'from-neon-cyan/15',
  },
  magenta: {
    border: 'group-hover:border-neon-magenta/50',
    glow: 'group-hover:shadow-glow-magenta',
    text: 'text-neon-magenta',
    bg: 'from-neon-magenta/15',
  },
  violet: {
    border: 'group-hover:border-neon-violet/50',
    glow: 'group-hover:shadow-glow-cyan',
    text: 'text-neon-violet',
    bg: 'from-neon-violet/15',
  },
  lime: {
    border: 'group-hover:border-neon-lime/50',
    glow: 'group-hover:shadow-glow-cyan',
    text: 'text-neon-lime',
    bg: 'from-neon-lime/15',
  },
};

const ServiceCard = ({ service, index, t }) => {
  const Icon = service.icon;
  const accent = accentMap[service.accent] || accentMap.cyan;

  return (
    <motion.article
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className={`relative h-full panel p-6 sm:p-7 transition-all duration-500 ${accent.border} ${accent.glow} hover:-translate-y-1.5`}
      >
        <div
          className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent ${accent.bg.replace(
            'from-',
            'via-'
          )} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
        />

        <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent.bg} to-transparent border border-bg-border ${accent.text} mb-5`}>
          <Icon className="w-6 h-6" strokeWidth={1.6} />
        </div>

        <h3 className={`font-display font-semibold text-lg sm:text-xl mb-2 text-ink ${accent.text.replace('text-', 'group-hover:text-')}`}>
          {t(`about.services.${service.id}.title`)}
        </h3>
        <p className="text-sm text-ink-dim leading-relaxed">
          {t(`about.services.${service.id}.desc`)}
        </p>

        <div className={`absolute bottom-4 ${false ? 'left' : 'right'}-4 text-[10px] font-mono ${accent.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
          0{index + 1}
        </div>
      </div>
    </motion.article>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="heading-eyebrow">{t('about.eyebrow')}</p>
        <h2 className="heading-section mt-3 max-w-3xl">{t('about.title')}</h2>
        <p className="mt-6 max-w-3xl text-ink-dim text-base sm:text-lg leading-relaxed">
          {t('about.paragraph')}
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} t={t} />
        ))}
      </div>
    </section>
  );
};

export default About;
