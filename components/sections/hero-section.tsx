"use client"

import Image from "next/image"

import { CtaButton } from "@/components/ui/cta-button"
import { GradientRule } from "@/components/ui/gradient-rule"
import { useDiagnosisPopup } from "@/components/diagnosis-popup-provider"

export function HeroSection() {
  const { openPopup } = useDiagnosisPopup()

  const scrollToNextSection = () => {
    document.getElementById("problem-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:grid lg:min-h-[78vh] lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:gap-24 lg:px-16 lg:py-20">
        <div className="flex flex-col">
          {/* Microstrap */}
          <div className="mb-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground md:mb-10">
            <span>Estrutura Comercial</span>
            <span className="text-muted-foreground/60">•</span>
            <span>Processos de Vendas</span>
            <span className="text-muted-foreground/60">•</span>
            <span>Crescimento Sustentável</span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="mb-6 max-w-2xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-[44px] lg:text-[48px]">
              <span className="text-foreground">Marketing sem vendas é </span>
              <span className="font-extrabold text-primary">desperdício</span>
              <span className="text-primary">.</span>
              <br />
              <span className="text-foreground">vendas sem marketing é </span>
              <span className="font-extrabold text-primary">lentidão</span>
              <span className="text-primary">.</span>
            </h1>

            <GradientRule className="mb-5 h-[3px] w-[26%]" />

            {/* Subheadline */}
            <p className="mb-7 text-pretty text-base text-muted-foreground md:text-lg">
              Nós entregamos os dois — na ordem certa. Primeiro construímos a estrutura comercial que converte. Depois
              amplificamos com marketing. É assim que empresas crescem sem desperdiçar recursos.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaButton onClick={openPopup} className="sm:min-w-[220px]">Quero Crescer Na Ordem Certa</CtaButton>
            <CtaButton variant="ghost" onClick={scrollToNextSection} className="sm:min-w-[180px]">
              Ver Como Funciona
            </CtaButton>
          </div>
        </div>

        <aside className="relative mx-auto flex w-full max-w-none justify-center pt-6 lg:mx-0 lg:justify-end">
          <div className="absolute left-6 top-12 hidden h-[360px] w-[360px] rounded-full bg-[#1141FF]/14 blur-3xl lg:block" aria-hidden="true" />
          <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[360px] lg:max-w-full">
            <Image
              src="/funilvazando.png"
              alt="Ilustração de funil vazando representando perda de leads"
              fill
              priority
              sizes="(max-width: 767px) 280px, (max-width: 1023px) 360px, 480px"
              className="object-contain drop-shadow-[0_28px_40px_rgba(17,65,255,0.18)] lg:translate-x-8 xl:translate-x-12"
            />
          </div>
        </aside>
      </div>
    </section>
  )
}
