export const colors = {
  linguaPurple: "#6C4EF5",
  linguaDeepPurple: "#5B3BF6",
  linguaBlue: "#4D8BFF",
  linguaGreen: "#21C16B",
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export type ColorToken = keyof typeof colors;

export const colorGroups = [
  {
    title: "PRIMARY",
    colors: [
      { name: "LINGUA PURPLE", value: colors.linguaPurple },
      { name: "LINGUA DEEP PURPLE", value: colors.linguaDeepPurple },
      { name: "LINGUA BLUE", value: colors.linguaBlue },
      { name: "LINGUA GREEN", value: colors.linguaGreen },
    ],
  },
  {
    title: "SEMANTIC",
    colors: [
      { name: "SUCCESS", value: colors.success },
      { name: "WARNING", value: colors.warning },
      { name: "STREAK", value: colors.streak },
      { name: "ERROR", value: colors.error },
      { name: "INFO", value: colors.info },
    ],
  },
  {
    title: "NEUTRALS",
    colors: [
      { name: "TEXT / PRIMARY", value: colors.textPrimary },
      { name: "TEXT / SECONDARY", value: colors.textSecondary },
      { name: "BORDER", value: colors.border },
      { name: "SURFACE", value: colors.surface },
      { name: "BACKGROUND", value: colors.background },
    ],
  },
] as const;
