'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import { Project, ProjectCategory } from '@/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Play, Sparkles, Clock, ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercials & Ads' },
    { id: 'ugc', label: 'UGC & Social' },
    { id: 'animation', label: 'Animation & Narrative' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 relative bg-[#05070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Selected Productions"
          title="Curated AI Video"
          titleHighlight="Portfolio"
          subtitle="Explore recent commercial spots, high-velocity social campaigns, and conceptual world-building. Click any project for the full video and case breakdown."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-md shadow-sky-500/25 border border-sky-300/30'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-3xl overflow-hidden bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  {/* Poster Image */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      isHovered ? 'opacity-20' : 'opacity-100'
                    }`}
                    loading="lazy"
                  />

                  {/* Micro Video Hover Preview */}
                  {isHovered && project.previewVideoUrl && (
                    <video
                      src={project.previewVideoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* Category Pill Over Media */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="cyan">{project.categoryLabel}</Badge>
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>{project.duration}</span>
                  </div>

                  {/* Centered Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-sky-500/30 group-hover:border-sky-400/60 transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5 text-sky-300" />
                    </div>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-mono text-sky-400">{project.client}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tool Tags */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141E33] text-slate-300 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#141E33] text-slate-400 border border-white/5">
                        +{project.tools.length - 3}
                      </span>
                    )}
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

