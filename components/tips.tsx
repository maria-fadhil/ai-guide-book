import { Wand2, Target, RefreshCw, Layers } from "lucide-react"

const tips = [
  {
    icon: Target,
    number: "01",
    title: "Vær presis med spørsmålene dine",
    description:
      "Jo mer spesifikk du er, jo bedre svar får du. Forklar kontekst, ønsket format og fagområde.",
    example: {
      bad: "Forklar økonomi",
      good: "Forklar forskjellen mellom mikroøkonomi og makroøkonomi med eksempler relevante for norsk næringsliv, på et nivå passende for førsteårsstudenter",
    },
  },
  {
    icon: Layers,
    number: "02",
    title: "Bruk KI som sparringspartner",
    description:
      "Ikke be om ferdige svar. Be KI om å stille deg spørsmål, gi deg hints, eller utfordre argumentene dine.",
    example: {
      bad: "Skriv en oppgave om klimaendringer",
      good: "Gi meg tre kritiske spørsmål jeg bør ta stilling til når jeg skriver en oppgave om klimaendringenes påvirkning på norsk landbruk",
    },
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Iterer og forbedre",
    description:
      "Ikke godta første svar. Still oppfølgingsspørsmål, be om utdypning, eller be KI revurdere svaret.",
    example: {
      bad: "Godta første svar direkte",
      good: "Kan du utdype punkt 2? Og kan du gi meg en annen vinkling på dette argumentet?",
    },
  },
  {
    icon: Wand2,
    number: "04",
    title: "Bruk KI til å lære, ikke levere",
    description:
      "Bruk KI for å forstå konsepter bedre, lage øvingsoppgaver eller sjekke forståelsen din. Skriv alltid endelig tekst selv.",
    example: {
      bad: "Skriv en besvarelse for meg",
      good: "Lag 5 øvingsspørsmål om dette temaet, og gi meg tilbakemelding på svarene mine etterpå",
    },
  },
]

export function Tips() {
  return (
    <section id="tips" className="bg-muted/50 px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Praktisk
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            Praktiske tips
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Slik får du mest mulig ut av KI som studiehjelp, på en ansvarlig måte.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-4xl font-bold text-primary/20">
                  {tip.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <tip.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground">{tip.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{tip.description}</p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-destructive">Unngå</p>
                      <p className="text-sm text-foreground">{tip.example.bad}</p>
                    </div>
                    <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">Gjør heller</p>
                      <p className="text-sm text-foreground">{tip.example.good}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
