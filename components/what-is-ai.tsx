import { Lightbulb, MessageSquare, FileText, Sparkles } from "lucide-react"

const useCases = [
  {
    icon: MessageSquare,
    title: "Chatboter",
    description: "Verktøy som ChatGPT, Copilot og Gemini lar deg stille spørsmål og få svar på sekunder.",
  },
  {
    icon: FileText,
    title: "Tekstgenerering",
    description: "KI kan hjelpe deg med å omformulere, oppsummere og forbedre språket i tekster.",
  },
  {
    icon: Sparkles,
    title: "Bildegenerering",
    description: "Verktøy som DALL-E og Midjourney kan lage bilder basert på tekstbeskrivelser.",
  },
  {
    icon: Lightbulb,
    title: "Ideutvikling",
    description: "KI kan hjelpe deg med brainstorming, lage øvingsspørsmål og foreslå nye perspektiver.",
  },
]

export function WhatIsAI() {
  return (
    <section id="hva-er-ki" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Grunnleggende
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            Hva er KI i studier?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Kunstig intelligens (KI) er teknologi som kan forstå og generere tekst, bilder og kode.
            Mange studenter bruker KI-verktøy daglig, men det er viktig å forstå hvordan de fungerer.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
