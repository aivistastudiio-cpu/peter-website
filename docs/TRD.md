# Technical Requirements Document (TRD)

**Project Title:** Peter Ayoade — Personal AI Video Production Studio Website  
**Lead:** Peter Ayoade (AI Video Expert)  
**Document Version:** 1.0.0  
**Status:** Approved  
**Platform:** Next.js (App Router) + TypeScript + Tailwind CSS  
**Target Host:** Netlify  

---

## 1. Technology Stack Selection & Specifications

| Layer | Technology | Version / Spec | Justification |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `15.x` (App Router) | High-performance Static Site Generation (SSG), optimal SEO, automatic asset optimization, fast edge delivery. |
| **Language** | TypeScript | `^5.x` | Strict type safety across all project models, service schemas, and component props. |
| **Styling** | Tailwind CSS | `^3.4.x` | Rapid utility-first styling, zero runtime overhead, responsive primitives, easy token configuration. |
| **Icons** | Lucide React | `^0.4x` | Lightweight, scalable tree-shakeable SVG icons matching the clean studio aesthetic. |
| **Animation** | Framer Motion & CSS | `^11.x` | Hardware-accelerated GPU transforms, layout animations, and fluid scroll triggers. |
| **Deployment** | Netlify | Global Edge CDN | Automated GitHub build hooks, global CDN caching, zero-config static exports, instant SSL. |

---

## 2. Codebase Architecture & Directory Structure

```text
peter-website/
├── docs/
│   ├── PRD.md
│   ├── DRD.md
│   ├── TRD.md
│   └── ADR.md
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   ├── videos/          # Local optimized preview clips / posters
│   └── images/          # Studio headshot, logos, case study stills
├── src/
│   ├── app/
│   │   ├── globals.css  # Studio theme variables, custom scrollbars
│   │   ├── layout.tsx   # Root layout with SEO metadata & fonts
│   │   ├── page.tsx     # Single-page studio narrative
│   │   ├── robots.ts    # Automated search crawler rules
│   │   └── sitemap.ts   # Automated sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Showreel.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   ├── ToolsMarquee.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── ProjectModal.tsx
│   │       ├── VideoPlayer.tsx
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   ├── projects.ts     # Portfolio and case study content
│   │   ├── services.ts     # Service breakdown & deliverables
│   │   ├── tools.ts        # AI stack (Veo 3, Kling, Runway, etc.)
│   │   └── testimonials.ts # Verified client endorsements
│   └── types/
│       └── index.ts        # Strict TypeScript interfaces
├── netlify.toml            # Netlify build and cache headers
├── tailwind.config.ts      # Custom studio color palette & typography
├── tsconfig.json           # Strict TypeScript rules
└── package.json            # Dependencies & build scripts
```

---

## 3. Data Models & TypeScript Schema

### 3.1 Project Schema (`src/types/index.ts`)
```typescript
export type ProjectCategory = 'commercial' | 'ugc' | 'animation' | 'all';

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  previewVideoUrl?: string; // Lightweight looping webm/mp4 for hover preview
  duration: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  tools: string[];
  featured: boolean;
  // Case Study deep dive fields (optional for all, required for featured case studies)
  caseStudy?: {
    problem: string;
    process: string[];
    solution: string;
    result: string;
    metrics?: { label: string; value: string }[];
  };
}
```

### 3.2 Service Schema
```typescript
export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string[];
  highlightTools: string[];
  featuredBadge?: string;
}
```

### 3.3 AI Tool Schema
```typescript
export interface AITool {
  id: string;
  name: string;
  category: 'Video Generation' | 'Camera & Motion' | 'Enhancement' | 'Post-Production';
  description: string;
  version: string;
  iconName: string;
}
```

---

## 4. Media & Video Optimization Engine

### 4.1 Multi-Tier Video Loading Architecture
1. **Tier 1 (First Paint):**
   - High-fidelity WebP/AVIF poster frame rendered immediately.
   - Fixed aspect ratios via Tailwind (`aspect-video` or `aspect-[9/16]`) to eliminate Cumulative Layout Shift (CLS).
2. **Tier 2 (Interactive Hover / Scroll Reveal):**
   - Lightweight preview video loads (`muted`, `loop`, `playsInline`, `preload="none"`).
   - Only triggers when entering viewport or on desktop card cursor hover.
3. **Tier 3 (Deep-Dive Modal Playback):**
   - Full 4K/1080p stream embed (YouTube, Vimeo, or direct Cloudinary/S3/CDN MP4).
   - Custom playback controls (Play, Pause, Progress, Volume, Fullscreen).

---

## 5. Form Processing & Inbound Lead Pipeline

### 5.1 Submission Pipeline
- **Method 1 (Netlify Native Forms):** Forms contain `data-netlify="true"` and `name="project-inquiry"`. Netlify captures submissions directly with zero external backend code.
- **Method 2 (Instant WhatsApp Connect):** An interactive action that formats the visitor's inputs (Category, Budget, Brief) into a formatted URL string:
  ```typescript
  const whatsappUrl = `https://wa.me/<PHONE>?text=${encodeURIComponent(
    `Hi Peter, I'd like to discuss a ${projectType} project. Budget: ${budget}. Brief: ${description}`
  )}`;
  ```
- **Method 3 (Direct Mailto):** Instant fallback mailto with pre-structured subject and body.

### 5.2 Input Validation
- Client-side validation for valid RFC 5322 email patterns.
- Spam protection via hidden Honeypot field (`bot-field`).
- Graceful success and error UI banners without page reload.

---

## 6. Search Engine Optimization (SEO) & Structured Data

### 6.1 Meta Configuration
- Dynamic Next.js `metadata` object with canonical URLs, descriptive page titles, and keyword targeting:
  - `"Peter Ayoade — AI Video Expert | Cinematic Commercials, UGC & Animation"`
- High-resolution OpenGraph cards (`og:image`, `twitter:card: summary_large_image`).

### 6.2 JSON-LD Schema Graphs
- Injected into `<head>`:
  - **`ProfessionalService`**: Identifies Peter Ayoade as an independent video production studio.
  - **`VideoObject`**: Marks up showcased videos with duration, name, description, and thumbnail URL for Google Video Search indexing.

---

## 7. Performance & Build Specifications

### 7.1 Netlify Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 7.2 Core Web Vitals Targets
- Time to First Byte (TTFB): < 300ms
- First Contentful Paint (FCP): < 1.0s
- Largest Contentful Paint (LCP): < 2.0s
- Cumulative Layout Shift (CLS): 0.00
- Interaction to Next Paint (INP): < 100ms

