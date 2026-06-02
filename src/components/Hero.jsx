import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, MapPin, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '../i18n';
import { profile } from '../constants';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const { t, lang } = useTranslation();
  const rotating = t('hero.rotating');

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="container-pad w-full relative z-10">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-cyan/[0.08] border border-neon-cyan/30 text-neon-cyan text-xs font-mono">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-neon-cyan opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-neon-cyan" />
              </span>
              {t('hero.eyebrow')}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-mute">
              <MapPin className="w-3.5 h-3.5" />
              {t('hero.location')}
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-ink-dim font-mono text-sm sm:text-base mb-3 tracking-wider"
          >
            <Sparkles className="inline-block w-4 h-4 mb-1 mr-1 text-neon-cyan" />
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            <span className="text-grad-cyan-mag">{t('hero.name')}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-ink/90 flex flex-wrap items-baseline gap-x-3"
          >
            <span className="text-ink-dim">{t('hero.titlePrefix')}</span>
            <span className="ltr text-neon-cyan text-glow-cyan">
              <Typewriter
                key={lang}
                options={{
                  strings: rotating,
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  deleteSpeed: 35,
                  pauseFor: 1600,
                }}
              />
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base sm:text-lg text-ink-dim leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-neon group">
              {t('hero.ctaPrimary')}
              <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                →
              </span>
            </a>
            <a href="#contact" className="btn-ghost">
              {t('hero.ctaSecondary')}
            </a>

            <span className="hidden md:inline-block w-px h-8 bg-bg-border mx-2" aria-hidden="true" />

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating stats / signature card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
        >
          {[
            { kpi: '5+', label: lang === 'he' ? 'שנות ניסיון' : 'Years experience' },
            { kpi: '3', label: lang === 'he' ? 'ענני AWS/Azure/GCP' : 'AWS · Azure · GCP' },
            { kpi: '10+', label: lang === 'he' ? 'פלטפורמות שנבנו' : 'Platforms shipped' },
            { kpi: '∞', label: lang === 'he' ? 'pipelines אוטומטיים' : 'Automated pipelines' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative panel panel-hover px-4 py-4 text-start group"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-grad-cyan-mag">
                {stat.kpi}
              </div>
              <div className="mt-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-ink-mute">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-mute hover:text-neon-cyan transition-colors"
        aria-label="Scroll"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono">{t('hero.scroll')}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </a>
    </section>
  );
};

export default Hero;
