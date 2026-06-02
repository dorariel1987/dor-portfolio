import React from 'react';
import { ArrowUp } from 'lucide-react';
import { socialLinks, profile } from '../constants';
import { useTranslation } from '../i18n';

const Footer = () => {
  const { t, lang } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="container-pad pb-10 pt-6">
      <div className="panel px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-center gap-5 justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-start">
          <span className="font-display font-semibold text-ink text-grad-cyan-mag">
            {profile.name[lang]}
          </span>
          <span className="hidden sm:inline-block w-px h-5 bg-bg-border" />
          <span className="text-xs sm:text-sm text-ink-dim">
            © {year} · {t('footer.tagline')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                aria-label={link.label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
          <a
            href="#top"
            className="ms-2 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
            aria-label={t('footer.backToTop')}
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
