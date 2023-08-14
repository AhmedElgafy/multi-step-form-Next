/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "Cool-gray": "hsl(231, 11%, 63%)",
      "Light-gray": "hsl(229, 24%, 87%)",
      Magnolia: "hsl(217, 100%, 97%)",
      Alabaster: "hsl(231, 100%, 99%)",
      White: "hsl(0, 0%, 100%)",
      "Marine-blue": " hsl(213, 96%, 18%)",
      "Purplish-blue": " hsl(243, 100%, 62%)",
      "Pastel-blue": " hsl(228, 100%, 84%)",
      "Light-blue": " hsl(206, 94%, 87%)",
      "Strawberry-red": "hsl(354, 84%, 57%)",
    },
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu"', "sans-serif"],
        Lumanosimo: ["Lumanosimo", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // deskTop: "url('../../bg-sidebar-desktop.svg)",
        deskTop: "url('./public/bg-sidebar-desktop.svg)",
      },
    },
  },
  plugins: [],
};
