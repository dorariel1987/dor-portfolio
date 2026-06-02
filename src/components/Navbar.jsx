import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages, FileDown } from 'lucide-react';
import { navLinks, profile } from '../constants';
import { useTranslation, useLanguage } from '../i18n';

const SECTION_IDS = ['about', 'experience', 'stack', 'work', 'contact'];

const Navbar = () => {
  const { t } = useTranslation();
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div
        className={`container-pad transition-all duration-300 ${
          scrolled ? 'mt-2' : 'mt-4'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled
              ? 'glass-strong shadow-glow-soft'
              : 'glass'
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <span className="relative inline-flex w-9 h-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 border border-neon-cyan/40 font-display font-bold text-sm tracking-wider text-neon-cyan group-hover:shadow-glow-cyan transition-shadow">
              {profile.initials}
              <span className="absolute -inset-px rounded-xl border border-neon-magenta/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-mute">
                portfolio
              </span>
              <span className="text-sm font-display font-semibold text-ink">
                {profile.name[lang]}
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-3 py-1.5 text-sm font-medium tracking-wide transition-colors ${
                  active === link.id ? 'text-neon-cyan' : 'text-ink-dim hover:text-ink'
                }`}
              >
                {t(link.tKey)}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-neon-cyan to-neon-magenta"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5" />
              {t('ui.switchLanguage')}
            </button>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-neon-cyan/15 to-neon-magenta/15 border border-neon-cyan/40 text-ink hover:shadow-glow-cyan transition-shadow"
            >
              <FileDown className="w-3.5 h-3.5" />
              {t('nav.resume')}
            </a>

            <button
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-bg-border text-ink-dim hover:text-ink transition-colors"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? t('ui.close') : t('ui.menu')}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-0 z-30 bg-bg-base/95 backdrop-blur-xl pt-24 pb-10 overflow-y-auto"
            onClick={closeMenu}
          >
            <div className="container-pad" onClick={(e) => e.stopPropagation()}>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-4 px-2 border-b border-bg-border text-2xl font-display font-medium text-ink hover:text-neon-cyan transition-colors"
                    >
                      <span>{t(link.tKey)}</span>
                      <span className="text-xs font-mono text-ink-mute">0{idx + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLang();
                    closeMenu();
                  }}
                  className="btn-ghost w-full justify-center"
                >
                  <Languages className="w-4 h-4" />
                  {t('ui.switchLanguage')}
                </button>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-neon w-full justify-center"
                  onClick={closeMenu}
                >
                  <FileDown className="w-4 h-4" />
                  {t('nav.resume')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
