import React from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Endorsements"
          title="What Collaborators Say About"
          titleHighlight="Our Work"
          subtitle="Real feedback from creative directors, agency founders, and growth marketing heads who partnered with our AI video studio."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Badge variant="cyan">{t.projectCategory}</Badge>
                </div>

                <Quote className="w-8 h-8 text-sky-400/30 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-slate-400">
                    {t.role} • <span className="text-sky-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

