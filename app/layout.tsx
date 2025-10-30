import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tryum - Primeiro Vendas. Depois Marketing.",
  description:
    "Marketing sem vendas é desperdício. Vendas sem marketing é lentidão. Construa a fundação comercial que converte, depois amplifique com marketing.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
