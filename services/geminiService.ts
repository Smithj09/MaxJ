
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const getSystemInstruction = (lang: Language) => `
Tu es l'assistant virtuel de Max Johnsley Gaspard. 
Max est un jeune leader haïtien (né le 19 janvier 2001), économiste, conférencier et militant socialiste.
Il vit actuellement en Chine et parle mandarin.
Points clés: 
- Défend la coopération sino-haïtienne.
- Critique l'abandon du système éducatif en Haïti.
- Nommé Ambassadeur de l'Univers des Livres en Chine en janvier 2026.
- Originaire d'Anse-Rouge (Artibonite).
Réponds impérativement dans la langue suivante : ${lang === 'zh' ? 'Chinois simplifié' : lang === 'ru' ? 'Russe' : lang === 'en' ? 'Anglais' : 'Français'}.
Ton ton doit être inspirant, intellectuel et engagé.
`;

export async function askMaxAI(prompt: string, lang: Language = 'fr'): Promise<string> {
  // Always create a new instance before making an API call
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: getSystemInstruction(lang),
        temperature: 0.7,
      },
    });
    // Use the .text property directly
    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue.";
  }
}