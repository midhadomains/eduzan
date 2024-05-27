import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/main.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { DiGoogleAnalytics } from "react-icons/di";
import SocialMedia from "../components/common/SocialMedia";

export const metadata = {
  title: 'MidhaFin',
  description: 'Boost Your Career In Finance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <head>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/> 
        <meta property="og:title" content="MidhaFin:- FRM Exam prep provider" />
        <meta property="og:description" content="Boost Your Career In Finance" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Midhafin"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:url" content="https://www.midhafin.com/" />
        <meta property="og:image.url" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
        <meta property="og:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
        <meta property="og:image:width" content="800"/>
        <meta property="og:image:height" content="600"/>
        <meta property="og:image:alt" content="Midhafin"/>
        <meta property="og:image:id" content="10"/>
        <meta name="twitter:handle"/>
        <meta name="x:card" content="summary_large_image" />
        <meta name="x:title" content="MidhaFin:-FRM Exam prep provider" />
        <meta name="x:description" content="Boost Your Career In Finance" />
        <meta name="x:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
      </head>
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSL6VDFP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <SpeedInsights />
        <SocialMedia/>
        <GoogleAnalytics gaId="G-ZZCZJ53RDR" />
        {children}
      </body>
    </html>
  )
}
