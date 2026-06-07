import AsyncStorage from "@react-native-async-storage/async-storage";
import type { LanguageId } from "@/types/learning";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LearningPreferencesState = {
  selectedLanguageId: LanguageId | null;
  hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
  setSelectedLanguage: (languageId: LanguageId) => void;
  clearSelectedLanguage: () => void;
};

export const learningPreferencesStorageKey = "lingua-learning-preferences";

export const useLearningPreferencesStore =
  create<LearningPreferencesState>()(
    persist(
      (set) => ({
        selectedLanguageId: null,
        hasHydrated: false,
        setHasHydrated: (hasHydrated) => set({ hasHydrated }),
        setSelectedLanguage: (selectedLanguageId) =>
          set({ selectedLanguageId }),
        clearSelectedLanguage: () => set({ selectedLanguageId: null }),
      }),
      {
        name: learningPreferencesStorageKey,
        storage: createJSONStorage(() => AsyncStorage),
        partialize: (state) => ({
          selectedLanguageId: state.selectedLanguageId,
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      },
    ),
  );
