import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Lightbulb, Film, Sliders, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Concept & AI Storyboarding',
      icon: <Lightbulb className="w-5 h-5 text-sky-400" />,
      description:
        'We define the narrative arc, camera choreography, and visual tone. We generate fast AI concept keyframes to align on aesthetic direction before full video generation.',
    },
    {
      number: '02',
      title: 'Multi-Model Generation',
      icon: <Film className="w-5 h-5 text-sky-400" />,
      description:
        'We deploy the optimal AI model for each specific shot — leveraging Google Veo 3 for pristine lighting, Kling AI for human biomechanics, and Runway Gen-3 for complex camera sweeps.',
    },
    {
      number: '03',
      title: 'Neural Upscaling & Stabilization',
      icon: <Sliders className="w-5 h-5 text-sky-400" />,
      description:
        'Raw diffusion renders undergo temporal coherence correction, 60fps frame interpolation, and native 4K upscaling using Topaz Video AI to eliminate digital artifacts.',
    },
    {
      number: '04',
      title: 'Sound Design & Final Mastering',
      icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />,
      description:
        'Every project receives Hollywood-level audio sweetening, foley effects, synthetic voice sync, and final color science in DaVinci Resolve Studio for flawless broadcast delivery.',
    },
  ];

  const whyChooseMe = [
    {
      title: 'Directorial Eye, Not Just Prompts',
      description: 'Understanding lens choice, lighting ratios, composition, and emotional rhythm distinguishes our work from random AI generations.',
    },
    {
      title: 'Frictionless Turnaround (48–72h)',
      description: 'Iterate creative concepts in days rather than waiting 8 weeks for physical production crews and post houses.',
    },
    {
      title: 'Fractions of Traditional Cost',
      description: 'Achieve $50k+ commercial aesthetic at a fraction of traditional physical film production budgets.',
    },
    {
      title: 'True Multi-Platform Deliverables',
      description: 'Receive 16:9 cinema widescreen, 9:16 vertical TikTok/Reels cuts, and clean uncompressed 4K master files.',
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Creative Methodology"
          title="From Initial Prompt to"
          titleHighlight="4K Cinema Master"
          subtitle="How our production studio takes your high-level vision and transforms it into flawless, commercial-grade visual motion."
        />

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#0D131F] border border-white/10 relative group hover:border-sky-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-bold font-mono text-slate-600 group-hover:text-sky-400/80 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Me Grid */}
        <div className="rounded-3xl bg-[#0D131F] border border-white/10 p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
              The Studio Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Why Brands Choose Peter Ayoade
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              We bridge the gap between bleeding-edge artificial intelligence and high-craft commercial storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseMe.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0 mt-1">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

