import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GradientRule } from "@/components/ui/gradient-rule"

export const metadata: Metadata = {
  title: "Obrigado | Tryum",
  description: "Recebemos seu pedido de diagnóstico. Um especialista da Tryum entrará em contato em breve.",
}

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero%20falar%20com%20a%20Tryum"

export default function ObrigadoPage() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#1141FF]/12 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-12 h-64 w-64 rounded-full bg-[#1141FF]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center gap-12 px-6 py-24 md:px-10 lg:px-16 lg:py-28">
        <div className="inline-flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1141FF]/80">Diagnóstico recebido</span>
          <GradientRule className="h-[3px] w-24" />
        </div>

        <div className="space-y-8">
          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-[44px] lg:text-[52px]">
            Obrigado por confiar na Tryum.
            <br />
            <span className="font-extrabold text-[#1141FF]">Um especialista</span> vai falar com você em breve.
          </h1>

          <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Enquanto nosso time organiza as próximas etapas do diagnóstico comercial, você pode adiantar a conversa e
            garantir prioridade no atendimento falando direto com a gente pelo WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="h-auto rounded-full bg-[#1141FF] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0E34CC] sm:w-auto"
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar agora no WhatsApp
              <MessageCircle className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="h-auto rounded-full border border-[#1141FF]/30 bg-white px-6 py-3 text-base font-semibold text-[#1141FF] transition-colors hover:bg-[#E6ECFF]"
          >
            <Link href="/">
              Voltar para a página inicial
              <ArrowLeft className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
