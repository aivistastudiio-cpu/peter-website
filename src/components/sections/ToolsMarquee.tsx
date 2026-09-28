'use client';

import React from 'react';
import { AI_TOOLS } from '@/data/tools';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Cpu, Sparkles, Layers, Zap } from 'lucide-react';

export const ToolsMarquee: React.FC = () => {
  return (
    <section id="tools" className="py-20 relative bg-[#05070B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          badge="AI Tech Stack"
          title="Mastering the State of the Art in"
          titleHighlight="Generative Video"
          subtitle="We combine the world's most advanced neural video models with classical cinematography and color grading to produce results that transcend generic AI outputs."
        />

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AI_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="p-6 rounded-2xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {tool.version}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-sky-400 font-mono mt-0.5 mb-3">{tool.tagline}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">{tool.category}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

