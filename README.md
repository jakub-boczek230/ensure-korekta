# ENSURE-SERWIS – strona internetowa

Strona firmowa ENSURE-SERWIS Mateusz Radzikowski (obsługa szkód, kosztorysy, naprawy powypadkowe).
Zbudowana w React + Vite + Tailwind CSS.

---

## Jak wgrać na GitHub

1. Załóż konto na https://github.com
2. Kliknij **+** (prawy górny róg) → **New repository**
3. Nazwa np. `ensure-serwis` → **Create repository**
4. Kliknij **Add file → Upload files**
5. Przeciągnij WSZYSTKIE pliki i foldery z tego katalogu, czyli:
   - folder `src`
   - folder `public`
   - `index.html`
   - `package.json`
   - `package-lock.json` (jeśli jest)
   - `vite.config.ts`
   - `tsconfig.json`
   - `README.md`
   - `.gitignore`
   - `netlify.toml`
6. NIE wgrywaj folderów `node_modules` ani `dist` (są pomijane automatycznie)
7. Kliknij **Commit changes**

---

## Jak połączyć z Cloudflare Pages

1. Wejdź na https://dash.cloudflare.com
2. Menu: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Połącz konto GitHub i wybierz repozytorium `ensure-serwis`
4. Ustaw:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** (puste)
5. Kliknij **Save and Deploy**
6. Po chwili strona będzie pod adresem `https://ensure-serwis.pages.dev`

---

## Aktualizacja strony

Po zmianie plików w GitHub (Commit changes) Cloudflare automatycznie zbuduje nową wersję.

---

## Uruchomienie lokalne (opcjonalne, wymaga Node.js)

```bash

test
npm install
npm run dev      # podgląd na http://localhost:5173
npm run build    # tworzy folder dist z gotową stroną
```
