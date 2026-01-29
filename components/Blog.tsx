import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

// Props interface for language support
interface BlogProps {
  language: Language;
}

const Blog: React.FC<BlogProps> = ({ language }) => {
  const t = translations[language].nav;
  
  // State to track selected blog post for popup
  const [selectedPost, setSelectedPost] = useState<typeof videoItems[0] | null>(null);

  // Localized video items for events
  const videoItems = [
    {
      year: "2026",
      title: {
        en: "Cultural Exchange Event",
        fr: "Événement d'échange culturel",
        ru: "Мероприятие культурного обмена",
        zh: "文化交流活动"
      }[language],
      desc: {
        en: "Highlights from the recent cultural exchange event promoting Haitian-Chinese relations through art and music.",
        fr: "Points forts de l'événement récent d'échange culturel promouvant les relations haïtiano-chinoises à travers l'art et la musique.",
        ru: "Основные моменты недавнего мероприятия культурного обмена, способствующего развитию гаитяно-китайских отношений через искусство и музыку.",
        zh: "近期文化交流活动的精彩瞬间，通过艺术和音乐促进海地与中国的关系。"
      }[language],
      videoUrl: "https://res.cloudinary.com/dkyyt4fts/video/upload/v1769608270/WhatsApp_Video_2026-01-27_at_20.58.33_byatqo.mp4",
      thumbnail: "/images/blog-2026-cultural-exchange.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      year: "2025",
      title: {
        en: "Invitation to the World Export and Import Conference",
        fr: "Invitation à la Conference sur l'exportation et l'importation mondiale",
        ru: "Образовательный семинар",
        zh: "教育工作坊"
      }[language],
      desc: {
        en: "Max Johnsley Gaspard was invited by COE in China to the major World Export and Import Conference in November 2025.",
        fr: "Max Johnsley Gaspard a été invité par COE en chine , à la grande Conference sur l'exportation et l'importation mondiale en Novembre 2025",
        ru: "Запись образовательного семинара, посвященного развитию лидерских качеств среди гаитянской молодежи.",
        zh: "专注于海地青年领导力发展的教育工作坊录像。"
      }[language],
      videoUrl: "https://res.cloudinary.com/dkyyt4fts/video/upload/v1769608503/WhatsApp_Video_2026-01-27_at_21.16.14_rnjg2b.mp4",
      thumbnail: "/images/blog-2025-workshop.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      year: "2024",
      title: {
        en: "NBTV-1 Interview in China",
        fr: "Interview à la NBTV-1 en Chine",
        ru: "Мероприятие по работе с сообществом",
        zh: "社区外展活动"
      }[language],
      desc: {
        en: "Max Johnsley Gaspard was featured on NBTV-1 in China during a cultural activity organized by Ningbo officials. On this red paper, he wrote: 'A Sino-Haitian relationship.' This phrase attracted the attention of the public and Chinese media.",
        fr: "Max Johnsley Gaspard a été présenté à la Télé NBTV-1 en chine durant une activité culturelle organisée par les responsables de Ningbo, sur ce papier rouge il a écrit : Une relation sino-Haitienne. Cette phrase avait attiré l'attention du publique et aussi des médias chinois.",
        ru: "Документальный фильм о программе работы с сообществом, помогающей местным общинам с образовательными ресурсами.",
        zh: "帮助当地社区获取教育资源的外展项目纪录片。"
      }[language],
      videoUrl: "https://res.cloudinary.com/dkyyt4fts/video/upload/v1769608746/WhatsApp_Video_2026-01-27_at_21.20.02_p1imhr.mp4",
      thumbnail: "/images/blog-2024-nbtv1.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      year: "2024",
      title: {
        en: "Nanjing Normal University Conference",
        fr: "Conférence de l'Université normale de Nanjing",
        ru: "Объявление о стипендиях",
        zh: "奖学金公告"
      }[language],
      desc: {
        en: "In 2024, Max Johnsley Gaspard was present at the major annual conference organized by Nanjing Normal University.",
        fr: "En 2024 Max Johnsley Gaspard a été présent à la grande Conference annuelle organisée par Nanjing normal university",
        ru: "Видеорепортаж с церемонии объявления стипендий для гаитянских студентов в китайских университетах.",
        zh: "海地学生在中国大学奖学金公告仪式的视频报道。"
      }[language],
      videoUrl: "https://res.cloudinary.com/dkyyt4fts/video/upload/v1769608720/WhatsApp_Video_2026-01-27_at_21.29.53_wzwclt.mp4",
      thumbnail: "/images/blog-2024-conference.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5m-9 5v9" />
        </svg>
      )
    },
    {
      year: "2022",
      title: {
        en: "Youth Leadership Summit",
        fr: "Sommet du leadership des jeunes",
        ru: "Саммит молодежного лидерства",
        zh: "青年领导力峰会"
      }[language],
      desc: {
        en: "Full recording of the youth leadership summit focusing on civic engagement and community development.",
        fr: "Enregistrement complet du sommet du leadership des jeunes axé sur l'engagement civique et le développement communautaire.",
        ru: "Полная запись саммита молодежного лидерства, посвященного гражданской активности и развитию сообщества.",
        zh: "专注于公民参与和社区发展的青年领导力峰会完整录像。"
      }[language],
      videoUrl: "https://res.cloudinary.com/dkyyt4fts/video/upload/v1769609113/WhatsApp_Video_2026-01-27_at_20.53.29_wdzuiq.mp4",
      thumbnail: "/images/blog-2022-summit.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      year: "2023",
      title: {
        en: "Political Rally in Anse-Rouge",
        fr: "Rassemblement politique à Anse-Rouge",
        ru: "Мероприятие университетского партнерства",
        zh: "大学合作活动"
      }[language],
      desc: {
        en: "Video documentation of the partnership establishment between Haitian and Chinese educational institutions. On May 18, 2023 in Anse-Rouge, Max Johnsley Gaspard held a political rally before leaving Haiti for the People's Republic of China, giving hope that he would return to serve his country.",
        fr: "Documentation vidéo de l'établissement du partenariat entre les institutions éducatives haïtiennes et chinoises. 18 Mai 2023 À Anse-Rouge Max Johnsley Gaspard a fait un rassemblement politique avant de laisser Haïti pour aller en République populaire de chine. Tout en donnant espoir qu'il sera de retour à la service de son pays.",
        ru: "Видеодокументация об установлении партнерства между гаитянскими и китайскими образовательными учреждениями.",
        zh: "海地与中国教育机构建立合作伙伴关系的视频记录。"
      }[language],
      videoUrl: "https://res.cloudinary.com/dkyyt4fts/video/upload/v1769608732/WhatsApp_Video_2026-01-27_at_21.06.21_pttrnf.mp4",
      thumbnail: "/images/blog-2023-political-rally.jpg",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header for the Blog Page */}
      <section className="py-12 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">{t.blog}</h1>
          <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto px-2">
            {{
              en: "Watch our latest events and activities through video documentation of Max Johnsley Gaspard's impactful initiatives.",
              fr: "Regardez nos derniers événements et activités à travers la documentation vidéo des initiatives d'impact de Max Johnsley Gaspard.",
              ru: "Смотрите наши последние мероприятия и события через видеодокументацию значимых инициатив Макса Джонсли Гаспара.",
              zh: "通过马克思·约翰斯利·加斯帕德影响力倡议的视频记录，观看我们的最新活动和事件。"
            }[language]}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {videoItems.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(item)}
              >
                {/* Video Player */}
                <div className="mb-8 relative bg-slate-200 rounded-2xl overflow-hidden group-hover:bg-slate-300 transition-colors" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    src={item.videoUrl.includes('youtube.com') ? `${item.videoUrl}?autoplay=0` : item.videoUrl}
                    title={item.title}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoplay="false"
                  ></iframe>
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
                en: '"Through video, we capture the moments that shape our future and inspire generations to come."',
                fr: '"À travers la vidéo, nous capturons les moments qui façonnent notre avenir et inspirent les générations futures."',
                ru: '"С помощью видео мы запечатлеваем моменты, которые формируют наше будущее и вдохновляют грядущие поколения."',
                zh: '"通过视频，我们捕捉塑造未来、激励后代的时刻。"'
              }[language]}
            </h3>
            <p className="text-sm sm:text-base text-blue-800 font-bold uppercase tracking-wider">- Max Johnsley Gaspard</p>
          </div>
        </div>
        
        {/* Popup Modal */}
        {selectedPost && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPost(null)}
          >
            <div 
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                {/* Video Player in Modal */}
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    src={selectedPost.videoUrl.includes('youtube.com') ? `${selectedPost.videoUrl}?autoplay=0` : selectedPost.videoUrl}
                    title={selectedPost.title}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoplay="false"
                  ></iframe>
                </div>
                
                <button 
                  className="absolute top-4 right-4 bg-white p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setSelectedPost(null)}
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {selectedPost.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{selectedPost.year} - {selectedPost.title}</h3>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {selectedPost.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;