import { LanguageOptionCard } from "@/components/language/language-option-card";
import { images } from "@/constants/images";
import { defaultLanguageId, supportedLanguages } from "@/data/languages";
import { useLearningPreferencesStore } from "@/store/learning-preferences-store";
import type { LanguageId } from "@/types/learning";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const savedLanguageId = useLearningPreferencesStore(
    (state) => state.selectedLanguageId,
  );
  const setSelectedLanguage = useLearningPreferencesStore(
    (state) => state.setSelectedLanguage,
  );
  const [selectedLanguageId, setSelectedLanguageId] =
    useState<LanguageId>(savedLanguageId ?? defaultLanguageId);
  const [searchQuery, setSearchQuery] = useState("");

  const visibleLanguages = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return supportedLanguages;
    }

    return supportedLanguages.filter(
      (language) =>
        language.name.toLowerCase().includes(normalizedQuery) ||
        language.nativeName.toLowerCase().includes(normalizedQuery),
    );
  }, [searchQuery]);

  function handleConfirm() {
    setSelectedLanguage(selectedLanguageId);
    router.replace("/");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-9 pb-0 pt-4">
          <View className="relative h-[48px] flex-row items-center justify-center">
            <TouchableOpacity
              activeOpacity={0.72}
              className="absolute left-[-2px] h-12 w-12 items-start justify-center"
              onPress={() => router.back()}
            >
              <Text className="font-poppins-regular text-[42px] leading-[46px] text-text-primary">
                {"<"}
              </Text>
            </TouchableOpacity>

            <Text className="font-poppins-semibold text-[24px] leading-[31px] text-text-primary">
              Choose a language
            </Text>
          </View>

          <View className="language-ui__search mt-[26px]">
            <View style={styles.searchIcon}>
              <View style={styles.searchLens} />
              <View style={styles.searchHandle} />
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setSearchQuery}
              placeholder="Search languages"
              placeholderTextColor="#778099"
              style={styles.searchInput}
              value={searchQuery}
            />
          </View>

          <Text className="mt-[35px] font-poppins-semibold text-[21px] leading-[28px] text-text-primary">
            Popular
          </Text>

          <View className="mt-[21px] gap-1">
            {visibleLanguages.map((language) => (
              <LanguageOptionCard
                isSelected={language.id === selectedLanguageId}
                key={language.id}
                language={language}
                onPress={() => setSelectedLanguageId(language.id)}
              />
            ))}

            {visibleLanguages.length === 0 && (
              <View className="min-h-[82px] items-center justify-center rounded-[24px] border border-[#EEF0F6] bg-white px-6">
                <Text className="text-center font-poppins-regular text-[15px] leading-[23px] text-text-secondary">
                  No languages found.
                </Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            activeOpacity={0.88}
            className="language-ui__confirm mt-[23px]"
            onPress={handleConfirm}
          >
            <Text className="font-poppins-semibold text-[18px] leading-[24px] text-white">
              Confirm language
            </Text>
            <Text className="absolute right-7 font-poppins-bold text-[22px] leading-[28px] text-white">
              {"\u2713"}
            </Text>
          </TouchableOpacity>

          <View className="mt-6 h-[176px] overflow-hidden">
            <Image
              contentFit="contain"
              source={images.earth}
              style={styles.earthImage}
            />
          </View>
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
    flexGrow: 1,
  },
  searchIcon: {
    height: 28,
    marginRight: 16,
    position: "relative",
    width: 28,
  },
  searchLens: {
    borderColor: "#65708C",
    borderRadius: 9,
    borderWidth: 2,
    height: 18,
    left: 1,
    position: "absolute",
    top: 1,
    width: 18,
  },
  searchHandle: {
    backgroundColor: "#65708C",
    borderRadius: 1,
    height: 12,
    left: 18,
    position: "absolute",
    top: 17,
    transform: [{ rotate: "-45deg" }],
    width: 2,
  },
  searchInput: {
    color: "#0D132B",
    flex: 1,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    lineHeight: 24,
    padding: 0,
  },
  earthImage: {
    bottom: -24,
    height: 226,
    left: -48,
    position: "absolute",
    width: "124%",
  },
});
