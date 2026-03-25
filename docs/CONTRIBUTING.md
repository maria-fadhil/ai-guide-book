# Bidragsguide

1. Opprett feature-branch: `git checkout -b feature/<kort-beskrivelse>`
2. Gjør endringer i `app/`, `components/` og eventuelt `lib/`.
3. Kjør:
   - `pnpm lint`
   - `pnpm test` (legg til testoppsett om det mangler)
4. Lag PR mot `main` med kort målbeskrivelse og testmetode.
5. Merge når alle godkjenninger er fullført.

Kvalitetskriterier:
- Bruk TypeScript-typer og React-funksjonelle komponenter.
- Behold semantisk HTML og tilgjengelighet (a11y).
- Del komponenter i hva-og-hvordan (“container” og “presentasjonskomponenter”) når det vokser.
- Legg all stil i `app/globals.css` og Tailwind-konfigurasjon.
