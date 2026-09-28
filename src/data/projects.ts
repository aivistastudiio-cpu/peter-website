import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'chronos-luxury-timepiece',
    slug: 'chronos-luxury-timepiece',
    title: 'Chronos Noir — Luxury Timepiece Reveal',
    client: 'Aethel Watches',
    category: 'commercial',
    categoryLabel: 'AI Commercial',
    tagline: 'Precision mechanical luxury captured through microscopic volumetric lighting.',
    description:
      'A photorealistic commercial for a boutique Swiss timepiece maker. Zero physical watch prototypes were filmed. We engineered microscopic gear motion, liquid glass refraction, and obsidian metallic reflections with neural diffusion.',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/chronos.mp4',
    previewVideoUrl: '/videos/chronos.mp4',
    duration: '0:35',
    aspectRatio: '16:9',
    tools: ['Google Veo 3', 'Runway Gen-3', 'Topaz Video AI', 'DaVinci Resolve'],
    featured: true,
    caseStudy: {
      problem:
        'Aethel Watches needed a high-tier broadcast launch film 6 weeks before physical production prototypes were ready from Geneva, with a traditional agency quote exceeding $45,000.',
      process: [
        'Rendered reference macro CAD renders to train spatial coherence.',
        'Generated 40+ volumetric lighting passes in Google Veo 3 focusing on sapphire crystal refraction.',
        'Executed motion-brush gear rotation in Runway Gen-3 Alpha.',
        'Stabilized micro-jitter and upscaled to native 4K 60fps via Topaz Video AI.',
        'Graded in DaVinci Resolve with acoustic analog clock tick sound design.',
      ],
      solution:
        'A seamless 35-second luxury commercial film highlighting the intricate tourbillon movement and nocturnal luminescent dials.',
      result:
        'Delivered in 6 business days for less than 15% of traditional production cost; pre-orders for the limited edition sold out within 48 hours.',
      metrics: [
        { label: 'Turnaround Time', value: '6 Days' },
        { label: 'Cost Reduction', value: '82%' },
        { label: 'Pre-Order Sellout', value: '100%' },
      ],
    },
  },
  {
    id: 'lumina-skin-ugc',
    slug: 'lumina-skin-ugc',
    title: 'Lumina Hydrate — High-Velocity UGC Campaign',
    client: 'Lumina Skincare',
    category: 'ugc',
    categoryLabel: 'AI UGC & Social',
    tagline: 'Hyper-converting social ads blending synthetic creators with organic lifestyle aesthetic.',
    description:
      'A performance marketing campaign composed of 12 distinct short-form vertical creatives. Featuring diverse synthetic influencers demonstrating product texture, hydration before/afters, and authentic unboxing hooks.',
    thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/videos/lumina.mp4',
    previewVideoUrl: '/videos/lumina.mp4',
    duration: '0:22',
    aspectRatio: '9:16',
    tools: ['Kling AI 1.5', 'Pika 2.0', 'ElevenLabs', 'CapCut Studio'],
    featured: true,
    caseStudy: {
      problem:
        'Lumina was facing creative fatigue across Meta and TikTok ads, seeing CAC (customer acquisition cost) spike by 40% due to traditional UGC creators taking 3 weeks per iteration.',
      process: [
        'Analyzed top-performing retention hooks across beauty TikToks.',
        'Generated lifelike facial micro-expressions and cream application motion using Kling AI.',
        'Synthesized natural, breathing voiceovers with subtle speech imperfections via ElevenLabs.',
        'Exported 12 creative variations testing 4 different hooks and 3 different value propositions.',
      ],
      solution:
        'A library of 12 vertical UGC assets delivered ready-to-run with dynamic captions and authentic social pacing.',
      result:
        'Cut Customer Acquisition Cost (CAC) by 34% and generated over 2.4 million paid impressions in the first 14 days.',
      metrics: [
        { label: 'CAC Reduction', value: '-34%' },
        { label: 'Impression Count', value: '2.4M+' },
        { label: 'Variants Tested', value: '12 Hooks' },
      ],
    },
  },
  {
    id: 'solaris-2140',
    slug: 'solaris-2140',
    title: 'Solaris 2140 — Cybernetic World Concept Film',
    client: 'NeoMedia Studios',
    category: 'animation',
    categoryLabel: 'AI Animation & Narrative',
    tagline: 'A dystopian cyberpunk cinematic trailer exploring post-organic human consciousness.',
    description:
      'An epic 60-second sci-fi concept trailer featuring vast megacities, flying vehicular traffic, cybernetic character continuity, and atmospheric rain-soaked neon street cinematography.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/solaris.mp4',
    previewVideoUrl: '/videos/solaris.mp4',
    duration: '1:02',
    aspectRatio: '16:9',
    tools: ['Google Veo 3', 'Luma Dream Machine', 'Runway Gen-3', 'Topaz Video AI'],
    featured: true,
    caseStudy: {
      problem:
        'NeoMedia needed to pitch an original IP sci-fi series to streaming networks. Traditional concept art stills failed to convey the visceral momentum and atmosphere required to greenlight the pilot.',
      process: [
        'Built consistent character loras and prompt matrices across Midjourney and Veo 3.',
        'Choreographed high-speed camera tracking through futuristic skyscrapers in Luma Dream Machine.',
        'Engineered synthetic rain particle dynamics and reflective neon puddles.',
        'Layered custom cinematic sound design and an original synthesizer score.',
      ],
      solution:
        'A full 60-second broadcast-ready cinematic concept trailer that positioned the intellectual property as an elite multi-million-dollar production.',
      result:
        'Successfully optioned for series development by a major European streaming distributor.',
      metrics: [
        { label: 'Greenlight Status', value: 'Optioned' },
        { label: 'Resolution', value: '4K DCI' },
        { label: 'Shots Generated', value: '84 Passes' },
      ],
    },
  },
  {
    id: 'apex-velocity-bev',
    slug: 'apex-velocity-bev',
    title: 'Apex Kinetic — Cyber Electric Hypercar',
    client: 'Apex Automotive',
    category: 'commercial',
    categoryLabel: 'AI Commercial',
    tagline: 'High-speed track dynamics and aerodynamic wind-tunnel visualization.',
    description:
      'Dynamic automotive advertisement featuring high-speed drift physics, neon-lit tunnel speed passes, and simulated computational fluid dynamics airflow over carbon fiber surfaces.',
    thumbnail: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/apex.mp4',
    previewVideoUrl: '/videos/apex.mp4',
    duration: '0:30',
    aspectRatio: '16:9',
    tools: ['Runway Gen-3', 'Google Veo 3', 'DaVinci Resolve'],
    featured: false,
  },
  {
    id: 'pulse-beverage-refresh',
    slug: 'pulse-beverage-refresh',
    title: 'Pulse Energy — Liquid Splash Simulation',
    client: 'Pulse Drink Co.',
    category: 'commercial',
    categoryLabel: 'AI Commercial',
    tagline: 'Hyper-slow-motion fruit collision and carbonated liquid splash dynamics.',
    description:
      'Ultra-high-speed 1000fps simulation of fresh citrus bursting into carbonated mineral water, featuring crystalline ice cubes, effervescent bubbles, and macro condensation droplets.',
    thumbnail: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/pulse.mp4',
    previewVideoUrl: '/videos/pulse.mp4',
    duration: '0:20',
    aspectRatio: '16:9',
    tools: ['Google Veo 3', 'Pika 2.0', 'Topaz Video AI'],
    featured: false,
  },
  {
    id: 'zenith-ai-saas',
    slug: 'zenith-ai-saas',
    title: 'Zenith OS — Next-Gen AI Workspace Reveal',
    client: 'Zenith Technologies',
    category: 'ugc',
    categoryLabel: 'AI UGC & Social',
    tagline: 'Founder-led product walkthrough with futuristic holographic interface overlays.',
    description:
      'Fast-paced social launch video featuring an AI-generated founder presenting the software inside a modern architectural studio, interspersed with holographic UI animations.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/videos/zenith.mp4',
    previewVideoUrl: '/videos/zenith.mp4',
    duration: '0:28',
    aspectRatio: '9:16',
    tools: ['Kling AI', 'ElevenLabs', 'Runway Gen-3'],
    featured: false,
  },
];
