import { CtaButton } from "@/components/ui/cta-button"
import { Calculator } from "lucide-react"

export function UrgencySection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 text-balance">
          Quanto Você Está <span className="text-primary font-extrabold">Perdendo</span> Enquanto Lê Isso?
        </h2>

        <div className="bg-muted rounded-3xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Calculator className="w-10 h-10 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Calculadora de Oportunidade Perdida</h3>
          </div>

          <div className="space-y-6 text-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-4 border-b border-gray-300">
              <span className="text-muted-foreground">Se você investe por mês em marketing:</span>
              <span className="font-bold text-foreground text-2xl">R$ 10.000</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-4 border-b border-gray-300">
              <span className="text-muted-foreground">Tem taxa de conversão de:</span>
              <span className="font-bold text-red-500 text-2xl">2%</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-4 border-b border-gray-300">
              <span className="text-muted-foreground">E poderia estar convertendo:</span>
              <span className="font-bold text-primary text-2xl">15%</span>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl mt-6">
              <p className="text-muted-foreground mb-2">Você está deixando de ganhar por mês:</p>
              <p className="text-4xl font-extrabold text-red-600 mb-4">R$ 13.000</p>
              <p className="text-muted-foreground mb-2">Isso é por ano:</p>
              <p className="text-5xl font-extrabold text-red-600">R$ 156.000 jogados fora</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <CtaButton size="lg" className="mb-4">
            Chega de Perder Dinheiro — Quero Minha Avaliação Gratuita
          </CtaButton>
          <div className="text-muted-foreground space-y-1">
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">✓</span> Diagnóstico comercial gratuito de 30 min
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">✓</span> Análise personalizada do seu processo atual
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">✓</span> Plano de ação claro (mesmo que não feche com a gente)
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">✓</span> Sem enrolação. Sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
