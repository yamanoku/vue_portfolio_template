# Vue.js Portfolio Templete

[![https://gyazo.com/dc5aba67ad5767d7701749f525d68848](https://i.gyazo.com/dc5aba67ad5767d7701749f525d68848.png)](https://gyazo.com/dc5aba67ad5767d7701749f525d68848)

This project uses [Vite+](https://viteplus.dev/) with [Vize](https://vizejs.dev/) for Vue SFC compilation, linting, and formatting.

## Setup

```bash
# install dependencies (npm or Vite+)
npm ci
# vp install

# development server
npm run serve
# vp dev

# production build
npm run build
# vp build

# preview production build
npm run preview
# vp preview
```

## Lint / Format / Type-check

```bash
# lint (Vize + Oxlint via Vite+)
npm run lint
# vp run vize:lint

# format
npm run fmt
# vp run vize:fmt

# format check (CI)
npm run fmt:check
# vp run vize:fmt:check

# type-check (.vue via TypeScript 7.1 content mapper)
npm run tscheck
# tsc --runExternalCode --noEmit -p tsconfig.app.json

# lint + format check + packaged typecheck
npm run check
# vp run vize:check
```

## Notes

- Local and GitHub CI builds compile Vue SFCs with Vize.
- On Vercel (`VERCEL=1`), the build falls back to `@vitejs/plugin-vue` because Vize's current linux-gnu native binary requires GLIBC 2.35 while Vercel's Amazon Linux 2023 image has 2.34.

## Licence

MIT LICENSE
