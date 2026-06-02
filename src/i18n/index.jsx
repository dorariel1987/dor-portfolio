import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from './en.json';
import he from './he.json';

const dictionaries = { en, he };

const LanguageContext = createContext({
  lang: 'en',
  dir: 'ltr',
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => key,
});

const STORAGE_KEY = 'dor-portfolio-lang';

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'he') return stored;
  const browser = (window.navigator.language || 'en').toLowerCase();
  return browser.startsWith('he') ? 'he' : 'en';
};

const resolvePath = (obj, path) => {
  if (!path) return undefined;
  return path.split('.').reduce((acc, segment) => {
    if (acc == null) return undefined;
    return acc[segment];
  }, obj);
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLang);

  const dir = lang === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.classList.toggle('lang-he', lang === 'he');
    document.body.classList.toggle('lang-en', lang === 'en');
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      // Ignore storage errors (private mode etc.)
    }
  }, [lang, dir]);

  const setLang = useCallback((next) => {
    if (next === 'en' || next === 'he') {
      setLangState(next);
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'he' : 'en'));
  }, []);

  const t = useCallback(
    (key, fallback) => {
      const value = resolvePath(dictionaries[lang], key);
      if (value !== undefined && value !== null) return value;
      const enValue = resolvePath(dictionaries.en, key);
      if (enValue !== undefined && enValue !== null) return enValue;
      return fallback ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, dir, setLang, toggleLang, t }), [lang, dir, setLang, toggleLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export const useTranslation = () => {
  const { t, lang, dir } = useContext(LanguageContext);
  return { t, lang, dir };
};
