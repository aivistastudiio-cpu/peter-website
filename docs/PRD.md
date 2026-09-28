# Product Requirements Document (PRD)

**Project Title:** Peter Ayoade — Personal AI Video Production Studio Website  
**Lead:** Peter Ayoade (AI Video Expert)  
**Document Version:** 1.0.0  
**Status:** Approved  
**Target Delivery:** Production V1  

---

## 1. Executive Summary & Vision

### 1.1 Project Purpose
The website serves as the premier digital flagship for **Peter Ayoade**, establishing him not merely as a portfolio owner, but as an elite **AI Video Expert** operating a modern **Personal AI Video Production Studio**. 

The platform is engineered to:
- Showcase cutting-edge generative AI video work across commercials, UGC, and narrative animation.
- Bridge the gap between experimental AI video tools and commercial, client-ready brand storytelling.
- Educate prospective clients on modern AI video workflows and turn interest into qualified inbound project inquiries.

### 1.2 Website Positioning
- **Name:** Peter Ayoade
- **Professional Title:** AI Video Expert & Creative Director
- **Core Value Proposition:** Helping ambitious brands, tech startups, and creators communicate at the speed of culture through high-impact, AI-powered visual productions.
- **Brand Essence:** Dark, cinematic, high-craft, professional, visionary.

---

## 2. Target Audience & Visitor Personas

| Persona | Role & Industry | Primary Needs & Pain Points | Conversion Objective |
| :--- | :--- | :--- | :--- |
| **Brand Marketer / CMO** | Mid-market & Enterprise Brands | Needs high-end promotional video without 6-week shoot timelines and \$50k+ production budgets. | Book discovery call / Request commercial proposal |
| **Startup Founder** | AI, SaaS, Web3, DTC Founders | Wants hyper-modern product teasers, viral launch trailers, and feature announcements. | Submit project brief via Contact Form |
| **Creative Agency Director** | Advertising / Social Media Agencies | Needs specialized AI visual effects, cinematic B-roll, or specialized AI video generation talent. | Direct WhatsApp / Email outreach for partnership |

### 2.1 The Visitor Journey (Narrative Funnel)
```
[1. Hero Hook] ──> [2. Visual Proof] ──> [3. Service Fit] ──> [4. Deep Dive Case Studies] ──> [5. High-Intent Inquiry]
   Who I am &        Instant cinematic       Commercials, UGC,     Problem -> Process ->       Custom project brief,
   Studio Title          Showreel               Animation            Solution -> Result         Budget, Deadline & CTA
```

---

## 3. Core Service Offerings

### 3.1 AI Commercials & Brand Ads
- **Scope:** 15s–60s cinematic brand films, concept advertisements, product reveals, and promotional campaigns.
- **Key Value:** High-concept visuals with photographic realism, dynamic lighting, and photorealistic physics.
- **Deliverables:** Master 4K/1080p video, 16:9 and 9:16 aspect ratio cuts, sound design sync.

### 3.2 AI UGC & High-Velocity Social Content
- **Scope:** Short-form vertical video (Reels, TikTok, Shorts), synthetic lifestyle content, influencer-style hooks.
- **Key Value:** High-volume creative iteration, trend responsiveness, hyper-targeted social testing.
- **Deliverables:** 9:16 vertical exports, hook variations, caption-ready cuts.

### 3.3 AI Animation & Narrative Storytelling
- **Scope:** World-building, concept trailers, sci-fi/fantasy animation, illustrated-to-video motion, music video visuals.
- **Key Value:** Boundless visual imagination unconstrained by physical filming limitations.
- **Deliverables:** Full narrative sequences, character-consistent storyboards to final video render.

---

## 4. Competitive Advantage & AI Stack

Peter Ayoade combines deep directorial acumen with the state-of-the-art generative video stack:
- **Google Veo 3 / Veo:** Ultra-consistent motion, cinematic lens emulation, native 1080p generation.
- **Kling AI (1.5 / 2.0):** Complex temporal physics, hyper-realistic human biomechanics, high motion fidelity.
- **Runway Gen-3 Alpha:** Camera control, multi-motion brush, expressive cinematic staging.
- **Luma Dream Machine:** Fast volumetric transitions, fluid spatial motion.
- **Pika 2.0:** Stylized animation, micro-effects, object manipulation.
- **Post-Production & Upscaling:** Topaz Video AI, DaVinci Resolve, ElevenLabs, Premiere Pro for final mastering.

---

## 5. Functional Requirements

### 5.1 Navigation (`Navbar`)
- Sticky, frosted-glass header (`backdrop-blur-md`).
- Brand mark: "Peter Ayoade" with subtle "AI Video Studio" subtext.
- Jump links: Work, Services, Case Studies, Process, About, Contact.
- Persistent primary CTA: **"Start a Project"** (triggers direct jump to contact form).
- Responsive mobile drawer menu with smooth toggle.

