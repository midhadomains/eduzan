import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/main.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import Whatsapp from "../components/Whatsapp";
import { DiGoogleAnalytics } from "react-icons/di";

export const metadata = {
  title: 'MidhaFin',
  description: 'Boost Your Career In Finance',
  keywords:["best frm courses"," best frm course in india,best frm courses online","frm certification","frm exam","best frm coaching","best frm coaching online","best frm coaching in bangalore","best frm coaching in mumbai","best frm coaching in india",
  "best frm coaching in kolkata","best frm coaching in chennai","best frm coaching institute in india","best frm online coaching in india",
  "best frm coaching in india quora","best coaching for frm","best coaching for frm in india","best online coaching for frm","Top-rated FRM coaching",
  "Best FRM coaching institutes with high pass rates","cfa","cfa exam","about cfa course","best cfa prep course","best cfa coaching in india","cfa exam prep","cfa exam registration","cfa exam level 1","best way to prepare for cfa exam","best ways to study for the cfa exam"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <head>
        <meta property="og:title" content="MidhaFin:- FRM Exam prep provider" />
        <meta property="og:description" content="Boost Your Career In Finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.frm.midhafin.com/" />
        <meta property="og:image" content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/midhafin.com/MidhaFin/Boost%20Your%20Career%20In%20Finance/https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png" />
        <meta name="x:card" content="summary_large_image" />
        <meta name="x:title" content="MidhaFin:-FRM Exam prep provider" />
        <meta name="x:description" content="Boost Your Career In Finance" />
        <meta name="x:image" content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/midhafin.com/MidhaFin/Boost%20Your%20Career%20In%20Finance/https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png" />
      </head>
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSL6VDFP"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <SpeedInsights />
        <Whatsapp />
        <GoogleAnalytics gaId="G-ZZCZJ53RDR" />
        {children}
      </body>
    </html>
  )
}
