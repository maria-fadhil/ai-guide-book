"use client"

import { useState } from "react"
import { CheckCircle2, Circle, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const checklistItems = [
  {
    id: "own-text",
    label: "Har jeg skrevet teksten selv?",
    detail: "KI kan hjelpe deg, men det endelige arbeidet skal være ditt eget.",
  },
  {
    id: "checked-facts",
    label: "Har jeg sjekket fakta og kilder?",
    detail: "KI kan hallusinere. Alltid verifiser informasjon med pålitelige kilder.",
  },
  {
    id: "tool-not-solution",
    label: "Har jeg brukt KI som hjelp, ikke som løsning?",
    detail: "Bruk KI for å forstå bedre, ikke for å unngå å lære.",
  },
  {
    id: "no-sensitive",
    label: "Har jeg unngått sensitiv informasjon?",
    detail: "Del aldri personnummer, helseopplysninger eller konfidensiell data.",
  },
  {
    id: "cited-ai",
    label: "Har jeg oppgitt at jeg brukte KI?",
    detail: "Vær ærlig om din bruk av KI-verktøy i oppgaven.",
  },
  {
    id: "understood",
    label: "Forstår jeg innholdet KI hjalp meg med?",
    detail: "Du bør kunne forklare alt i teksten din med egne ord.",
  },
  {
    id: "guidelines",
    label: "Har jeg sjekket skolens retningslinjer?",
    detail: "Ulike institusjoner har ulike regler for KI-bruk. Sjekk dine.",
  },
]

export function Checklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const reset = () => setChecked(new Set())

  const allChecked = checked.size === checklistItems.length
  const progress = Math.round((checked.size / checklistItems.length) * 100)

  return (
    <section id="sjekkliste" className="bg-muted/50 px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Interaktiv
          </span>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold text-foreground md:text-4xl">
            Bruker jeg KI riktig?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Gå gjennom sjekklisten før du leverer en oppgave der du har brukt KI.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-card-foreground">
                {checked.size} av {checklistItems.length} sjekket
              </span>
              <span className="font-semibold text-primary">{progress}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Items */}
          <ul className="flex flex-col gap-3">
            {checklistItems.map((item) => {
              const isChecked = checked.has(item.id)
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className={`flex w-full items-start gap-4 rounded-lg border p-4 text-left transition-all ${
                      isChecked
                        ? "border-accent/30 bg-accent/5"
                        : "border-border bg-card hover:border-primary/20"
                    }`}
                    aria-pressed={isChecked}
                  >
                    {isChecked ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    ) : (
                      <Circle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    )}
                    <div>
                      <span
                        className={`text-sm font-semibold ${
                          isChecked ? "text-accent" : "text-card-foreground"
                        }`}
                      >
                        {item.label}
                      </span>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Completion message */}
          {allChecked && (
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4">
              <Sparkles className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-semibold text-foreground">
                Bra jobba! Du bruker KI ansvarlig. Du er klar til å levere.
              </p>
            </div>
          )}

          {/* Reset */}
          {checked.size > 0 && (
            <div className="mt-4 flex justify-center">
              <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground">
                <RotateCcw className="mr-2 h-4 w-4" />
                Nullstill sjekkliste
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
