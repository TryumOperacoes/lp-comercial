import Image from "next/image"

const logos = [
  { name: "Akitutes", file: "Akitutes 1.png" },
  { name: "Micomedicina", file: "micomedicina.png" },
  { name: "Fungi", file: "Fungi.png" },
  { name: "Valstark", file: "Valstark.png" },
  { name: "Xexeu", file: "Xexeu.png" },
]

export function ClientLogosSection() {
  return (
    <section className="bg-muted/50 px-6 py-10 md:px-10 lg:px-16">
      <div
        className="mx-auto flex max-w-6xl snap-x snap-mandatory items-center justify-center gap-10 overflow-x-auto pb-4 sm:gap-14 lg:justify-between"
        aria-label="Logos de clientes Tryum"
      >
        {logos.map((client) => (
          <div key={client.name} className="snap-center shrink-0 grayscale transition hover:grayscale-0">
            <Image
              src={`/clientes/${encodeURIComponent(client.file)}`}
              alt={`Logo de ${client.name}`}
              width={168}
              height={52}
              className="h-10 w-auto md:h-12"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
