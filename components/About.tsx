import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language].about;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center">
          <div className="order-1 w-full">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-100">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 leading-tight text-center">{t.title}</h3>
              <div className="space-y-4 text-slate-600 text-lg sm:text-xl leading-relaxed mb-8">
                <p>{t.p1}</p>
                {/* Mobile view with expandable text */}
                <div className="sm:hidden">
                  <p className={`transition-all duration-300 ease-in-out ${isExpanded ? 'line-clamp-none' : 'line-clamp-4'}`}>
                    {t.p2}
                  </p>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-3 text-red-600 font-bold hover:text-red-700 transition-colors"
                  >
                    {isExpanded ? t.readLess : t.readMore}
                  </button>
                </div>
                {/* Desktop view with full text */}
                <div className="hidden sm:block">
                  <p>{t.p2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;