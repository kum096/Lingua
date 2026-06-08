import AsyncStorage from "@react-native-async-storage/async-storage";
import type { LanguageId } from "@/types/learning";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LearningPreferencesState = {
  selectedLanguageId: LanguageId | null;
  dailyXp: number;
  dailyGoalXp: number;
  streakCount: number;
  completedLessonIds: string[];
  hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
  setSelectedLanguage: (languageId: LanguageId) => void;
  setDailyXp: (dailyXp: number) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;
  clearSelectedLanguage: () => void;
};

export const learningPreferencesStorageKey = "lingua-learning-preferences";

export const useLearningPreferencesStore =
  create<LearningPreferencesState>()(
    persist(
      (set) => ({
        selectedLanguageId: null,
        dailyXp: 15,
        dailyGoalXp: 20,
        streakCount: 12,
        completedLessonIds: [],
        hasHydrated: false,
        setHasHydrated: (hasHydrated) => set({ hasHydrated }),
        setSelectedLanguage: (selectedLanguageId) =>
          set({ selectedLanguageId }),
        setDailyXp: (dailyXp) => set({ dailyXp }),
        completeLesson: (lessonId, xpReward) =>
          set((state) => ({
            completedLessonIds: state.completedLessonIds.includes(lessonId)
              ? state.completedLessonIds
              : [...state.completedLessonIds, lessonId],
            dailyXp: Math.min(state.dailyGoalXp, state.dailyXp + xpReward),
          })),
        clearSelectedLanguage: () => set({ selectedLanguageId: null }),
      }),
      {
        name: learningPreferencesStorageKey,
        storage: createJSONStorage(() => AsyncStorage),
        partialize: (state) => ({
          completedLessonIds: state.completedLessonIds,
          dailyGoalXp: state.dailyGoalXp,
          dailyXp: state.dailyXp,
          selectedLanguageId: state.selectedLanguageId,
          streakCount: state.streakCount,
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      },
    ),
  );
