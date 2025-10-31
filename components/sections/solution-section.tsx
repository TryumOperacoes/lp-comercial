"use client"

import { motion } from "framer-motion"
import { Building2, Settings, Rocket } from "lucide-react"

import { CtaButton } from "@/components/ui/cta-button"
import { useDiagnosisPopup } from "@/components/diagnosis-popup-provider"

export function SolutionSection() {
  const { openPopup } = useDiagnosisPopup()

  const steps = [
    {
      number: "1",
      icon: Building2,
      title: "FUNDAÇÃO COMERCIAL",
      items: [
        "Construímos processos de vendas documentados e escaláveis",
        "Implementamos CRM que funciona (de verdade)",
        "Treinamos seu time comercial com metodologia validada",
        "Criamos métricas que mostram exatamente onde estão os gargalos",
      ],
      result: "Clientes costumam sair de 2% para ~12-15% de conversão antes de reinvestir em marketing",
    },
    {
      number: "2",
      icon: Settings,
      title: "OTIMIZAÇÃO",
      items: [
        "Analisamos cada etapa do seu funil comercial",
        "Eliminamos gargalos e reduzimos tempo de fechamento",
        "Aumentamos ticket médio através de processos estratégicos",
        "Garantimos previsibilidade de receita",
      ],
      result: "Times reduzem em média 30-40% do ciclo e ganham cadência semanal de previsão",
    },
    {
      number: "3",
      icon: Rocket,
      title: "AMPLIFICAÇÃO COM MARKETING",
      items: [
        "Agora sim: campanhas de marketing estruturadas",
        "Geração de leads qualificados em escala",
        "Marketing alinhado com processo comercial otimizado",
        "Cada lead entra numa máquina que converte",
      ],
      result: "Com o funil ajustado, campanhas têm retornos observados de 3-4x o investimento",
    },
  ]

  const easing: [number, number, number, number] = [0.25, 1, 0.3, 1]
  const fadeIn = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
  }

  const listParent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: easing },
    },
  }

  return (
    <section className="bg-background px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <motion.div
          className="mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
        >
          <h2 className="mb-6 text-4xl font-bold text-foreground text-balance md:text-6xl">
            A Ordem Que Transforma <span className="text-primary font-extrabold">Desperdício em Receita</span>
          </h2>
          <p className="text-xl font-medium text-muted-foreground md:text-2xl">
            Empresas que crescem de verdade seguem esta sequência:
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="mb-16 grid gap-8 md:gap-10 lg:grid-cols-3 lg:items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listParent}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative flex h-full flex-col rounded-3xl bg-muted p-6 shadow-[0_18px_45px_rgba(17,65,255,0.08)] md:p-8 lg:p-10"
                variants={cardVariants}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon className="size-7" />
                  </div>
                  <div className="text-5xl font-extrabold text-primary/15">{step.number}</div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Passo {step.number}
                  </h3>
                  <h4 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">{step.title}</h4>
                </div>

                <div className="mb-6 space-y-3">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground md:text-base">
                      <span className="mt-2 inline-flex size-2.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto rounded-2xl border border-primary/30 bg-card p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">Resultado visível</p>
                  <p className="mt-2 text-sm font-medium text-foreground md:text-base">{step.result}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        {/* Frase de Impacto */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={fadeIn}
        >
          <p className="mb-2 text-3xl font-extrabold text-foreground md:text-5xl">Construa. Otimize. Amplifique.</p>
          <p className="text-2xl font-bold text-primary md:text-4xl">Nessa ordem. Sempre.</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <CtaButton size="lg" className="w-full max-w-sm text-base sm:w-auto sm:max-w-none" onClick={openPopup}>
            Quero Construir Minha Fundação Comercial
          </CtaButton>
        </motion.div>
      </div>
    </section>
  )
}
