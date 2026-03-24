import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Kan jeg bruke ChatGPT til oppgaver?",
    answer:
      "Ja, du kan bruke ChatGPT som et hjelpemiddel, for eksempel for å forstå begreper, finne inspirasjon eller forbedre språket ditt. Men du kan ikke levere KI-generert tekst som ditt eget arbeid. Alltid oppgi at du har brukt KI-verktøy.",
  },
  {
    question: "Kan jeg lime inn eksamensoppgaver i KI-verktøy?",
    answer:
      "Nei, eksamensoppgaver er konfidensielle dokumenter. Å dele dem med KI-verktøy kan regnes som brudd på eksamensreglementet og kan føre til disiplinære tiltak.",
  },
  {
    question: "Hvordan siterer jeg KI riktig i oppgaven min?",
    answer:
      "Bruk APA-stil eller den stilen institusjonen din krever. Oppgi verktøyet (f.eks. ChatGPT), versjon, dato for bruk og hva du brukte det til. Beskriv også i metodedelen hvordan du brukte KI som hjelpemiddel.",
  },
  {
    question: "Er det juks å bruke KI til språkvask?",
    answer:
      "Å bruke KI for å forbedre grammatikk og rettskriving regnes vanligvis ikke som juks, så lenge innholdet er ditt eget. Men sjekk alltid retningslinjene ved din institusjon, da reglene kan variere.",
  },
  {
    question: "Hva skjer om jeg blir tatt i KI-juks?",
    answer:
      "Konsekvensene varierer, men kan inkludere stryk på oppgaven, advarsel, utestengelse fra eksamen eller i alvorlige tilfeller bortvisning. Universitetene tar akademisk uredelighet svært alvorlig.",
  },
  {
    question: "Kan læreren min se at jeg har brukt KI?",
    answer:
      "Det finnes deteksjonsverktøy som kan indikere KI-generert tekst, men de er ikke 100% nøyaktige. Den beste tilnærmingen er å være ærlig og alltid oppgi din bruk av KI-verktøy.",
  },
  {
    question: "Hvilke KI-verktøy er trygge å bruke for studier?",
    answer:
      "ChatGPT, Microsoft Copilot, Google Gemini og Claude er populære og relativt trygge verktøy. Men husk at ingen KI-verktøy garanterer personvern, så del aldri sensitiv informasjon.",
  },
  {
    question: "Gjelder GDPR for det jeg skriver i KI-verktøy?",
    answer:
      "Ja, GDPR gjelder. Personopplysninger du deler med KI-verktøy kan behandles av selskaper utenfor EU/EØS. Unngå derfor å dele personopplysninger som navn, personnummer eller helseinformasjon.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Spørsmål
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            Ofte stilte spørsmål
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Finn svar på de vanligste spørsmålene om KI-bruk i studiene.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
