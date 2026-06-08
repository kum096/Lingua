import { ContinueLearningCard } from "@/components/home/continue-learning-card";
import { DailyGoalCard } from "@/components/home/daily-goal-card";
import { HomeHeader } from "@/components/home/home-header";
import { NextUpCard } from "@/components/home/next-up-card";
import { TodayPlan } from "@/components/home/today-plan";
import { defaultLanguageId, getLanguageById } from "@/data/languages";
import { getLessonsByLanguage, lessons } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLearningPreferencesStore } from "@/store/learning-preferences-store";
import { useUser } from "@clerk/expo";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user } = useUser();
  const selectedLanguageId = useLearningPreferencesStore(
    (state) => state.selectedLanguageId,
  );
  const dailyXp = useLearningPreferencesStore((state) => state.dailyXp);
  const dailyGoalXp = useLearningPreferencesStore(
    (state) => state.dailyGoalXp,
  );
  const streakCount = useLearningPreferencesStore((state) => state.streakCount);
  const completedLessonIds = useLearningPreferencesStore(
    (state) => state.completedLessonIds,
  );

  const homeData = useMemo(() => {
    const languageId = selectedLanguageId ?? defaultLanguageId;
    const fallbackLanguage = getLanguageById(defaultLanguageId);
    const language = getLanguageById(languageId) ?? fallbackLanguage;
    const selectedLessons = getLessonsByLanguage(languageId);
    const currentLesson =
      selectedLessons.find(
        (lesson) => !completedLessonIds.includes(lesson.id),
      ) ??
      selectedLessons[0] ??
      lessons[0];
    const unit = getUnitsByLanguage(languageId)[0];

    if (!language) {
      throw new Error("The default learning language is missing.");
    }

    return {
      currentLesson,
      language,
      unitLabel: `A1 · Unit ${unit?.order ?? 1}`,
    };
  }, [completedLessonIds, selectedLanguageId]);

  const userName =
    user?.firstName ??
    user?.username ??
    user?.primaryEmailAddress?.emailAddress.split("@")[0] ??
    "Alex";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-[30px] pb-[18px] pt-[22px]">
          <HomeHeader
            language={homeData.language}
            streakCount={streakCount}
            userName={userName}
          />
          <DailyGoalCard currentXp={dailyXp} goalXp={dailyGoalXp} />
          <ContinueLearningCard
            language={homeData.language}
            unitLabel={homeData.unitLabel}
          />
          <TodayPlan
            currentLesson={homeData.currentLesson}
            isLessonStarted={dailyXp > 0}
          />
          <NextUpCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 12,
  },
});
