'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types';
import { X, Sparkles, CheckCircle2, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark Blur Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0D131F] border border-white/15 shadow-2xl shadow-sky-500/10 z-10 text-white flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0D131F]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <Badge variant="cyan">{project.categoryLabel}</Badge>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {project.duration}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full bg-black">
          <div className={`${project.aspectRatio === '9:16' ? 'max-w-md mx-auto aspect-[9/16]' : 'aspect-video'}`}>
            <video
              key={project.videoUrl}
              src={project.videoUrl}
              poster={project.thumbnail}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-none"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Client */}
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-sky-400">
              Client: {project.client}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">{project.title}</h3>
            <p className="mt-2 text-slate-300 text-base leading-relaxed">{project.description}</p>
          </div>

          {/* AI Tools Used */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-400" />
              AI Production Pipeline
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#141E33] border border-white/10 text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Breakdown (If available) */}
          {project.caseStudy && (
            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-400" />
                  Case Study Breakdown
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Problem */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    The Challenge
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    The AI Solution
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Production Process Steps */}
              <div className="p-5 rounded-2xl bg-[#141E33]/40 border border-white/5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Directorial & Prompting Process
                </span>
                <ul className="space-y-2.5">
                  {project.caseStudy.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 text-xs flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result & Metrics */}
              <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    The Result & Client Impact
                  </span>
                  <p className="text-sm text-slate-200 mt-1">{project.caseStudy.result}</p>
                </div>

                {project.caseStudy.metrics && (
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-sky-500/20">
                    {project.caseStudy.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-sky-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Want a similar cinematic production for your brand?
            </p>
            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={onClose}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project Like This
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

