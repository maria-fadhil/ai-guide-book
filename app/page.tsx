import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatIsAI } from "@/components/what-is-ai"
import { LegalUse } from "@/components/legal-use"
import { Privacy } from "@/components/privacy"
import { Risks } from "@/components/risks"
import { AcademicIntegrity } from "@/components/academic-integrity"
import { Tips } from "@/components/tips"
import { FAQ } from "@/components/faq"
import { Checklist } from "@/components/checklist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhatIsAI />
        <LegalUse />
        <Privacy />
        <Risks />
        <AcademicIntegrity />
        <Tips />
        <FAQ />
        <Checklist />
      </main>
      <Footer />
    </div>
  )
}
