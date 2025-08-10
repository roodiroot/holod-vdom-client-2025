import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const beautifulFont = localFont({
  src: [
    {
      path: "../assets/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const tinkoffSans = localFont({
  src: [
    {
      path: "../assets/fonts/TinkoffSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/TinkoffSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/TinkoffSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

// If loading a variable font, you don't need to specify the font weight
export const montserrat = Inter({
  subsets: ["cyrillic"],
  display: "swap",
});
