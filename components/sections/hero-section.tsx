"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { CtaButton } from "@/components/ui/cta-button"
import { GradientRule } from "@/components/ui/gradient-rule"
import { useDiagnosisPopup } from "@/components/diagnosis-popup-provider"

export function HeroSection() {
  const { openPopup } = useDiagnosisPopup()

  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]
  const fadeParent = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easing, staggerChildren: 0.08 },
    },
  }

  const fadeItem = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easing } },
  }

  const fadeDelayed = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing, delay: 0.1 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: easing, delay: 0.2 },
    },
  }

  const scrollToNextSection = () => {
    document.getElementById("problem-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-16 pt-12 md:px-10 md:gap-12 md:pb-20 md:pt-16 lg:grid lg:min-h-[78vh] lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:gap-24 lg:px-16 lg:py-20">
        <motion.div className="flex flex-col" initial="hidden" animate="visible" variants={fadeParent}>
          {/* Microstrap */}
          <motion.div
            className="mb-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:mb-10"
            variants={fadeItem}
          >
            <span>Estrutura Comercial</span>
            <span className="text-muted-foreground/60">•</span>
            <span>Processos de Vendas</span>
            <span className="text-muted-foreground/60">•</span>
            <span>Crescimento Sustentável</span>
          </motion.div>

          {/* Headline */}
          <motion.div className="max-w-3xl" variants={fadeItem}>
            <motion.h1
              className="mb-5 text-balance text-[32px] font-bold leading-[1.08] tracking-tight text-foreground md:mb-6 md:max-w-2xl md:text-[44px] lg:text-[48px]"
              variants={fadeItem}
            >
              <span className="text-foreground">Marketing sem vendas é </span>
              <span className="font-extrabold text-primary">desperdício</span>
              <span className="text-primary">.</span>
              <br />
              <span className="text-foreground">vendas sem marketing é </span>
              <span className="font-extrabold text-primary">lentidão</span>
              <span className="text-primary">.</span>
            </motion.h1>

            <motion.div variants={fadeItem}>
              <GradientRule className="mb-4 h-[3px] w-[32%]" />
            </motion.div>

            {/* Subheadline */}
            <motion.p className="mb-6 text-pretty text-sm text-muted-foreground md:text-base lg:text-lg" variants={fadeItem}>
              Nós entregamos os dois — na ordem certa. Primeiro construímos a estrutura comercial que converte. Depois
              amplificamos com marketing. É assim que empresas crescem sem desperdiçar recursos.
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex flex-col gap-3 sm:flex-row" variants={fadeDelayed}>
            <CtaButton onClick={openPopup} className="w-full sm:min-w-[220px] sm:flex-1">
              Quero Crescer Na Ordem Certa
            </CtaButton>
            <CtaButton variant="ghost" onClick={scrollToNextSection} className="w-full sm:min-w-[180px] sm:flex-1">
              Ver Como Funciona
            </CtaButton>
          </motion.div>
        </motion.div>

        <motion.aside
          className="relative mx-auto flex w-full max-w-none justify-center pt-6 lg:mx-0 lg:justify-end"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <motion.div
            className="absolute left-6 top-12 hidden h-[360px] w-[360px] rounded-full bg-[#1141FF]/14 blur-3xl lg:block"
            aria-hidden="true"
            variants={fadeDelayed}
          />
          <motion.div className="relative aspect-square w-full max-w-[280px] sm:max-w-[360px] lg:max-w-full" variants={imageVariants}>
            <Image
              src="/funilvazando.png"
              alt="Ilustração de funil vazando representando perda de leads"
              fill
              priority
              sizes="(max-width: 767px) 280px, (max-width: 1023px) 360px, 480px"
              className="object-contain drop-shadow-[0_28px_40px_rgba(17,65,255,0.18)] lg:translate-x-8 xl:translate-x-12"
            />
          </motion.div>
        </motion.aside>
      </div>
    </section>
  )
}
