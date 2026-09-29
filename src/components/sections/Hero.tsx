'use client';

import React from 'react';
import { Sparkles, Play, Flame, ExternalLink, Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface HeroProps {
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* 1. Brand New High-Visibility Cinematic Background Video Loop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.play().catch(() => {});
            }
          }}
          className="w-full h-full object-cover opacity-75 sm:opacity-70 filter brightness-95 contrast-110 scale-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Scrim & Gradient Overlays — Allows the video to shine through clearly while keeping text crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A0F]/85 via-black/45 to-[#070A0F]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(7,10,15,0.8)_85%)]" />
      </div>

      {/* Ambient Cosmic Background Glows */}
      <div className="ambient-glow bg-sky-500/20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] -top-24 -left-24 z-0 pointer-events-none" />
      <div className="ambient-glow bg-blue-600/15 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] top-1/3 -right-32 z-0 pointer-events-none" />

      {/* 2. Text Overlay Content Layer */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Availability & Fiverr Pro Badge */}
        <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
          <Badge variant="glow" icon={<Flame className="w-3.5 h-3.5 text-sky-400" />}>
            <span>Peter Ayoade — AI Video Expert</span>
          </Badge>
          <a
            href="https://www.fiverr.com/adeshinaayomidv/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 hover:border-emerald-400 transition-all shadow-lg backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Hire on Fiverr</span>
            <ExternalLink className="w-3 h-3 text-emerald-400" />
          </a>
        </div>

        {/* Main Headline as Cinematic Text Overlay */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
          Helping Brands Communicate Through{' '}
          <span className="text-gradient block mt-1.5 sm:mt-2">
            AI-Powered Visual Content
          </span>
        </h1>

        {/* Subtitle Text Overlay */}
        <p className="mt-5 sm:mt-6 text-base sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          Cinematic commercials, high-velocity social content, and narrative world-building engineered with Hollywood-grade AI diffusion pipelines.
        </p>

        {/* CTAs Overlay */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            className="w-full sm:w-auto justify-center shadow-2xl shadow-sky-500/30"
            icon={<Sparkles className="w-4 h-4" />}
          >
            Start a Project
          </Button>

          <a
            href="https://www.fiverr.com/adeshinaayomidv/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center font-semibold rounded-full text-base px-8 py-4 gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-[1.02] border border-emerald-400/50 transition-all duration-300 active:scale-95"
          >
            <span>Order on Fiverr</span>
            <ExternalLink className="w-4 h-4 text-emerald-100" />
          </a>

          <Button
            variant="outline"
            size="lg"
            onClick={onOpenShowreel}
            className="w-full sm:w-auto justify-center backdrop-blur-md bg-black/40 border-white/20 hover:bg-black/60 shadow-xl"
            icon={<Play className="w-4 h-4 fill-current" />}
          >
            Watch 2026 Showreel
          </Button>
        </div>

        {/* Trust Badges / Stats Bar Overlaid on Video */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left sm:text-center">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="text-xl sm:text-3xl font-bold text-white font-mono">100%</div>
            <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider mt-0.5">AI Generated</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="text-xl sm:text-3xl font-bold text-sky-400 font-mono">4K Cinema</div>
            <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider mt-0.5">Mastering Resolution</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="text-xl sm:text-3xl font-bold text-white font-mono">48–72h</div>
            <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider mt-0.5">Rapid Turnaround</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="text-xl sm:text-3xl font-bold text-sky-400 font-mono">Top 1%</div>
            <div className="text-[11px] sm:text-xs text-slate-300 uppercase tracking-wider mt-0.5">Veo 3 & Kling Workflow</div>
          </div>
        </div>
      </div>
    </section>
  );
};
