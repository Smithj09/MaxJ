import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

// Props interface for language support
interface RealisationsProps {
  language: Language;
}

const Realisations: React.FC<RealisationsProps> = ({ language }) => {
  const t = translations[language].nav;

  // Localized items
  const items = [
    {
      year: "2026",
      title: {
        en: "Cultural Diplomacy",
        fr: "Diplomatie Culturelle",
        ru: "Культурная дипломатия",
        zh: "文化外交"
      }[language],
      desc: {
        en: "Appointed Ambassador of the Universe of Books in China, leading initiatives to promote reading among young people.",
        fr: "Nommé Ambassadeur de l'Univers des Livres en Chine, menant des initiatives pour la promotion de la lecture chez les jeunes.",
        ru: "Назначен Послом Вселенной Книг в Китае, возглавляя инициативы по продвижению чтения среди молодежи.",
        zh: "被任命为“图书宇宙”驻华大使，领导促进青少年阅读的相关倡议。"
      }[language],
      image: "/images/2026-cultural-diplomacy.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      year: "2025",
      title: {
        en: "Literary Production",
        fr: "Production Littéraire",
        ru: "Литературная деятельность",
        zh: "文学创作"
      }[language],
      desc: {
        en: "He announced the publication of his first book entitled “The Haitian President in China”, scheduled for July 2026, with translations in Mandarin, French, English, and Spanish.",
        fr: "Il a annoncé la publication de son premier ouvrage intitulé « Le Président haïtien en Chine », prévu pour juillet 2026, avec des traductions en mandarin, français, anglais et espagnol.",
        ru: "Он объявил о публикации своей первой книги под названием «Гаитянский президент в Китае», запланированной на июль 2026 года, с переводами на мандаринский, французский, английский и испанский языки.",
        zh: "他宣布将于2026年7月出版首部著作《海地总统在中国》，并推出普通话、法语、英语和西班牙语版本。"
      }[language],
      image: "/images/2025-linguistic-bridge.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      year: "2024",
      title: {
        en: "Remarkable Leadership Journey",
        fr: "Parcours de leadership remarquable",
        ru: "Замечательный путь лидерства",
        zh: "卓越的领导历程"
      }[language],
      desc: {
        en: "President of his class from new secondary 1 to new secondary 3, and one year later he became the general president of Collège Mixte Saint Amand Jérusalem, located at Delmas 31, Rue Marbois B.",
        fr: "Président de sa promotion du nouveau secondaire 1 jusqu'au nouveau secondaire 3 et une année plus tard il deviendra le président général du collège Mixte Saint Amand Jérusalem situé à Delmas 31 ,Rue Marbois B.",
        ru: "Был президентом своего класса с нового среднего 1 до нового среднего 3, а год спустя стал генеральным президентом колледжа Saint Amand Jérusalem, расположенного в Дельмасе, улица Марбуа B, 31.",
        zh: "从新中学一年级到三年级担任班级主席，一年后成为位于德尔马斯31号马布瓦B街的圣阿曼德·耶路撒冷混合学院总主席。"
      }[language],
      image: "/images/2024-digital-impact.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      year: "2023",
      title: {
        en: "Educational Leadership and Promotion of Academic Opportunities",
        fr: "Leadership éducatif et promotion des opportunités académiques",
        ru: "Образовательное лидерство и продвижение академических возможностей",
        zh: "教育领导力与学术机会推广"
      }[language],
      desc: {
        en: "Each year, he mobilizes institutions in Haiti to help Haitian students access scholarships within universities and professional schools, including: Institution Mixte Émergence Patriotique (Delmas 24); Université Saint François d’Assise d’Haïti (Delmas 33); Institution Mixte David Mondésir (Delmas 31); Go On Institute (Delmas 33, opposite Hôpital La Paix); Alliance École Professionnelle (West Department, Delmas).",
        fr: "Chaque année, il mobilise des institutions en Haïti en vue de faciliter aux étudiants haïtiens de bénéficier des bourses d'études au sein des universités et des écoles professionnelles, notamment : Institution Mixte Émergence Patriotique, située à Delmas 24 ; Université Saint François d'Assise d'Haïti, située à Delmas 33 ; Institution Mixte David Mondésir, située à Delmas 31 ; Go On Institute, situé à Delmas 33, en face de l'Hôpital La Paix ; Alliance École Professionnelle, située dans le département de l'Ouest à Delmas.",
        ru: "Каждый год он мобилизует учреждения на Гаити, чтобы помочь гаитянским студентам получить стипендии в университетах и профессиональных школах, в частности: Institution Mixte Émergence Patriotique (Дельмас 24); Université Saint François d’Assise d’Haïti (Дельмас 33); Institution Mixte David Mondésir (Дельмас 31); Go On Institute (Дельмас 33, напротив больницы La Paix); Alliance École Professionnelle (департамент Запад, Дельмас).",
        zh: "每年，他动员海地的相关机构，帮助海地学生获得大学和职业学校的奖学金，包括：德尔马斯24号的爱国复兴混合学院；德尔马斯33号的海地圣弗朗索瓦·达西斯大学；德尔马斯31号的大卫·蒙德西尔混合学院；位于德尔马斯33号、和平医院对面的 Go On 学院；以及位于德尔马斯、西部省的联盟职业学校。"
      }[language],
      image: "/images/2023-economic-expertise.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      year: "2022",
      title: {
        en: "Contribution to Youth Citizenship Education",
        fr: "Contribution à la formation citoyenne des jeunes",
        ru: "Вклад в гражданское образование молодежи",
        zh: "青年公民教育的贡献"
      }[language],
      desc: {
        en: "From 2020 to 2022, he trained over 900,000 young people through civic education programs. In 2025, he received a certificate of recognition for his support of Haitian high school students from the central committee of Lycée Antoine and Georges Izmery.",
        fr: "De 2020 à 2022, il a formé plus de 900 000 jeunes à travers des formations sur l’éducation à la citoyenneté. En 2025, il a reçu un certificat de reconnaissance pour son soutien envers les lycéens haïtiens de la part du comité central du lycée Antoine et Georges Izmery.",
        ru: "С 2020 по 2022 год он обучил более 900 000 молодых людей в рамках программ гражданского образования. В 2025 году он получил сертификат признания за поддержку гаитянских лицеистов от центрального комитета лицея Антуана и Жоржа Измери.",
        zh: "从2020年至2022年，他通过公民教育培训项目培养了超过90万名青年。2025年，他因对海地高中生的支持，获得了安托万与乔治·伊兹梅里中学中央委员会颁发的表彰证书。"
      }[language],
      image: "/images/2022-educational-leadership.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5m-9 5v9" />
        </svg>
      )
    },
    {
      year: "2021",
      title: {
        en: "Community Engagement",
        fr: "Rencontre avec un responsable de l'Université de Pékin",
        ru: "Вовлечение сообщества",
        zh: "社区参与"
      }[language],
      desc: {
        en: "Foundational work in grassroots organization and community development initiatives in Haiti.",
        fr: "En 2024, Max Johnsley Gaspard avait eu l'occasion de rencontrer l'un des responsables de Pekin University.",
        ru: "Фундаментальная работа в сфере низовой организации и инициатив по развитию сообществ на Гаити.",
        zh: "在海地开展基层组织建设和社区发展倡议方面的基础性工作。"
      }[language],
      image: "/images/2021-community-engagement.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
            {{
              en: "Discover Max Johnsley Gaspard's impactful journey through his projects, nominations, and growing influence for the future of Haiti.",
              fr: "Découvrez le parcours d'impact de Max Johnsley Gaspard à travers ses projets, ses nominations et son influence croissante pour le futur d'Haïti.",
              ru: "Откройте для себя впечатляющий путь Макса Джонсли Гаспара через его проекты, назначения и растущее влияние на будущее Гаити.",
              zh: "通过马克思·约翰斯利·加斯帕德的项目、任命以及对海地未来日益增长的影响力，探索他充满影响力的历程。"
            }[language]}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {items.map((item, idx) => (
              <div key={idx} className="group p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300">
                {/* Image */}
                <div className="mb-8 h-72 bg-slate-200 rounded-2xl overflow-hidden group-hover:bg-slate-300 transition-colors">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">{item.title}</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 bg-blue-50 rounded-[2rem] border border-blue-100 text-center">
            <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 italic leading-snug">
              {{
                en: '"Commitment is not an option, it is a duty to our nation."',
                fr: '"L\'engagement n\'est pas une option, c\'est un devoir envers notre nation."',
                ru: '"Обязательство — это не выбор, это долг перед нашей страной."',
                zh: '"承诺不是一种选择，而是对我们国家的责任。"'
              }[language]}
            </h3>
            <p className="text-sm sm:text-base text-blue-800 font-bold uppercase tracking-wider">- Max Johnsley Gaspard</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
