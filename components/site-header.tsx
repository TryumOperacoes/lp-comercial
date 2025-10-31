"use client"

import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/90 py-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 md:px-10 lg:px-16">
        <Link href="/" aria-label="Tryum - início" className="inline-flex items-center">
          <Image
            src="/logotryumescuro.png"
            alt="Tryum - sales traction"
            width={168}
            height={45}
            priority
            className="h-11 w-auto"
          />
        </Link>
      </div>
    </header>
  )
}
