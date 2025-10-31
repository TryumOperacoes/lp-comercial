import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { GTMProvider } from "@/components/gtm-provider"

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <GTMProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <SiteHeader />
            <main>{children}</main>
          </ThemeProvider>
        </GTMProvider>
      </body>
    </html>
  )
}
