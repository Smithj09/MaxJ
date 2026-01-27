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
      name: 'X',
      url: 'https://x.com/maxgaspard',
      icon: (
        <>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/maxgaspard',
      icon: (
        <>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Brand & Mission Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                MAX JHONSLEY GASPARD
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
                <span>maxjohnsleygaspard777@gmail.com</span>
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
        </div>

        {/* Social Icons */}
        <div className="pt-8 border-t border-slate-900 flex justify-center items-center mb-8">
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
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-8">
          <div className="text-sm text-slate-500 text-center">
            <p>
              © {currentYear} Max Johnsley Gaspard. {t.rights}
            </p>
            <p className="mt-1 text-slate-600 flex items-center justify-center gap-1">
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