import type { LanguageId, SupportedLanguage } from "@/types/learning";

export const supportedLanguages = [
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Espanol",
    countryCode: "ES",
    learnerCountLabel: "28.4M learners",
    accentColor: "#FF6B35",
    greeting: "Hola!",
    description: "Start simple conversations with friendly everyday phrases.",
  },
  {
    id: "french",
    name: "French",
    nativeName: "Francais",
    countryCode: "FR",
    learnerCountLabel: "19.4M learners",
    accentColor: "#3B82F6",
    greeting: "Bonjour!",
    description: "Learn polite greetings, introductions, and cafe basics.",
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "Nihongo",
    countryCode: "JP",
    learnerCountLabel: "12.7M learners",
    accentColor: "#EF4444",
    greeting: "Konnichiwa!",
    description: "Practice clear beginner phrases for greetings and thanks.",
  },
  {
    id: "korean",
    name: "Korean",
    nativeName: "Korean",
    countryCode: "KR",
    learnerCountLabel: "9.3M learners",
    accentColor: "#2563EB",
    greeting: "Annyeong!",
    description: "Build everyday greetings and simple friendly replies.",
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    countryCode: "DE",
    learnerCountLabel: "8.1M learners",
    accentColor: "#F59E0B",
    greeting: "Hallo!",
    description: "Practice introductions, polite phrases, and travel basics.",
  },
  {
    id: "chinese",
    name: "Chinese",
    nativeName: "Mandarin",
    countryCode: "CN",
    learnerCountLabel: "7.4M learners",
    accentColor: "#EF4444",
    greeting: "Ni hao!",
    description: "Learn beginner phrases for greetings and daily chats.",
  },
] as const satisfies SupportedLanguage[];

export const defaultLanguageId: LanguageId = "spanish";

export function getLanguageById(languageId: LanguageId) {
  return supportedLanguages.find((language) => language.id === languageId);
}
