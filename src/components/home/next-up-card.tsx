import { images } from "@/constants/images";
import { Image } from "expo-image";
import { SymbolView } from "expo-symbols";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function NextUpCard() {
  return (
    <View className="mt-[22px] h-[140px] overflow-hidden rounded-[21px] bg-[#F2FBEA] px-[23px] py-[21px]">
      <Text className="font-poppins-medium text-[17px] leading-[23px] text-[#75809A]">
        Next up
      </Text>
      <Text className="mt-[6px] font-poppins-semibold text-[22px] leading-[29px] text-[#111832]">
        AI Video Call
      </Text>
      <Text className="mt-[3px] font-poppins-regular text-[16px] leading-[22px] text-[#606B86]">
        Practice speaking
      </Text>

      <Image
        contentFit="cover"
        source={images.aiTeacherAvatar}
        style={styles.avatar}
      />

      <TouchableOpacity
        activeOpacity={0.84}
        className="absolute right-[26px] top-[50px] h-[52px] w-[52px] items-center justify-center rounded-full bg-[#45C817]"
      >
        <SymbolView
          name={{ android: "videocam", ios: "video.fill", web: "videocam" }}
          resizeMode="scaleAspectFit"
          size={28}
          tintColor="#FFFFFF"
          type="monochrome"
          weight="semibold"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderColor: "#FFFFFF",
    borderRadius: 54,
    borderWidth: 6,
    height: 108,
    position: "absolute",
    right: 83,
    top: -8,
    width: 108,
  },
});
