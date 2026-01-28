
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Realisations from './components/Realisations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { translations } from './translations';

type View = 'home' | 'realisations' | 'blog';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [language, setLanguage] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[language];

  useEffect(() => {
    if (view === 'realisations' || view === 'blog') {
      window.scrollTo(0, 0);
      setActiveSection(view);
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'vision', 'contact'];
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const navigateTo = (targetView: View, sectionId?: string) => {
    if (targetView !== view) {
      setView(targetView);
      if (targetView === 'home' && sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        activeSection={activeSection} 
        currentView={view}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={navigateTo} 
      />
      <main>
        {view === 'home' ? (
          <>
            <Hero language={language} />
            <About language={language} />
            <Vision language={language} />
            <Contact language={language} />
          </>
        ) : view === 'realisations' ? (
          <div className="pt-20">
            <Realisations language={language} />
          </div>
        ) : (
          <div className="pt-20">
            <Blog language={language} />
          </div>
        )}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;