import { images } from "@/constants/images";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type DailyGoalCardProps = {
  currentXp: number;
  goalXp: number;
};

export function DailyGoalCard({ currentXp, goalXp }: DailyGoalCardProps) {
  const progress = goalXp > 0 ? Math.min(currentXp / goalXp, 1) : 0;

  return (
    <View className="mt-[25px] h-[156px] overflow-hidden rounded-[24px] bg-[#FFF8EF] px-[25px] py-[21px]">
      <View className="flex-1">
        <Text className="font-poppins-semibold text-[18px] leading-[24px] text-[#242C4B]">
          Daily goal
        </Text>
        <View className="mt-[8px] flex-row items-end">
          <Text className="font-poppins-bold text-[35px] leading-[42px] text-[#10183A]">
            {currentXp}
          </Text>
          <Text className="pb-[4px] font-poppins-medium text-[19px] leading-[27px] text-[#7A849F]">
            {" "}
            / {goalXp} XP
          </Text>
        </View>
        <View className="mt-[22px] h-[10px] w-[260px] overflow-hidden rounded-full bg-[#FFE7C9]">
          <View
            className="h-full rounded-full bg-[#FF7A14]"
            style={{ width: `${progress * 100}%` }}
          />
        </View>
      </View>

      <Image
        contentFit="contain"
        source={images.treasure}
        style={styles.treasure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  treasure: {
    height: 104,
    position: "absolute",
    right: 29,
    top: 28,
    width: 122,
  },
});
