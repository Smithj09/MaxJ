
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

// Define props to include language for internationalization
interface VisionProps {
  language: Language;
}

const Vision: React.FC<VisionProps> = ({ language }) => {
  const t = translations[language].vision;
  
  // Use translations for pillars while maintaining the color scheme
  const pillars = t.pillars.map((p: any, i: number) => ({
    title: p.t,
    desc: p.d,
    color: i === 0 ? "bg-blue-600" : i === 1 ? "bg-red-600" : "bg-slate-900"
  }));

  return (
    <section id="vision" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <div className="w-16 sm:w-20 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p: any, i: number) => (
            <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100">
              <div className={`${p.color} w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 flex items-center justify-center text-white`}>
                <span className="text-lg sm:text-xl font-bold">{i+1}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-tight">{p.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
