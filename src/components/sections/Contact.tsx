'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Calendar,
  DollarSign,
  Sparkles,
  ExternalLink,
  Wand2,
  RotateCcw,
} from 'lucide-react';

interface ContactProps {
  selectedServiceCategory?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServiceCategory }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: selectedServiceCategory || 'commercial',
    budget: '$1k-$3k',
    timeline: 'Within 2-3 weeks',
    description: '',
  });

  const sampleBriefs = {
    commercial: {
      name: 'Alex Rivera',
      email: 'alex@luminarybrands.com',
      company: 'Luminary Watches',
      projectType: 'commercial',
      budget: '$3k-$5k',
      timeline: 'Within 1-2 weeks',
      description:
        'We need a 30-second photorealistic AI commercial for our upcoming luxury chronograph launch. We want microscopic macro shots of the sapphire crystal, floating volumetric dials, and dramatic dark cinematic studio lighting similar to your Chronos Noir case study.',
    },
    ugc: {
      name: 'Maya Chen',
      email: 'm.chen@glowskin.io',
      company: 'GlowSkin Labs',
      projectType: 'ugc',
      budget: '$1k-$3k',
      timeline: 'Urgent (48-72 hours)',
      description:
        'Looking for 10 vertical 9:16 AI UGC ads for TikTok and Meta Reels. We want realistic skincare application demonstrations with natural voices and strong hook variations testing 3 different value propositions.',
    },
    animation: {
      name: 'Marcus Brody',
      email: 'marcus@nebula-media.com',
      company: 'Nebula Creative Studio',
      projectType: 'animation',
      budget: '$5k+',
      timeline: 'Within 2-3 weeks',
      description:
        'We are pitching an original cyberpunk sci-fi IP to streaming executives. We require a 60-second high-intensity trailer with consistent character design, flying vehicular traffic, and moody rain-soaked neon aesthetics.',
    },
  };

  const handlePreFill = (category: 'commercial' | 'ugc' | 'animation') => {
    setFormData(sampleBriefs[category]);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'commercial',
      budget: '$1k-$3k',
      timeline: 'Within 2-3 weeks',
      description: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hi Peter, I would like to discuss an AI video project.
Name: ${formData.name || 'Visitor'}
Company: ${formData.company || 'N/A'}
Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Brief: ${formData.description || 'Discussing new project'}`;

    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#05070B] overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow bg-sky-500/15 w-[500px] h-[500px] bottom-0 right-0 pointer-events-none" />
      <div className="ambient-glow bg-blue-600/10 w-[400px] h-[400px] top-1/4 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact & Inquiries"
          title="Have a Project in Mind?"
          titleHighlight="Let's Build It."
          subtitle="Fill out the project brief below, hire directly on Fiverr, or message on WhatsApp. We analyze your requirements and respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column — Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0D131F] border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block mb-1">
                  Immediate Inquiries
                </span>
                <h3 className="text-2xl font-bold text-white">Direct Channels</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Choose your preferred way to connect. We are ready to bring your vision to life.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* 1. Fiverr Official Gig / Profile Action */}
                <a
                  href="https://www.fiverr.com/adeshinaayomidv/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all text-white group shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg font-serif">
                      fi
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm block">Order on Fiverr</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/30 text-emerald-300">
                          Verified
                        </span>
                      </div>
                      <span className="text-xs text-emerald-400 font-mono">
                        fiverr.com/adeshinaayomidv
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                </a>

                {/* 2. WhatsApp Action */}
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-sm block">Chat on WhatsApp</span>
                      <span className="text-xs text-sky-400 font-mono">Direct chat</span>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                </a>

                {/* 3. Direct Email Action */}
                <a
                  href={`mailto:peter@ayoade.studio?subject=AI%20Video%20Project%20Inquiry%20from%20${encodeURIComponent(formData.name || 'Client')}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-sm block">Direct Studio Email</span>
                      <span className="text-xs text-slate-400 font-mono">peter@ayoade.studio</span>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Response Time Guarantee */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Standard response time: within 12–24 business hours.</span>
              </div>
            </div>

            {/* Studio Process Snapshot */}
            <div className="p-6 rounded-3xl bg-[#0D131F]/50 border border-white/5 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                What Happens Next?
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  1. Creative & Technical Feasibility Review
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  2. Detailed Cost & Timeline Proposal
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  3. Concept Keyframes & Storyboard Alignment
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column — Project Brief Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D131F] border border-white/10 shadow-2xl relative">
              {/* Quick Fill Sample Brief Helper Bar */}
              <div className="mb-6 pb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Quick Fill Sample Brief:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handlePreFill('commercial')}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 border border-sky-500/30 transition-all"
                  >
                    Commercial
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreFill('ugc')}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border border-blue-500/30 transition-all"
                  >
                    UGC / Social
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreFill('animation')}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/30 transition-all"
                  >
                    Animation
                  </button>
                  {formData.name && (
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-2 py-1 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all flex items-center gap-1"
                      title="Clear form"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/40 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Inquiry Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>.
                    Peter Ayoade will review your brief and contact you at{' '}
                    <span className="text-sky-400">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                    <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                    <a
                      href="https://www.fiverr.com/adeshinaayomidv/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all"
                    >
                      <span>Also Message on Fiverr</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="project-inquiry"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="project-inquiry" />

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-[#141E33]/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Email Address <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@brand.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#141E33]/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Company or Brand
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Dynamics"
                        className="w-full px-4 py-3 rounded-xl bg-[#141E33]/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Project Category
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#141E33]/60 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      >
                        <option value="commercial">AI Commercials & Brand Ads</option>
                        <option value="ugc">AI UGC & Social Content</option>
                        <option value="animation">AI Animation & Storytelling</option>
                        <option value="other">Full Retainer / Custom Project</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-sky-400" />
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#141E33]/60 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      >
                        <option value="<$1k">&lt; $1,000</option>
                        <option value="$1k-$3k">$1,000 – $3,000</option>
                        <option value="$3k-$5k">$3,000 – $5,000</option>
                        <option value="$5k+">$5,000+ (Enterprise / Retainer)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        Target Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#141E33]/60 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      >
                        <option value="Urgent (48-72 hours)">Urgent (48–72 hours)</option>
                        <option value="Within 1-2 weeks">Within 1–2 weeks</option>
                        <option value="Within 2-3 weeks">Within 2–3 weeks</option>
                        <option value="Flexible">Flexible / Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Project Brief & Goals <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Share details about your product, desired visual tone, reference links, and what you want the video to accomplish..."
                      className="w-full px-4 py-3 rounded-xl bg-[#141E33]/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button & Alternative Actions */}
                  <div className="space-y-3">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      className="w-full justify-center"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit Project Inquiry
                    </Button>

                    <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-400">
                      <span>Prefer Fiverr escrow protection?</span>
                      <a
                        href="https://www.fiverr.com/adeshinaayomidv/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 underline underline-offset-2"
                      >
                        Order via Fiverr Profile
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                      Your details are kept completely confidential. NDA available upon request.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
