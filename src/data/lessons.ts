import type { LanguageId, LearningLesson } from "@/types/learning";

export const lessons = [
  {
    id: "spanish-greetings",
    unitId: "spanish-basics-1",
    languageId: "spanish",
    title: "Say Hello",
    description: "Use simple Spanish greetings at different times of day.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 4,
    goals: [
      { id: "spanish-greetings-goal-1", label: "Recognize common greetings" },
      { id: "spanish-greetings-goal-2", label: "Say hello and goodbye" },
      { id: "spanish-greetings-goal-3", label: "Choose the right greeting" },
    ],
    vocabulary: [
      {
        id: "spanish-vocab-hola",
        term: "hola",
        translation: "hello",
        pronunciation: "OH-lah",
        audioText: "hola",
        partOfSpeech: "phrase",
      },
      {
        id: "spanish-vocab-adios",
        term: "adiós",
        translation: "goodbye",
        pronunciation: "ah-DYOS",
        audioText: "adiós",
        partOfSpeech: "phrase",
      },
      {
        id: "spanish-vocab-buenos-dias",
        term: "buenos días",
        translation: "good morning",
        pronunciation: "BWEH-nos DEE-as",
        audioText: "buenos días",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "spanish-phrase-hola",
        text: "Hola!",
        translation: "Hello!",
        pronunciation: "OH-lah",
        audioText: "Hola!",
      },
      {
        id: "spanish-phrase-buenos-dias",
        text: "Buenos días!",
        translation: "Good morning!",
        pronunciation: "BWEH-nos DEE-as",
        audioText: "Buenos días!",
        usageNote: "Use this in the morning.",
      },
    ],
    aiTeacherPrompt: {
      persona:
        "You are a cheerful Spanish teacher leading a first beginner audio lesson.",
      lessonFocus: "Spanish greetings: hola, adiós, and buenos días.",
      openingLine:
        "Hola! Today we will practice three friendly Spanish greetings.",
      teachingInstructions: [
        "Speak slowly and pause after each Spanish phrase.",
        "Ask the learner to repeat hola, adiós, and buenos días.",
        "Give one tiny correction at a time and keep the tone encouraging.",
      ],
      correctionStyle:
        "Model the phrase again, highlight the stressed syllable, then invite one more try.",
      closingLine: "Great work. You can now greet someone in Spanish.",
    },
    activities: [
      {
        id: "spanish-greetings-activity-1",
        type: "listen-and-choose",
        prompt: "Listen and choose the meaning.",
        xpReward: 5,
        audioText: "hola",
        options: ["hello", "thank you", "good night"],
        correctOption: "hello",
        translation: "hello",
      },
      {
        id: "spanish-greetings-activity-2",
        type: "translate",
        prompt: "Translate into English.",
        xpReward: 5,
        direction: "to-english",
        sourceText: "Buenos días!",
        correctAnswer: "Good morning!",
        acceptableAnswers: ["good morning", "good morning!"],
      },
      {
        id: "spanish-greetings-activity-3",
        type: "speaking",
        prompt: "Say the phrase out loud.",
        xpReward: 5,
        targetText: "Hola!",
        pronunciationHint: "Start with an open OH sound.",
        successMessage: "Nice greeting!",
      },
    ],
  },
  {
    id: "spanish-introductions",
    unitId: "spanish-basics-1",
    languageId: "spanish",
    title: "Introduce Yourself",
    description: "Say your name and ask how someone is feeling.",
    order: 2,
    xpReward: 20,
    estimatedMinutes: 5,
    goals: [
      { id: "spanish-intro-goal-1", label: "Say your name" },
      { id: "spanish-intro-goal-2", label: "Ask how someone is" },
      { id: "spanish-intro-goal-3", label: "Answer politely" },
    ],
    vocabulary: [
      {
        id: "spanish-vocab-me-llamo",
        term: "me llamo",
        translation: "my name is",
        pronunciation: "meh YAH-moh",
        audioText: "me llamo",
        partOfSpeech: "phrase",
      },
      {
        id: "spanish-vocab-como-estas",
        term: "cómo estás",
        translation: "how are you",
        pronunciation: "KOH-moh ehs-TAHS",
        audioText: "cómo estás",
        partOfSpeech: "phrase",
      },
      {
        id: "spanish-vocab-bien",
        term: "bien",
        translation: "well",
        pronunciation: "byen",
        audioText: "bien",
        partOfSpeech: "adverb",
      },
    ],
    phrases: [
      {
        id: "spanish-phrase-me-llamo",
        text: "Me llamo Ana.",
        translation: "My name is Ana.",
        pronunciation: "meh YAH-moh AH-nah",
        audioText: "Me llamo Ana.",
      },
      {
        id: "spanish-phrase-como-estas",
        text: "Cómo estás?",
        translation: "How are you?",
        pronunciation: "KOH-moh ehs-TAHS",
        audioText: "Cómo estás?",
      },
    ],
    aiTeacherPrompt: {
      persona:
        "You are a patient Spanish tutor helping a beginner introduce themselves.",
      lessonFocus: "Simple introductions with me llamo and cómo estás.",
      openingLine:
        "Let's learn how to say your name and ask a friendly question.",
      teachingInstructions: [
        "Use Ana as the sample name first, then ask the learner to use their own name.",
        "Practice cómo estás as a full phrase, not word by word.",
        "End with a tiny roleplay where the learner introduces themselves.",
      ],
      correctionStyle:
        "Repeat the learner's phrase in a natural way and gently fix only the main issue.",
      closingLine: "Excellent. You can start a simple Spanish conversation.",
    },
    activities: [
      {
        id: "spanish-intro-activity-1",
        type: "match-pairs",
        prompt: "Match each Spanish phrase to English.",
        xpReward: 5,
        pairs: [
          { source: "me llamo", target: "my name is" },
          { source: "cómo estás", target: "how are you" },
          { source: "bien", target: "well" },
        ],
      },
      {
        id: "spanish-intro-activity-2",
        type: "translate",
        prompt: "Translate into Spanish.",
        xpReward: 5,
        direction: "from-english",
        sourceText: "My name is Ana.",
        correctAnswer: "Me llamo Ana.",
        acceptableAnswers: ["me llamo ana", "me llamo ana."],
      },
      {
        id: "spanish-intro-activity-3",
        type: "chat",
        prompt: "Reply to your tutor.",
        xpReward: 10,
        scenario: "The tutor asks your name in Spanish.",
        starterMessage: "Hola! Cómo te llamas?",
        expectedLearnerReplies: ["Me llamo Ana.", "Me llamo Sam."],
      },
    ],
  },
  {
    id: "french-greetings",
    unitId: "french-basics-1",
    languageId: "french",
    title: "Friendly Greetings",
    description: "Say hello, goodbye, and good evening in French.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 4,
    goals: [
      { id: "french-greetings-goal-1", label: "Recognize bonjour" },
      { id: "french-greetings-goal-2", label: "Use goodbye politely" },
      { id: "french-greetings-goal-3", label: "Practice evening greetings" },
    ],
    vocabulary: [
      {
        id: "french-vocab-bonjour",
        term: "bonjour",
        translation: "hello",
        pronunciation: "bohn-ZHOOR",
        audioText: "bonjour",
        partOfSpeech: "phrase",
      },
      {
        id: "french-vocab-au-revoir",
        term: "au revoir",
        translation: "goodbye",
        pronunciation: "oh ruh-VWAHR",
        audioText: "au revoir",
        partOfSpeech: "phrase",
      },
      {
        id: "french-vocab-bonsoir",
        term: "bonsoir",
        translation: "good evening",
        pronunciation: "bohn-SWAHR",
        audioText: "bonsoir",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "french-phrase-bonjour",
        text: "Bonjour!",
        translation: "Hello!",
        pronunciation: "bohn-ZHOOR",
        audioText: "Bonjour!",
      },
      {
        id: "french-phrase-au-revoir",
        text: "Au revoir!",
        translation: "Goodbye!",
        pronunciation: "oh ruh-VWAHR",
        audioText: "Au revoir!",
      },
    ],
    aiTeacherPrompt: {
      persona:
        "You are a warm French teacher guiding a beginner through greetings.",
      lessonFocus: "French greetings: bonjour, bonsoir, and au revoir.",
      openingLine:
        "Bonjour! We will practice friendly French greetings together.",
      teachingInstructions: [
        "Use short call-and-response practice.",
        "Remind the learner that bonsoir is for the evening.",
        "Keep pronunciation feedback simple and confidence-building.",
      ],
      correctionStyle:
        "Say the word naturally, then break it into two slow beats if needed.",
      closingLine: "Très bien. You can greet someone politely in French.",
    },
    activities: [
      {
        id: "french-greetings-activity-1",
        type: "listen-and-choose",
        prompt: "Listen and choose the meaning.",
        xpReward: 5,
        audioText: "bonjour",
        options: ["hello", "goodbye", "please"],
        correctOption: "hello",
        translation: "hello",
      },
      {
        id: "french-greetings-activity-2",
        type: "translate",
        prompt: "Translate into English.",
        xpReward: 5,
        direction: "to-english",
        sourceText: "Au revoir!",
        correctAnswer: "Goodbye!",
        acceptableAnswers: ["goodbye", "goodbye!"],
      },
      {
        id: "french-greetings-activity-3",
        type: "speaking",
        prompt: "Say the phrase out loud.",
        xpReward: 5,
        targetText: "Bonjour!",
        pronunciationHint: "Keep the final r soft.",
        successMessage: "That sounded friendly.",
      },
    ],
  },
  {
    id: "french-cafe",
    unitId: "french-basics-1",
    languageId: "french",
    title: "Cafe Words",
    description: "Order politely with please and thank you.",
    order: 2,
    xpReward: 20,
    estimatedMinutes: 5,
    goals: [
      { id: "french-cafe-goal-1", label: "Say please and thank you" },
      { id: "french-cafe-goal-2", label: "Ask for water" },
      { id: "french-cafe-goal-3", label: "Complete a tiny cafe roleplay" },
    ],
    vocabulary: [
      {
        id: "french-vocab-merci",
        term: "merci",
        translation: "thank you",
        pronunciation: "mehr-SEE",
        audioText: "merci",
        partOfSpeech: "phrase",
      },
      {
        id: "french-vocab-sil-vous-plait",
        term: "s'il vous plaît",
        translation: "please",
        pronunciation: "seel voo PLEH",
        audioText: "s'il vous plaît",
        partOfSpeech: "phrase",
      },
      {
        id: "french-vocab-eau",
        term: "eau",
        translation: "water",
        pronunciation: "oh",
        audioText: "eau",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "french-phrase-water",
        text: "De l'eau, s'il vous plaît.",
        translation: "Some water, please.",
        pronunciation: "duh loh, seel voo PLEH",
        audioText: "De l'eau, s'il vous plaît.",
      },
      {
        id: "french-phrase-merci",
        text: "Merci!",
        translation: "Thank you!",
        pronunciation: "mehr-SEE",
        audioText: "Merci!",
      },
    ],
    aiTeacherPrompt: {
      persona:
        "You are a friendly French cafe coach helping a beginner order politely.",
      lessonFocus: "Cafe basics: merci, s'il vous plaît, and de l'eau.",
      openingLine:
        "Imagine we are in a small cafe. Let's order water politely.",
      teachingInstructions: [
        "Practice merci and s'il vous plaît before the full sentence.",
        "Use a relaxed cafe roleplay with one clear learner response.",
        "Praise polite phrasing and keep corrections brief.",
      ],
      correctionStyle:
        "Restate the full polite phrase and ask the learner to repeat it once.",
      closingLine: "Lovely. You can now ask for water politely in French.",
    },
    activities: [
      {
        id: "french-cafe-activity-1",
        type: "match-pairs",
        prompt: "Match each cafe word.",
        xpReward: 5,
        pairs: [
          { source: "merci", target: "thank you" },
          { source: "s'il vous plaît", target: "please" },
          { source: "eau", target: "water" },
        ],
      },
      {
        id: "french-cafe-activity-2",
        type: "translate",
        prompt: "Translate into French.",
        xpReward: 5,
        direction: "from-english",
        sourceText: "Thank you!",
        correctAnswer: "Merci!",
        acceptableAnswers: ["merci", "merci!"],
      },
      {
        id: "french-cafe-activity-3",
        type: "chat",
        prompt: "Reply to the cafe server.",
        xpReward: 10,
        scenario: "A server asks what you would like.",
        starterMessage: "Bonjour! Vous désirez?",
        expectedLearnerReplies: ["De l'eau, s'il vous plaît.", "Merci!"],
      },
    ],
  },
  {
    id: "japanese-greetings",
    unitId: "japanese-basics-1",
    languageId: "japanese",
    title: "Hello in Japanese",
    description: "Practice beginner greetings with romaji support.",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 4,
    goals: [
      { id: "japanese-greetings-goal-1", label: "Say hello" },
      { id: "japanese-greetings-goal-2", label: "Say good morning" },
      { id: "japanese-greetings-goal-3", label: "Listen for key sounds" },
    ],
    vocabulary: [
      {
        id: "japanese-vocab-konnichiwa",
        term: "konnichiwa",
        translation: "hello",
        pronunciation: "kohn-nee-chee-wah",
        audioText: "konnichiwa",
        partOfSpeech: "phrase",
      },
      {
        id: "japanese-vocab-ohayo",
        term: "ohayo",
        translation: "good morning",
        pronunciation: "oh-hah-yoh",
        audioText: "ohayo",
        partOfSpeech: "phrase",
      },
      {
        id: "japanese-vocab-sayonara",
        term: "sayonara",
        translation: "goodbye",
        pronunciation: "sah-yoh-nah-rah",
        audioText: "sayonara",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "japanese-phrase-konnichiwa",
        text: "Konnichiwa!",
        translation: "Hello!",
        pronunciation: "kohn-nee-chee-wah",
        audioText: "Konnichiwa!",
      },
      {
        id: "japanese-phrase-ohayo",
        text: "Ohayo!",
        translation: "Good morning!",
        pronunciation: "oh-hah-yoh",
        audioText: "Ohayo!",
        usageNote: "Use this with friends or in casual practice.",
      },
    ],
    aiTeacherPrompt: {
      persona:
        "You are a calm Japanese teacher introducing greetings with romaji.",
      lessonFocus: "Japanese greetings: konnichiwa, ohayo, and sayonara.",
      openingLine:
        "Konnichiwa! We will practice three useful Japanese greetings.",
      teachingInstructions: [
        "Use romaji first so the learner can focus on sound.",
        "Keep each repetition slow and rhythmic.",
        "Explain when ohayo is used without adding advanced grammar.",
      ],
      correctionStyle:
        "Clap the rhythm verbally, then model the phrase once more.",
      closingLine: "Great job. You have your first Japanese greetings.",
    },
    activities: [
      {
        id: "japanese-greetings-activity-1",
        type: "listen-and-choose",
        prompt: "Listen and choose the meaning.",
        xpReward: 5,
        audioText: "konnichiwa",
        options: ["hello", "water", "thank you"],
        correctOption: "hello",
        translation: "hello",
      },
      {
        id: "japanese-greetings-activity-2",
        type: "translate",
        prompt: "Translate into English.",
        xpReward: 5,
        direction: "to-english",
        sourceText: "Ohayo!",
        correctAnswer: "Good morning!",
        acceptableAnswers: ["good morning", "good morning!"],
      },
      {
        id: "japanese-greetings-activity-3",
        type: "speaking",
        prompt: "Say the phrase out loud.",
        xpReward: 5,
        targetText: "Konnichiwa!",
        pronunciationHint: "Keep it even: kon-ni-chi-wa.",
        successMessage: "Very clear greeting.",
      },
    ],
  },
  {
    id: "japanese-thanks",
    unitId: "japanese-basics-1",
    languageId: "japanese",
    title: "Thanks and Replies",
    description: "Say thank you and respond politely.",
    order: 2,
    xpReward: 20,
    estimatedMinutes: 5,
    goals: [
      { id: "japanese-thanks-goal-1", label: "Say thank you" },
      { id: "japanese-thanks-goal-2", label: "Reply politely" },
      { id: "japanese-thanks-goal-3", label: "Try a simple roleplay" },
    ],
    vocabulary: [
      {
        id: "japanese-vocab-arigato",
        term: "arigato",
        translation: "thank you",
        pronunciation: "ah-ree-gah-toh",
        audioText: "arigato",
        partOfSpeech: "phrase",
      },
      {
        id: "japanese-vocab-hai",
        term: "hai",
        translation: "yes",
        pronunciation: "hah-ee",
        audioText: "hai",
        partOfSpeech: "adverb",
      },
      {
        id: "japanese-vocab-iie",
        term: "iie",
        translation: "no",
        pronunciation: "ee-eh",
        audioText: "iie",
        partOfSpeech: "adverb",
      },
    ],
    phrases: [
      {
        id: "japanese-phrase-arigato",
        text: "Arigato!",
        translation: "Thank you!",
        pronunciation: "ah-ree-gah-toh",
        audioText: "Arigato!",
      },
      {
        id: "japanese-phrase-hai",
        text: "Hai!",
        translation: "Yes!",
        pronunciation: "hah-ee",
        audioText: "Hai!",
      },
    ],
    aiTeacherPrompt: {
      persona:
        "You are an encouraging Japanese tutor practicing polite short replies.",
      lessonFocus: "Japanese basics: arigato, hai, and iie.",
      openingLine:
        "Let's learn how to say thank you, yes, and no in Japanese.",
      teachingInstructions: [
        "Practice each word alone before using it in a roleplay.",
        "Keep examples short and beginner safe.",
        "Use a thank-you scenario and let the learner answer with arigato.",
      ],
      correctionStyle:
        "Use gentle pronunciation mirroring and keep the learner moving.",
      closingLine: "Nice work. You can answer politely in Japanese.",
    },
    activities: [
      {
        id: "japanese-thanks-activity-1",
        type: "match-pairs",
        prompt: "Match each Japanese word.",
        xpReward: 5,
        pairs: [
          { source: "arigato", target: "thank you" },
          { source: "hai", target: "yes" },
          { source: "iie", target: "no" },
        ],
      },
      {
        id: "japanese-thanks-activity-2",
        type: "translate",
        prompt: "Translate into Japanese.",
        xpReward: 5,
        direction: "from-english",
        sourceText: "Thank you!",
        correctAnswer: "Arigato!",
        acceptableAnswers: ["arigato", "arigato!"],
      },
      {
        id: "japanese-thanks-activity-3",
        type: "chat",
        prompt: "Reply to your tutor.",
        xpReward: 10,
        scenario: "Your tutor gives you a pencil.",
        starterMessage: "Here you go.",
        expectedLearnerReplies: ["Arigato!", "Arigato."],
      },
    ],
  },
] as const satisfies LearningLesson[];

export function getLessonsByLanguage(languageId: LanguageId) {
  return lessons.filter((lesson) => lesson.languageId === languageId);
}

export function getLessonsByUnit(unitId: string) {
  return lessons.filter((lesson) => lesson.unitId === unitId);
}

export function getLessonById(lessonId: string) {
  return lessons.find((lesson) => lesson.id === lessonId);
}
