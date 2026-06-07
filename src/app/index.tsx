import { useLearningPreferencesStore } from "@/store/learning-preferences-store";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const selectedLanguageId = useLearningPreferencesStore(
    (state) => state.selectedLanguageId,
  );
  const hasHydratedLearningPreferences = useLearningPreferencesStore(
    (state) => state.hasHydrated,
  );

  if (!isLoaded || !hasHydratedLearningPreferences) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator color="#5B3FE4" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguageId) {
    return <Redirect href="/language-selection" />;
  }

  return <Redirect href="/home" />;
}
