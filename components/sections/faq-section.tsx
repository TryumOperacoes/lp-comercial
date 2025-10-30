import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Mas eu preciso de leads AGORA. Não posso esperar estruturar primeiro?",
      answer:
        "Entendemos a urgência. Mas pense assim: se você jogar 1000 leads numa máquina quebrada, vai desperdiçar 1000 oportunidades + todo o dinheiro investido. Nossa estruturação comercial leva 30-60 dias e já mostra resultados imediatos na conversão dos leads que você já tem hoje. É investimento, não custo.",
    },
    {
      question: "Quanto tempo até ver resultados?",
      answer:
        "Clientes começam a ver melhoria nas taxas de conversão já nas primeiras 3-4 semanas. Em 60-90 dias, a transformação é completa: processos rodando, time alinhado, métricas claras. Depois disso, o marketing que você rodar terá 7-10x mais efetividade.",
    },
    {
      question: "Já tenho um CRM. Vocês vão fazer eu trocar?",
      answer:
        "Não necessariamente. Trabalhamos com os principais CRMs do mercado (RD Station, HubSpot, Pipedrive, Salesforce). O problema geralmente não é a ferramenta, é como ela está sendo usada. Otimizamos o que você tem antes de sugerir mudanças.",
    },
    {
      question: "Meu time de vendas é pequeno. Isso funciona para mim?",
      answer:
        "Funciona especialmente bem. Empresas com 2-5 vendedores são as que mais ganham com processos estruturados. Cada vendedor passa a produzir 3-4x mais quando tem processos claros, scripts validados e ferramentas adequadas.",
    },
    {
      question: "Quanto custa?",
      answer:
        "O investimento varia conforme tamanho do time e complexidade do processo comercial. Mas pense assim: quanto você está perdendo por mês com leads que não convertem? Nossos clientes recuperam o investimento em 2-3 meses apenas com o aumento de conversão. Agende uma conversa para orçamento personalizado.",
    },
    {
      question: "Como sei que vocês entendem do meu mercado?",
      answer:
        "Trabalhamos com empresas de tecnologia, consultoria, serviços e e-commerce. Mas o mais importante: nossa metodologia funciona porque é baseada em fundamentos de vendas B2B que valem para qualquer mercado. Não vendemos template genérico — personalizamos para sua realidade.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E1F22] mb-16 text-balance">
          Perguntas Que Nossos Clientes Fazem{" "}
          <span className="text-[#1141FF] font-extrabold">(Antes de Multiplicar Resultados)</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-[#F8F9FB] rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-[#1E1F22] hover:text-[#1141FF] py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#3B3D41] text-base md:text-lg leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
