import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import localFont from 'next/font/local'

const tanMeringue = localFont({
  src: [
    {
      path: '../public/fonts/TAN MERINGUE.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TAN MERINGUE.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-tan-meringue'
})

export const metadata: Metadata = {
  title: "MAHA Collective - Bold, Alive, Fun & Creative Yoga",
  description:
    "Transform your life through the vibrant practice of yoga with MAHA Collective's 21-Day Sadhana journey.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-libre ${tanMeringue.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
