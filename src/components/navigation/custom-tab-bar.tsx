import { colors } from "@/theme/colors";
import type { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ACTIVE_COLOR = colors.linguaDeepPurple;
const INACTIVE_COLOR = "#7C849D";

type TabIconName = SymbolViewProps["name"];

const activeTabIcons: Record<string, TabIconName> = {
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

const inactiveTabIcons: Record<string, TabIconName> = {
  home: {
    android: "home",
    ios: "house",
    web: "home",
  },
  learn: {
    android: "menu_book",
    ios: "book",
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
    ios: "person",
    web: "person",
  },
};

export function CustomTabBar({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 12),
        },
      ]}
    >
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
              style={({ pressed }) => [
                styles.item,
                pressed && styles.itemPressed,
              ]}
              testID={options.tabBarButtonTestID}
            >
              <TabIcon
                color={isFocused ? ACTIVE_COLOR : INACTIVE_COLOR}
                name={
                  isFocused
                    ? activeTabIcons[route.name]
                    : inactiveTabIcons[route.name]
                }
                size={29}
              />
              <Text
                style={[
                  styles.label,
                  isFocused ? styles.activeLabel : styles.inactiveLabel,
                ]}
              >
                {label}
              </Text>
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
  activeLabel: {
    color: ACTIVE_COLOR,
  },
  container: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    boxShadow: "0 -10px 30px rgba(13, 19, 43, 0.08)",
    minHeight: 100,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  inactiveLabel: {
    color: INACTIVE_COLOR,
  },
  item: {
    alignItems: "center",
    flex: 1,
    gap: 5,
    height: 64,
    justifyContent: "center",
  },
  itemPressed: {
    opacity: 0.72,
  },
  items: {
    flexDirection: "row",
  },
  label: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 16,
  },
});
