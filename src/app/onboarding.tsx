import { images } from "@/constants/images";
import { Image } from "expo-image";
import { Href, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-10 pb-8 pt-7">
          <View className="items-center">
            <View className="flex-row items-center gap-3">
              <Image
                source={images.mascotLogo}
                contentFit="contain"
                style={{ height: 54, width: 54 }}
              />
              <Text className="font-poppins-bold text-[36px] leading-[44px] text-text-primary">
                Lingua
              </Text>
            </View>
          </View>

          <View className="mt-1">
            <Text className="font-poppins-bold text-[34px] leading-[43px] text-text-primary">
              Your AI language{"\n"}
              <Text className="text-lingua-deep-purple">teacher.</Text>
            </Text>

            <Text className="mt-5 font-poppins-regular text-[17px] leading-[29px] text-[#63677D]">
              Real conversations, personalized{"\n"}
              lessons, anytime, anywhere.
            </Text>
          </View>

          <View className="relative mt-7 h-[405px]">
            {/* "Hello!" bubble — left side */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 14,
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                position: "absolute",
                left: -5,
                top: 20,
                transform: [{ rotate: "-6deg" }],
                zIndex: 2,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <Text className="font-poppins-medium text-[18px] leading-[24px] text-text-primary">
                Hello!
              </Text>
              {/* Tail */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  bottom: -8,
                  height: 16,
                  position: "absolute",
                  right: 20,
                  transform: [{ rotate: "45deg" }],
                  width: 16,
                  shadowColor: "#000",
                  shadowOffset: { width: 1, height: 1 },
                  shadowOpacity: 0.04,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              />
            </View>

            {/* "¡Hola!" bubble — right side */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 14,
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                position: "absolute",
                right: 60,
                top: -2,
                transform: [{ rotate: "10deg" }],
                zIndex: 2,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <Text className="font-poppins-medium text-[18px] leading-[24px] text-lingua-deep-purple">
                {"\u00A1Hola!"}
              </Text>
              {/* Tail */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  bottom: -8,
                  height: 16,
                  left: 20,
                  position: "absolute",
                  transform: [{ rotate: "45deg" }],
                  width: 16,
                  shadowColor: "#000",
                  shadowOffset: { width: 1, height: 1 },
                  shadowOpacity: 0.04,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              />
            </View>

            {/* "你好!" bubble — far right */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 14,
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 14,
                paddingVertical: 10,
                position: "absolute",
                right: -20,
                top: 80,
                transform: [{ rotate: "8deg" }],
                zIndex: 2,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <Text className="font-poppins-medium text-[18px] leading-[24px] text-[#FF4D2E]">
                {"\u4F60\u597D!"}
              </Text>
              {/* Tail */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  bottom: -8,
                  height: 16,
                  left: 20,
                  position: "absolute",
                  transform: [{ rotate: "45deg" }],
                  width: 16,
                  shadowColor: "#000",
                  shadowOffset: { width: 1, height: 1 },
                  shadowOpacity: 0.04,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              />
            </View>

            <Image
              source={images.mascotWelcome}
              contentFit="contain"
              style={{
                bottom: -8,
                height: 430,
                left: -64,
                position: "absolute",
                width: 430,
                zIndex: 1,
              }}
            />
          </View>

          <View className="flex-1" />

          <TouchableOpacity
            activeOpacity={0.86}
            className="h-[76px] flex-row items-center justify-center rounded-[22px] border-b-[4px] border-[#4A2EE0] bg-lingua-deep-purple px-8"
            onPress={() => router.push("/sign-up" as Href)}
          >
            <Text className="font-poppins-semibold text-[18px] leading-[24px] text-white">
              Get Started
            </Text>
            <Text className="absolute right-8 font-poppins-regular text-[48px] leading-[54px] text-white">
              {"\u203A"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
