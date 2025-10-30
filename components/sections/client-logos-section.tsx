export function ClientLogosSection() {
  // Placeholder logos - substituir com logos reais dos clientes
  const clients = [
    "Cliente 1",
    "Cliente 2",
    "Cliente 3",
    "Cliente 4",
    "Cliente 5",
    "Cliente 6",
    "Cliente 7",
    "Cliente 8",
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
          Empresas Que Pararam de Desperdiçar e Começaram a{" "}
          <span className="text-primary font-extrabold">Crescer</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 flex items-center justify-center h-32 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-muted-foreground font-semibold text-lg">{client}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-lg">
          Mais de <span className="text-foreground font-bold">50 empresas</span> já construíram crescimento sustentável
          com a Tryum
        </p>
      </div>
    </section>
  )
}
