import { GoogleGenAI, Chat } from "@google/genai";
import { CHAT_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const initializeChat = () => {
  const ai = getAiClient();
  if (!ai) return null;

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: CHAT_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  if (!chatSession) {
    return "I'm having trouble connecting to the kitchen right now. Please try again later!";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "Yum! Anything else?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! I dropped the sauce. Can you repeat that?";
  }
};