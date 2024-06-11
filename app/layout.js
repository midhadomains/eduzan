import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import '../styles/main.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import SocialMedia from "../components/common/SocialMedia";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", userSelect: "none" }} className=" select-none ">
      <Head>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSL6VDFP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </Head>
      <body className={inter.className}>
        <SpeedInsights />
        <GoogleAnalytics gaId="G-ZZCZJ53RDR" />
        {children}
      </body>
    </html>
  )
}
