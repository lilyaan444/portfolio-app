import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-underline":
          "linear-gradient(180deg,transparent 80%,hsla(205,100%,55%,0.5) 0);",
      },
      colors: {
        focus: "#c66",
        rest: "#6cc",
        neutral: "#eff9f9",
        buttonShadow: "#eb",
      },
      boxShadow: {
        button: "rgb(235, 235, 235) 0px 12px 0px;",
      },
    },
  },
  plugins: [],
};
export default config;
