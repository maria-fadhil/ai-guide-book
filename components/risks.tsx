import { AlertTriangle, Ghost, Scale, Search } from "lucide-react"

const risks = [
  {
    icon: Ghost,
    title: "Hallusinasjoner",
    subtitle: "KI finner på ting",
    description:
      "KI-modeller kan generere tekst som høres overbevisende ut, men som er fullstendig feil. De kan sitere kilder som ikke eksisterer, oppgi feil fakta og lage oppdiktede statistikker.",
    tip: "Alltid dobbeltsjekk fakta og kilder KI gir deg. Søk opp referanser selv.",
  },
  {
    icon: Scale,
    title: "Skjevhet (bias)",
    subtitle: "Ensidige perspektiver",
    description:
      "KI er trent på data fra internett, som inneholder kulturelle, kjønnsmessige og ideologiske skjevheter. Dette betyr at svarene kan være ensidige eller ubalanserte.",
    tip: "Vær kritisk til perspektivene KI presenterer. Søk etter flere synspunkter.",
  },
  {
    icon: Search,
    title: "Utdatert informasjon",
    subtitle: "Gammel kunnskap",
    description:
      "De fleste KI-modeller har en kunnskapskutoff og vet ikke om nyere hendelser, forskning eller regelendringer. Informasjonen kan være utdatert.",
    tip: "Sjekk alltid når informasjonen sist ble oppdatert. Bruk oppdaterte kilder.",
  },
]

export function Risks() {
  return (
    <section id="risikoer" className="bg-muted/50 px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Vær oppmerksom
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            KI-feil og risikoer
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            KI er et kraftig verktøy, men det har store begrensninger du må kjenne til.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {risks.map((risk, idx) => (
            <div
              key={risk.title}
              className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8 lg:flex-row lg:items-start"
            >
              <div className="flex shrink-0 items-start gap-4">
                <span className="font-display text-4xl font-bold text-primary/20">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <risk.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-card-foreground">{risk.title}</h3>
                <p className="text-sm font-medium text-primary">{risk.subtitle}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{risk.description}</p>
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-accent/10 p-3">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm font-medium text-foreground">{risk.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
