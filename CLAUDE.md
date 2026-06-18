# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static design prototype** for Grand — a grocery delivery app targeting GCC countries (UAE, Kuwait, Qatar, Saudi Arabia). It is an interactive mobile mockup, not a production application. There is no build pipeline, package manager, or test suite.

Open `index.html` directly in a browser to run the prototype.

## Git Workflow

- **Always work on and push to `main` branch** after every edit session.
- Use: `git add <files> && git commit -m "..." && git push origin main`
- Never create feature branches unless explicitly asked. `main` is the sole working branch.

## Memory Bank

Captures every meaningful design, structural, and tooling decision. Update after each session.

| Area | Decision | Detail |
|---|---|---|
| **Brand** | App name | "Grand" (not GrandHyper — wordmark is "GRAND" in uppercase) |
| **Brand** | Logo mark | Sunrise SVG: semicircle arc on baseline + 7 white rays; all-white on brand-red backgrounds |
| **Brand** | Primary colour | `#E53935` (brand red) — used for CTAs, selected states, header backgrounds |
| **Fonts** | Heading font | Outfit (weights 300–800) |
| **Fonts** | Body font | Nunito (weights 300–800) |
| **Fonts** | Arabic font | Cairo (weights 400–800) |
| **Fonts** | Source of truth | `theme.css` — edit only the three `:root` variables to swap fonts globally |
| **Screens** | Flow order | country → onboarding → login (no intermediate screen between onboarding and login) |
| **Country screen** | Flag display | Emoji flag at `font-size:72px` absolutely centred inside a 68×46 px `overflow:hidden` container |
| **Country screen** | Row style | Full-width divider rows (border-bottom), no card borders; circle checkmark on right |
| **Country screen** | Header | Red gradient; Grand sunrise logo (all white) top-left; EN/عربي toggle top-right |
| **Deployment** | Host | Netlify, auto-deploys on push to `main` |
| **Deployment** | Preview device | iPad / mobile Safari is primary; viewport fixed at 390×844 px |

## CSS Conventions

- **Never hard-code font-family strings** in `screens/*.js` or `index.html`. Always reference the variables from `theme.css`:
  - `var(--font-heading)` — large titles, logo wordmark (currently Outfit)
  - `var(--font-body)` — body copy, buttons, inputs, labels (currently Nunito)
  - `var(--font-arabic)` — all Arabic text regardless of element size (currently Cairo)
- To add a new screen file, include `<link rel="stylesheet" href="./theme.css">` in its `<head>`.
- Inline styles are the norm. CSS variables work fine inside inline `style` attributes.

## Rebuilding support.js

`support.js` is generated — do not edit it directly. Built from a `dc-runtime` source tree (not in this repo):

```bash
cd dc-runtime && bun run build
```

## Architecture

### DC (Design Component) Runtime

Custom reactive framework using `<x-dc>` custom elements:

- `{{ variable }}` — value interpolation
- `{{ handler }}` — event handler binding
- `<sc-if condition="...">` — conditional rendering
- `<sc-for items="...">` — list rendering
- `style-hover`, `style-active` attributes — state-dependent CSS overrides

### Screen Module Pattern

Each file in `screens/` exports a singleton on `window`:

```js
window.ScreenName = {
  renderVals(state, setState) {
    // Returns a flat object of values, handlers, and style objects
    // spread into the DC template bindings
  }
}
```

`index.html` composes all screens:

```js
{ ...CountryScreen.renderVals(state, setState),
  ...OnboardingScreen.renderVals(state, setState),
  ...LoginScreen.renderVals(state, setState) }
```

### Central State (index.html)

All state lives in a single object inside the `Component` class:

| Key | Type | Purpose |
|---|---|---|
| `currentScreen` | string | Active screen: `'country'` · `'onboarding'` · `'login'` |
| `selectedCountry` | string | Selected country id: `'uae'` · `'kw'` · `'qa'` · `'sa'` |
| `lang` | string | Language: `'en'` or `'ar'` |
| `currentSlide` | number | Active slide index in onboarding carousel (0–2) |
| `fading` | boolean | Controls cross-fade transitions between slides/screens |
| `activeTab` | string | Login tab: `'email'` or `'phone'` |
| `showPw` | boolean | Password visibility toggle |

> `onboardingDone` was removed — onboarding now navigates directly to login with no intermediate state.

### Bilingual / RTL Support

Every screen supports English (LTR) and Arabic (RTL). Text strings are inline `isAr ? '...' : '...'` ternaries resolved via `state.lang`. Layout direction switches via the `dir` binding. **Always update both language variants when editing copy or layout.**

### Viewport

Fixed at **390×844 px** with 54 px border radius (phone frame simulation). All sizing must stay within these constraints.

### Animation Conventions

Named keyframes in `index.html`: `cardPop`, `fadeSlide`, `floatA/B/C`, `pulseCircle`, `fadeInUp`, `fadeUp`, `floatBadge`. Durations 0.22 s–4.2 s with `cubic-bezier` easing. Backdrop glows are blurred coloured divs at opacity 0.10–0.13.

### Gesture Handling

Onboarding carousel responds to touch and mouse drag. A ≥ 50 px horizontal delta triggers slide advance (left) or retreat (right). Logic lives in `screens/onboarding.js`.
