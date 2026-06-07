import { colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TabPlaceholderScreenProps = {
  title: string;
};

export function TabPlaceholderScreen({ title }: TabPlaceholderScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-center font-poppins-bold text-[28px] leading-[36px] text-text-primary">
          {title}
        </Text>
        <Text className="mt-3 text-center font-poppins-regular text-[15px] leading-[23px] text-text-secondary">
          This screen is ready for the next feature.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
