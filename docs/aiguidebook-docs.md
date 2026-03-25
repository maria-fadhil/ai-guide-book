# AIGuidebook-dokumentasjon

## Mappestruktur (tre-format)

```
/project-root
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
│  └─ what-is-ai.tsx
├─ components/ui/
│  ├─ accordion.tsx
│  ├─ alert-dialog.tsx
│  ├─ button.tsx
│  ├─ card.tsx
│  └─ ... (UI-komponenter)
├─ lib/
│  └─ utils.ts
├─ docs/
│  ├─ README.md
│  ├─ struktur.md
│  ├─ utvikling.md
│  ├─ CONTRIBUTING.md
│  └─ aiguidebook-docs.md
├─ .gitignore
├─ next.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

## Kort forklaring av mapper og filer

- `app/`: App-router og hovedside; `page.tsx` konsumerer innhold fra komponenter, `layout.tsx` styrer global HTML og metadata, `globals.css` inneholder stil.  
- `components/`: Seksjons-komponenter som erstatter sider (hjem, retningslinjer, eksempler, ressurser).  
- `components/ui/`: Felles UI-primitiver (knapper, modaler, kort) som brukes av sidekomponenter.  
- `lib/utils.ts`: Hjelpefunksjoner og fellesverktøy.  
- `docs/`: Dokumentasjon (struktur, utvikling og bidrag).  
- Konfigurasjonsfiler: `package.json` avhengigheter; `tailwind.config.ts`, `postcss.config.mjs`, `next.config.mjs`, `tsconfig.json` for bygg og typing.

## Samlet dokumentasjonstekst

AIGuidebook er et undervisningsnettsted bygget med Next.js og Tailwind CSS med fokus på ansvarlig bruk av kunstig intelligens i studier. Applikasjonen er organiserte i seksjoner (fra `components/`) for «Hva er KI», «Lovlig bruk», «Personvern», «Risiko», «Akademisk integritet», «Tips», «FAQ» og «Sjekkliste». Hovedsiden i `app/page.tsx` kombinerer disse, og `app/layout.tsx` gir metainformasjon, fontvalg og global body-klasse. `components/ui/` inneholder gjenbrukbare interaksjonskomponenter som bremser kode-duplisering og forbedrer konsistens.

`docs/` inneholder stadardiserte dokumenter: `README.md` gir prosjektoversikt, `struktur.md` beskriver filkart, `utvikling.md` gir kjøre- og byggkommandoer, og `CONTRIBUTING.md` definerer PR- og kodepraksis. `lib/utils.ts` samler felles logikk. Konfigurasjonsfiler binder alt sammen for utvikling og produksjon.

Dette oppsettet gir en tydelig, skalerbar struktur der innhold og UI er adskilt fra infrastruktur og dokumentasjon, og gjør det enkelt for nye bidragsytere å forstå og videreutvikle prosjektet.

## Små forbedringer

- Legg `data/` for strukturerte ressurslister og tekstinnhold, slik at komponenter blir rent presentasjonskode.  
- Legg til `CHANGELOG.md` og `ISSUE_TEMPLATE.md`.  
- Bruk `eslint`, `prettier` og `husky` for låst stil og automatisk pre-commit-sjekk.
