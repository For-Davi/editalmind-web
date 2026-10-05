# editalmind-web

[![ci](https://github.com/For-Davi/editalmind-web/actions/workflows/ci.yml/badge.svg)](https://github.com/For-Davi/editalmind-web/actions/workflows/ci.yml)

Web app of [EditalMind](https://github.com/For-Davi/editalmind).

**Stack:** React 19, TypeScript (strict), Vite, Tailwind CSS 4, shadcn/ui, React Router, TanStack Query, Vitest, Testing Library, MSW, Playwright, ESLint, Prettier.

## Structure

Feature-sliced: each feature owns its components, hooks, API calls and tests.

```text
src/
├── app/          # providers, router, layout
├── features/     # one folder per feature (home, auth, edital-upload, study-plan, ...)
├── shared/       # ui (shadcn/ui components), lib (utilities)
└── test/         # test setup, MSW server and handlers, render helpers
e2e/              # Playwright specs
```

## Running

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Quality

```bash
pnpm lint            # ESLint (type-aware) + Prettier + tsc
pnpm test            # Vitest; network calls go through MSW and unhandled requests fail the test
pnpm test:coverage
pnpm test:e2e        # Playwright against the production build (first run: pnpm exec playwright install chromium)
```

A pre-commit hook (simple-git-hooks + lint-staged) lints and formats staged files.

## Docker

```bash
docker build -t editalmind-web .
docker run --rm -p 8080:8080 editalmind-web
```

The build stage compiles the app with pnpm; the runtime stage serves `dist/` with unprivileged nginx on port 8080, with SPA fallback and long-lived caching for hashed assets.
