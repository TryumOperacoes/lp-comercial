import { CtaButton } from "@/components/ui/cta-button"
import { Building2, Settings, Rocket } from "lucide-react"

export function SolutionSection() {
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

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            A Ordem Que Transforma <span className="text-primary font-extrabold">Desperdício em Receita</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Empresas que crescem de verdade seguem esta sequência:
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16 grid gap-8 md:gap-10 lg:grid-cols-3 lg:items-stretch">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative flex h-full flex-col rounded-3xl bg-muted p-6 shadow-[0_18px_45px_rgba(17,65,255,0.08)] md:p-8 lg:p-10"
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
              </div>
            )
          })}
        </div>
        {/* Frase de Impacto */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-5xl font-extrabold text-foreground mb-2">Construa. Otimize. Amplifique.</p>
          <p className="text-2xl md:text-4xl font-bold text-primary">Nessa ordem. Sempre.</p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CtaButton size="lg" className="w-full max-w-sm text-base sm:w-auto sm:max-w-none">
            Quero Construir Minha Fundação Comercial
          </CtaButton>
        </div>
      </div>
    </section>
  )
} 
