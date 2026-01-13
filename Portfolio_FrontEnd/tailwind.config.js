/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
       
        background: "#0a192f",        // Main background (Dark Blue)
        surface: "#112240",   // Cards / Sections
        primary: "#38bdf8",   // Buttons / Links (Sky Blue)
        secondary: "#64ffda", // Highlights
        text: "#e6f1ff",      // Main text
        muted: "#8892b0",     // Subtext
        border: "#233554", 
      },
    },
  },
  plugins: [],
}
