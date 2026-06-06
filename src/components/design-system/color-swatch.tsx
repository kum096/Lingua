import { Text, View } from "react-native";

type ColorSwatchProps = {
  name: string;
  value: string;
};

export function ColorSwatch({ name, value }: ColorSwatchProps) {
  const borderClass = value === "#FFFFFF" ? "border border-border" : "";

  return (
    <View className="w-[108px] gap-2">
      <View
        className={`h-[82px] w-[82px] rounded-[10px] ${borderClass}`}
        style={{ backgroundColor: value }}
      />
      <View>
        <Text className="ds-token-name">{name}</Text>
        <Text className="ds-token-value">{value}</Text>
      </View>
    </View>
  );
}
