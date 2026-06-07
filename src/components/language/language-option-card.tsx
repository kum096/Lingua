import type { SupportedLanguage } from "@/types/learning";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type LanguageOptionCardProps = {
  language: SupportedLanguage;
  isSelected: boolean;
  onPress: () => void;
};

const flagEmojiOffset = 127397;

function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(char.charCodeAt(0) + flagEmojiOffset),
    );
}

export function LanguageOptionCard({
  language,
  isSelected,
  onPress,
}: LanguageOptionCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.84}
      className={`language-ui__option ${isSelected ? "language-ui__option-selected" : ""}`}
      onPress={onPress}
    >
      <View style={styles.flagWrapper}>
        <View style={styles.flagCircle}>
          <Text style={styles.flagEmoji}>
            {getFlagEmoji(language.countryCode)}
          </Text>
        </View>
      </View>

      <View className="flex-1">
        <Text className="font-poppins-semibold text-[19px] leading-[25px] text-text-primary">
          {language.name}
        </Text>
        <Text className="mt-1 font-poppins-regular text-[15px] leading-[21px] text-[#737A93]">
          {language.learnerCountLabel}
        </Text>
      </View>

      <View className="h-[42px] w-[42px] items-center justify-center">
        {isSelected ? (
          <View className="h-[34px] w-[34px] items-center justify-center rounded-full border-[3px] border-[#DCD3FF] bg-lingua-deep-purple">
            <Text className="font-poppins-bold text-[20px] leading-[24px] text-white">
              {"\u2713"}
            </Text>
          </View>
        ) : (
          <Text className="font-poppins-regular text-[34px] leading-[38px] text-[#68708A]">
            {">"}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flagWrapper: {
    alignItems: "flex-start",
    height: 50,
    justifyContent: "center",
    marginRight: 12,
    width: 62,
  },
  flagCircle: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#EEF0F6",
    borderRadius: 23,
    borderWidth: 1,
    height: 46,
    justifyContent: "center",
    overflow: "hidden",
    width: 46,
  },
  flagEmoji: {
    fontSize: 26,
    includeFontPadding: false,
    lineHeight: 30,
    textAlign: "center",
  },
});
