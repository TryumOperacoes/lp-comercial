"use client"

import { CtaButton } from "@/components/ui/cta-button"
import { GradientRule } from "@/components/ui/gradient-rule"

export function HeroSection() {
  const scrollToNextSection = () => {
    document.getElementById("problem-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-white px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Microstrap */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.1em] text-[#6E727A] mb-12 font-medium">
          <span>Estrutura Comercial</span>
          <span>•</span>
          <span>Processos de Vendas</span>
          <span>•</span>
          <span>Crescimento Sustentável</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 max-w-5xl text-balance">
          <span className="text-[#1E1F22]">Marketing Sem Vendas É </span>
          <span className="text-[#1141FF] font-extrabold">Desperdício</span>
          <span className="text-[#1141FF]">.</span>
          <br />
          <span className="text-[#1E1F22]">Vendas Sem Marketing É </span>
          <span className="text-[#1141FF] font-extrabold">Lentidão</span>
          <span className="text-[#1141FF]">.</span>
        </h1>

        <GradientRule className="mb-6" />

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#3B3D41] leading-relaxed max-w-2xl mb-8 text-pretty">
          Nós entregamos os dois — na ordem certa. Primeiro construímos a estrutura comercial que converte. Depois
          amplificamos com marketing. É assim que empresas crescem sem desperdiçar recursos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <CtaButton size="lg">Quero Crescer Na Ordem Certa</CtaButton>
          <CtaButton variant="ghost" size="lg" onClick={scrollToNextSection}>
            Ver Como Funciona
          </CtaButton>
        </div>

        {/* Trust Signal */}
        <div className="text-sm text-[#6E727A]">
          <p className="font-medium">
            Confiado por empresas como <span className="text-[#1E1F22] font-semibold">Empresa A</span>,
            <span className="text-[#1E1F22] font-semibold"> Empresa B</span> e mais
            <span className="text-[#1E1F22] font-semibold"> 47 empresas</span>
          </p>
        </div>
      </div>
    </section>
  )
}
