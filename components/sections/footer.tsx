export function Footer() {
  return (
    <footer className="bg-[#1E1F22] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1 - Logo e Tagline */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#1141FF] mb-2">Tryum</h3>
            <p className="text-[#AEB3BD] italic">Primeiro vendas. Depois marketing.</p>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Links</h4>
            <ul className="space-y-2 text-[#AEB3BD]">
              <li>
                <a href="#" className="hover:text-[#1141FF] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1141FF] transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1141FF] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1141FF] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-2 text-[#AEB3BD]">
              <li>
                <a href="mailto:contato@tryum.com.br" className="hover:text-[#1141FF] transition-colors">
                  contato@tryum.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="hover:text-[#1141FF] transition-colors">
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1141FF] transition-colors">
                  LinkedIn da Tryum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-[#3B3D41] pt-8 text-center text-[#6E727A] text-sm">
          <p>
            © 2025 Tryum. Todos os direitos reservados. |
            <a href="#" className="hover:text-[#1141FF] transition-colors ml-1">
              Política de Privacidade
            </a>{" "}
            |
            <a href="#" className="hover:text-[#1141FF] transition-colors ml-1">
              Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
