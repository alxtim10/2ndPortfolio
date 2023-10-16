import './globals.css'
import { NTR } from "next/font/google";

const font = NTR({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Alexander's Portfolio",
  description: 'Alexander Web Portofolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
