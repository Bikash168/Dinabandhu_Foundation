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
      color: "text-blue-600 bg-blue-50 border-blue-200",
      shape: "rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md",
      accent: "from-blue-500/10 to-indigo-500/5",
    },
    {
      icon: ShieldCheck,
      title: "12AA & 80G Certified",
      subtitle: "Indian Income Tax Act 1961 (50% Tax Relief)",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      shape: "rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md",
      accent: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: HeartHandshake,
      title: "CSR Apex Integrator",
      subtitle: "Transparent Grassroots Fund Execution",
      color: "text-amber-600 bg-amber-50 border-amber-200",
      shape: "rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md",
      accent: "from-amber-500/10 to-orange-500/5",
    },
    {
      icon: Clock,
      title: "27+ Years of Legacy",
      subtitle: "Education, Health, Environment & Skills",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      shape: "rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md",
      accent: "from-indigo-500/10 to-purple-500/5",
    }
  ];

  return (
    <div className="w-full bg-slate-50/80 border-y border-slate-200/80 py-4 sm:py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div
                  className={`relative flex items-center gap-3 p-3 bg-gradient-to-br ${b.accent} bg-white ${b.shape} border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div className={`p-2.5 rounded-xl border ${b.color} flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate group-hover:text-blue-700 transition-colors">
                      {b.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      {b.subtitle}
                    </p>
                  </div>
                  {/* Subtle corner badge light */}
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
