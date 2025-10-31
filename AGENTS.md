# Repository Guidelines

## Project Structure & Module Organization
This Next.js 16 app uses the App Router with React 19. Key directories:
- `app/` holds `layout.tsx`, the routed `page.tsx`, and `globals.css` that wires Tailwind.
- `components/ui/` wraps reusable shadcn-style primitives; prefer extending these over adding new libraries.
- `components/sections/` groups landing sections; keep each file self-contained and driven by props.
- `hooks/` stores shared client hooks such as `use-toast.ts` and `use-mobile.ts`.
- `lib/utils.ts` centralizes helpers (e.g., `cn`); add new cross-cutting utilities here.
- `public/` serves static assets via `next/image`; organize folders by feature.

## Build, Test, and Development Commands
Run everything with pnpm (via Corepack):
- `pnpm dev` spins up the dev server on `http://localhost:3000`.
- `pnpm build` creates the production bundle and runs TypeScript checks.
- `pnpm start` serves the built output for smoke testing.
- `pnpm lint` enforces the flat ESLint config with warnings treated as errors.
- `pnpm format` applies Prettier with the Tailwind plugin; add `--check` in CI scripts.

## Coding Style & Naming Conventions
TypeScript is mandatory. Let Prettier shape formatting (2-space indent, trailing commas). Use PascalCase for React components, camelCase for functions and variables, and snake_case only for Tailwind utility groupings. Keep component files in `.tsx`, utilities in `.ts`, and avoid default exports unless a file exposes a single React component. Tailwind classes live inline; reach for `theme-provider.tsx` or `globals.css` if global tokens are required. Resolve every ESLint error before committing.

## Testing Guidelines
Automated tests are not yet in place. When adding them, colocate `*.test.ts(x)` beside the target file and choose the lightest-weight runner (e.g., Vitest + React Testing Library). Document manual QA steps and viewport coverage in the PR description. Always run `pnpm lint` before pushing to catch type regressions.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat:`, `fix:`, `chore:`) as seen in `chore: remove global CSS file and update TypeScript configuration`. Keep commits scoped and in English. Pull requests should summarize the change, link tracking tickets, and include screenshots or recordings for visual updates (desktop + mobile). Note manual test evidence and flag any follow-up tasks. Request review only after lint and build succeed locally.

## Design & Configuration Notes
Design tokens originate from `design.json` and `components.json`; update them when syncing with design tooling. Theme switching is handled in `components/theme-provider.tsx` with defaults set in `app/layout.tsx`. Optimize media before dropping files into `public/`, and prefer `next/image` for responsive assets.
