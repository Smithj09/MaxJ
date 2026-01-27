import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

// Props interface for language support
interface FooterProps {
  language: Language;
}

// Interface for social media links
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const t = translations[language].footer;
  const navT = translations[language].nav;

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/maxgaspard',
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/maxgaspard',
      icon: (
        <>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/maxgaspard',
      icon: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      )
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Mission Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                MAX GASPARD
              </span>
              <div className="h-1 w-12 bg-red-600 mt-1 rounded-full"></div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.mission}
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-red-500 transition-colors"
                >
                  {navT.home}
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors">
                  {navT.about}
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-red-500 transition-colors">
                  {navT.vision}
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: 'smooth'
                    })
                  }
                  className="hover:text-red-500 transition-colors"
                >
                  {navT.realisations}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@maxgaspard.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{t.location}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              {t.stayConnected}
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              {language === 'zh'
                ? '订阅以获取我最新计划的动态。'
                : language === 'ru'
                ? 'Подпишитесь, чтобы получать последние новости о моих инициативах.'
                : language === 'en'
                ? 'Sign up to receive the latest news on my initiatives.'
                : 'Inscrivez-vous pour recevoir les dernières nouvelles sur mes initiatives.'}
            </p>
            {isSubscribed ? (
              <div className="bg-green-900 border border-green-700 rounded-lg px-4 py-3 text-sm text-green-300">
                {language === 'zh'
                  ? '感谢订阅！'
                  : language === 'ru'
                  ? 'Спасибо за подписку!'
                  : language === 'en'
                  ? 'Thank you for subscribing!'
                  : 'Merci pour votre inscription !'}
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    language === 'zh'
                      ? '您的电子邮件'
                      : language === 'ru'
                      ? 'Ваш email'
                      : language === 'en'
                      ? 'Your email'
                      : 'Votre email'
                  }
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-red-600 transition-all"
                  required
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!email || !email.includes('@')}
                  aria-label="Subscribe to newsletter"
                >
                  <svg
                    className="w-5 h-5"
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
              </form>
            )}
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                aria-label={`Follow Max Gaspard on ${link.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-900 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-5 h-5 stroke-slate-400 group-hover:stroke-slate-950 group-hover:fill-slate-950"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>

          <div className="text-sm text-slate-500 text-center md:text-right">
            <p>
              © {currentYear} Max Johnsley Gaspard. {t.rights}
            </p>
            <p className="mt-1 text-slate-600 flex items-center justify-center md:justify-end gap-1">
              {language === 'zh'
                ? '致力于建设主权海地'
                : language === 'ru'
                ? 'Преданный суверенному Гаити'
                : language === 'en'
                ? 'Committed to a sovereign Haiti'
                : 'Engagé pour une Haïti souveraine'}{' '}
              <span className="text-red-600 animate-pulse" aria-label="Love for Haiti">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;