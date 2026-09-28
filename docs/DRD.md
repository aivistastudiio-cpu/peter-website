# Design Requirements Document (DRD)

**Project Title:** Peter Ayoade — Personal AI Video Production Studio Website  
**Lead:** Peter Ayoade (AI Video Expert)  
**Document Version:** 1.0.0  
**Status:** Approved  
**Aesthetic Core:** Dark + Premium + Cinematic Studio Experience  

---

## 1. Visual Identity & Design Principles

### 1.1 Aesthetic Philosophy
The visual language must emulate a **high-end Hollywood / creative production house meets cutting-edge generative AI laboratory**. It rejects generic SaaS aesthetics and avoids garish neon overuse, opting instead for deep cosmic darks, subtle blue luminescent accents, fine silver borders, and high-impact cinematic video surfaces.

### 1.2 Core Design Principles
1. **Cinema First:** Content is visual motion. UI elements exist to frame, support, and elevate the video art without distraction.
2. **Subtle Luminescence:** Use soft radial gradients and glowing highlights behind key focal points (such as hero headlines and featured play buttons) to evoke high-tech generative power.
3. **Tactile Micro-interactions:** Every interactive card, button, and pill badge provides immediate, silky feedback (scale-up, border glow, glass lift).
4. **Structured Information Architecture:** Complex technical processes (prompting, multi-model staging) are organized with crisp hierarchy and legible typography.

---

## 2. Color System

### 2.1 Palette Specification
| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| `--bg-base` | `#070A0F` | Deepest obsidian canvas background |
| `--bg-surface` | `#0D131F` | Primary card background, navigation bar |
| `--bg-surface-elevated`| `#141E33` | Hovered cards, modal backgrounds, dropdowns |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard structural card and divider borders |
| `--border-glow` | `rgba(56, 189, 248, 0.35)` | Active state / hover glow borders |
| `--accent-cyan` | `#38BDF8` | Primary brand accent: icons, progress bars, highlights |
| `--accent-blue` | `#2563EB` | Secondary button backgrounds, gradient stops |
| `--accent-electric` | `#0284C7` | Active pill badges, focused form field rings |
| `--text-primary` | `#F8FAFC` | Main headings, key value copy, prominent titles |
| `--text-secondary` | `#94A3B8` | Subtitles, body paragraphs, project descriptions |
| `--text-muted` | `#64748B` | Metadata, tags, copyright, timestamp indicators |

### 2.2 Studio Gradients
- **Hero Title Gradient:** `linear-gradient(135deg, #FFFFFF 20%, #93C5FD 70%, #38BDF8 100%)`
- **Ambient Aura (Glow behind hero & CTA):** `radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(3, 7, 18, 0) 70%)`
- **Glass Surface:** `background: rgba(13, 19, 31, 0.75); backdrop-filter: blur(16px);`

---

## 3. Typography Hierarchy

### 3.1 Font Families
- **Display / Headings:** `Plus Jakarta Sans` or `Space Grotesk` (clean, bold geometric display with architectural authority).
- **Body & Metadata:** `Inter` (neutral, ultra-legible at small sizes, optimal vertical rhythm).
- **Code / AI Prompt Callouts:** `JetBrains Mono` or system monospace (for showing prompts, parameters, and tool workflows).

### 3.2 Scale & Leading
| Level | Font Size (Desktop) | Font Size (Mobile) | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | `64px` (4rem) | `40px` (2.5rem) | 800 (Extrabold) | `-0.03em` | Hero main headline |
| **H1** | `48px` (3rem) | `32px` (2rem) | 700 (Bold) | `-0.02em` | Section headers |
| **H2** | `32px` (2rem) | `24px` (1.5rem) | 600 (Semibold) | `-0.015em`| Featured project titles |
| **H3** | `22px` (1.375rem)| `18px` (1.125rem) | 600 (Semibold) | `0` | Card titles, service items |
| **Body Large** | `18px` (1.125rem)| `16px` (1rem) | 400 (Regular) | `0` | Hero intro, case study leads |
| **Body Base** | `15px` (0.9375rem)| `14px` (0.875rem) | 400 (Regular) | `0` | General paragraph text |
| **Caption / Label**| `12px` (0.75rem) | `11px` (0.6875rem)| 500 (Medium) | `+0.05em` | Badges, tool tags, timestamps |

---

## 4. Component Design Specifications

