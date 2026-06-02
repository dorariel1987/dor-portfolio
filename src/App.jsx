import React, { useEffect } from 'react';
import {
  About,
  AnimatedBackground,
  Contact,
  CustomCursor,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';
import { LanguageProvider, useTranslation } from './i18n';
import './App.css';

const DocumentMeta = () => {
  const { t, lang } = useTranslation();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = t('meta.title');
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', t('meta.description'));
  }, [t, lang]);

  return null;
};

const PortfolioContent = () => (
  <div className="relative grain">
    <AnimatedBackground />
    <CustomCursor />
    <DocumentMeta />
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App = () => (
  <LanguageProvider>
    <PortfolioContent />
  </LanguageProvider>
);

export default App;
