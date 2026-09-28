import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Sparkles, Video, Award, CheckCircle, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#05070B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0D131F] shadow-2xl group">
              <img
                src="/images/peter-ayoade.jpg?v=3"
                alt="Peter Ayoade — AI Video Expert & Creative Director"
                className="w-full aspect-[4/5] object-cover object-top hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent opacity-80" />

              {/* Floating Stat Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0D131F]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block text-sm">Peter Ayoade</span>
                    <span className="text-xs text-sky-400 font-mono">AI Video Expert & Director</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                    <Video className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="ambient-glow bg-sky-500/20 w-72 h-72 -bottom-10 -left-10" />
          </div>

          {/* Narrative Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
              About The Director
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pioneering the Next Era of{' '}
              <span className="text-gradient-cyan">AI-Driven Cinema</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I am an AI Video Expert dedicated to helping brands, tech startups, and visionary storytellers communicate through captivating visual narratives.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              While anyone can generate random clips with simple prompts, producing commercial-grade video requires an uncompromising directorial vision — understanding three-point lighting, virtual lens focal lengths, physical weight, audio dynamics, and seamless pacing.
            </p>

            {/* Expertise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Funnel AI Production</h4>
                  <p className="text-xs text-slate-400 mt-0.5">From script and concept boards to 4K color-graded master exports.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Multi-Model Orchestration</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Veo 3, Kling AI, Runway Gen-3, Luma Dream Machine & Topaz.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Commercial Rights Cleared</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Full commercial ownership for digital broadcast, social & TV.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Agile Studio Turnaround</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Production sprints delivered in 48–72 hours.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Let’s Collaborate on Your Vision
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

