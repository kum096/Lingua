import { colors } from "@/theme/colors";
import type { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const TAB_BAR_HORIZONTAL_PADDING = 18;
const ACTIVE_CIRCLE_SIZE = 50;
const TAB_BAR_TOP_PADDING = 12;
const TAB_BAR_BOTTOM_PADDING = 12;
const ACTIVE_ICON_COLOR = "#FFFFFF";
const INACTIVE_COLOR = "#7C849D";

type TabIconName = SymbolViewProps["name"];

const tabIcons: Record<string, TabIconName> = {
  home: {
    android: "home",
    ios: "house.fill",
    web: "home",
  },
  learn: {
    android: "menu_book",
    ios: "book.fill",
    web: "menu_book",
  },
  "ai-teacher": {
    android: "headphones",
    ios: "headphones",
    web: "headphones",
  },
  chat: {
    android: "chat_bubble",
    ios: "bubble.left",
    web: "chat_bubble",
  },
  profile: {
    android: "person",
    ios: "person.crop.circle",
    web: "person",
  },
};

export function CustomTabBar({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) {
  const [barWidth, setBarWidth] = useState(0);
  const activeIndex = useSharedValue(state.index);
  const itemWidth =
    state.routes.length > 0
      ? (barWidth - TAB_BAR_HORIZONTAL_PADDING * 2) / state.routes.length
      : 0;
  const activeRoute = state.routes[state.index];

  useEffect(() => {
    activeIndex.value = withTiming(state.index, {
      duration: 280,
      easing: Easing.out(Easing.cubic),
    });
  }, [activeIndex, state.index]);

  const activeCircleStyle = useAnimatedStyle(() => ({
    opacity: itemWidth > 0 ? 1 : 0,
    transform: [
      {
        translateX:
          TAB_BAR_HORIZONTAL_PADDING +
          activeIndex.value * itemWidth +
          itemWidth / 2 -
          ACTIVE_CIRCLE_SIZE / 2,
      },
    ],
  }));

  function handleLayout(event: LayoutChangeEvent) {
    setBarWidth(event.nativeEvent.layout.width);
  }

  return (
    <View
      onLayout={handleLayout}
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, TAB_BAR_BOTTOM_PADDING),
        },
      ]}
    >
      <Animated.View style={[styles.activeCircle, activeCircleStyle]}>
        {activeRoute && (
          <TabIcon
            color={ACTIVE_ICON_COLOR}
            name={tabIcons[activeRoute.name]}
            size={26}
          />
        )}
      </Animated.View>

      <View style={styles.items}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const label = getTabLabel(options.title, route.name);

          function handlePress() {
            const event = navigation.emit({
              canPreventDefault: true,
              target: route.key,
              type: "tabPress",
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }

          function handleLongPress() {
            navigation.emit({
              target: route.key,
              type: "tabLongPress",
            });
          }

          return (
            <Pressable
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : undefined}
              key={route.key}
              onLongPress={handleLongPress}
              onPress={handlePress}
              style={styles.item}
              testID={options.tabBarButtonTestID}
            >
              {!isFocused && (
                <View style={styles.inactiveItemContent}>
                  <TabIcon
                    color={INACTIVE_COLOR}
                    name={tabIcons[route.name]}
                    size={25}
                  />
                  <Text style={styles.label}>{label}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function getTabLabel(title: string | undefined, routeName: string) {
  return title ?? routeName;
}

function TabIcon({
  color,
  name,
  size,
}: {
  color: string;
  name: TabIconName | undefined;
  size: number;
}) {
  if (!name) {
    return null;
  }

  return (
    <SymbolView
      name={name}
      resizeMode="scaleAspectFit"
      size={size}
      tintColor={color}
      type="monochrome"
      weight="semibold"
    />
  );
}

const styles = StyleSheet.create({
  activeCircle: {
    alignItems: "center",
    backgroundColor: colors.linguaPurple,
    borderRadius: ACTIVE_CIRCLE_SIZE / 2,
    height: ACTIVE_CIRCLE_SIZE,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    top: TAB_BAR_TOP_PADDING,
    width: ACTIVE_CIRCLE_SIZE,
    zIndex: 2,
  },
  container: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    boxShadow: "0 -8px 28px rgba(13, 19, 43, 0.08)",
    minHeight: 92,
    paddingHorizontal: TAB_BAR_HORIZONTAL_PADDING,
    paddingTop: TAB_BAR_TOP_PADDING,
  },
  inactiveItemContent: {
    alignItems: "center",
    gap: 4,
    height: 58,
    justifyContent: "center",
    paddingTop: 2,
  },
  item: {
    alignItems: "center",
    flex: 1,
    height: 60,
    justifyContent: "center",
  },
  items: {
    flexDirection: "row",
    position: "relative",
    zIndex: 3,
  },
  label: {
    color: INACTIVE_COLOR,
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
});
