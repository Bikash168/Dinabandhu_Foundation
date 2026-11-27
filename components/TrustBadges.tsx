'use client';

import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Clock, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: "Registered Trust (1999)",
      subtitle: "Indian Trust Act 1882 • Bhubaneswar",
      color: "text-brand-800 bg-brand-50 border-brand-200",
      shape: "rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md",
      accent: "from-brand-500/10 to-brand-700/5",
    },
    {
      icon: ShieldCheck,
      title: "12AA & 80G Certified",
      subtitle: "Indian Income Tax Act 1961 (50% Tax Relief)",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      shape: "rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md",
      accent: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: HeartHandshake,
      title: "CSR Apex Integrator",
      subtitle: "Transparent Grassroots Fund Execution",
      color: "text-brand-700 bg-brand-50 border-brand-300",
      shape: "rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md",
      accent: "from-amber-500/10 to-orange-500/5",
    },
    {
      icon: Clock,
      title: "27+ Years of Legacy",
      subtitle: "Education, Health, Environment & Skills",
      color: "text-brand-900 bg-cream-100 border-cream-300",
      shape: "rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md",
      accent: "from-brand-600/10 to-brand-900/5",
    }
  ];

  return (
    <div className="w-full bg-cream-100/90 border-y border-cream-300/80 py-4 sm:py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div
                  className={`relative flex items-center gap-3 p-3 bg-gradient-to-br ${b.accent} bg-white ${b.shape} border border-cream-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div className={`p-2.5 rounded-xl border ${b.color} flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate group-hover:text-brand-800 transition-colors">
                      {b.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-cream-700 mt-0.5 line-clamp-1">
                      {b.subtitle}
                    </p>
                  </div>
                  {/* Subtle corner badge light */}
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-cream-300 group-hover:bg-brand-800 transition-colors" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
