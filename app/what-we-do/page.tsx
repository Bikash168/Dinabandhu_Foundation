'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Heart, 
  Leaf, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Users,
  Compass,
  Activity
} from 'lucide-react';
import { PILLARS } from '@/data/foundationData';

function WhatWeDoContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'health';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['health', 'environment', 'skills'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const currentPillar = PILLARS.find(p => p.id === activeTab) || PILLARS[0];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-950 text-white py-10 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-emerald-400 font-semibold tracking-wider text-[10px] sm:text-xs uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
              WHAT WE DO
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Empowering People. Protecting Nature. Building a Healthier Future.
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed">
              At Dinabandhu Foundation, we believe that a healthier society, a sustainable environment, and a skilled population are the foundations of meaningful development. Our work is centred around three interconnected pillars across 24 specialized grassroots focus areas.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Pillar Selector Tabs */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center py-2 sm:py-2.5 gap-1.5 sm:gap-4 px-2">
            {PILLARS.map((p) => {
              const isActive = activeTab === p.id;
              const isHealth = p.id === 'health';
              const isEnv = p.id === 'environment';
              const Icon = isHealth ? Heart : isEnv ? Leaf : GraduationCap;
              
              let activeColorClasses = '';
              if (isActive) {
                if (isHealth) activeColorClasses = 'bg-blue-600 text-white shadow-md shadow-blue-500/20';
                else if (isEnv) activeColorClasses = 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20';
                else activeColorClasses = 'bg-amber-600 text-white shadow-md shadow-amber-500/20';
              } else {
                activeColorClasses = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
              }

              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0 ${activeColorClasses}`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Pillar {p.pillarNumber}: {p.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Pillar Mission & Vision Spotlight */}
      <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/80 shadow-md">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  PILLAR {currentPillar.pillarNumber} SPECIFICATION
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">
                  {currentPillar.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                  {currentPillar.shortDesc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <Link
                  href="/get-involved"
                  className="flex-1 sm:flex-none text-center bg-brand-900 hover:bg-brand-800 text-white font-semibold text-xs px-4 sm:px-5 py-2.5 rounded-lg transition"
                >
                  Support This Pillar
                </Link>
                <Link
                  href="/csr-partnerships"
                  className="flex-1 sm:flex-none text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs px-3.5 sm:px-4 py-2.5 rounded-lg border border-slate-300 transition"
                >
                  CSR Collaboration
                </Link>
              </div>
            </div>

            {/* Mission & Vision grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1.5 sm:mb-2">
                  OUR MISSION
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {currentPillar.mission}
                </p>
              </div>
              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1.5 sm:mb-2">
                  OUR VISION
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {currentPillar.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Focus Areas of Selected Pillar */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase bg-slate-100 px-3 py-1 rounded-full">
              GROUND LEVEL INTERVENTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              8 Dedicated Focus Areas Under {currentPillar.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Each focus area features structured community campaigns, trained local volunteers, and measurable grassroots impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentPillar.focusAreas.map((fa) => (
              <div
                key={fa.number}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-400">
                      FOCUS AREA {fa.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-600" />
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {fa.title}
                  </h4>

                  <p className="text-xs text-slate-600 italic">
                    {fa.tagline}
                  </p>

                  <div className="pt-2.5 sm:pt-3 border-t border-slate-200/70">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 sm:mb-2">
                      Key Activities:
                    </span>
                    <ul className="space-y-1 sm:space-y-1.5 text-xs text-slate-700">
                      {fa.initiatives.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Switcher Navigation */}
          <div className="mt-10 sm:mt-16 p-6 sm:p-8 bg-slate-900 rounded-2xl sm:rounded-3xl text-white flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <span className="text-[10px] sm:text-xs text-amber-400 font-bold uppercase tracking-wider block">
                EXPLORE ANOTHER PILLAR
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 sm:mt-1">
                Discover our work across all 3 developmental dimensions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {PILLARS.map(p => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveTab(p.id);
                    window.scrollTo({ top: 250, behavior: 'smooth' });
                  }}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition ${
                    activeTab === p.id 
                      ? 'bg-amber-500 text-slate-950 font-black' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function WhatWeDoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 text-sm">Loading focus areas...</div>}>
      <WhatWeDoContent />
    </Suspense>
  );
}
