import type React from "react"
import { Karla, League_Gothic, Rosario, Alumni_Sans, Inter, Roboto } from "next/font/google"
import "./globals.css"

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
})

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-gothic",
})

const rosario = Rosario({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rosario",
})

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alumni-sans",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${leagueGothic.variable} ${rosario.variable} ${alumniSans.variable} ${inter.variable} ${roboto.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
