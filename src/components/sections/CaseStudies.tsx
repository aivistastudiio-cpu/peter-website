'use client';

import React from 'react';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Play, Sparkles, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onSelectProject: (project: Project) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectProject }) => {
  const featuredCaseStudies = PROJECTS.filter((p) => p.featured && p.caseStudy);

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Directorial Case Studies"
          title="Problem. Process."
          titleHighlight="Solution. Result."
          subtitle="A behind-the-scenes look at how we deploy neural diffusion models to solve commercial creative challenges with uncompromising visual craft."
        />

        <div className="space-y-16">
          {featuredCaseStudies.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#0D131F] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-sky-400/30 transition-all duration-300"
              >
                {/* Ambient glow accent */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Media Preview Column */}
                  <div
                    className={`lg:col-span-5 relative ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer border border-white/15 group/media shadow-xl bg-black"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/media:bg-black/30 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-white backdrop-blur-md group-hover/media:scale-110 transition-transform">
                          <Play className="w-7 h-7 fill-current ml-1 text-sky-300" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge variant="cyan">{project.categoryLabel}</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Breakdown Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                        Case Study • {project.client}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* 4-Step Narrative Block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Problem */}
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                          1. Problem
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy?.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                          2. AI Solution
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.caseStudy?.solution}
                        </p>
                      </div>
                    </div>

                    {/* Result & Metrics */}
                    <div className="p-4 sm:p-5 rounded-xl bg-sky-950/20 border border-sky-500/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4 text-sky-400" />
                          3. Quantified Client Impact
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {project.caseStudy?.result}
                      </p>

                      {project.caseStudy?.metrics && (
                        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-sky-500/20">
                          {project.caseStudy.metrics.map((metric) => (
                            <div key={metric.label}>
                              <div className="text-lg sm:text-xl font-bold text-sky-400">
                                {metric.value}
                              </div>
                              <div className="text-[10px] sm:text-xs text-slate-400">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Interactive Button */}
                    <div className="pt-2 flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onSelectProject(project)}
                        icon={<Play className="w-3.5 h-3.5 fill-current" />}
                      >
                        Watch Production Breakdown
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

