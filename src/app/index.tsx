import { useAuth, useClerk } from "@clerk/expo";
import { Href, Link, Redirect, useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.replace("/onboarding");
  }

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator color="#5B3FE4" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

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
      <Link href={"/language-selection" as Href} asChild>
        <TouchableOpacity
          activeOpacity={0.86}
          className="mt-4 h-14 items-center justify-center rounded-[18px] bg-lingua-deep-purple px-8"
        >
          <Text className="font-poppins-semibold text-[16px] leading-[22px] text-black">
            Choose language
          </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        activeOpacity={0.86}
        className="mt-4 h-14 items-center justify-center rounded-[18px] bg-lingua-deep-purple px-8"
        onPress={handleSignOut}
      >
        <Text className="font-poppins-semibold text-[16px] leading-[22px] text-black">
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
