import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { ClientLogosSection } from "@/components/sections/client-logos-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { FaqSection } from "@/components/sections/faq-section"
import { GuaranteeSection } from "@/components/sections/guarantee-section"
import { UrgencySection } from "@/components/sections/urgency-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FaqSection />
      <GuaranteeSection />
      <UrgencySection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
