## ScrawlFix Landing — Final Plan

A single-page Google Play download funnel at `/`, plus dedicated `/privacy` and `/terms` routes for Play Store console review. No auth, no signup, no backend.

### Design system (`src/styles.css`)
- Light-only palette: bg `#FFFFFF`, fg `#000000`, border `#E5E7EB`, neutral muted gray.
- Accent `--accent-teal` mapped from `#1D9E75` (oklch), exposed via `@theme inline` as `bg-accent-teal` / `text-accent-teal`. Used sparingly: logo "Fix", primary CTA, active nav, matrix checkmarks, FAQ open chevron, highlight phrases.
- Fonts via `<link>` in `src/routes/__root.tsx` head: Inter (400/600/700/800) + Caveat (handwriting sample).
- `html { scroll-behavior: smooth; scroll-padding-top: 72px; }`.

### Contact email aliasing
Shared `ContactEmail.tsx` helper. Displays **`support@scrawlfix.com`** everywhere but `mailto:` routes to `scrawlfixapp@gmail.com`. The Gmail address never appears in visible text. Used in SiteFooter, FAQ, Privacy §10, Terms §15.

### Routes
- `/` — landing (sticky nav + 6 sections + reviews + FAQ)
- `/privacy` — Privacy Policy (own `head()` for SEO + Play review)
- `/terms` — Terms of Service (own `head()`)

Nav on every page: **Home** (`/`), **FAQ** (`/#faq`), **Privacy** (`/privacy`), **Terms** (`/terms`).

### Shared components (`src/components/site/`)
- `SiteHeader.tsx` — sticky; "Scrawl" black + "Fix" teal; right-aligned `<Link>`s.
- `SiteFooter.tsx` — logotype, "© 2026 Anti Coder Studio", links + Google Play badge + `<ContactEmail />`.
- `GooglePlayButton.tsx` — official-style black pill, inline Play SVG + "GET IT ON / Google Play".
- `ContactEmail.tsx` — display/mailto aliasing helper.

### Landing sections (`src/routes/index.tsx`)
1. **HeroPanel** — H1 "Turn Handwriting into Clean, Editable Text Instantly.", subcopy killing the late-night retyping friction, Google Play CTA, "5 free scans every month — no watermark" trust line. Right: framed scan → clean-text mock.
2. **ShowdownCompare** — two-column matrix. Left "Raw Handwriting Input" in Caveat italic (chaotic corporate meeting notes). Right "ScrawlFix Digitized Output" rendered as clean markdown with `- [ ]` checkboxes.
3. **ViralUseCases** — responsive 3-col grid, 9:16 dashed phone-frame placeholders with scene asset descriptions: The High-Stakes Discovery (yellowed letters on dark wood), The Academic Midnight Panic (dead laptop + chaotic lecture notes under lamp), The Corporate Nightmare (coffee-stained napkin of pitch scribbles by keyboard).
4. **CompetitiveMatrix** — comparison vs Typical OCR App vs Generic AI Chatbot. Rows: free scans/month, watermark on export, hidden paywall, cursive accuracy, sign-up required. Teal checkmarks for ScrawlFix. Pull-quote: "5 free scan-to-text runs every month — no watermark, no bait-and-switch."
5. **Reviews** — 3 cards with supplied quotes (Sarah M. — University Student; David K. — Operations Lead; Elena R. — Archivist), teal initial avatars, 5 stars.
6. **FaqSection** (`#faq`) — shadcn `Accordion` with the 3 required questions (cursive accuracy, document privacy, image storage) + 2 supporting (pricing/free tier, supported languages). Closes with "Still curious? Email <ContactEmail/>" + link cards to `/privacy` and `/terms`.

### `/privacy` (`src/routes/privacy.tsx`)
Own `head()` (title/description/og). `SiteHeader` + centered prose (`max-w-3xl`) + `SiteFooter`. Content adapted from the user's existing policy: 1) Information We Collect (photos via Gemini API not stored; camera/library permissions; subscription via RevenueCat + Google Play Billing; non-identifying usage data; no account required), 2) How We Use It, 3) Third-Party Services (Google Gemini API, RevenueCat, Google Play Billing — with external links), 4) Data Retention (images deleted immediately after processing; results stored locally only), 5) Data Sharing (no sale), 6) Your Rights, 7) Children's Privacy (13+), 8) International Users, 9) Changes, 10) Contact (`<ContactEmail subject="Privacy question" />`, Developer: Anti Coder Studio, Website: scrawlfix.com). "Last updated: June 2026". Pure JSX.

### `/terms` (`src/routes/terms.tsx`)
Own `head()`. Same shell. Sections: 1) Acceptance, 2) The Service (AI handwriting → text via Google Gemini), 3) Eligibility (13+), 4) License to Use (personal, non-commercial), 5) Acceptable Use (no illegal content, no scanning content you don't have rights to, no abuse/reverse-engineering), 6) Subscriptions & Billing (ScrawlFix Pro via Google Play + RevenueCat, auto-renewal, cancel via Google Play, refunds per Google Play policy, 5 free scans/month on free tier with full text copy + PDF export), 7) Intellectual Property (app + brand owned by Anti Coder Studio; your scanned content remains yours), 8) Third-Party Services, 9) Disclaimer of Warranties ("as is", OCR accuracy not guaranteed), 10) Limitation of Liability, 11) Indemnification, 12) Termination, 13) Governing Law (South Africa), 14) Changes, 15) Contact (`<ContactEmail subject="Terms question" />`). "Last updated: June 2026".

### Files to create / edit
- edit `src/styles.css`
- edit `src/routes/__root.tsx` (font `<link>`s only; keep `<Outlet />`)
- edit `src/routes/index.tsx` (replace placeholder, compose landing, SEO head)
- new `src/routes/privacy.tsx`
- new `src/routes/terms.tsx`
- new `src/components/site/SiteHeader.tsx`
- new `src/components/site/SiteFooter.tsx`
- new `src/components/site/GooglePlayButton.tsx`
- new `src/components/site/ContactEmail.tsx`
- new `src/components/site/HeroPanel.tsx`
- new `src/components/site/ShowdownCompare.tsx`
- new `src/components/site/ViralUseCases.tsx`
- new `src/components/site/CompetitiveMatrix.tsx`
- new `src/components/site/Reviews.tsx`
- new `src/components/site/FaqSection.tsx`

### Out of scope
No auth, no backend, no real Play Store deep link (placeholder `#` until URL provided), no dark mode.