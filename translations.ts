
import { Language } from './types';

export const translations: Record<Language, any> = {
  fr: {
    nav: { home: 'Accueil', about: 'Parcours', vision: 'Vision', realisations: 'Réalisations', ambassador: 'Ambassade', contact: 'Contacter' },
    hero: { subtitle: 'Jeune Leader & Économiste', title: "Max Jhonsley Gaspard", desc: "Max Johnsley Gaspard est un économiste et leader visionnaire. Engagé pour une Haïti souveraine, il conjugue militantisme socialiste et diplomatie culturelle depuis la Chine.", cta1: 'Ma Vision', cta2: 'Mon Parcours', badge1: 'Polyglotte (Mandarin)', badge2: 'Ambassadeur Culturel' },
    about: { title: 'Un Parcours sans Frontières', p1: "Né le 19 janvier 2001 à Anse-Rouge, Max Johnsley Gaspard s'est forgé un destin international tout en restant profondément ancré dans ses racines haïtiennes.", p2: "Aujourd'hui basé en Chine, il utilise sa maîtrise du Mandarin et son expertise en économie pour construire des ponts stratégiques.", stats: { origin: 'Origine', birth: 'Naissance', residence: 'Lieu de vie', lang: 'Mandarin' }, cards: { economy: 'Économie & Militantisme', diplomacy: 'Diplomatie de la Jeunesse', speaker: 'Conférencier Inspirant' } },
    vision: { title: 'Vision & Engagements', pillars: [{ t: "Révolution Éducative", d: "Critique de l'abandon du système éducatif actuel et promotion d'une école gratuite et moderne." }, { t: "Coopération Sino-Haïtienne", d: "Utilisation des compétences linguistiques pour faciliter des échanges fructueux." }, { t: "Économie Sociale", d: "Défense d'un modèle économique qui réduit les disparités." }] },
    ambassador: { subtitle: 'Janvier 2026 - Nouveau Chapitre', title: "Ambassadeur de l'Univers des Livres en Chine", desc: "Max a été nommé Ambassadeur pour promouvoir la littérature et les échanges culturels.", support: "Une mission soutenue par des milliers de jeunes lecteurs." },
    footer: { mission: "Économiste et leader engagé, Max travaille sans relâche pour jeter des ponts entre Haïti et le reste du monde.", contact: "Contact", location: "Chine / Haïti (Artibonite)", stayConnected: "Restez Connecté", rights: "Tous droits réservés." }
  },
  en: {
    nav: { home: 'Home', about: 'Journey', vision: 'Vision', realisations: 'Achievements', ambassador: 'Ambassador', contact: 'Contact' },
    hero: { subtitle: 'Young Leader & Economist', title: "Building Haiti's future through excellence.", desc: "Max Johnsley Gaspard is a visionary economist and leader. Committed to a sovereign Haiti, he combines socialist activism and cultural diplomacy from China.", cta1: 'My Vision', cta2: 'My Journey', badge1: 'Polyglot (Mandarin)', badge2: 'Cultural Ambassador' },
    about: { title: 'A Journey without Borders', p1: "Born on January 19, 2001 in Anse-Rouge, Max Johnsley Gaspard has forged an international destiny while remaining deeply rooted in his Haitian origins.", p2: "Now based in China, he uses his mastery of Mandarin and his expertise in economics to build strategic bridges.", stats: { origin: 'Origin', birth: 'Birth', residence: 'Living in', lang: 'Mandarin' }, cards: { economy: 'Economy & Activism', diplomacy: 'Youth Diplomacy', speaker: 'Inspiring Speaker' } },
    vision: { title: 'Vision & Commitments', pillars: [{ t: "Educational Revolution", d: "Critique of the current educational system neglect and promotion of a free, modern school." }, { t: "Sino-Haitian Cooperation", d: "Using linguistic skills to facilitate fruitful exchanges." }, { t: "Social Economy", d: "Advocating for an economic model that reduces disparities." }] },
    ambassador: { subtitle: 'January 2026 - New Chapter', title: "Ambassador of the Universe of Books in China", desc: "Max was appointed Ambassador to promote literature and cultural exchange.", support: "A mission supported by thousands of young readers." },
    footer: { mission: "Economist and committed leader, Max works tirelessly to build bridges between Haiti and the world.", contact: "Contact", location: "China / Haiti (Artibonite)", stayConnected: "Stay Connected", rights: "All rights reserved." }
  },
  ru: {
    nav: { home: 'Главная', about: 'Путь', vision: 'Видение', realisations: 'Достижения', ambassador: 'Посол', contact: 'Контакты' },
    hero: { subtitle: 'Молодой лидер и экономист', title: "Строительство будущего Гаити через совершенство.", desc: "Макс Джонсли Гаспар — экономист и дальновидный лидер. Стремясь к суверенному Гаити, он сочетает социалистический активизм и культурную дипломатию из Китая.", cta1: 'Мое видение', cta2: 'Мой путь', badge1: 'Полиглот (Мандарин)', badge2: 'Посол культуры' },
    about: { title: 'Путь без границ', p1: "Родившийся 19 января 2001 года в Анс-Руж, Макс Джонсли Гаспар выковал международную судьбу, оставаясь глубоко преданным своим гаитянским корням.", p2: "Сейчас он живет в Китае и использует знание мандаринского языка и опыт в экономике для наведения стратегических мостов.", stats: { origin: 'Происхождение', birth: 'Рождение', residence: 'Проживание', lang: 'Мандарин' }, cards: { economy: 'Экономика и активизм', diplomacy: 'Молодежная дипломатия', speaker: 'Вдохновляющий спикер' } },
    vision: { title: 'Видение и обязательства', pillars: [{ t: "Образовательная революция", d: "Критика заброшенности системы образования и продвижение бесплатной современной школы." }, { t: "Китайско-гаитянское сотрудничество", d: "Использование языковых навыков для содействия плодотворному обмену." }, { t: "Социальная экономика", d: "Защита экономической модели, сокращающей неравенство." }] },
    ambassador: { subtitle: 'Январь 2026 - Новая глава', title: "Посол Вселенной Книг в Китае", desc: "Макс был назначен послом для продвижения литературы и культурного обмена.", support: "Миссия, поддерживаемая тысячами молодых читателей." },
    footer: { mission: "Экономист и преданный лидер, Макс неустанно работает над наведением мостов между Гаити и миром.", contact: "Контакт", location: "Китай / Гаити (Артибонит)", stayConnected: "Оставайтесь на связи", rights: "Все права защищены." }
  },
  zh: {
    nav: { home: '首页', about: '历程', vision: '愿景', realisations: '成就', ambassador: '大使', contact: '联系我们' },
    hero: { subtitle: '青年领袖与经济学家', title: "通过卓越建设海地的未来。", desc: "马克思·约翰斯利·加斯帕德是一位富有远见的经济学家和领袖。他致力于建设主权海地，在海外将社会主义行动主义与文化外交相结合。", cta1: '我的愿景', cta2: '我的历程', badge1: '精通多种语言（普通话）', badge2: '文化大使' },
    about: { title: '无国界的历程', p1: "马克思于2001年1月19日出生于红湾（Anse-Rouge），他在走向国际舞台的同时，始终深深扎根于海地的土壤。", p2: "他目前常驻中国，利用精通的普通话和经济学专业知识建立战略桥梁。", stats: { origin: '出生地', birth: '出生日期', residence: '现居地', lang: '语言能力' }, cards: { economy: '经济与激进主义', diplomacy: '青年外交', speaker: '励志演讲者' } },
    vision: { title: '愿景与承诺', pillars: [{ t: "教育革命", d: "批判当前教育制度的废弃，并推广免费、现代的学校教育。" }, { t: "中海合作", d: "利用语言优势促进丰硕的交流与合作。" }, { t: "社会经济", d: "倡导一种减少贫富差距的经济模式。" }] },
    ambassador: { subtitle: '2026年1月 - 新篇章', title: "图书宇宙驻华大使", desc: "马克思被任命为大使，旨在促进文学和文化交流。", support: "这项使命得到了成千上万年轻读者的支持。" },
    footer: { mission: "作为一名经济学家和坚定的领袖，马克思不懈努力，在海地与世界之间架起桥梁。", contact: "联系方式", location: "中国 / 海地", stayConnected: "保持联系", rights: "保留所有权利。" }
  }
};