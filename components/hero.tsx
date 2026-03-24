import { ArrowDown, Shield, BookOpen, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hjem" className="relative overflow-hidden bg-primary px-4 py-24 lg:py-32">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full border border-primary-foreground/20" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full border border-primary-foreground/20" />
        <div className="absolute right-1/3 top-1/3 h-32 w-32 rounded-full border border-primary-foreground/20" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
          <Shield className="h-4 w-4" />
          <span>Din guide til ansvarlig KI-bruk</span>
        </div>

        <h1 className="font-display text-balance text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Bruk KI smart og ansvarlig i studiene dine
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          AIGuidebook hjelper deg som student med å forstå hva som er lov, hvordan du beskytter
          personvernet ditt, og hvordan du unngår feil og juks.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
            <a href="#hva-er-ki">
              <BookOpen className="mr-2 h-5 w-5" />
              Kom i gang
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="border border-primary-foreground/20 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <a href="#sjekkliste">
              <Brain className="mr-2 h-5 w-5" />
              Ta sjekklisten
            </a>
          </Button>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#hva-er-ki"
            className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            aria-label="Scroll ned"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
