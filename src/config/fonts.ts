import { Cairo } from "next/font/google";

export const primaryFont = Cairo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  display: "swap"
});
