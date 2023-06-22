/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile:
          "url('./src/components/assets/images/illustration-sign-up-mobile.svg')",
        desktop:
          "url('./src/components/assets/images/illustration-sign-up-desktop.svg')",
      },
    },
  },
  plugins: [],
};
