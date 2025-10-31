import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Gastávamos R$ 15 mil por mês em marketing e fechávamos 3-4 vendas. Depois que a Tryum estruturou nosso comercial, com o mesmo investimento fechamos 18 vendas no mês. Foi assustador ver a diferença.",
      author: "João Silva",
      role: "CEO",
      company: "Empresa Tech",
      sector: "SaaS",
    },
    {
      quote:
        "Antes era cada vendedor fazendo do seu jeito. A Tryum documentou tudo, treinou o time, e em 60 dias tínhamos um processo comercial que realmente funcionava. Nosso CRM saiu da gaveta e virou ferramenta de verdade.",
      author: "Maria Oliveira",
      role: "Diretora Comercial",
      company: "Consultoria Pro",
      sector: "Consultoria",
    },
    {
      quote:
        "A frase 'primeiro vendas, depois marketing' mudou nosso negócio. Paramos de queimar dinheiro em campanha atrás de campanha. Construímos a máquina primeiro, e quando ligamos o marketing, os resultados vieram em cascata.",
      author: "Pedro Santos",
      role: "Fundador",
      company: "E-commerce Plus",
      sector: "E-commerce",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 text-balance">
          O Que Acontece Quando Você Constrói a <span className="text-primary font-extrabold">Fundação Primeiro</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-10 h-10 text-primary mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-border/30 pt-6">
                <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
                <p className="text-primary font-semibold">{testimonial.company}</p>
                <p className="text-sm text-muted-foreground mt-1">Setor: {testimonial.sector}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
