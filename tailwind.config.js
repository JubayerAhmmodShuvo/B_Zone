/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#3b82f6",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#ffffff",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#dc2626",
        },
      },

   
    ],
  },
  plugins: [require("daisyui")],
};
