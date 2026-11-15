# Vue.js Portfolio Templete

[![https://gyazo.com/dc5aba67ad5767d7701749f525d68848](https://i.gyazo.com/dc5aba67ad5767d7701749f525d68848.png)](https://gyazo.com/dc5aba67ad5767d7701749f525d68848)

## Build Setup

```bash
# install dependencies
npm ci

# serve with hot reload
npm run serve

# build for production with minification
npm run build

# lint / format / type-check (Vize + Vite+)
npm run lint
npm run fmt
npm run tscheck
```

Vue SFC compilation uses Vize locally and on GitHub CI. On Vercel builds it falls back to `@vitejs/plugin-vue` because Vize's current linux-gnu native binary requires GLIBC 2.35 while Vercel's Amazon Linux 2023 image has 2.34.

## Licence

MIT LICENSE
