import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
}

const MAX_LENGTH = 160;

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;

  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string) => {
    if (text.length <= MAX_LENGTH) return text;
    return text.slice(0, MAX_LENGTH) + '…';
  };

  const shouldShowReadMore = t.desc.length > MAX_LENGTH;

  return (
    <section
      id="home"
      className="pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Text Content */}
        <div className="lg:w-[60%] text-center lg:text-left z-20 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 mb-6 border border-red-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {t.subtitle}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            {t.title}
          </h1>

          <div className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            <p className="mb-4">
              {isExpanded ? t.desc : truncateText(t.desc)}
            </p>

            {shouldShowReadMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-red-600 hover:text-red-700 font-semibold underline transition-colors duration-200"
              >
                {isExpanded ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-xl hover:shadow-red-200 active:scale-95 flex items-center justify-center gap-2"
            >
              {t.cta1}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
            >
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Profile Picture Container */}
        <div className="lg:w-[40%] relative w-full max-w-[340px] sm:max-w-md lg:max-w-none order-1 lg:order-2">
          <div className="relative z-10 w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[3rem] p-2 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
              <img
                src="https://i.postimg.cc/BbHnVXzy/maxpic.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;