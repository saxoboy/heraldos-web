import { Dancing_Script, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const dancingScript = Dancing_Script({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
