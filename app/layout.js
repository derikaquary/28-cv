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
    default: "Derik's works",
    template: "%s - Derik&#39; works",
  },
  description: "Hi I am Derik, come and see my work",
  keywords: "portfolio, Derik, web development, projects, frontend, Next.js, React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

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
