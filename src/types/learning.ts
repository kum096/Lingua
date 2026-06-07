export type LanguageId =
  | "spanish"
  | "french"
  | "japanese"
  | "korean"
  | "german"
  | "chinese";

export type LessonLevel = "beginner";

export type ActivityType =
  | "listen-and-choose"
  | "translate"
  | "match-pairs"
  | "speaking"
  | "chat";

export type LessonActivity =
  | ListenAndChooseActivity
  | TranslateActivity
  | MatchPairsActivity
  | SpeakingActivity
  | ChatActivity;

export type TranslationDirection = "to-english" | "from-english";

export type VocabularyPartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "phrase";

export type SupportedLanguage = {
  id: LanguageId;
  name: string;
  nativeName: string;
  countryCode: string;
  learnerCountLabel: string;
  accentColor: string;
  greeting: string;
  description: string;
};

export type LearningUnit = {
  id: string;
  languageId: LanguageId;
  title: string;
  description: string;
  level: LessonLevel;
  order: number;
  lessonIds: string[];
};

export type VocabularyItem = {
  id: string;
  term: string;
  translation: string;
  pronunciation: string;
  audioText: string;
  partOfSpeech: VocabularyPartOfSpeech;
};

export type PhraseItem = {
  id: string;
  text: string;
  translation: string;
  pronunciation: string;
  audioText: string;
  usageNote?: string;
};

export type LessonGoal = {
  id: string;
  label: string;
};

export type AiTeacherPrompt = {
  persona: string;
  lessonFocus: string;
  openingLine: string;
  teachingInstructions: string[];
  correctionStyle: string;
  closingLine: string;
};

export type LearningLesson = {
  id: string;
  unitId: string;
  languageId: LanguageId;
  title: string;
  description: string;
  order: number;
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  aiTeacherPrompt: AiTeacherPrompt;
  activities: LessonActivity[];
};

type BaseActivity = {
  id: string;
  type: ActivityType;
  prompt: string;
  xpReward: number;
};

export type ListenAndChooseActivity = BaseActivity & {
  type: "listen-and-choose";
  audioText: string;
  options: string[];
  correctOption: string;
  translation: string;
};

export type TranslateActivity = BaseActivity & {
  type: "translate";
  direction: TranslationDirection;
  sourceText: string;
  correctAnswer: string;
  acceptableAnswers: string[];
};

export type MatchPairsActivity = BaseActivity & {
  type: "match-pairs";
  pairs: {
    source: string;
    target: string;
  }[];
};

export type SpeakingActivity = BaseActivity & {
  type: "speaking";
  targetText: string;
  pronunciationHint: string;
  successMessage: string;
};

export type ChatActivity = BaseActivity & {
  type: "chat";
  scenario: string;
  starterMessage: string;
  expectedLearnerReplies: string[];
};
