import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  activeSection: string;
  currentView: 'home' | 'realisations';
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (view: 'home' | 'realisations', sectionId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, currentView, language, onLanguageChange, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = translations[language].nav;

  // Prevent background scroll when full-screen menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const languages: { code: Language, label: string, flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  const navItems = [
    { id: 'home', label: t.home, type: 'section' },
    { id: 'about', label: t.about, type: 'section' },
    { id: 'vision', label: t.vision, type: 'section' },
    { id: 'blog', label: t.blog, type: 'section' },
    { id: 'contact', label: t.contact, type: 'section' },
    { id: 'realisations', label: t.realisations, type: 'page' },
  ];

  const handleNavClick = (item: { id: string, type: string }) => {
    if (item.type === 'page') {
      onNavigate('realisations');
    } else {
      onNavigate('home', item.id);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer z-[60]" onClick={() => handleNavClick({ id: 'home', type: 'section' })}>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight">Max Jhonsley Gaspard</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-bold transition-colors duration-200 ${
                  activeSection === item.id ? 'text-red-500 underline' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-slate-800 border border-slate-700 text-white px-3 py-1.5 rounded-full text-sm font-bold hover:bg-slate-700 transition-all"
              >
                <span>{languages.find(l => l.code === language)?.flag}</span>
                <span className="uppercase">{language}</span>
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl py-2 w-40 animate-in fade-in zoom-in-95 duration-200">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { onLanguageChange(l.code); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-slate-800 transition-colors ${language === l.code ? 'text-white font-bold' : 'text-slate-300'}`}
                    >
                      <span>{l.flag}</span> {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="lg:hidden flex items-center gap-4 z-[60]">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-slate-800 p-2 rounded-full border border-slate-700 text-white"
            >
              {languages.find(l => l.code === language)?.flag}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* FIXED FULL SCREEN OVERLAY - Original text size & position preserved */}
      {isMenuOpen && (
        <div className="fixed inset-0 lg:hidden bg-slate-950 pt-24 px-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300 z-[55] h-screen overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left text-lg font-bold text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      
      {/* Mobile Language Popup */}
      {isLangOpen && !isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 p-4 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl z-40 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-4">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { onLanguageChange(l.code); setIsLangOpen(false); }}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all ${language === l.code ? 'border-red-500 bg-slate-800' : 'border-slate-700 bg-slate-800'}`}
              >
                <span className="text-2xl">{l.flag}</span>
                <span className="font-bold text-white">{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;