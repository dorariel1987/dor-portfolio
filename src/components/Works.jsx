import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projectsMeta } from '../constants';
import { useTranslation } from '../i18n';

const accentMap = {
  cyan: { ring: 'hover:border-neon-cyan/50', glow: 'hover:shadow-glow-cyan', text: 'text-neon-cyan', from: 'from-neon-cyan/30' },
  magenta: { ring: 'hover:border-neon-magenta/50', glow: 'hover:shadow-glow-magenta', text: 'text-neon-magenta', from: 'from-neon-magenta/30' },
  violet: { ring: 'hover:border-neon-violet/50', glow: 'hover:shadow-glow-cyan', text: 'text-neon-violet', from: 'from-neon-violet/30' },
  lime: { ring: 'hover:border-neon-lime/50', glow: 'hover:shadow-glow-cyan', text: 'text-neon-lime', from: 'from-neon-lime/30' },
};

const ProjectVisual = ({ accent, index }) => {
  const a = accentMap[accent] || accentMap.cyan;
  return (
    <div className="relative h-44 sm:h-48 overflow-hidden rounded-xl border border-bg-border">
      <div className={`absolute inset-0 bg-gradient-to-br ${a.from} via-transparent to-transparent`} />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`font-display font-black text-7xl sm:text-8xl ${a.text} opacity-20 group-hover:opacity-40 transition-opacity duration-500 select-none`}>
          0{index + 1}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-bg-card/0 to-transparent" />
      <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-tr ${a.from} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
    </div>
  );
};

const ProjectCard = ({ meta, content, index, t }) => {
  const a = accentMap[meta.accent] || accentMap.cyan;
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative panel p-5 transition-all duration-500 border-bg-border ${a.ring} ${a.glow} hover:-translate-y-1.5`}
    >
      <ProjectVisual accent={meta.accent} index={index} />

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="font-display font-semibold text-lg sm:text-xl text-ink leading-tight">
          {content.name}
        </h3>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {meta.source_code_link && (
            <a
              href={meta.source_code_link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
              aria-label={t('works.viewCode')}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {meta.live_link && (
            <a
              href={meta.live_link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
              aria-label={t('works.viewLive')}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-ink-dim leading-relaxed">{content.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {Array.isArray(content.tags) &&
          content.tags.map((tag) => (
            <span key={tag} className="chip text-[11px]">
              {tag}
            </span>
          ))}
      </div>

      <div className={`absolute top-4 ${false ? 'left' : 'right'}-4 ${a.text} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 -translate-y-1`}>
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </motion.article>
  );
};

const Works = () => {
  const { t } = useTranslation();
  const items = t('works.items');

  return (
    <section id="work" className="section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="heading-eyebrow">{t('works.eyebrow')}</p>
        <h2 className="heading-section mt-3">{t('works.title')}</h2>
        <p className="mt-4 max-w-2xl text-ink-dim text-base leading-relaxed">
          {t('works.subtitle')}
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsMeta.map((meta, idx) => {
          const content = Array.isArray(items) ? items[idx] : null;
          if (!content) return null;
          return (
            <ProjectCard key={meta.id} meta={meta} content={content} index={idx} t={t} />
          );
        })}
      </div>
    </section>
  );
};

export default Works;
