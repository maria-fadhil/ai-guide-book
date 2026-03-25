# ai-guide-book
Bruk KI smart og ansvarlig i studiene dine.

## Prosjektoversikt
Dette prosjektet er bygget med Next.js 16 og Tailwind CSS. Innhold leveres som en enkelt side med flere seksjoner (virtuell “forside”, retningslinjer, eksempler, ressurser etc.).

### Viktige mapper
- `app/` - Next.js app-router, global layout og side
- `components/` - alle synlige seksjoner og UI-komponenter
- `components/ui/` - gjenbrukbare UI-primitiver og komponentbibliotek
- `lib/` - hjelpefunksjoner
- `docs/` - dokumentasjon (arkitektur, utvikling, bidrag)

### Komme i gang
1. `pnpm install`
2. `pnpm dev`
3. Åpne `http://localhost:3000`
4. Åpne `docs/README.md` for dokumentasjonsdetaljer

### Scripts
- `pnpm dev` (utvikling)
- `pnpm build` (prod)
- `pnpm start` (kjør bygget applikasjon)
- `pnpm lint` (kodekvalitet)

