import type { LearningUnit } from "@/types/learning";

export const learningUnits = [
  {
    id: "spanish-basics-1",
    languageId: "spanish",
    title: "Spanish Basics",
    description: "Greet people, introduce yourself, and say thanks.",
    level: "beginner",
    order: 1,
    lessonIds: ["spanish-greetings", "spanish-introductions"],
  },
  {
    id: "french-basics-1",
    languageId: "french",
    title: "French Basics",
    description: "Use friendly greetings and simple cafe phrases.",
    level: "beginner",
    order: 1,
    lessonIds: ["french-greetings", "french-cafe"],
  },
  {
    id: "japanese-basics-1",
    languageId: "japanese",
    title: "Japanese Basics",
    description: "Practice greetings, gratitude, and polite replies.",
    level: "beginner",
    order: 1,
    lessonIds: ["japanese-greetings", "japanese-thanks"],
  },
] as const satisfies LearningUnit[];

export function getUnitsByLanguage(languageId: LearningUnit["languageId"]) {
  return learningUnits.filter((unit) => unit.languageId === languageId);
}
