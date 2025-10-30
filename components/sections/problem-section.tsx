import { HelpCircle } from "lucide-react"

export function ProblemSection() {
  const questions = [
    "Seu time saberia exatamente como atender?",
    "Teria um processo claro de qualificação?",
    "Mandaria propostas rápido?",
    "Faria follow-up estruturado?",
    "Conseguiria fechar pelo menos 10 desses leads?",
  ]

  return (
    <section id="problem-section" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-muted">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Responda Com Honestidade:</h2>

        {/* Pergunta Principal */}
        <div className="text-center mb-16">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 text-balance">
            Se <span className="text-primary font-extrabold">50 leads qualificados</span> chegassem na sua empresa
            amanhã, o que aconteceria com eles?
          </p>
        </div>

        {/* Lista de Perguntas */}
        <div className="space-y-6 mb-16">
          {questions.map((question, index) => (
            <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-sm">
              <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">{question}</p>
            </div>
          ))}
        </div>

        {/* Transição */}
        <div className="bg-muted p-8 md:p-12 rounded-3xl text-center">
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Se você hesitou em qualquer uma dessas perguntas, temos uma notícia:
          </p>
          <p className="text-3xl md:text-5xl font-extrabold text-primary leading-tight text-balance">
            Seu problema não é falta de marketing. É falta de estrutura comercial.
          </p>
        </div>
      </div>
    </section>
  )
}
