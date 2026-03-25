# Utvikling og lokal kjøring

1. Klon repo og bytt til prosjektmappe:
   ```bash
   git clone <repo-url>
   cd aig-uidebook-website
   ```
2. Installér avhengigheter:
   ```bash
   pnpm install
   ```
3. Start utviklingsserver:
   ```bash
   pnpm dev
   ```
4. Åpne `http://localhost:3000`

Bygg produksjonsversjon:
```bash
pnpm build
pnpm start
```

Kjør linter:
```bash
pnpm lint
```

## Kodeendringer
- Endringer i innhold og seksjoner legges i `app/page.tsx` og `components/*.tsx`.
- Design og tema settes i `app/globals.css` og `tailwind.config.ts`.
- Nye gjenbruks-UI-elementer plasseres i `components/ui/`.
