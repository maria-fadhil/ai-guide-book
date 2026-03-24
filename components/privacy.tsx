import { ShieldAlert, Lock, Eye, FileWarning } from "lucide-react"

const rules = [
  {
    icon: ShieldAlert,
    title: "Aldri del personnummer",
    description: "Personnummer, ID-nummer og andre identifikatorer skal aldri deles med KI-verktøy.",
  },
  {
    icon: Lock,
    title: "Beskytt sensitive data",
    description: "Pasientdata, konfidensielle forskningsdata eller bedriftshemmeligheter hører ikke hjemme i KI-chat.",
  },
  {
    icon: Eye,
    title: "Vær obs på personvern",
    description: "Alt du skriver i KI-verktøy kan potensielt lagres og brukes til trening av modellen.",
  },
  {
    icon: FileWarning,
    title: "Ikke del eksamensoppgaver",
    description: "Eksamensoppgaver og sensorveiledninger er konfidensielle og skal aldri skrives inn i KI-verktøy.",
  },
]

export function Privacy() {
  return (
    <section id="personvern" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sikkerhet
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            Personvern og sikkerhet
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Det du skriver inn i KI-verktøy er ikke privat. Her er det du aldri bør dele.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="flex gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <rule.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-card-foreground">{rule.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            Husk: Alt du skriver til KI kan potensielt bli offentlig.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tenk deg om to ganger før du deler noe personlig eller konfidensielt.
          </p>
        </div>
      </div>
    </section>
  )
}
