
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

// Props interface for language support
interface AmbassadorProps {
  language: Language;
}

const Ambassador: React.FC<AmbassadorProps> = ({ language }) => {
  const t = translations[language].ambassador;

  return (
    <section id="ambassador" className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 sm:w-96 sm:h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">{t.subtitle}</h2>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              {t.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex -space-x-3 sm:-space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-slate-900" src={`https://picsum.photos/seed/amb${i}/100`} alt="Supporter" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-400">{t.support}</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96">
                <img src="https://picsum.photos/seed/book1/400/500" className="w-full h-full object-cover" alt="Livre" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96 sm:mt-8">
                <img src="https://picsum.photos/seed/book2/400/500" className="w-full h-full object-cover" alt="Conférence" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassador;
