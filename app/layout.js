import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/main.css';
import Head from "next/head";
import Script from 'next/script'

export const metadata = {
  title: 'MidhaFin',
  description: 'Boost Your Career In Finance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head><script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PSL6VDFP');` }} /></Head>

      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSL6VDFP"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <SpeedInsights />
        {children}
        </body>
    </html>
  )
}
