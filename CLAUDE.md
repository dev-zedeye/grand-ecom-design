# CLAUDE.md

This file is the primary memory bank and guidance document for all AI assistants working on this repository. Update it after every meaningful decision so any session — on any device — can resume without context loss.

---

## Project Overview

**Grand** is a static design prototype for a grocery delivery app targeting GCC countries (UAE, Kuwait, Qatar, Saudi Arabia). It is an interactive mobile mockup, not a production application. There is no build pipeline, package manager, or test suite.

**Run it:** Open `index.html` directly in a browser (or access via Netlify — see Deployment below).

---

## Git Workflow

- **Always work on and push to `main`** — it is the sole branch. Never create feature branches unless explicitly asked.
- Push after every edit session: `git add <files> && git commit -m "..." && git push origin main`
- Netlify auto-deploys on every push to `main`.

---

## Memory Bank

Every meaningful design, structural, and tooling decision is recorded here.

### Brand

| Decision | Detail |
|---|---|
| App name | **Grand** (the full marketing name is "GrandHyper" but the displayed wordmark is "GRAND" in uppercase) |
| Primary colour | `#E53935` — used for CTAs, selected states, header gradient midpoint |
| Header gradient | `linear-gradient(148deg, #FF5252 0%, #E53935 45%, #C62828 100%)` |
| Header shape | `border-radius: 0 0 38px 38px` with `box-shadow: 0 12px 40px rgba(229,57,53,0.32)` |
| Body background | `#FAFAF8` (warm off-white) for country and login screens |
| Outer wrapper bg | Dark gradient: `linear-gradient(150deg, #0c0c1e 0%, #18102e 55%, #081820 100%)` |

### Logo

| Element | Detail |
|---|---|
| Mark | Sunrise SVG: semicircle arc on a baseline + 7 white rays at 0°, ±35°, ±65°, ±82° |
| SVG viewBox | `0 0 60 36`, rendered at `width:52 height:32` |
| Colour on red bg | All white (strokes and fills) |
| Wordmark | "Grand" in `var(--font-heading)`, `font-size:13px`, `font-weight:800`, `text-transform:uppercase`, `letter-spacing:0.6px`, white |
| Layout | Stacked column: SVG mark above wordmark, `align-items:center`, `gap:2px` |
| **Pending** | Login screen header still uses the old map-pin + "GrandHyper" — needs updating to the Grand sunrise logo |

### Fonts

| Role | Font | Weights |
|---|---|---|
| Heading (`--font-heading`) | Outfit | 300–800 |
| Body (`--font-body`) | Nunito | 300–800 |
| Arabic (`--font-arabic`) | Cairo | 400–800 |

**Source of truth:** `theme.css` — change only the three `:root` CSS variables to swap fonts project-wide.

### Screens & Navigation Flow

```
country → onboarding → login
```

- No intermediate screen between onboarding and login — removed the "You're all set" state.
- Login has a back button that returns to the country screen.
- `onboardingDone` state key still exists in `index.html` but is unused; can be cleaned up.

### Country Screen

| Element | Detail |
|---|---|
| Flag display | Emoji at `font-size:72px` absolutely centred inside a `68×46px` `overflow:hidden` container with `border-radius:8px` |
| Row style | Full-width rows with `border-bottom: 1px solid rgba(0,0,0,0.06)`; no card borders |
| Checkmark | Circle `32×32px`: gray outline + gray check when unselected; `#E53935` filled + white check when selected |
| CTA button | Full-width 58px red pill (`border-radius:29px`); gray/disabled when no country selected |
| Countries | UAE 🇦🇪, Kuwait 🇰🇼, Qatar 🇶🇦, Saudi Arabia 🇸🇦 |
| Lang toggle | EN / عربي pill in top-right of header; white active pill with red text, transparent inactive |

### Onboarding Screen

| Element | Detail |
|---|---|
| Slides | 3 slides with food-emoji floating animations |
| Slide backgrounds | Amber `#FFB300`, Orange `#FF6B35`, Teal `#00897B` |
| Interaction | Swipe/drag (≥ 50px delta) or tap "Continue"/"Get Started" button |
| Skip | Button at top-right; goes directly to login |
| Bottom card | 360px white card at bottom with headline, subtitle, pagination dots, CTA |
| Transition | Cross-fade via `fading` state flag (280ms) |

### Login Screen

