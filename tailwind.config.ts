import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text_primary: "#58D196",
        text_gray_100: "#97979F",
        green_400: "#64F4AC",
        green_500: "#07AC4F",
        green_700: "#09934E",
        background_primary: "#25262A",
        background_secondary: "#2d2e32",
      },
    },
  },
  plugins: [],
};
export default config;
