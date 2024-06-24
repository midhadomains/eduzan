import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import '../styles/main.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import SocialMedia from "../components/common/SocialMedia";
import Head from "next/head";
import ContextMenuDisabler from "../components/common/RightClickDisabler";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", userSelect: "none" }} className=" select-none ">
      <head>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSL6VDFP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </head>
      <body className={inter.className}>
        <SpeedInsights />
        <ContextMenuDisabler/>
        <GoogleAnalytics gaId="G-ZZCZJ53RDR" />
        {children}
      </body>
    </html>
  )
}
