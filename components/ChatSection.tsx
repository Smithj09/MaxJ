
import React, { useState, useRef, useEffect } from 'react';
import { askMaxAI } from '../services/geminiService';
import { ChatMessage, Language } from '../types';

interface ChatSectionProps {
  language: Language;
}

const ChatSection: React.FC<ChatSectionProps> = ({ language }) => {
  const introTexts = {
    fr: "Bonjour ! Je suis l'assistant IA de Max Johnsley Gaspard. Que souhaitez-vous savoir ?",
    en: "Hello! I am Max Johnsley Gaspard's AI assistant. What would you like to know?",
    ru: "Здравствуйте! Я ИИ-помощник Макса Джонсли Гаспара. Что вы хотите узнать?",
    zh: "你好！我是马克思·约翰斯利·加斯帕德的AI助手。您想了解什么？"
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: introTexts[language] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askMaxAI(userMsg, language);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ask" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border text-slate-800 shadow-sm'}`}>
                  <p className="text-sm leading-relaxed">{m.content}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="..."
              className="flex-1 bg-slate-50 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" disabled={isLoading} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
              {language === 'zh' ? '发送' : language === 'ru' ? 'Отправить' : language === 'en' ? 'Send' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