### 4.1 Navigation Bar (`Navbar`)
- **Container:** Sticky floating pill or full-width border-bottom bar (`h-20`, `bg-[#070A0F]/80`, `backdrop-blur-md`).
- **Logo:** Clean logotype: `PETER AYOADE` with small dot indicator in cyan `#38BDF8` + `AI VIDEO STUDIO`.
- **Links:** Subtle slate links with animated cyan underline reveal on hover.
- **CTA:** Compact gradient button with hover shine: **"Start a Project"**.

### 4.2 Hero Section
- **Visual Staging:** Top badge: `"✦ Available for Select Q3/Q4 Projects"` pill.
- **Headline Structure:** Two-line visual anchor:
  - Line 1: `CRAFTING CINEMATIC WORLDS`
  - Line 2 (Gradient): `POWERED BY ADVANCED AI`
- **Subcopy:** 2-line high-impact statement on commercials, social campaigns, and world-building.
- **Dual CTA Group:**
  - Primary: Filled blue/cyan gradient button (`scale-[1.02]` on hover, soft drop shadow).
  - Secondary: Glass button with play icon (`border border-white/10 bg-white/5 hover:bg-white/10`).

### 4.3 AI Tools Marquee
- Horizontal auto-scrolling ribbon or interactive badge strip featuring:
  - **Google Veo 3**
  - **Kling AI**
  - **Runway Gen-3**
  - **Luma Dream Machine**
  - **Pika 2.0**
  - **Topaz Video AI**
  - **DaVinci Resolve**
- Card styling: Subtle dark badge with tool icon, name, and glowing hover border.

### 4.4 Portfolio Grid & Cards
- **Filter Tabs:** Clean pill selectors with active indicator background.
- **Card Anatomy:**
  - 16:9 or 4:5 aspect ratio wrapper with rounded-2xl corners (`rounded-2xl`).
  - Dark placeholder with ambient loading pulse.
  - Video play overlay: Centered circular play button (`w-14 h-14 bg-black/50 backdrop-blur-sm border border-white/20 text-white`).
  - Card Footer: Project title, category tag, tool badge row, and chevron link.
  - Desktop Hover: Video subtly plays on hover without sound; card transforms up by `4px`.

### 4.5 Case Study Deep Dive Component
- 4-Quadrant or Sequential Layout:
  1. **The Problem:** Client context, creative limitation, or speed requirement.
  2. **The Process:** Prompt workflow, tools combined (e.g., Kling for motion + Veo for detail + DaVinci for color).
  3. **The Solution:** The resulting creative film and multi-platform adaptations.
  4. **The Result:** Metrics (impressions, conversion lift, turnaround speed).

### 4.6 Contact Section
- Dual-column layout on desktop:
  - Left column: Direct contact info, WhatsApp one-tap button, email link, turnaround promises, social links.
  - Right column: High-converting dark glass form container (`rounded-3xl border border-white/10 bg-[#0D131F]/90`).
  - Input styling: Dark fields (`bg-[#141E33]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400`).

---

## 5. Animation & Motion Design Guidelines

### 5.1 Motion Philosophy
Animations must feel **cinematic, weighted, and purposeful** — never chaotic or slow.

### 5.2 Transition Specs
| Interaction | Property Changed | Duration | Easing Curve |
| :--- | :--- | :--- | :--- |
| **Card Hover** | `transform: translateY(-4px)`, `box-shadow` | `300ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Button Hover**| `transform: scale(1.02)`, `background-opacity` | `200ms` | `cubic-bezier(0.2, 0, 0, 1)` |
| **Page Scroll Reveal** | `opacity: 0 -> 1`, `translateY: 20px -> 0px` | `600ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Modal Open** | `opacity: 0 -> 1`, `scale: 0.96 -> 1` | `250ms` | `cubic-bezier(0.2, 0, 0, 1)` |
| **Tool Marquee**| `transform: translateX(-50%)` | `25s` continuous | `linear` |

---

## 6. Design System Tokens (Tailwind Ready)

```javascript
// Theme configuration mapping preview
colors: {
  studio: {
    bg: '#070A0F',
    card: '#0D131F',
    elevated: '#141E33',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(56, 189, 248, 0.35)',
    cyan: '#38BDF8',
    blue: '#2563EB',
    electric: '#0284C7',
    muted: '#94A3B8',
  }
}
```

