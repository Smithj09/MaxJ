
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language].about;

  const stats = [
    { label: t.stats.origin, value: 'Anse-Rouge' },
    { label: t.stats.birth, value: '2001' },
    { label: t.stats.residence, value: 'China' },
    { label: t.stats.lang, value: 'Polyglot' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-100">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 leading-tight">{t.title}</h3>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-3 sm:p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-slate-900 font-bold text-sm sm:text-lg truncate">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-xl text-red-600 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{t.cards.economy}</h4>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" /></svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{t.cards.diplomacy}</h4>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-xl text-green-600 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592" /></svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{t.cards.speaker}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
