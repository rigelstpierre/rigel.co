# rigel.co

Personal site. Plain HTML/CSS served by Cloudflare Workers static assets.
`src/index.js` redirects `www` and `http` to `https://rigel.co`.

- Edit files in `public/`
- Preview locally: `npx wrangler dev` (or just open `public/index.html`)
- Deploy: push to `main` — Cloudflare Workers Builds deploys automatically
