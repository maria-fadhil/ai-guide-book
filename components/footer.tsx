import { BookOpen } from "lucide-react"

const sections = [
  {
    title: "Innhold",
    links: [
      { label: "Hva er KI?", href: "#hva-er-ki" },
      { label: "Lovlig bruk", href: "#lovlig-bruk" },
      { label: "Personvern", href: "#personvern" },
      { label: "Risikoer", href: "#risikoer" },
    ],
  },
  {
    title: "Ressurser",
    links: [
      { label: "Akademisk ærlighet", href: "#akademisk" },
      { label: "Praktiske tips", href: "#tips" },
      { label: "FAQ", href: "#faq" },
      { label: "Sjekkliste", href: "#sjekkliste" },
    ],
  },
  {
    title: "Kilder",
    links: [
      { label: "EU AI Act", href: "https://artificialintelligenceact.eu/" },
      { label: "Datatilsynet", href: "https://www.datatilsynet.no/" },
      { label: "NESH retningslinjer", href: "https://www.forskningsetikk.no/" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#hjem" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                AIGuidebook
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Et pedagogisk nettsted som hjelper studenter med å bruke kunstig intelligens ansvarlig
              i studiene.
            </p>
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-sm font-semibold text-foreground">{section.title}</h4>
              <ul className="mt-4 flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            AIGuidebook - Laget som studentprosjekt om ansvarlig KI-bruk.
          </p>
          <p className="text-xs text-muted-foreground">
            Innholdet er kun veiledende. Sjekk alltid din institusjons retningslinjer.
          </p>
        </div>
      </div>
    </footer>
  )
}
