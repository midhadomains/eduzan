import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/main.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import Whatsapp from "../components/Whatsapp";
import { DiGoogleAnalytics } from "react-icons/di";

export const metadata = {
  title: 'MidhaFin',
  description: 'Boost Your Career In Finance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSL6VDFP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <SpeedInsights />
        <Whatsapp />
        <GoogleAnalytics gaId="G-8LQ8G3GWXJ" />
        {children}
      </body>
    </html>
  )
}
