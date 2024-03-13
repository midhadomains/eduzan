import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/main.css';
export const metadata = {
  title: 'MidhaFin',
  description: 'Boost Your Career In Finance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        {children}</body>
    </html>
  )
}
