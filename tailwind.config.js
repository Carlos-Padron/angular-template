/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          // "primary": "#0F3658",
          "primary": "#0F3658",
          // "secondary": "#3e5e79",
          "secondary": "#0c1e36",
          "accent": "#0f584c",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#06b6d4",
          "success": "#10b981",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

