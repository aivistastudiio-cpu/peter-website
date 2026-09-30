import { Project } from '@/types';

export const PROJECTS: Project[] = [
  // 1. AI UGC Video
  {
    id: 'ai-ugc-video',
    slug: 'ai-ugc-video',
    title: 'AI UGC Video — Viral Creator Product Showcase',
    client: 'Lumina Glow Labs',
    category: 'ugc',
    categoryLabel: '1. AI UGC Video',
    tagline: 'High-converting TikTok and Meta creator ad with lifelike voice, natural micro-expressions, and authentic product demonstration.',
    description:
      'A performance-driven social campaign featuring a hyper-realistic synthetic beauty creator reviewing a barrier repair serum. Engineered with natural speech cadence, breathing pauses, dynamic auto-captions, and organic lighting.',
    thumbnail: '/images/portfolio/video-1-ugc.jpg',
    videoUrl: '/videos/lumina.mp4',
    previewVideoUrl: '/videos/lumina.mp4',
    duration: '0:25',
    aspectRatio: '9:16',
    tools: ['Kling AI 1.5', 'ElevenLabs Turbo', 'Topaz Video AI', 'CapCut Studio'],
    featured: true,
    caseStudy: {
      problem:
        'Lumina was facing creative burnout across Meta/TikTok ads. Sourcing human UGC creators was costing $600/video with 14-day turnaround times, making rapid creative iteration impossible.',
      process: [
        'Crafted high-retention 3-second hook script tailored for beauty enthusiasts.',
        'Generated photorealistic creator performance in Kling AI with natural head tilts and skin texture.',
        'Synthesized lifelike voiceover with subtle conversational breathing imperfections in ElevenLabs.',
        'Engineered dynamic kinetic captions and native TikTok-style sound design.',
      ],
      solution:
        'A broadcast-quality 9:16 vertical UGC creative delivered in under 48 hours, ready for instant A/B ad testing.',
      result:
        'Decreased Customer Acquisition Cost (CAC) by 38% while driving a 2.8x increase in click-through rate over standard static ads.',
      metrics: [
        { label: 'CAC Reduction', value: '-38%' },
        { label: 'Production Time', value: '48 Hours' },
        { label: 'CTR Lift', value: '2.8x' },
      ],
    },
  },

  // 2. AI Movie Trailer
  {
    id: 'ai-movie-trailer',
    slug: 'ai-movie-trailer',
    title: 'AI Movie Trailer — Dune Nomad: Resurgence',
    client: 'Aetherial Cinema IP',
    category: 'trailer',
    categoryLabel: '2. AI Movie Trailer',
    tagline: 'Blockbuster-tier cinematic sci-fi theatrical trailer featuring monumental world-building and orchestral sound design.',
    description:
      'An epic 60-second sci-fi movie trailer set across a hostile desert world. Features gigantic monolith alien structures, high-velocity armor combat, atmospheric twin moons, anamorphic film grain, and thunderous trailer risers.',
    thumbnail: '/images/portfolio/video-2-movie-trailer.jpg',
    videoUrl: '/videos/solaris.mp4',
    previewVideoUrl: '/videos/solaris.mp4',
    duration: '1:02',
    aspectRatio: '16:9',
    tools: ['Google Veo 3', 'Runway Gen-3 Alpha', 'Midjourney v6.1', 'DaVinci Resolve'],
    featured: true,
    caseStudy: {
      problem:
        'An independent filmmaker needed a visceral, multi-million-dollar visual trailer to pitch an original sci-fi feature to streaming buyers without a production budget.',
      process: [
        'Generated coherent concept environments and character armor designs via custom prompt engineering.',
        'Animated sweeping camera tracking shots through desert monolith valleys in Runway Gen-3.',
        'Upscaled to native 4K DCI 60fps with temporal stabilization via Topaz Video AI.',
        'Mixed a high-impact orchestral trailer score featuring brass braams, sub-bass drops, and voiceover.',
      ],
      solution:
        'A theatrical trailer that captured studio executives attention and established instant production scale.',
      result:
        'Secured script optioning and seed development funding within 3 weeks of private buyer presentation.',
      metrics: [
        { label: 'Visual Scale', value: '4K DCI' },
        { label: 'Turnaround', value: '5 Days' },
        { label: 'Buyer Optioning', value: 'Approved' },
      ],
    },
  },

  // 3. AI Short Film
  {
    id: 'ai-short-film',
    slug: 'ai-short-film',
    title: 'AI Short Film — The Last Parisian Chronometer',
    client: 'Studio L’Heure Narrative',
    category: 'film',
    categoryLabel: '3. AI Short Film',
    tagline: 'Poignant narrative cinema following a clockmaker preserving memories inside floating mechanical gearworks.',
    description:
      'An emotionally resonant 3-act narrative film set in a sunlit Parisian clock tower. Combines tender character acting, zero-gravity gear mechanics, authentic dust refraction, and award-winning French drama cinematography.',
    thumbnail: '/images/portfolio/video-3-short-film.jpg',
    videoUrl: '/videos/chronos.mp4',
    previewVideoUrl: '/videos/chronos.mp4',
    duration: '0:45',
    aspectRatio: '16:9',
    tools: ['Luma Dream Machine', 'Kling AI 1.5', 'Topaz Video AI', 'Adobe Audition'],
    featured: true,
    caseStudy: {
      problem:
        'Creating an emotional story with period-accurate vintage production design, micro-props, and Parisian views traditionally requires hundreds of thousands in set construction.',
      process: [
        'Built consistent character profiles for the master horologist across diverse focal lengths.',
        'Choreographed physics-accurate floating brass gears and watch escapements in Luma Dream Machine.',
        'Rendered soft golden-hour volumetric lighting spilling through antique arched clock tower windows.',
        'Foley-recorded antique tick-tock mechanisms and layered a melancholic solo cello score.',
      ],
      solution:
        'A cinematic narrative masterpiece demonstrating how AI video conveys profound human heart and poetry.',
      result:
        'Selected for screening in international AI Film Festivals and viewed by over 120,000 cinephiles online.',
      metrics: [
        { label: 'Festival Selection', value: 'Official' },
        { label: 'Organic Views', value: '120K+' },
        { label: 'Cost Savings', value: '91%' },
      ],
    },
  },

  // 4. Book Trailer
  {
    id: 'book-trailer',
    slug: 'book-trailer',
    title: 'Book Trailer — Chronicles of the Rune Grimoire',
    client: 'Vanguard Fantasy Publishing',
    category: 'trailer',
    categoryLabel: '4. Book Trailer',
    tagline: 'Hypnotic fantasy novel reveal with glowing runic calligraphy, floating embers, and dark gothic atmosphere.',
    description:
      'A cinematic promotional book trailer engineered to turn casual readers into pre-order buyers. Features ancient leatherbound grimoire physics, ascending golden runes, and an animated 3D book cover reveal.',
    thumbnail: '/images/portfolio/video-4-book-trailer.jpg',
    videoUrl: '/videos/solaris.mp4',
    previewVideoUrl: '/videos/solaris.mp4',
    duration: '0:35',
    aspectRatio: '16:9',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'After Effects', 'DaVinci Resolve'],
    featured: true,
    caseStudy: {
      problem:
        'Authors and publishers often rely on static Amazon covers that struggle to stand out in a saturated digital marketplace.',
      process: [
        'Designed glowing runic particles and atmospheric gothic cathedral library architecture.',
        'Simulated dynamic camera push-in and dramatic book opening in Runway Gen-3.',
        'Integrated typography title reveals with burning golden edge shaders in After Effects.',
        'Crafted mystical sound effects with whispers, choir pads, and thunderous book-slams.',
      ],
      solution:
        'An unforgettable book teaser trailer optimized for YouTube, Instagram Reels, and Amazon author pages.',
      result:
        'Boosted pre-orders by 310% during launch week, propelling the novel directly into the Amazon Fantasy Top 10.',
      metrics: [
        { label: 'Pre-Order Spike', value: '+310%' },
        { label: 'Amazon Chart', value: 'Top 10' },
        { label: 'Average Watch Time', value: '94%' },
      ],
    },
  },

  // 5. Product Video
  {
    id: 'product-video',
    slug: 'product-video',
    title: 'Product Video — Aether ANC Studio Headphones',
    client: 'Aether Audio Germany',
    category: 'commercial',
    categoryLabel: '5. Product Video',
    tagline: 'Ultra-luxury commercial detailing precision industrial design, floating acoustic waves, and liquid chrome accents.',
    description:
      'A commercial product film showcasing precision industrial manufacturing. Highlights tactile matte-black magnesium alloys, floating acoustic wave visualizations, liquid chrome particle splashes, and studio rim illumination.',
    thumbnail: '/images/portfolio/video-5-product-video.jpg',
    videoUrl: '/videos/pulse.mp4',
    previewVideoUrl: '/videos/pulse.mp4',
    duration: '0:30',
    aspectRatio: '16:9',
    tools: ['Google Veo 3', 'Runway Gen-3', 'Topaz Video AI', 'Blender Neural Pass'],
    featured: true,
    caseStudy: {
      problem:
        'Aether Audio needed a broadcast launch spot 8 weeks before physical assembly line rollout in Munich, with conventional CGI studio quotes exceeding $50,000.',
      process: [
        'Generated macro exploded-view acoustic driver simulations using neural lighting passes.',
        'Choreographed floating soundwave frequencies and liquid splash dynamics.',
        'Refined metallic reflections and laser-etched logo branding with micro-motion brushes.',
        'Mixed Spatial Audio 3D sound design synchronized with visual impact beats.',
      ],
      solution:
        'A commercial that positioned the product alongside Apple and Sony audio flagship commercials.',
      result:
        'First manufacturing batch completely sold out on Kickstarter in 48 hours, raising over $420,000.',
      metrics: [
        { label: 'Funds Raised', value: '$420K' },
        { label: 'Sellout Time', value: '48 Hours' },
        { label: 'Agency Savings', value: '85%' },
      ],
    },
  },

  // 6. Cartoon Video
  {
    id: 'cartoon-video',
    slug: 'cartoon-video',
    title: 'Cartoon Video — Pip & The Whispering Woods',
    client: 'FableCloud Animation',
    category: 'animation',
    categoryLabel: '6. Cartoon Video',
    tagline: 'Charming Pixar-grade character animation with expressive facial acting, lush lighting, and whimsical storytelling.',
    description:
      'An original 3D animated cartoon scene featuring Pip, an adventurous aviator fox uncovering a magical glowing treasure map in a sun-dappled fantasy forest. Created for children’s entertainment and animated IP pitches.',
    thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/showreel.mp4',
    previewVideoUrl: '/videos/showreel.mp4',
    duration: '0:28',
    aspectRatio: '16:9',
    tools: ['Pika 2.0', 'Kling AI 1.5', 'Midjourney Niji 6', 'ElevenLabs Character FX'],
    featured: false,
    caseStudy: {
      problem:
        'Traditional 3D character animation requires extensive rigging, skinning, and render farms costing thousands per second of film.',
      process: [
        'Created expressive character turnarounds in Midjourney Niji with consistent aviator gear.',
        'Animated subtle ear twitches, eye blinks, and joyful discovery reactions in Kling AI.',
        'Enhanced lighting depth with simulated sub-surface scattering on fur and foliage.',
        'Added orchestral woodwind score and playful creature vocalizations.',
      ],
      solution:
        'A pilot teaser sequence ready to pitch to animation studios, children’s book authors, and YouTube channels.',
      result:
        'Optioned for a 10-episode digital web series by an educational entertainment publisher.',
      metrics: [
        { label: 'Animation Speed', value: '10x Faster' },
        { label: 'Rigging Cost', value: '$0' },
        { label: 'Audience Score', value: '99%' },
      ],
    },
  },

  // 7. AI Animation
  {
    id: 'ai-animation',
    slug: 'ai-animation',
    title: 'AI Animation — Neural Metamorphosis',
    client: 'Digital Horizon Labs',
    category: 'animation',
    categoryLabel: '7. AI Animation',
    tagline: 'Mind-bending generative motion art blending bioluminescent fractal geometry with kinetic physics.',
    description:
      'An avant-garde visual animation showcasing neural diffusion morphing. Fluid continuous camera transitions, iridescent chromatic aberration, and physics-driven particle simulations create a hypnotic visual experience.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/apex.mp4',
    previewVideoUrl: '/videos/apex.mp4',
    duration: '0:32',
    aspectRatio: '16:9',
    tools: ['ComfyUI', 'Deforum AI', 'Runway Gen-3', 'Topaz Video AI'],
    featured: false,
    caseStudy: {
      problem:
        'An experimental electronic label needed high-concept, non-traditional visuals that could loop endlessly on concert LED screens.',
      process: [
        'Programmed mathematical latent space interpolation with custom depth guidance.',
        'Synchronized geometry transformations to 128 BPM electronic tempo frequencies.',
        'Upscaled to pristine 4K 60fps with zero flicker artifacts.',
      ],
      solution:
        'A visually arresting motion art piece that transforms physical space into a digital canvas.',
      result:
        'Featured across major European music festivals and selected for an international digital art biennial.',
      metrics: [
        { label: 'Resolution', value: '4K 60fps' },
        { label: 'Festival Tours', value: '14 Cities' },
        { label: 'Frame Consistency', value: '100%' },
      ],
    },
  },

  // 8. AI Podcast Video
  {
    id: 'ai-podcast-video',
    slug: 'ai-podcast-video',
    title: 'AI Podcast Video — Future Proof Studio Session',
    client: 'Apex Creator Network',
    category: 'podcast',
    categoryLabel: '8. AI Podcast Video',
    tagline: 'Multi-camera podcast broadcast with studio lighting, animated captions, and dynamic host chemistry.',
    description:
      'A broadcast-ready studio podcast format featuring synthetic co-hosts discussing exponential technologies. Includes multi-angle camera switching, automated word-by-word viral captions, and dynamic lower-thirds.',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/lumina.mp4',
    previewVideoUrl: '/videos/lumina.mp4',
    duration: '0:40',
    aspectRatio: '16:9',
    tools: ['HeyGen Studio', 'ElevenLabs Voice Cloning', 'CapCut Pro', 'Descript AI'],
    featured: false,
    caseStudy: {
      problem:
        'Physical podcast production requires studio rental, sound engineers, lighting rigs, and hours of manual video editing.',
      process: [
        'Constructed custom virtual podcast studio with Peter Ayoade Studio neon backdrops.',
        'Scripted an engaging, debate-style dialogue with witty banter and natural interruptions.',
        'Automated multi-angle camera cuts based on audio speaker detection.',
        'Applied viral animated font captions and audio-reactive soundwave bars.',
      ],
      solution:
        'A turn-key podcast production workflow that outputs episodic studio content in hours instead of weeks.',
      result:
        'Enabled client to publish 4 full podcast episodes weekly with zero studio overhead.',
      metrics: [
        { label: 'Output Velocity', value: '4x / Week' },
        { label: 'Studio Overhead', value: '$0' },
        { label: 'Retention Rate', value: '82%' },
      ],
    },
  },

  // 9. AI Explainer Video
  {
    id: 'ai-explainer-video',
    slug: 'ai-explainer-video',
    title: 'AI Explainer Video — CloudNexus Enterprise Architecture',
    client: 'Nexus Software Group',
    category: 'explainer',
    categoryLabel: '9. AI Explainer Video',
    tagline: 'Sleek B2B tech explainer with 3D isometric cloud diagrams, kinetic typography, and value-focused narration.',
    description:
      'A high-retention corporate explainer video deconstructing complex decentralized cloud data pipelines into crystal-clear visual diagrams, animated infographics, and engaging narrative pacing.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/zenith.mp4',
    previewVideoUrl: '/videos/zenith.mp4',
    duration: '0:42',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3', 'After Effects Neural', 'ElevenLabs', 'Claude Scriptwriter'],
    featured: false,
    caseStudy: {
      problem:
        'Enterprise SaaS buyers were dropping off during technical demo calls due to dry PowerPoint slides and overly complex documentation.',
      process: [
        'Transformed 40-page whitepaper into a crisp 45-second high-impact visual narrative.',
        'Rendered 3D isometric neural network hubs with glowing data streams.',
        'Recorded authoritative, clear voiceover narration with executive resonance.',
        'Synchronized animated metric counters and callout highlights.',
      ],
      solution:
        'An engaging B2B video that communicates technical value in seconds to C-suite decision-makers.',
      result:
        'Increased enterprise sales demo conversion rate by 44% within the first month of deployment.',
      metrics: [
        { label: 'Sales Conversion', value: '+44%' },
        { label: 'Watch Completion', value: '91%' },
        { label: 'Enterprise Leads', value: '3.2x' },
      ],
    },
  },

  // 10. AI Unboxing Video
  {
    id: 'ai-unboxing-video',
    slug: 'ai-unboxing-video',
    title: 'AI Unboxing Video — NovaPro Holographic Smartphone',
    client: 'NovaTech Electronics',
    category: 'ugc',
    categoryLabel: '10. AI Unboxing Video',
    tagline: 'ASMR tactile unboxing experience showcasing packaging reveals, matte finishes, and device boot sequences.',
    description:
      'First-person POV unboxing commercial showing precision magnetic lid release, protective peel removal, and reflective titanium glass inspection with crisp micro-audio sound design.',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/pulse.mp4',
    previewVideoUrl: '/videos/pulse.mp4',
    duration: '0:24',
    aspectRatio: '9:16',
    tools: ['Kling AI 1.5', 'Luma Dream Machine', 'Topaz Video AI', 'Epidemic Sound FX'],
    featured: false,
    caseStudy: {
      problem:
        'E-commerce brands often struggle to get authentic unboxing videos before factory inventory arrives at warehouse distribution.',
      process: [
        'Simulated realistic hands in white gloves handling matte packaging with physical realism.',
        'Captured peel-off film reflection and device display boot illumination.',
        'Integrated crisp ASMR sound effects: cardboard slide, magnetic click, and screen chiming.',
      ],
      solution:
        'A high-engagement TikTok/Reels unboxing video ready weeks before actual product shipment.',
      result:
        'Generated over 650,000 views on TikTok with a 4.1% direct link conversion rate.',
      metrics: [
        { label: 'TikTok Views', value: '650K+' },
        { label: 'Conversion Rate', value: '4.1%' },
        { label: 'Pre-Shipment Delivery', value: '100%' },
      ],
    },
  },

  // 11. AI Music Video
  {
    id: 'ai-music-video',
    slug: 'ai-music-video',
    title: 'AI Music Video — Midnight Hologram (Synthwave Live)',
    client: 'Kavinsky Records / Neon Pulse',
    category: 'music',
    categoryLabel: '11. AI Music Video',
    tagline: 'Cyberpunk neon performance video across rain-slicked Tokyo rooftops with beat-synced visual pacing.',
    description:
      'A stylized music video featuring a synthetic artist performing amidst holographic billboards and flying traffic. Features rhythmic camera tracking, anamorphic lens distortion, and synchronized audio-reactive lighting.',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/apex.mp4',
    previewVideoUrl: '/videos/apex.mp4',
    duration: '0:38',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3 Alpha', 'Stable Audio', 'Kaiber AI', 'DaVinci Resolve'],
    featured: false,
    caseStudy: {
      problem:
        'Independent music artists frequently lack the $20,000+ budget required for cinematic location shoots, drone operators, and CGI crews.',
      process: [
        'Engineered continuous character likeness across 8 distinct cyberpunk city environments.',
        'Mapped camera pans and drone ascents to drum drops and synthesizer crescendos.',
        'Added anamorphic lens streaks, chromatic distortion, and wet surface reflections.',
      ],
      solution:
        'A complete MTV-quality music video delivered within days for a fraction of traditional production costs.',
      result:
        'Selected for editorial playlist features on Spotify Canvas and reached #4 on YouTube Indie Trending.',
      metrics: [
        { label: 'YouTube Trending', value: '#4' },
        { label: 'Spotify Streams', value: '450K+' },
        { label: 'Budget Efficiency', value: '93%' },
      ],
    },
  },

  // 12. AI Faceless YouTube Video
  {
    id: 'ai-faceless-youtube-video',
    slug: 'ai-faceless-youtube-video',
    title: 'AI Faceless YouTube Video — The 100-Year Wealth Paradox',
    client: 'Visual Economics Media',
    category: 'youtube',
    categoryLabel: '12. AI Faceless YouTube Video',
    tagline: 'High-retention documentary visual essay blending historic cinematic scenes, data visualizations, and magnetic narration.',
    description:
      'A 60-second excerpt from a viral financial documentary. Engineered with fast-cut cinematic B-roll, 3D archival maps, sound risers, and captivating storytelling designed for maximum audience watch time.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/zenith.mp4',
    previewVideoUrl: '/videos/zenith.mp4',
    duration: '0:50',
    aspectRatio: '16:9',
    tools: ['Midjourney v6.1', 'Runway Gen-3', 'ElevenLabs Deep Narration', 'CapCut Pro'],
    featured: false,
    caseStudy: {
      problem:
        'Automated YouTube channels struggle with boring static stock slides that cause high viewer drop-off within the first 10 seconds.',
      process: [
        'Designed high-tension historical scenes (Roman forum fires, 1929 stock exchange floor, modern skyscrapers).',
        'Paced visual cuts every 2.5 to 3.5 seconds to sustain dopamine retention hooks.',
        'Synthesized authoritative baritone documentary narration with cinematic gravitas.',
        'Layered heartbeat sub-bass, paper turn sound effects, and dramatic orchestral builds.',
      ],
      solution:
        'A hypnotic faceless documentary format proven to hold audience attention above 75% average view duration.',
      result:
        'Full video surpassed 820,000 views on YouTube, earning monetization within 14 days of channel launch.',
      metrics: [
        { label: 'Channel Views', value: '820K+' },
        { label: 'Retention Rate', value: '78%' },
        { label: 'Monetization', value: '14 Days' },
      ],
    },
  },
];

