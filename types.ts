
export type Language = 'fr' | 'en' | 'ru' | 'zh';

export interface VisionCard {
  title: string;
  description: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}