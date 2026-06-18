# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static design prototype** for GrandHyper — a grocery delivery app targeting GCC countries (UAE, Kuwait, Qatar, Saudi Arabia). It is an interactive mobile mockup, not a production application. There is no build pipeline, package manager, or test suite.

Open `index.html` directly in a browser to run the prototype.

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
