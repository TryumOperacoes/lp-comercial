import { CtaButton } from "@/components/ui/cta-button"
import { X, Check } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Duas Escolhas. Dois Futuros Diferentes.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Continuar Como Está */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              Continuar Como Está
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 flex-shrink-0 mt-1 text-red-300" />
                <span>Gastar milhares em marketing</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 flex-shrink-0 mt-1 text-red-300" />
                <span>Ver leads não converterem</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 flex-shrink-0 mt-1 text-red-300" />
                <span>Trocar de agência todo ano</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 flex-shrink-0 mt-1 text-red-300" />
                <span>Ficar frustrado</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 flex-shrink-0 mt-1 text-red-300" />
                <span>Crescer devagar (ou não crescer)</span>
              </li>
            </ul>
          </div>

          {/* Construir a Fundação */}
          <div className="bg-card text-foreground rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              Construir a Fundação Primeiro
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <span>Estrutura comercial sólida</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <span>Processos que convertem</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <span>Time alinhado e produtivo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <span>Marketing que multiplica (não desperdiça)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1 text-primary" />
                <span>Crescimento sustentável e previsível</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Frase Central */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-5xl font-extrabold mb-8 text-balance">
            Você decide: continuar jogando dinheiro fora ou construir crescimento de verdade.
          </p>

          <CtaButton variant="secondary" size="lg" className="mb-4 w-full max-w-sm text-base sm:w-auto sm:max-w-none">
            Escolho Crescer de Verdade — Quero Minha Avaliação Gratuita
          </CtaButton>

          <div className="text-white/80 space-y-1 mt-6">
            <p className="flex items-center justify-center gap-2">
              <span>✓</span> Diagnóstico comercial gratuito de 30 min
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>✓</span> Análise personalizada do seu processo atual
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>✓</span> Plano de ação claro (mesmo que não feche com a gente)
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>✓</span> Sem enrolação. Sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
