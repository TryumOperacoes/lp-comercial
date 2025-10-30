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
      result: "Taxa de conversão sobe de 2% para 15%+ antes de gastar mais um real em marketing",
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
      result: "Ciclo de vendas reduzido em 40%, receita previsível mês a mês",
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
      result: "Cada R$ 1 investido em marketing retorna R$ 4-5 em receita",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1E1F22] mb-6 text-balance">
            A Ordem Que Transforma <span className="text-[#1141FF] font-extrabold">Desperdício em Receita</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#3B3D41] font-medium">
            Empresas que crescem de verdade seguem esta sequência:
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-32 w-0.5 h-full bg-gradient-to-b from-[#1141FF] to-transparent hidden md:block" />
                )}

                <div className="bg-[#F8F9FB] rounded-3xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon & Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1141FF] rounded-2xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-6xl font-extrabold text-[#E6ECFF]">{step.number}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm uppercase tracking-[0.1em] text-[#6E727A] font-bold mb-4">
                        PASSO {step.number}
                      </h3>
                      <h4 className="text-3xl md:text-4xl font-bold text-[#1E1F22] mb-6">{step.title}</h4>

                      <div className="mb-6">
                        <p className="text-lg font-semibold text-[#1E1F22] mb-4">O que fazemos:</p>
                        <ul className="space-y-3">
                          {step.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-[#1141FF] rounded-full mt-2.5 flex-shrink-0" />
                              <span className="text-[#3B3D41] text-lg leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border-l-4 border-[#1141FF]">
                        <p className="text-sm uppercase tracking-[0.08em] text-[#6E727A] font-bold mb-2">
                          RESULTADO VISÍVEL
                        </p>
                        <p className="text-lg font-semibold text-[#1E1F22]">{step.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Frase de Impacto */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-5xl font-extrabold text-[#1E1F22] mb-2">Construa. Otimize. Amplifique.</p>
          <p className="text-2xl md:text-4xl font-bold text-[#1141FF]">Nessa ordem. Sempre.</p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CtaButton size="lg">Quero Construir Minha Fundação Comercial</CtaButton>
        </div>
      </div>
    </section>
  )
}
