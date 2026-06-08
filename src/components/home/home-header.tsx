import { images } from "@/constants/images";
import type { SupportedLanguage } from "@/types/learning";
import { Image } from "expo-image";
import { SymbolView } from "expo-symbols";
import { StyleSheet, Text, View } from "react-native";

type HomeHeaderProps = {
  language: SupportedLanguage;
  userName: string;
  streakCount: number;
};

const flagEmojiOffset = 127397;

function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(char.charCodeAt(0) + flagEmojiOffset),
    );
}

function getGreeting(greeting: string) {
  return greeting.replace(/[!.]+$/g, "");
}

export function HomeHeader({
  language,
  streakCount,
  userName,
}: HomeHeaderProps) {
  return (
    <View className="h-[52px] flex-row items-center justify-between">
      <View className="flex-1 flex-row items-center gap-[14px] pr-3">
        <View style={styles.flagCircle}>
          <Text style={styles.flagEmoji}>{getFlagEmoji(language.countryCode)}</Text>
        </View>
        <Text
          className="flex-1 font-poppins-semibold text-[21px] leading-[27px] text-text-primary"
          numberOfLines={1}
        >
          {getGreeting(language.greeting)}, {userName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center gap-[20px]">
        <View className="flex-row items-center gap-[7px]">
          <Image
            contentFit="contain"
            source={images.streakFire}
            style={styles.fireIcon}
          />
          <Text className="font-poppins-medium text-[19px] leading-[25px] text-[#1A2140]">
            {streakCount}
          </Text>
        </View>
        <SymbolView
          fallback={<Text style={styles.bellFallback}>🔔</Text>}
          name={{ android: "notifications_none", web: "notifications_none" }}
          resizeMode="scaleAspectFit"
          size={29}
          tintColor="#151A36"
          type="monochrome"
          weight="regular"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fireIcon: {
    height: 34,
    width: 28,
  },
  flagCircle: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
    overflow: "hidden",
    width: 44,
  },
  flagEmoji: {
    fontSize: 31,
    includeFontPadding: false,
    lineHeight: 35,
    textAlign: "center",
  },
  bellFallback: {
    color: "#151A36",
    fontSize: 25,
    lineHeight: 29,
  },
});
