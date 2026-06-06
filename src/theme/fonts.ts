import poppinsBold from "@/assets/fonts/Poppins-Bold.ttf";
import poppinsMedium from "@/assets/fonts/Poppins-Medium.ttf";
import poppinsRegular from "@/assets/fonts/Poppins-Regular.ttf";
import poppinsSemiBold from "@/assets/fonts/Poppins-SemiBold.ttf";

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontAssets = {
  [fonts.regular]: poppinsRegular,
  [fonts.medium]: poppinsMedium,
  [fonts.semiBold]: poppinsSemiBold,
  [fonts.bold]: poppinsBold,
} as const;
