'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export const Showreel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="showreel" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Reel"
          title="Studio"
          titleHighlight="Showreel 2026"
          subtitle="A high-intensity showcase of generative video, physics-accurate lighting, and cinematic direction."
        />

        {/* Video Player Card Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0D131F] shadow-2xl shadow-sky-500/10 group">
          {/* Glowing Border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/30 to-blue-600/30 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none" />

          <div className="relative aspect-video w-full bg-black overflow-hidden">
            <video
              ref={videoRef}
              src="/videos/showreel.mp4"
              poster="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"
              loop
              playsInline
              preload="metadata"
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all hover:bg-black/30"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-white backdrop-blur-md shadow-2xl shadow-sky-500/50 hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-sky-300" />
                </div>
                <p className="mt-4 text-sm font-semibold tracking-wider uppercase text-white/90 font-mono">
                  Click to Play Showreel
                </p>
              </div>
            )}

            {/* In-Video Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-300 hidden sm:inline-block">
                  Directed by Peter Ayoade
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Tool Strip below video */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Technologies showcased in showreel:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Google Veo 3', 'Kling AI 2.0', 'Runway Gen-3', 'Luma Dream Machine', 'Topaz 4K'].map((tool) => (
              <Badge key={tool} variant="slate">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

