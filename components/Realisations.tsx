
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

// Props interface for language support
interface RealisationsProps {
  language: Language;
}

const Realisations: React.FC<RealisationsProps> = ({ language }) => {
  const t = translations[language].nav;

  // Localized items as they are not present in the central translations.ts
  const items = [
    {
      year: "2026",
      title: language === 'en' ? "Cultural Diplomacy" : language === 'ru' ? "Культурная дипломатия" : language === 'zh' ? "文化外交" : "Diplomatie Culturelle",
      desc: language === 'en' ? "Appointed Ambassador of the Universe of Books in China, leading initiatives for the promotion of reading among young people." : 
            language === 'ru' ? "Назначен Послом Вселенной Книг в Китае, возглавляя инициативы по продвижению чтения среди молодежи." : 
            language === 'zh' ? "被任命为图书宇宙驻华大使，领导促进青少年阅读的倡议。" : 
            "Nommé Ambassadeur de l'Univers des Livres en Chine, menant des initiatives pour la promotion de la lecture chez les jeunes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      year: "2025",
      title: language === 'en' ? "Linguistic Bridge" : language === 'ru' ? "Лингвистический мост" : language === 'zh' ? "语言桥梁" : "Pont Linguistique",
      desc: language === 'en' ? "Mastery of Mandarin used to advocate for strengthened Sino-Haitian economic cooperation." : 
            language === 'ru' ? "Владение мандаринским языком используется для защиты укрепления китайско-гаитянского экономического сотрудничества." : 
            language === 'zh' ? "利用精通的普通话倡导加强中海经济合作。" : 
            "Maîtrise du Mandarin utilisée pour plaider en faveur d'une coopération économique sino-haïtienne renforcée.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      year: "2024",
      title: language === 'en' ? "Digital Impact" : language === 'ru' ? "Цифровое влияние" : language === 'zh' ? "数字化影响" : "Impact Numérique",
      desc: language === 'en' ? "Several viral conferences on Haitian social networks mobilizing youth around educational issues." : 
            language === 'ru' ? "Несколько вирусных конференций в гаитянских социальных сетях, мобилизующих молодежь вокруг вопросов образования." : 
            language === 'zh' ? "在海地社交网络上举行了几次病毒式会议，动员年轻人关注教育问题。" : 
            "Plusieurs conférences virales sur les réseaux sociaux haïtiens mobilisant la jeunesse autour des enjeux éducatifs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      year: "2023",
      title: language === 'en' ? "Economic Expertise" : language === 'ru' ? "Экономическая экспертиза" : language === 'zh' ? "经济专业知识" : "Expertise Économique",
      desc: language === 'en' ? "Publication of critical analyses on social disparities in Haiti and structural reform proposals." : 
            language === 'ru' ? "Публикация критических анализов социального неравенства на Гаити и предложений по структурным реформам." : 
            language === 'zh' ? "发表关于海地社会差距的批判性分析和结构性改革建议。" : 
            "Publication d'analyses critiques sur les disparités sociales en Haïti and propositions de réformes structurelles.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header for the Realisations Page */}
      <section className="py-12 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">{t.realisations}</h1>
          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto px-2">
            {language === 'en' ? "Discover Max Johnsley Gaspard's impactful journey through his projects, nominations, and growing influence for the future of Haiti." : 
             language === 'ru' ? "Откройте для себя впечатляющий путь Макса Джонсли Гаспара через его проекты, назначения и растущее влияние на будущее Гаити." : 
             language === 'zh' ? "通过马克思·约翰斯利·加斯帕德的项目、任命以及对海地未来日益增长的影响力，探索他充满影响力的历程。" : 
             "Découvrez le parcours d'impact de Max Johnsley Gaspard à travers ses projets, ses nominations et son influence croissante pour le futur d'Haïti."}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="group p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300">
                {/* Image placeholder */}
                <div className="mb-6 h-64 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-slate-300 transition-colors">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 bg-blue-50 rounded-[2rem] border border-blue-100 text-center">
            <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 italic leading-snug">
              {language === 'en' ? '"Commitment is not an option, it is a duty to our nation."' : 
               language === 'ru' ? '"Обязательство — это не выбор, это долг перед нашей страной."' : 
               language === 'zh' ? '"承诺不是一种选择，而是对我们国家的责任。"' : 
               '"L\'engagement n\'est pas une option, c\'est un devoir envers notre nation."'}
            </h3>
            <p className="text-sm sm:text-base text-blue-800 font-bold uppercase tracking-wider">- Max Johnsley Gaspard</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;