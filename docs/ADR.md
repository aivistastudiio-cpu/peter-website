# Architecture Decision Records (ADR)

**Project Title:** Peter Ayoade — Personal AI Video Production Studio Website  
**Lead:** Peter Ayoade (AI Video Expert)  
**Document Version:** 1.0.0  
**Status:** Approved  

---

## ADR-001: Framework Selection — Next.js 15 (App Router)

### Context
Peter Ayoade requires a high-performance, visually rich portfolio studio website that showcases video work, scores near-perfect on Google Lighthouse, and ranks high on search engine indices for terms like "AI Video Expert", "AI Commercial Production", and "Generative Video Director".

### Decision
Adopt **Next.js 15 with App Router** using Static Site Generation (SSG).

### Consequences
- **Positive:**
  - Near-instant First Contentful Paint (FCP) through pre-rendered HTML.
  - Native image and font optimization with zero layout shift.
  - Native Next.js Metadata API for robust OpenGraph, Twitter, and JSON-LD schema injection.
  - Seamless edge deployment on Netlify.
- **Negative:**
  - Static exports require a rebuild upon updating content; mitigated by fast local and CI builds (< 45s).

---

## ADR-002: Styling Architecture — Tailwind CSS with Custom Theme Tokens

### Context
The visual identity requires a dark, cinematic aesthetic with custom midnight blues, electric cyan accents, subtle glowing borders, and precise typography scaling without bloated third-party component libraries.

### Decision
Adopt **Tailwind CSS** with a customized configuration defining studio tokens (`bg-base`, `bg-surface`, `accent-cyan`, etc.) and typography pairings.

### Consequences
- **Positive:**
  - Zero runtime CSS overhead, guaranteeing tiny bundle size.
  - Granular control over dark theme responsive breakpoints and micro-interactions.
  - Cohesive design consistency across all cards, modals, and navigation components.
- **Negative:**
  - Class name density in JSX; mitigated by extracting reusable layout primitives (`Button`, `Badge`, `SectionHeading`).

---

## ADR-003: Content Architecture — Decoupled TypeScript Data Layer

### Context
Portfolio assets, featured case studies, tool lists, and service offerings must be easy to update as Peter creates new AI video projects without modifying complex JSX component layouts.

### Decision
Structure all content into modular, strongly-typed TypeScript files in `src/data/`:
- `projects.ts`
- `services.ts`
- `tools.ts`
- `testimonials.ts`

### Consequences
- **Positive:**
  - Non-engineers or future CMS migrations can read or update structured data effortlessly.
  - Strict TypeScript compiler guarantees required fields (e.g., video URL, aspect ratio, metrics) are never omitted.
  - Zero runtime database latency or external CMS API failure modes.
- **Negative:**
  - Adding a new project involves editing a TypeScript file and triggering a git commit/deploy.

---

## ADR-004: Video Delivery & Preview Strategy

### Context
Video is heavy. An AI video portfolio featuring 10+ projects can easily cause massive network congestion, high data usage, and sluggish mobile rendering if not handled smartly.

### Decision
Implement a **Three-Tier Progressive Media Loading Strategy**:
1. **Tier 1 (Instant):** Fast WebP/AVIF poster frame rendered with explicit aspect-ratio bounding boxes.
2. **Tier 2 (Micro-Preview):** Lightweight silent looping video that triggers only on hover (desktop) or viewport intersection (mobile).
3. **Tier 3 (Cinema Modal):** User-triggered high-definition player (1080p/4K) inside an immersive dark backdrop modal with complete playback controls.

### Consequences
- **Positive:**
  - Zero CLS (Cumulative Layout Shift) and rapid initial page load.
  - Mobile visitors do not burn bandwidth downloading unplayed videos.
  - Maximizes cinematic impact for engaged visitors.
- **Negative:**
  - Requires maintaining poster images alongside video assets.

---

## ADR-005: Inbound Lead Capture Strategy (Netlify Forms + Instant WhatsApp)

### Context
Potential clients include brand managers who prefer formal RFPs/briefs, and fast-moving agency founders or creators who prefer instant messaging.

### Decision
Implement a **Dual-Path Inbound Engine**:
1. **Studio Project Brief Form:** Automated Netlify Forms submission with fields for category, budget, timeline, and project description.
2. **Instant WhatsApp / Email Action:** One-click pre-formatted message dispatch allowing immediate conversational outreach.

### Consequences
- **Positive:**
  - Eliminates friction for all client personas.
  - Zero third-party paid form backend dependencies required.
  - Built-in spam honeypot filtering.
- **Negative:**
  - Netlify Forms requires hosting on Netlify or fallback mailto handlers (both supported).

---

## ADR-006: Hosting & CI/CD Pipeline — GitHub & Netlify

### Context
Peter requires an automated, zero-downtime hosting setup that builds directly from git pushes and provides global CDN caching for media and static assets.

### Decision
Deploy the website to **Netlify** via GitHub automated webhooks.

### Consequences
- **Positive:**
  - Instant automated deployments on `git push main`.
  - Built-in edge caching for static assets, scripts, and media.
  - Native support for `@netlify/plugin-nextjs`.
  - Free automated SSL/TLS certificates and custom domain binding.
- **Negative:**
  - Free tier bandwidth limits; mitigated by embedding heavy video streams or using external CDNs for full-length 4K videos.

