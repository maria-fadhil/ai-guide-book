import { GraduationCap, BookMarked, AlertCircle, Quote } from "lucide-react"

export function AcademicIntegrity() {
  return (
    <section id="akademisk" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Integritet
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            Akademisk ærlighet
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Plagiat gjelder også for KI-generert tekst. Lær hva som regnes som juks, og hvordan
            du siterer KI riktig.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* What counts as cheating */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-card-foreground">Hva regnes som juks?</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm leading-relaxed text-muted-foreground">
                Levere tekst skrevet av KI som din egen uten å opplyse om det
              </li>
              <li className="text-sm leading-relaxed text-muted-foreground">
                Bruke KI-verktøy under eksamen med mindre det er klar tillatt
              </li>
              <li className="text-sm leading-relaxed text-muted-foreground">
                Kopiere KI-genererte løsninger på obligatoriske oppgaver
              </li>
              <li className="text-sm leading-relaxed text-muted-foreground">
                Omgå plagiatsjekk ved å omskrive KI-tekst overfladisk
              </li>
            </ul>
          </div>

          {/* How to cite AI */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Quote className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-card-foreground">Hvordan sitere KI</h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">APA-stil eksempel</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  OpenAI. (2025). ChatGPT (versjon GPT-4) [Stor språkmodell]. https://chat.openai.com
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Beskriv alltid hvordan du brukte KI-verktøyet i metodedelen av oppgaven din.
              </p>
            </div>
          </div>

          {/* Best practices */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-card-foreground">Gode vaner</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Alltid oppgi at du har brukt KI
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Bruk KI til å forstå, ikke bare kopiere
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Skriv alltid endelig tekst med egne ord
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Sjekk skolens retningslinjer for KI-bruk
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
