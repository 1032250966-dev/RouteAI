# Contributing to RouteAI

Thank you for your interest in contributing! This document explains how to set up a local development environment and submit changes.

---

## Development Setup

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- Git

### 1. Fork and clone

```bash
git clone https://github.com/YOUR_USERNAME/routeai.git
cd routeai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) with hot module replacement enabled.

---

## Project Layout

The key files to understand before contributing:

| File | Purpose |
|---|---|
| `src/services/routingEngine.ts` | All routing logic — intent, complexity, confidence, agent selection |
| `src/services/responseGenerator.ts` | Simulated agent responses |
| `src/services/telemetryStore.ts` | Singleton telemetry state with subscriber pattern |
| `src/types/index.ts` | Shared TypeScript types |
| `src/components/desk/` | Support desk UI components |
| `src/components/analytics/` | Telemetry charts and economics panel |
| `tailwind.config.js` | Custom `ops.*` design tokens — consult before adding new colours |

---

## Coding Guidelines

### TypeScript

- Strict mode is enabled (`noUnusedLocals`, `noUnusedParameters`). The build **will fail** if you leave unused imports.
- All new functions and component props should be typed explicitly — avoid `any`.

### Components

- Functional components with explicit `React.FC<Props>` typing.
- Keep components focused — if a component exceeds ~200 lines, consider splitting it.
- Props that are optional should be marked with `?` and handled defensively.

### Styling

- Use only the `ops.*` Tailwind tokens defined in `tailwind.config.js` for colours, shadows, and backgrounds. Do not add raw hex values inline.
- Fonts: `font-mono` (JetBrains Mono) for telemetry numbers and labels; `font-sans` (Inter) for body copy.

### Routing Logic

- Changes to `routingEngine.ts` must preserve the same `RouteDecision` return type.
- Confidence scores must stay in the `[45, 99]` range.
- All five `analysisSteps` must remain present in the returned decision (the UI renders them).

---

## Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Stable, production-ready code |
| `feat/<name>` | New features |
| `fix/<name>` | Bug fixes |
| `chore/<name>` | Dependency updates, refactoring |

---

## Submitting a Pull Request

1. Create a branch: `git checkout -b feat/my-feature`
2. Make your changes and verify the build passes: `npm run build`
3. Commit with a clear message: `git commit -m "feat: add multi-turn context to routing decision"`
4. Push and open a pull request against `main`
5. Fill in the PR description: what changed, why, and how to test it

---

## Running the Production Build Locally

```bash
npm run build
npm run preview
```

The preview server runs on [http://localhost:4173](http://localhost:4173).

---

## Questions?

Open an issue and tag it `question`.
