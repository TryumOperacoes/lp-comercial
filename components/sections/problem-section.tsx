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
    <section id="problem-section" className="relative overflow-hidden bg-muted py-20 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-16">
          <div className="inline-flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              Responda com honestidade
            </span>
            <div className="h-px w-12 bg-primary/60" aria-hidden="true" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-14">
            <div className="group relative overflow-hidden rounded-[32px] bg-card/90 p-10 shadow-xl ring-1 ring-border/40">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -right-8 h-40 w-40 rounded-full bg-primary/30 blur-3xl"
                aria-hidden="true"
              />
              <p className="relative text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                Se <span className="text-primary">50 leads qualificados</span> chegassem na sua empresa amanhã, o que
                aconteceria com eles?
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary/25 via-primary/10 to-transparent p-[2px] shadow-lg">
              <div className="rounded-[26px] bg-background/90 p-8">
                <div className="space-y-6">
                  {questions.map((question, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/12 ring-1 ring-primary/30">
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg font-medium text-foreground md:text-xl">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[32px] bg-card/95 p-[2px] shadow-xl">
            <div className="rounded-[28px] bg-background/90 p-8 text-center md:p-12">
              <p className="mb-6 text-lg font-medium text-muted-foreground md:text-xl">
                Se você hesitou em qualquer uma dessas perguntas, temos uma notícia:
              </p>
              <p className="text-2xl font-extrabold leading-tight text-primary md:text-4xl lg:text-5xl text-balance">
                Seu problema não é falta de marketing. É falta de estrutura comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
