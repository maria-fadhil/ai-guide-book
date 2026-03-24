import { Check, X } from "lucide-react"

const allowed = [
  "Forklare vanskelige begreper med egne ord",
  "Lage øvingsspørsmål til eksamensforberedelse",
  "Oppsummere egne notater for repetisjon",
  "Forbedre språk og grammatikk i tekst du har skrevet",
  "Brainstorme ideer og få nye perspektiver",
  "Søke etter relevante kilder og referanser",
]

const notAllowed = [
  "Levere KI-generert tekst som din egen",
  "Bruke KI på eksamen uten eksplisitt tillatelse",
  "Generere hele oppgaver og levere dem direkte",
  "Kopiere KI-svar uten kildeangivelse",
  "Dele eksamensoppgaver med KI-verktøy",
  "La KI erstatte egen læring og forståelse",
]

export function LegalUse() {
  return (
    <section id="lovlig-bruk" className="bg-muted/50 px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Retningslinjer
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            Lovlig vs. ulovlig bruk
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Det er viktig å vite forskjellen mellom å bruke KI som et hjelpemiddel og å bryte
            reglene. Her er klare eksempler.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Allowed */}
          <div className="rounded-xl border border-accent/30 bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground">
                Dette er lov
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {allowed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Allowed */}
          <div className="rounded-xl border border-destructive/30 bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive text-destructive-foreground">
                <X className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground">
                Dette er IKKE lov
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {notAllowed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-sm leading-relaxed text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
