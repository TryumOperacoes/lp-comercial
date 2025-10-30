export function Footer() {
  return (
    <footer className="bg-neutral-950 text-card-foreground py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1 - Logo e Tagline */}
          <div>
            <h3 className="text-2xl font-extrabold text-primary mb-2">Tryum</h3>
            <p className="text-muted-foreground italic">Primeiro vendas. Depois marketing.</p>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h4 className="font-bold mb-4 text-card-foreground">Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-bold mb-4 text-card-foreground">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contato@tryum.com.br" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
                  contato@tryum.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
                  LinkedIn da Tryum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>
            © 2025 Tryum. Todos os direitos reservados. |
            <a href="#" className="hover:text-primary transition-colors ml-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
              Política de Privacidade
            </a>{" "}
            |
            <a href="#" className="hover:text-primary transition-colors ml-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/50">
              Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
