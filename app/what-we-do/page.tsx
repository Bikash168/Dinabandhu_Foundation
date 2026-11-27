'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import ScrollReveal from '@/components/ScrollReveal';
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

  const pillarPhotos: Record<string, Array<{ src: string; title: string; subtitle: string }>> = {
    health: [
      {
        src: '/images/drive/photo_15_472067853_122132348918513320_7317603235333479596_n.jpg',
        title: 'Mobile Diagnostic Clinic in Action',
        subtitle: 'Preventive doctor screenings across coastal hamlets'
      },
      {
        src: '/images/drive/photo_6_385022059_819309399981698_5885252841370628177_n.jpg',
        title: 'Maternal & Community Awareness',
        subtitle: 'Doorstep preventive guidance & safe water education'
      }
    ],
    environment: [
      {
        src: '/images/drive/photo_47_IMG_20251219_155359.jpg',
        title: 'Youth Mangrove & Forest Afforestation',
        subtitle: 'Restoring natural cyclone protection in coastal belt'
      },
      {
        src: '/images/drive/photo_18_475788975_122138965892513320_4797780344660842673_n.jpg',
        title: 'Indigenous Sapling Distribution',
        subtitle: 'Vermicomposting workshops for smallholder farmers'
      }
    ],
    skills: [
      {
        src: '/images/drive/photo_38_IMG_20250712_125403.jpg',
        title: 'Women SHG Skill & Stitching Hub',
        subtitle: 'Garment manufacturing & self-reliance training'
      },
      {
        src: '/images/drive/photo_43_IMG_20250712_134816.jpg',
        title: 'Technical Hands-on Vocational Lab',
        subtitle: 'Practical trade & electrical skilling with industry equipment'
      }
    ]
  };

  const activePhotos = pillarPhotos[activeTab] || pillarPhotos.health;

  return (
    <div className="w-full overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-brand-950 via-brand-900 to-[#23120f] text-white py-10 sm:py-12 lg:py-14 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-cream-200 font-semibold tracking-wider text-[10px] sm:text-xs uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cream-300" />
                <span>WHAT WE DO • 24 FOCUS TRACKS</span>
              </span>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Empowering People. Protecting Nature. Building a Healthier Future.
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-cream-200 leading-relaxed">
                At Dinabandhu Foundation, we believe that a healthier society, a sustainable environment, and a skilled population are the foundations of meaningful development. Our work is centred around three interconnected pillars across 24 specialized grassroots focus areas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Interactive Pillar Selector Tabs */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-cream-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center py-2.5 sm:py-3 gap-2 sm:gap-4 px-2">
            {PILLARS.map((p) => {
              const isActive = activeTab === p.id;
              const isHealth = p.id === 'health';
              const isEnv = p.id === 'environment';
              const Icon = isHealth ? Heart : isEnv ? Leaf : GraduationCap;
              
              let activeColorClasses = '';
              if (isActive) {
                if (isHealth) activeColorClasses = 'bg-brand-800 text-cream-50 shadow-lg shadow-brand-800/30 scale-105';
                else if (isEnv) activeColorClasses = 'bg-brand-900 text-cream-50 shadow-lg shadow-brand-900/30 scale-105';
                else activeColorClasses = 'bg-brand-700 text-cream-50 shadow-lg shadow-brand-700/30 scale-105';
              } else {
                activeColorClasses = 'bg-cream-100 text-cream-900 hover:bg-cream-200';
              }

              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${activeColorClasses}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>Pillar {p.pillarNumber}: {p.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Selected Pillar Spotlight in Asymmetric Curved Shell */}
      <section className="py-8 sm:py-12 bg-cream-100/60 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <ScrollReveal animation="zoom-in">
            <div className="bg-white rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl p-5 sm:p-8 lg:p-10 border-2 border-cream-200 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-cream-100">
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-800 uppercase tracking-widest bg-cream-100 px-2.5 py-1 rounded-md border border-cream-200">
                    PILLAR {currentPillar.pillarNumber} SPECIFICATION
                  </span>
                  <h2 className="text-xl sm:text-3xl font-extrabold text-brand-950 mt-2">
                    {currentPillar.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-cream-900/80 max-w-2xl mt-1">
                    {currentPillar.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <Link
                    href="/get-involved"
                    className="flex-1 sm:flex-none text-center bg-brand-800 hover:bg-brand-900 text-cream-50 font-semibold text-xs px-5 py-2.5 rounded-full transition shadow-md"
                  >
                    Support This Pillar
                  </Link>
                  <Link
                    href="/csr-partnerships"
                    className="flex-1 sm:flex-none text-center bg-cream-100 hover:bg-cream-200 text-brand-950 font-semibold text-xs px-4 py-2.5 rounded-full border border-cream-300 transition"
                  >
                    CSR Collaboration
                  </Link>
                </div>
              </div>

              {/* Mission & Vision in Asymmetric Scallop Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="bg-cream-50 p-5 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm border border-brand-200 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-800 block mb-1.5">
                    OUR MISSION
                  </span>
                  <p className="text-xs sm:text-sm text-cream-950 font-medium leading-relaxed">
                    {currentPillar.mission}
                  </p>
                </div>
                <div className="bg-cream-50 p-5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm border border-cream-300 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-800 block mb-1.5">
                    OUR VISION
                  </span>
                  <p className="text-xs sm:text-sm text-cream-950 font-medium leading-relaxed">
                    {currentPillar.vision}
                  </p>
                </div>
              </div>

              {/* Real Field Action Photos for This Pillar */}
              <div className="pt-6 sm:pt-8 border-t border-cream-100 mt-6 sm:mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                    Live Documentation: {currentPillar.name} in Action
                  </span>
                  <Link href="/media?tab=gallery" className="text-xs font-semibold text-brand-800 hover:underline flex items-center gap-1">
                    <span>View More in Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {activePhotos.map((photo, i) => (
                    <div key={i} className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-md transition">
                      <div className="relative aspect-[16/9] w-full bg-cream-200 overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3.5">
                        <h4 className="font-bold text-brand-950 text-xs sm:text-sm group-hover:text-brand-800 transition-colors">
                          {photo.title}
                        </h4>
                        <p className="text-[11px] text-cream-700 mt-0.5">
                          {photo.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. 8 Focus Areas with Distinct Pillar-Specific Shapes */}
      <section className="py-10 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
                GROUND LEVEL INTERVENTIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 tracking-tight">
                8 Dedicated Focus Areas Under {currentPillar.name}
              </h3>
              <p className="text-xs sm:text-sm text-cream-800">
                Each focus area features structured community campaigns, trained local volunteers, and measurable grassroots impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentPillar.focusAreas.map((fa, idx) => {
              // Custom shapes based on active pillar
              const isHealth = activeTab === 'health';
              const isEnv = activeTab === 'environment';
              
              const shapeClass = isHealth
                ? 'rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-l-4 border-l-brand-800'
                : isEnv
                ? 'rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm border-l-4 border-l-brand-700'
                : 'rounded-2xl rounded-tr-none border-t-4 border-t-brand-800';

              return (
                <ScrollReveal key={fa.number} animation="fade-up" delay={idx * 50}>
                  <div
                    className={`bg-white hover:bg-cream-100/50 ${shapeClass} p-5 sm:p-6 border border-cream-200 hover:border-brand-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-cream-700 uppercase tracking-widest bg-cream-100 px-2 py-0.5 rounded shadow-sm">
                          FOCUS AREA {fa.number}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-brand-800" />
                      </div>

                      <h4 className="text-base font-bold text-brand-950 leading-snug group-hover:text-brand-800 transition-colors">
                        {fa.title}
                      </h4>

                      <p className="text-xs text-cream-700 italic">
                        {fa.tagline}
                      </p>

                      <div className="pt-2.5 border-t border-cream-200">
                        <span className="text-[10px] font-bold text-cream-600 uppercase tracking-wider block mb-1.5">
                          Key Activities:
                        </span>
                        <ul className="space-y-1 text-xs text-cream-900">
                          {fa.initiatives.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-800 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bottom Switcher Navigation */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="mt-10 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-brand-950 via-brand-900 to-[#23120f] rounded-3xl text-white flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 shadow-xl border border-brand-800">
              <div className="text-center sm:text-left">
                <span className="text-[10px] sm:text-xs text-cream-200 font-bold uppercase tracking-wider block">
                  EXPLORE ANOTHER PILLAR
                </span>
                <p className="text-xs sm:text-sm text-cream-100 mt-1">
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
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeTab === p.id 
                        ? 'bg-cream-100 text-brand-950 font-black shadow-md scale-105' 
                        : 'bg-white/10 text-cream-200 hover:bg-white/20'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

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
