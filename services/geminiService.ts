
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";

const CONTACT_DETAILS = `
Name: George Ghionea
Role: Enterprise Software Architecture
Email: george.ghionea@consultant.com
Phone: +1 (000) 123-4567
Location: USA
Expertise: Management, Software Architecture, AI Integration, Cloud Architecture
Availability: Currently open to high-impact projects and consulting.
LinkedIn: linkedin.com/in/george
GitHub: github.com/george
`;

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `You are an AI Concierge for Alex Rivera's professional portfolio. 
        Your goal is to answer questions about Alex's professional background, contact information, and expertise.
        Be professional, concise, and helpful. 
        If you don't know the answer, politely suggest they contact Alex directly via email.
        Here is Alex's information: ${CONTACT_DETAILS}`,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 1000 },
      },
    });
  }

  async sendMessage(message: string, onChunk: (chunk: string) => void): Promise<string> {
    try {
      const result = await this.chat.sendMessageStream({ message });
      let fullText = '';
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || '';
        fullText += text;
        onChunk(text);
      }
      return fullText;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
