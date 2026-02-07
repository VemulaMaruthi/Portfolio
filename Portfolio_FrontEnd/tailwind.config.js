/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
       
        background: "#04042B",        // Main background (Dark Blue)
        surface: "#112240",   // Cards / Sections
         primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },   // Buttons / Links (Sky Blue)
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        }, // Highlights
        text: "#e6f1ff",      // Main text
        muted: "#8892b0",     // Subtext
        border: "#233554", 
      },
    },
  },
  plugins: [],
}
