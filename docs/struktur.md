# Prosjektstruktur

Dette repositoriet er bygd i Next.js 16 og bruker app-routeren, Tailwind CSS og en komponentdrevet layout.

## Tre-format

```
/ (repo-root)
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ academic-integrity.tsx
│  ├─ checklist.tsx
│  ├─ faq.tsx
│  ├─ footer.tsx
│  ├─ hero.tsx
│  ├─ legal-use.tsx
│  ├─ navbar.tsx
│  ├─ privacy.tsx
│  ├─ risks.tsx
│  ├─ theme-provider.tsx
│  ├─ tips.tsx
│  ├─ what-is-ai.tsx
│  └─ ui/
│     ├─ accordion.tsx
│     ├─ alert-dialog.tsx
│     ├─ alert-dialog.tsx
│     ├─ button.tsx
│     ├─ cards.tsx
│     ├─ input.tsx
│     └─ ... (utvidet UI-komponentbibliotek) (genbrukbare UI-komponenter fra Radix + shadcn)
├─ docs/
│  ├─ README.md
│  ├─ struktur.md
│  ├─ utvikling.md
│  └─ CONTRIBUTING.md
├─ lib/
│  └─ utils.ts
├─ .gitignore
├─ next.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

## Nøkkelområder
- `app/`: Rutepresentasjon og globale stiler.
- `components/`: Side-seksjoner (AI, personvern, tips) og gjenbrukskomponenter.
- `components/ui/`: UI primitives (knapper, skjema, kort, dialoger).
- `lib/utils.ts`: små hjelpefunksjoner som deles mellom komponenter.
- Konfigurasjon: `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`.
