# timestamp-landingpage

Landing page for the Timestamp Camera app, served at https://timestamp.camera.
It is a static site built with [Astro](https://astro.build) 5 and Tailwind CSS 3, hosted on GitHub Pages.

## Requirements

- Node.js 20 or later (the deploy workflow builds with Node 20; Astro 5 needs `^20.3.0` or `>=22.0.0`)
- npm 9.6.5 or later (comes with Node.js)

No other tools, accounts or environment variables are needed.

## Install

```sh
npm ci
```

`npm ci` installs the exact versions in `package-lock.json`, the same way the deploy workflow does.

## Run locally

```sh
npm run dev
```

Open http://localhost:4321/en/ (the root `/` redirects to `/en/`). Other languages live at `/ko/`, `/ja/` and so on.
The dev server reloads on file changes. It runs with `--host`, so devices on the same network can open it at the `Network` address it prints.

## Build and check

There are no automated tests. A successful build is the check:

```sh
npm run build
```

The static site is written to `dist/`. To serve the built output locally:

```sh
npm run preview
```

and open http://localhost:4321/en/.

## Deploy

Pushing to `master` builds and deploys the site to GitHub Pages through `.github/workflows/deploy.yml`.
`public/app-ads.txt` is rewritten every day by `.github/workflows/update-app-ads.yml`, so do not edit it by hand.
