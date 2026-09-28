import { ServiceOffering } from '@/types';

export const SERVICES: ServiceOffering[] = [
  {
    id: 'ai-commercials',
    category: 'commercial',
    title: 'AI Commercials & Brand Ads',
    subtitle: 'Cinematic brand films, concept ads, and high-impact product reveals.',
    description:
      'Elevate your brand with Hollywood-grade cinematic visuals without multi-month timelines or six-figure physical production crews. We craft bespoke AI commercials with photographic lighting, seamless physics, and custom sound design.',
    deliverables: [
      'Master 4K & 1080p cinematic video exports',
      'Multi-aspect ratio cuts (16:9 widescreen & 9:16 vertical)',
      'Custom sound design, foley & cinematic voiceover sync',
      'Full commercial broadcasting rights',
      'Iterative storyboard & concept approval',
    ],
    idealFor: ['Mid-market & enterprise brands', 'Tech & AI startups launching flagship products', 'Creative marketing agencies'],
    highlightTools: ['Google Veo 3', 'Runway Gen-3', 'Topaz 4K Upscaler', 'DaVinci Resolve'],
    featuredBadge: 'Most Requested',
  },
  {
    id: 'ai-ugc-social',
    category: 'ugc',
    title: 'AI UGC & High-Velocity Social Content',
    subtitle: 'Synthetic lifestyle hooks, social ads, and vertical content engineered for conversions.',
    description:
      'Scale your ad creatives at the speed of social algorithms. We produce high-converting vertical video assets, synthetic lifestyle reviews, and organic-feeling TikTok/Reels content tested for maximum viewer retention and ROAS.',
    deliverables: [
      '9:16 vertical video packages (5, 10, or 20 variants)',
      'High-retention visual hooks within the first 3 seconds',
      'Dynamic on-screen captions & sound design',
      'A/B creative test variations (different actors & settings)',
      'Rapid turnaround within 48–72 hours',
    ],
    idealFor: ['DTC ecommerce brands', 'Growth marketers scaling Meta, TikTok & YouTube Shorts', 'Mobile app publishers'],
    highlightTools: ['Kling AI', 'Pika 2.0', 'ElevenLabs Audio', 'CapCut Studio'],
  },
  {
    id: 'ai-animation-storytelling',
    category: 'animation',
    title: 'AI Animation & Narrative Storytelling',
    subtitle: 'World-building, concept trailers, music video visuals, and story-driven creative productions.',
    description:
      'Bring impossible worlds to life. From surreal anime aesthetic worlds to dark sci-fi concept films, we leverage cutting-edge diffusion models to build rich narrative universes unconstrained by physical reality.',
    deliverables: [
      'Narrative concept trailers & visual pitch decks',
      'Consistent character styling across shots',
      'Surreal world-building & cinematic scene transitions',
      'Orchestral / atmospheric audio synchronization',
      'Behind-the-scenes workflow documentation',
    ],
    idealFor: ['Entertainment & media studios', 'Musicians & artists seeking music video visuals', 'Sci-fi & fantasy storytellers'],
    highlightTools: ['Google Veo 3', 'Luma Dream Machine', 'Midjourney v6.1', 'Runway Gen-3'],
  },
];

