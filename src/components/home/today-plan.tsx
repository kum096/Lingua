import type { LearningLesson } from "@/types/learning";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { Text, TouchableOpacity, View } from "react-native";

type TodayPlanProps = {
  currentLesson: LearningLesson;
  isLessonStarted: boolean;
};

type PlanItem = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: SymbolViewProps["name"];
  isComplete: boolean;
};

export function TodayPlan({ currentLesson, isLessonStarted }: TodayPlanProps) {
  const chatActivity = currentLesson.activities.find(
    (activity) => activity.type === "chat",
  );

  const planItems: PlanItem[] = [
    {
      id: "lesson",
      title: "Lesson",
      subtitle: currentLesson.title,
      color: "#6C4EF5",
      icon: { android: "menu_book", ios: "book.fill", web: "menu_book" },
      isComplete: isLessonStarted,
    },
    {
      id: "conversation",
      title: "AI Conversation",
      subtitle: chatActivity?.prompt ?? "Talk about your day",
      color: "#6C4EF5",
      icon: { android: "headphones", ios: "headphones", web: "headphones" },
      isComplete: false,
    },
    {
      id: "words",
      title: "New words",
      subtitle: `${currentLesson.vocabulary.length} words`,
      color: "#FF4D57",
      icon: {
        android: "chat_bubble",
        ios: "bubble.left.and.bubble.right.fill",
        web: "chat_bubble",
      },
      isComplete: false,
    },
  ];

  return (
    <View className="mt-[31px]">
      <View className="flex-row items-center justify-between">
        <Text className="font-poppins-semibold text-[22px] leading-[29px] text-text-primary">
          {"Today's plan"}
        </Text>
        <TouchableOpacity activeOpacity={0.76}>
          <Text className="font-poppins-semibold text-[20px] leading-[27px] text-lingua-deep-purple">
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-[24px] gap-[20px]">
        {planItems.map((item) => (
          <View className="h-[66px] flex-row items-center" key={item.id}>
            <View
              className="h-[54px] w-[54px] items-center justify-center rounded-[11px]"
              style={{ backgroundColor: item.color }}
            >
              <SymbolView
                name={item.icon}
                resizeMode="scaleAspectFit"
                size={31}
                tintColor="#FFFFFF"
                type="monochrome"
                weight="semibold"
              />
            </View>

            <View className="ml-[22px] flex-1">
              <Text
                className="font-poppins-semibold text-[18px] leading-[24px] text-[#1A2140]"
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text
                className="mt-[3px] font-poppins-regular text-[17px] leading-[23px] text-[#778099]"
                numberOfLines={1}
              >
                {item.subtitle}
              </Text>
            </View>

            <View
              className={`h-[29px] w-[29px] items-center justify-center rounded-full ${
                item.isComplete
                  ? "bg-lingua-deep-purple"
                  : "border-[2px] border-[#8790AA]"
              }`}
            >
              {item.isComplete && (
                <Text className="font-poppins-bold text-[18px] leading-[22px] text-white">
                  ✓
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
