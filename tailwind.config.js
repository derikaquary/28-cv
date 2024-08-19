/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_photo: "url('/my_photo.png')",
        e_commerce: "url('/e-commerce fiverr gig.png')",
        fcc: "url('/fcc.png')",
        pdc: "url('/pdc.png')",
        chat: "url('/chatbuddy.png')",
        ummu: "url('/ummu.png')",
        oasis: "url('/oasis.png')",
        profile: "url('/profile.png')",
      },
    },
    plugins: [],
  },
};
