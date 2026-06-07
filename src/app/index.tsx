import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-8">
      <Text className="text-center font-poppins-bold text-[32px] leading-[40px] text-text-primary">
        Lingua
      </Text>
      <Link href="/onboarding" asChild>
        <TouchableOpacity
          activeOpacity={0.86}
          className="mt-8 h-14 items-center justify-center rounded-[18px] bg-lingua-deep-purple px-8"
        >
          <Text className="font-poppins-semibold text-[16px] leading-[22px] text-black">
            Open onboarding
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
