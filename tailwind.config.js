/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
        signup: "url('/signup.png')",
        pricing: "url('/pricing.png')",
        makanan: "url('/makanan.png')",
        artMakanan: "url('/article_makanan.png')",
        contMakanan: "url('/article_content.png')",
        lettuce: "url('/lettuce.png')",
        plantArt: "url('/plant_article.png')",
        plantCont: "url('/plant_content.png')",
        reserve: "url('/reserve.png')",
        guest: "url('/guest.png')",
        cabins: "url('/cabins.png')",
        ball: "url('/ball.png')",
        cloth: "url('/cloth.png')",
        products: "url('/products.png')",
        menu: "url('/menu.png')",
        menu2: "url('/menu2.png')",
        order: "url('/order.png')",
        logo: "url('/logo.jpeg')",
      },
    },
    plugins: [],
  },
});
