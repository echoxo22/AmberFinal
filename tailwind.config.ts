import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { background: "#080808", surface: "#121212", primary: "#E5E5E5", accent: "#D4AF37", menthol: "#2DD4BF" },
      fontFamily: { serif: ["ui-serif", "Georgia", "serif"], mono: ["ui-monospace", "SFMono-Regular", "monospace"] },
    },
  },
  plugins: [],
};
export default config;
