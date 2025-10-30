import { Shield } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F8F9FB]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E1F22] mb-16">
          Nossa Garantia É <span className="text-[#1141FF] font-extrabold">Simples</span>
        </h2>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#1141FF]">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#1141FF] rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#1E1F22] mb-6">🛡️ Garantia de Resultados em 90 Dias</h3>

            <p className="text-xl text-[#3B3D41] leading-relaxed mb-8 max-w-2xl">
              Se após 90 dias trabalhando conosco você não ver melhoria mensurável nas suas taxas de conversão
              comercial, trabalhamos mais 60 dias sem custo adicional até acertar.
            </p>

            <div className="bg-[#E6ECFF] p-6 rounded-2xl">
              <p className="text-lg font-semibold text-[#1E1F22] mb-2">Por quê oferecemos isso?</p>
              <p className="text-[#3B3D41] leading-relaxed">
                Porque sabemos que nossa metodologia funciona. Em 4 anos,{" "}
                <span className="font-bold text-[#1141FF]">92% dos clientes renovam conosco</span> — não porque
                precisam, mas porque os resultados se pagam sozinhos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
