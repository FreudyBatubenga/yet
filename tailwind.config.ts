import img from "./public/assets/image/pattern.png"
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBustitleFaq:'#777777',
        bgbutton: '#40A3FB',
        primary: '#002A50',
        transparent: '#1A1A1A94',
        bgbutton2: '#40A3FB',
        secbutton:'#1A1A1A61',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        infoLinearCards:"linear-gradient(180deg, #EFFCFF 0%, #FFFFFF 100%)"
      },
      boxShadow: {
        'custom-light': '0 2px 5px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 10px rgba(0, 0, 0, 0.3)',
      },
    
    },
  },
  plugins: [],
} satisfies Config;


