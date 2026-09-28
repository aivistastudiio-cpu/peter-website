import React from 'react';
import { SERVICES } from '@/data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Check, ArrowRight, Sparkles, Film, Smartphone, Wand2 } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceCategory: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'commercial':
        return <Film className="w-6 h-6 text-sky-400" />;
      case 'ugc':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'animation':
        return <Wand2 className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Production Services"
          title="Engineered for Impact."
          titleHighlight="Powered by AI."
          subtitle="From broadcast-ready luxury commercials to high-converting social creative systems, explore tailored AI video solutions for your brand."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative rounded-3xl p-8 bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5"
            >
              {/* Featured Badge */}
              {service.featuredBadge && (
                <div className="absolute -top-3.5 right-6">
                  <Badge variant="glow">{service.featuredBadge}</Badge>
                </div>
              )}

              {/* Card Header */}
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(service.category)}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-sky-400 font-mono tracking-wide uppercase mb-4">
                  {service.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-3 pt-6 border-t border-white/10 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    What You Receive:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tools Highlight */}
                <div className="pt-4 border-t border-white/5 mb-6">
                  <span className="text-xs font-mono text-slate-500 block mb-2">Key Tools:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlightTools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#141E33] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="md"
                  href="#contact"
                  onClick={() => onSelectService(service.category)}
                  className="w-full justify-center group-hover:border-sky-400/50 group-hover:bg-white/10"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

