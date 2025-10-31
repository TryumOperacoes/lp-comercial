import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-card-foreground py-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_280px] md:items-start">
          {/* Coluna 1 - Logo e Tagline */}
          <div className="flex flex-col items-start gap-5">
            <Image src="/logotryumbranco.png" alt="Tryum" width={210} height={62} className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground italic">Primeiro vendas. Depois marketing.</p>
            <p className="max-w-md text-sm text-muted-foreground/80">
              Estruturamos a fundação comercial antes de escalar marketing, garantindo previsibilidade, eficiência e
              crescimento sustentável.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:contato@tryum.com.br"
                  className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50"
                >
                  contato@tryum.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999?text=Quero%20falar%20com%20a%20Tryum"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50"
                >
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/tryum"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50"
                >
                  LinkedIn da Tryum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Tryum. Todos os direitos reservados. |
            <Link
              href="/politica-de-privacidade"
              className="ml-1 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50"
            >
              Política de Privacidade
            </Link>{" "}
            |
            <Link
              href="/termos-de-uso"
              className="ml-1 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50"
            >
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
