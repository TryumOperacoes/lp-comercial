import { X, Check } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 text-balance">
          A Matemática É <span className="text-primary font-extrabold">Simples</span> (e Assustadora)
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sem Estrutura */}
          <div className="bg-card rounded-3xl p-8 border-2 border-red-200">
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
          </div>

          {/* Com Estrutura */}
          <div className="bg-card rounded-3xl p-8 border-2 border-primary shadow-xl">
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
          </div>
        </div>

        {/* Frase de Impacto */}
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Mesmos leads. Mesmo investimento. <span className="text-primary">Resultado 20x melhor.</span>
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            A diferença não está no marketing. Está na máquina que recebe e converte.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CtaButton size="lg">Quero Multiplicar Meu ROI Assim Também</CtaButton>
        </div>
      </div>
    </section>
  )
}
