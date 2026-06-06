import { Text, View } from "react-native";

type TypographyRowProps = {
  name: string;
  usage: string;
  size: string;
  weight: string;
  lineHeight: string;
  className: string;
};

export function TypographyRow({
  name,
  usage,
  size,
  weight,
  lineHeight,
  className,
}: TypographyRowProps) {
  return (
    <View className="min-w-[620px] flex-row items-center gap-4">
      <Text className={`${className} w-[160px]`}>{name}</Text>
      <Text className="ds-type-body-medium w-[190px] text-text-secondary">
        {usage}
      </Text>
      <Text className="ds-type-body-medium w-[80px] text-text-secondary">
        {size}
      </Text>
      <Text className="ds-type-body-medium w-[96px] text-text-secondary">
        {weight}
      </Text>
      <Text className="ds-type-body-medium w-[48px] text-text-secondary">
        {lineHeight}
      </Text>
    </View>
  );
}
