import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { ClientLogosSection } from "@/components/sections/client-logos-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { FaqSection } from "@/components/sections/faq-section"
import { GuaranteeSection } from "@/components/sections/guarantee-section"
import { Footer } from "@/components/sections/footer"
import { DiagnosisPopupProvider } from "@/components/diagnosis-popup-provider"

export default function Home() {
  return (
    <DiagnosisPopupProvider>
      <main className="min-h-screen">
        <HeroSection />
        <ClientLogosSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <ComparisonSection />
        <FaqSection />
        <GuaranteeSection />
        <Footer />
      </main>
    </DiagnosisPopupProvider>
  )
}