| Element | Detail |
|---|---|
| Tabs | Email / Phone — toggles between two form layouts |
| Social login | Built in HTML but hidden (`showSocialLogin: false`) |
| Guest login | Visible (`showGuestLogin: true`) |
| Back | Button returns to country screen (`backToCountry`) |
| **Pending** | Header logo is still the old map-pin + "GrandHyper" text; needs Grand sunrise logo |

### Deployment & Environment

| Item | Detail |
|---|---|
| Host | Netlify — auto-deploys on push to `main` |
| Primary viewer | iPad / mobile Safari |
| Viewport | Fixed `390×844px` frame with `54px` border radius (phone simulation) |
| Dynamic island | `130×37px` centred at `top:12px`, `z-index:30` |
| Home indicator | `134×5px`, `background:#000`, `opacity:0.1`, centred at screen bottom |
| Status bar | Always shows mock time "9:41" |

---

## CSS Conventions

- **Never hard-code font-family strings** in `screens/*.js` or `index.html`. Use only:
  - `var(--font-heading)` — large titles, logo wordmark
  - `var(--font-body)` — all body copy, buttons, inputs, labels
  - `var(--font-arabic)` — all Arabic text regardless of element size
- New screen files must include `<link rel="stylesheet" href="./theme.css">` in `<head>`.
- Inline styles are the norm. CSS variables work fine in inline `style` attributes.
- When editing copy, **always update both English and Arabic variants**.

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | Single app entry point — all screens composed here; do not open `.dc.html` files |
| `theme.css` | Font imports + CSS custom property definitions; single source of truth |
| `screens/country.js` | Country selection screen logic + style values |
| `screens/onboarding.js` | Onboarding carousel logic + style values |
| `screens/login.js` | Login screen logic + style values |
| `support.js` | **Generated** DC runtime — do not edit directly |
| `GrandHyper *.dc.html` | Original per-screen design source files; superseded by `index.html` |
| `profile.code-profile` | VS Code profile export; not relevant to the prototype |

---

## Architecture

### DC (Design Component) Runtime

Custom reactive framework (`support.js`) using `<x-dc>` custom elements:

| Syntax | Purpose |
|---|---|
| `{{ variable }}` | Value interpolation |
| `{{ handler }}` | Event handler binding |
| `<sc-if condition="...">` | Conditional rendering |
| `<sc-for items="...">` | List rendering |
| `style-hover` / `style-active` | State-dependent CSS overrides |

### Screen Module Pattern

Each `screens/*.js` file exports a singleton on `window`:

```js
window.ScreenName = {
  renderVals(state, setState) {
    // Returns a flat object of values, handlers, and style objects
  }
}
```

`index.html` merges all screens into one binding set:

```js
{
  ...CountryScreen.renderVals(state, setState),
  ...OnboardingScreen.renderVals(state, setState),
  ...LoginScreen.renderVals(state, setState),
}
```

Each screen uses `isXxxScreen: state.currentScreen === 'xxx'` to show/hide itself via `<sc-if>`.

### Central State (index.html)

```js
state = {
  currentScreen: 'country',   // 'country' | 'onboarding' | 'login'
  selectedCountry: null,       // 'uae' | 'kw' | 'qa' | 'sa'
  lang: 'en',                  // 'en' | 'ar'
  currentSlide: 0,             // 0–2
  fading: false,               // cross-fade in progress
  onboardingDone: false,       // legacy — unused, safe to remove
  activeTab: 'email',          // 'email' | 'phone'
  showPw: false,               // password visibility
}
```

### Bilingual / RTL

- `isAr ? '...' : '...'` ternaries inline in `renderVals`
- `dir` binding switches layout direction (`'rtl'` or `'ltr'`)
- Font switches: `isAr ? 'var(--font-arabic)' : 'var(--font-body)'`
- Status bar and logo row are always `dir="ltr"` regardless of lang

### Animations

All keyframes defined in `index.html` `<style>` block:

| Name | Use |
|---|---|
| `floatA/B/C` | Floating food emojis on onboarding |
| `pulseCircle` | Soft glow circle on onboarding |
| `fadeInUp` | Screen entrance (country + login) |
| `fadeUp` | Tab content entrance (login) |
| `cardPop` | Card pop-in |
| `fadeSlide` | Slide fade |
| `floatBadge` | Badge float |

### Rebuilding support.js

`support.js` is generated — do not edit directly. Built from `dc-runtime` (not in repo):

```bash
cd dc-runtime && bun run build
```
