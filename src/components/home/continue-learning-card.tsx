import { images } from "@/constants/images";
import type { SupportedLanguage } from "@/types/learning";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ContinueLearningCardProps = {
  language: SupportedLanguage;
  unitLabel: string;
};

export function ContinueLearningCard({
  language,
  unitLabel,
}: ContinueLearningCardProps) {
  return (
    <View className="mt-[27px] h-[215px] overflow-hidden rounded-[23px] bg-lingua-deep-purple px-[25px] py-[25px]">
      <View style={styles.mountainLarge} />
      <View style={styles.mountainSmall} />
      <View style={styles.softCircleOne} />
      <View style={styles.softCircleTwo} />

      <View className="relative z-10">
        <Text className="font-poppins-semibold text-[20px] leading-[26px] text-white">
          Continue learning
        </Text>
        <Text className="mt-[12px] font-poppins-semibold text-[30px] leading-[38px] text-white">
          {language.name}
        </Text>
        <Text className="mt-[1px] font-poppins-regular text-[22px] leading-[29px] text-white">
          {unitLabel}
        </Text>

        <TouchableOpacity
          activeOpacity={0.86}
          className="mt-[18px] h-[50px] w-[126px] items-center justify-center rounded-[15px] bg-white"
        >
          <Text className="font-poppins-semibold text-[20px] leading-[26px] text-lingua-deep-purple">
            Continue
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        contentFit="contain"
        source={images.palace}
        style={styles.palace}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mountainLarge: {
    backgroundColor: "#4639C6",
    borderTopLeftRadius: 18,
    height: 180,
    position: "absolute",
    right: 45,
    top: 79,
    transform: [{ rotate: "34deg" }],
    width: 112,
  },
  mountainSmall: {
    backgroundColor: "#4335B6",
    borderTopLeftRadius: 14,
    height: 96,
    left: 202,
    position: "absolute",
    top: 145,
    transform: [{ rotate: "42deg" }],
    width: 72,
  },
  palace: {
    bottom: -8,
    height: 188,
    position: "absolute",
    right: -11,
    width: 214,
  },
  softCircleOne: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 16,
    height: 32,
    position: "absolute",
    right: 154,
    top: 87,
    width: 32,
  },
  softCircleTwo: {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderRadius: 28,
    height: 56,
    position: "absolute",
    right: 112,
    top: 111,
    width: 56,
  },
});
