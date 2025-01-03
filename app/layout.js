import { Rubik } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Derik's world",
    template: "%s - Derik&#39; world",
  },
  description:
    "Welcome to my world, Hi I am Derik, please come and see my work",
  keywords:
    "portfolio, Derik, Ikhsan Derik Aquary, Derik Aquary, web development, projects, frontend, Next.js, React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata For SEO*/}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="Derik Aquary" />

        {/* Open Graph Metadata for Social Media*/}
        <meta property="og:title" content="Derik's world" />
        <meta
          property="og:description"
          content="Hi I am Derik, come and see my work"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://derikaquary.vercel.app" />
        <meta
          property="og:image"
          content="https://derikaquary.vercel.app/logo.jpeg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Derik's world" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KZF6P8C');
          `,
          }}
        />
        {/* Google Site Verification for Search Console */}
        <meta
          name="google-site-verification"
          content="UEkD1m_FAQ1S1DWIjCIEVY7w2f86SV2XJCN5lpMlaEs"
        />
      </head>
      <body className={`${rubik.className} bg-[#212429] relative`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KZF6P8C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