### 5.2 Hero Section (`Hero`)
- Headline: Clear, authoritative statement identifying Peter Ayoade as an AI Video Expert.
- Supporting statement highlighting high-velocity, cinematic visual storytelling.
- Primary CTA: **"Start a Project"** (scrolls to Contact form).
- Secondary CTA: **"Watch Showreel"** (triggers instant modal or in-line video playback).
- Background: Ambient dark gradient with subtle animated particle or light glow.

### 5.3 Showreel Showcase (`Showreel`)
- Centered cinematic video frame with one-click play/pause.
- Poster image fallback with instantaneous playback readiness.
- Mute/Unmute toggle, progress bar, and fullscreen support.

### 5.4 Portfolio Gallery (`PortfolioGrid`)
- Filter categories: **All**, **Commercials & Ads**, **UGC & Social**, **Animation & Narrative**.
- Card preview: High-resolution video poster, auto-play micro preview on desktop hover.
- Project metadata: Title, client/brand, category badge, AI tools used (e.g., Veo 3, Kling, Runway).
- Modal / Dedicated Project View detailing:
  - High-definition video player.
  - Project Goal.
  - Creative & Prompting Approach.
  - Production Pipeline & Tools.
  - Final Outcome & Impact.

### 5.5 In-Depth Case Studies (`CaseStudies`)
- Showcases 2–3 flagship projects using the strict **Problem → Process → Solution → Result** framework.
- Demonstrates technical mastery: prompt engineering, consistency workflows, frame-to-frame stabilization, upscaling, color grading.

### 5.6 Creative Process Section (`Process`)
- 4-step studio workflow:
  1. **Brief & Concept Exploration:** Scriptwriting, style boards, AI concept testing.
  2. **Generation & Iteration:** Multi-model generation (Veo 3, Kling, Runway), motion design.
  3. **Refinement & Upscaling:** Temporal coherence fixes, Topaz 4K upscaling, audio/sound design.
  4. **Final Delivery & Multi-Platform Cuts:** Master exports formatted for web, broadcast, and social.

### 5.7 About Section (`About`)
- Professional portrait / studio aesthetic imagery.
- Peter Ayoade's background, artistic philosophy, and vision for the future of AI cinema.
- Highlight metrics / tool mastery badges.
- Direct link to resume / studio credentials.

### 5.8 Client Inquiries & Contact Engine (`ContactSection`)
- Clean, high-converting project inquiry form:
  - Full Name (Required)
  - Email Address (Required)
  - Company / Brand Name
  - Project Category (Commercial, UGC, Animation, Other)
  - Estimated Budget Range (<$1k, $1k–$3k, $3k–$5k, $5k+)
  - Project Brief / Details (Required)
  - Timeline / Expected Deadline
- Direct communication channels:
  - WhatsApp quick-chat link (pre-filled message)
  - Direct email (`mailto:`)
  - Social platform links (Twitter/X, LinkedIn, Instagram, YouTube)

### 5.9 Footer (`Footer`)
- Brand statement, copyright, privacy statement, and back-to-top button.

---

## 6. Non-Functional Requirements

### 6.1 Performance & Core Web Vitals
- **Target Lighthouse Scores:**
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100
- **LCP (Largest Contentful Paint):** < 2.2s by utilizing optimized poster images and deferred video stream loading.
- **CLS (Cumulative Layout Shift):** 0.00 by enforcing strict aspect ratios (`aspect-video`, `aspect-[9/16]`) on all media containers.

### 6.2 Responsive Design
- Breakpoints:
  - Mobile: 360px – 639px
  - Tablet: 640px – 1023px
  - Desktop: 1024px – 1440px
  - Ultra-wide: 1440px+
- Full touch-screen optimization for mobile video scrubbing and filter switching.

### 6.3 Accessibility (a11y)
- WCAG 2.1 AA compliance:
  - Minimum 4.5:1 color contrast on all text against dark backgrounds.
  - Proper `aria-label` attributes on all video play/pause controls and social icons.
  - Full keyboard navigation tab stops with visible focus rings.

### 6.4 Security & Data Privacy
- Contact form submission with spam protection (honeypot + client-side rate limit).
- No sensitive client data stored client-side.
- HTTPS enforced on Netlify hosting with automated SSL/TLS certificates.

---

## 7. Scope Boundaries: V1 vs. Future Roadmap

### In-Scope for V1 (Current Release)
- Complete single-page studio experience with seamless section anchor routing.
- Dedicated dynamic/modal case study deep-dives.
- Comprehensive decoupled data layer (`data/*.ts`).
- Interactive tool marquee and video portfolio system.
- Functional contact form + direct WhatsApp / Email connectors.
- Netlify automated deployment configuration.

### Out-of-Scope for V1 (Future Iterations)
- Headless CMS integration (Sanity/Contentful) — slated for V2 when client self-edits are needed.
- Automated client booking / Stripe checkout for fixed-price package retainers.
- Multi-language localization (i18n).
- Member portal or client-specific download dashboard.

