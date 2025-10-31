"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

import { CtaButton } from "@/components/ui/cta-button"
import { useDiagnosisPopup } from "@/components/diagnosis-popup-provider"

export function ComparisonSection() {
  const { openPopup } = useDiagnosisPopup()

  const easing: [number, number, number, number] = [0.24, 1, 0.3, 1]
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
  }

  const gridParent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 36, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easing },
    },
  }

  return (
    <section className="bg-muted px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-16 text-center text-4xl font-bold text-foreground text-balance md:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          A Matemática É <span className="text-primary font-extrabold">Simples</span> (e Assustadora)
        </motion.h2>

        <motion.div
          className="mb-12 grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={gridParent}
        >
          {/* Sem Estrutura */}
          <motion.div className="rounded-3xl border-2 border-red-200 bg-card p-8" variants={cardVariant}>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-red-500" />
              Sem Estrutura Comercial
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Investimento em marketing:</span>
                <span className="font-bold">R$ 10.000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Leads gerados:</span>
                <span className="font-bold">100</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Taxa de conversão:</span>
                <span className="font-bold text-red-500">2%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Clientes fechados:</span>
                <span className="font-bold text-red-500">2</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Ticket médio:</span>
                <span className="font-bold">R$ 1.000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Receita total:</span>
                <span className="font-bold">R$ 2.000</span>
              </div>
              <div className="bg-red-50 p-4 rounded-xl mt-4">
                <p className="text-2xl font-extrabold text-red-600">💸 PREJUÍZO: R$ 8.000</p>
              </div>
            </div>
          </motion.div>

          {/* Com Estrutura */}
          <motion.div className="rounded-3xl border-2 border-primary bg-card p-8 shadow-xl" variants={cardVariant}>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              Com Estrutura Comercial (Tryum)
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Investimento em marketing:</span>
                <span className="font-bold">R$ 10.000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Leads gerados:</span>
                <span className="font-bold">
                  100 <span className="text-sm text-muted-foreground">(os mesmos)</span>
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Taxa de conversão:</span>
                <span className="font-bold text-primary">15%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Clientes fechados:</span>
                <span className="font-bold text-primary">15</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Ticket médio:</span>
                <span className="font-bold text-primary">R$ 1.500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Receita total:</span>
                <span className="font-bold text-primary">R$ 22.500</span>
              </div>
              <div className="bg-green-50 p-4 rounded-xl mt-4">
                <p className="text-2xl font-extrabold text-green-600">💰 LUCRO: R$ 12.500</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Frase de Impacto */}
        <motion.div
          className="mb-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="mb-2 text-3xl font-extrabold text-foreground md:text-4xl">
            Mesmos leads. Mesmo investimento. <span className="text-primary">Resultado 20x melhor.</span>
          </p>
          <p className="text-xl font-medium text-muted-foreground md:text-2xl">
            A diferença não está no marketing. Está na máquina que recebe e converte.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <CtaButton size="lg" className="w-full max-w-sm text-base sm:w-auto sm:max-w-none" onClick={openPopup}>
            Quero Multiplicar Meu ROI Assim Também
          </CtaButton>
        </motion.div>
      </div>
    </section>
  )
}
