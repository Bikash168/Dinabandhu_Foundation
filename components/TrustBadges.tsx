import React from 'react';
import { Award, ShieldCheck, HeartHandshake, BookOpen, Clock } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: "Registered Trust (1999)",
      subtitle: "Indian Trust Act 1882 • Bhubaneswar",
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      icon: ShieldCheck,
      title: "12AA & 80G Certified",
      subtitle: "Indian Income Tax Act 1961 (50% Tax Relief)",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      icon: HeartHandshake,
      title: "CSR Apex Integrator",
      subtitle: "Transparent Grassroots Fund Execution",
      color: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      icon: Clock,
      title: "27+ Years of Legacy",
      subtitle: "Education, Health, Environment & Skills",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition group"
              >
                <div className={`p-2 sm:p-2.5 rounded-lg border ${b.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate">
                    {b.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {b.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
