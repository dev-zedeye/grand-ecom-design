# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static design prototype** for GrandHyper — a grocery delivery app targeting GCC countries (UAE, Kuwait, Qatar, Saudi Arabia). It is an interactive mobile mockup, not a production application. There is no build pipeline, package manager, or test suite.

Open `index.html` directly in a browser to run the prototype.

## Git Workflow

- **Always work on and push to `main` branch** after every edit session.
- Use: `git add <files> && git commit -m "..." && git push origin main`

## Memory Bank

This section captures decisions and preferences made during development. Update it whenever a meaningful design, tooling, or structural decision is made.

| Decision | Detail |
|---|---|
| Font pair | Capriola (headings) + Inter (body) + Cairo (Arabic) |
| Font source of truth | `theme.css` — edit only the three `:root` variables to reswap fonts |
| Button height | 56 px — all primary CTA buttons project-wide (`--btn-height: 56px`) |
| Border radius | 16 px globally for all applicable UI elements (buttons, cards, inputs, panels, icon boxes). Exceptions: circle buttons stay `50%`; phone frame stays `54px`; home indicator stays `3px`; pagination dots stay `4px` |
| Red header bottom | Flat — no bottom border-radius on any red header section. Never add `border-radius` to the bottom edge of top headers |
| Button shadow | None — never add `box-shadow` to any button |
| Deployment | Netlify, auto-deploys on push to `main` |
| Target device | iPad / mobile Safari is primary preview device |
| Country screen title | "Where would you like to shop?" (EN) / "من أين تريد التسوق؟" (AR) |

## Typography Hierarchy

All headings use `var(--font-heading)` (Montserrat) with **positive letter-spacing** defined by level. Never use negative letter-spacing on headings.

| Level | Size | Weight | Letter-spacing variable | Use case |
|---|---|---|---|---|
| Display | 28–32 px | 700 | `var(--ls-display)` = 0.5 px | Screen hero titles (country, login welcome) |
| H1 | 20–26 px | 800 | `var(--ls-h1)` = 0.25 px | Section headings, card titles |
| H2 | 14–18 px | 700 | `var(--ls-h2)` = 0.1 px | Labels, tab headings, sub-sections |

Variables are defined in `theme.css`. Apply them via inline `letterSpacing` in screen JS files.

## CSS Conventions

- **Never hard-code font-family strings** in `screens/*.js` or `index.html`. Always use the CSS variables defined in `theme.css`:
  - `var(--font-heading)` — large titles, brand name (currently Capriola)
  - `var(--font-body)` — body copy, buttons, inputs, labels (currently Inter)
  - `var(--font-arabic)` — all Arabic text regardless of element size (currently Cairo)
- To add a new screen HTML file, include `<link rel="stylesheet" href="./theme.css">` in its `<head>` and use the same variables.
- Inline styles are the norm in this codebase. CSS variables work fine inside inline `style` attributes.

## Rebuilding support.js

`support.js` is generated code — do not edit it directly. It is built from a `dc-runtime` source tree (not included in this repo):

```bash
cd dc-runtime && bun run build
```

## Architecture

### DC (Design Component) Runtime

The project uses a custom reactive framework called DC. Markup lives inside `<x-dc>` custom elements with a template syntax:

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
    // Returns a flat object of values, event handlers, and style objects
    // that are spread into the DC template bindings
  }
}
```

`index.html` composes all screens by spreading their return values together:

```js
{ ...CountryScreen.renderVals(state, setState),
  ...OnboardingScreen.renderVals(state, setState),
  ...LoginScreen.renderVals(state, setState) }
```

### Central State (index.html)

All application state lives in a single object inside the `Component` class:

| Key | Purpose |
|---|---|
| `currentScreen` | Active screen: `'country'`, `'onboarding'`, or `'login'` |
| `selectedCountry` | Currently selected GCC country object |
| `lang` | Language: `'en'` or `'ar'` |
| `currentSlide` | Active slide index in the onboarding carousel |
| `fading` | Boolean flag controlling cross-fade transitions |
| `onboardingDone` | Whether onboarding has been completed |
| `activeTab` | Login tab: `'email'` or `'phone'` |
| `showPw` | Password visibility toggle |

### Bilingual / RTL Support

Every screen supports English (LTR) and Arabic (RTL). Text strings are stored as `{ en, ar }` objects and resolved via `state.lang`. Layout direction switches dynamically. When editing copy or layout, update both language variants.

### Viewport

The mockup is fixed at **390×844 px** with a 54 px border radius to simulate a phone frame. All sizing decisions should stay within these constraints.

### Animation Conventions

Named CSS keyframes defined in `index.html`: `cardPop`, `fadeSlide`, `floatA/B/C`, `pulseCircle`, `fadeInUp`, `fadeUp`, `floatBadge`. Durations range from 0.22 s to 4.2 s with `cubic-bezier` easing. Backdrop glows use blurred colored divs at opacity 0.10–0.13.

### Gesture Handling

The onboarding carousel responds to both touch and mouse drag. A ≥ 50 px horizontal delta triggers slide advance (left swipe) or retreat (right swipe). This logic lives in `screens/onboarding.js`.
