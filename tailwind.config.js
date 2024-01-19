/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      arial: ["Arial"],
      poppins: ["Poppins"],
      roboto: ["Roboto"],
      // },
      // extend: {
      //   colors: {
      //     blue: "#007AFF",
      //     body: "#23155B",
      //     primary: "#8053FF",
      //     white: "#FFFFFF",
      //     black: {
      //       50: "#F2F2F2",
      //       100: "#E5E5E5",
      //       200: "#e4e4e7",
      //       300: "#d4d4d4",
      //       500: "#808080",
      //       700: "#4D4D4D",
      //       800: "#333333",
      //       900: "#1A1A1A",
      //     },
      //   },
    },
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
