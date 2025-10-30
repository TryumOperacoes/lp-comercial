"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface CtaButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "lg"
  className?: string
  onClick?: () => void
}

export function CtaButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
}: CtaButtonProps) {
  const baseClasses = "rounded-full font-semibold transition-all duration-200"

  const variantClasses = {
    primary: "bg-[#1141FF] text-white hover:bg-[#0E34CC] shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#1E1F22] hover:bg-[#E6ECFF] border-2 border-[#1141FF]",
    ghost: "bg-transparent text-[#1141FF] hover:bg-[#E6ECFF] border border-[#1141FF]",
  }

  const sizeClasses = {
    default: "h-10 px-5 text-base",
    lg: "h-12 px-8 text-lg",
  }

  return (
    <Button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} onClick={onClick}>
      {children}
      <ArrowUpRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
