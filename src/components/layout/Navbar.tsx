'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Video, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Tools', href: '#tools' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A0F]/85 backdrop-blur-lg border-b border-white/10 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Studio Brand Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold tracking-tight text-white text-base sm:text-lg flex items-center gap-1.5">
                <span>PETER AYOADE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              </div>
              <p className="text-[10px] sm:text-xs text-sky-400/90 tracking-wider uppercase font-mono">
                AI Video Studio
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.fiverr.com/adeshinaayomidv/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 hover:border-emerald-400 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Fiverr</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              icon={<Sparkles className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D131F]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <a
              href="https://www.fiverr.com/adeshinaayomidv/"
              target="_blank"
              rel="noreferrer"
              className="w-full justify-center inline-flex items-center gap-2 py-3 rounded-full text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
            >
              <span>Order on Fiverr</span>
            </a>
            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

