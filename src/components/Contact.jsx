import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin } from 'lucide-react';
import { profile } from '../constants';
import { useTranslation } from '../i18n';

const Contact = () => {
  const { t, lang } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${lang === 'he' ? 'פנייה מהפורטפוליו' : 'Portfolio inquiry'} — ${form.name || 'visitor'}`
    );
    const bodyLines = [
      `${lang === 'he' ? 'שם' : 'Name'}: ${form.name}`,
      `${lang === 'he' ? 'אימייל' : 'Email'}: ${form.email}`,
      '',
      form.message,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (_) {
      // no-op
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="heading-eyebrow">{t('contact.eyebrow')}</p>
        <h2 className="heading-section mt-3 max-w-3xl">{t('contact.title')}</h2>
        <p className="mt-4 max-w-2xl text-ink-dim text-base leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="panel p-6 sm:p-8 lg:col-span-3 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink-mute">
                {t('contact.form.name')}
              </span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.form.namePlaceholder')}
                className="input-field mt-2"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink-mute">
                {t('contact.form.email')}
              </span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.form.emailPlaceholder')}
                className="input-field mt-2 ltr"
                autoComplete="email"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink-mute">
              {t('contact.form.message')}
            </span>
            <textarea
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.form.messagePlaceholder')}
              className="input-field mt-2 resize-none"
            />
          </label>

          <button type="submit" className="btn-neon group w-full sm:w-auto">
            <Send className="w-4 h-4" />
            {t('contact.form.submit')}
          </button>
        </motion.form>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="panel p-6 sm:p-7">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-ink-mute mb-3">
              {t('contact.form.directEmail')}
            </p>
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-ink hover:text-neon-cyan transition-colors text-sm sm:text-base font-medium ltr break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-neon-cyan" />
                {profile.email}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-bg-border text-ink-dim hover:text-neon-cyan hover:border-neon-cyan/40 transition-all flex-shrink-0"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-neon-lime" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="panel p-6 sm:p-7">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-ink-mute mb-3">
              {lang === 'he' ? 'מיקום' : 'Location'}
            </p>
            <p className="flex items-center gap-2 text-ink text-sm sm:text-base">
              <MapPin className="w-4 h-4 text-neon-magenta" />
              {t('hero.location')}
            </p>
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="panel panel-hover block p-6 sm:p-7 group"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-ink-mute mb-3">
              LinkedIn
            </p>
            <p className="text-ink text-sm sm:text-base group-hover:text-neon-cyan transition-colors break-all ltr">
              {profile.linkedin.replace('https://www.', '')}
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
