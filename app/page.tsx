'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Leaf, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Users, 
  MapPin, 
  Building2, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Globe2,
  Quote,
  Clock,
  Compass,
  Activity
} from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDATION_META, FOUNDER_HERITAGE, VERTICALS, PILLARS, UN_SDGS, ODISHA_DISTRICTS } from '@/data/foundationData';

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH ANIMATED AMBIENT BLOBS & ORGANIC SHIELD SHOWCASE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-slate-900 text-white py-8 sm:py-10 lg:py-12 xl:py-14">
        {/* Animated ambient glowing blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-blob" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">
              <ScrollReveal animation="fade-down" delay={50}>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wide uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow flex-shrink-0" />
                  <span>EST. 1999 • BHUBANESWAR, ODISHA</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Nurturing Healthy Communities, <span className="text-emerald-400">Resilient Ecosystems</span> & <span className="text-blue-300">Skilled Lives</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
                  Founded by Mrs. Shovana Devi in memory of (Late) Sri Dinabandhu Panigrahi to bridge world-standard education with grassroots socio-economic empowerment across Health, Environment, and Skill Development.
                </p>
              </ScrollReveal>

              {/* CTAs with hover bounce */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                  <Link
                    href="/what-we-do"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm group"
                  >
                    <span>Explore What We Do</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/csr-partnerships"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-white/20 backdrop-blur-sm transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm"
                  >
                    <span>Corporate CSR Desk</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust Pill Highlights */}
              <ScrollReveal animation="fade-up" delay={250}>
                <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>12AA & 80G Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>Indian Trust Act 1882</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>10 Odisha Districts</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Asymmetric Organic Shield Showcase with Rotating Orbital Ring */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <ScrollReveal animation="zoom-in" delay={150}>
                <div className="relative w-full max-w-sm lg:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 lg:p-6 rounded-[2.5rem] rounded-tr-lg rounded-bl-lg shadow-2xl text-center space-y-3 sm:space-y-4 hover:shadow-blue-500/20 transition-all duration-300">
                  
                  {/* Logo with pulsing glow & Orbital Ring */}
                  <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 via-emerald-500/30 to-amber-500/40 rounded-full blur-xl animate-pulse-slow" />
                    <div className="absolute -inset-1.5 border-2 border-dashed border-white/30 rounded-full animate-spin-slow pointer-events-none" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white p-1 rounded-full shadow-2xl flex items-center justify-center ring-4 ring-white/20">
                      <Image
                        src="/images/logo.png"
                        alt="Dinabandhu Foundation Official Seal with SDG Wheel"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                        priority
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                      Dinabandhu Foundation
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">
                      For Educational Research & Socio Economic Development
                    </p>
                  </div>

                  {/* Asymmetric Pill Capsule Metrics */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-left">
                    <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/10 p-2 sm:p-2.5 rounded-2xl rounded-tr-sm border border-amber-500/30 hover:border-amber-400 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-amber-300 block">27+</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-200 font-medium">Years of Legacy</span>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 p-2 sm:p-2.5 rounded-2xl rounded-tl-sm border border-emerald-500/30 hover:border-emerald-400 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-emerald-300 block">2,000+</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-200 font-medium">Youth in Green Skills</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 p-2 sm:p-2.5 rounded-2xl rounded-br-sm border border-blue-500/30 hover:border-blue-400 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-blue-300 block">10,000+</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-200 font-medium">Graduates Produced</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/10 p-2 sm:p-2.5 rounded-2xl rounded-bl-sm border border-purple-500/30 hover:border-purple-400 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-purple-300 block">200+</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-200 font-medium">Villages Empowered</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold group"
                    >
                      <span>Read Our Heritage & Governance</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES COMPONENT */}
      <TrustBadges />

      {/* 3. CORE METRICS WITH STAGGERED HEX-CAPSULE BADGES */}
      <section className="py-8 sm:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
              {FOUNDATION_META.stats.map((stat, idx) => {
                const borderColors = [
                  'border-l-blue-600 hover:border-blue-600',
                  'border-l-emerald-600 hover:border-emerald-600',
                  'border-l-amber-600 hover:border-amber-600',
                  'border-l-indigo-600 hover:border-indigo-600',
                  'border-l-purple-600 hover:border-purple-600',
                  'border-l-teal-600 hover:border-teal-600',
                ];
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
                    <div className={`p-3.5 rounded-2xl rounded-tr-none bg-slate-50 border border-slate-200 border-l-4 ${borderColors[idx % borderColors.length]} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
                      <span className="text-2xl sm:text-3xl font-black text-brand-900 block tracking-tight group-hover:scale-105 transition-transform">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-700 block mt-1 line-clamp-1">
                        {stat.label}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-slate-500 block mt-0.5 line-clamp-1">
                        {stat.detail}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. OUR HERITAGE - ARCHIVAL SCROLL-ARCH SHAPE */}
      <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Soft background shape */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal animation="fade-right">
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                  OUR HERITAGE & PURPOSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mt-2">
                  Inspired by a Visionary Educator from Coastal Odisha
                </h2>
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed mt-2">
                  Conceptualised in 1999 by <strong>Mrs. Shovana Devi</strong> in memory of her late husband <strong>(Late) Sri Dinabandhu Panigrahi (1917–1997)</strong>—a Commonwealth Scholar at the University of Leeds (1946) from Bhadrak—Dinabandhu Foundation transforms lives through formal technical education, vocational training, and grassroots social welfare.
                </p>

                <div className="space-y-2.5 pt-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                    <span>Governed by Trustees Dr. B.B. Panigrahi, IRS (Retd.) and Mrs. Smita Panigrahi</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                    <span>Combining world-standard academic delivery with rural livelihood upliftment</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                    <span>Dedicated focus on preventive public health, climate resilience & women&apos;s self-reliance</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-800 hover:text-brand-900 underline underline-offset-4 group"
                  >
                    <span>Read Full Story & Governance Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Archival Scroll Parchment with Antique Monogram Medallion */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-left">
                <div className="relative bg-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl p-6 sm:p-9 border-2 border-amber-200/80 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-amber-400/15 via-amber-200/10 to-transparent rounded-bl-full pointer-events-none" />
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center pb-5 border-b border-amber-100">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-brand-950 to-brand-800 text-amber-300 rounded-3xl rounded-tr-md flex items-center justify-center font-serif font-black text-2xl sm:text-3xl flex-shrink-0 shadow-lg ring-4 ring-amber-100">
                      DP
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                        Our Guiding Inspiration
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                        (Late) Sri Dinabandhu Panigrahi
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        1917–1997 • Commonwealth Scholar, University of Leeds (1946)
                      </p>
                    </div>
                  </div>

                  {/* Quote Body with Quotation Icon */}
                  <div className="pt-5 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed italic relative">
                    <Quote className="w-8 h-8 text-amber-200/70 absolute -top-1 -left-2 -z-0 pointer-events-none" />
                    <p className="relative z-10">
                      &ldquo;Coming from an extremely humble background in the district of Bhadrak, Mr. Panigrahi lost his parents in early childhood. Yet his determination led him to earn two Master&apos;s Degrees in Education—one from Patna University and one from the University of Leeds as a British Commonwealth Scholar in 1946.&rdquo;
                    </p>
                    <p className="not-italic text-[11px] sm:text-xs text-slate-500">
                      His legacy of community schools, adult literacy, and passionate educational administration continues to guide the Dinabandhu Foundation across Odisha today.
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs text-slate-500">
                      <span>Founder: </span>
                      <strong className="text-slate-800">Mrs. Shovana Devi</strong>
                    </div>
                    <Link
                      href="/about#founder"
                      className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold group"
                    >
                      <span>View Biography</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 5. THREE PILLARS - DISTINCT ORGANIC & ASYMMETRIC SHAPES */}
      <section className="py-12 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                CORE FOCUS AREAS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Three Pillars of Holistic Community Transformation
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                At Dinabandhu Foundation, we believe that a healthier society, a sustainable environment, and a skilled population are the foundations of meaningful development.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Different Shapes for 3 Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
            
            {/* Pillar 1 (Health): Organic Droplet / Heart Curvature */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="h-full bg-gradient-to-br from-blue-50/50 via-white to-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl p-6 sm:p-7 border-2 border-blue-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Heart className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      PILLAR 01
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    Health
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Promoting community health awareness, preventive care, maternal-child health, clean drinking water, and sanitization drives across rural hamlets.
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Focus Tracks:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {PILLARS[0].focusAreas.slice(0, 4).map((fa, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="truncate">{fa.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-blue-100">
                  <Link
                    href="/what-we-do?tab=health"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore all 8 Health focus areas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 2 (Environment): Organic Leaf Petal Curvature */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="h-full bg-gradient-to-br from-emerald-50/50 via-white to-white rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl p-6 sm:p-7 border-2 border-emerald-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      PILLAR 02
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Environment
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Safeguarding nature through active climate action, native afforestation, watershed management, renewable energy adoption, and waste reduction.
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Focus Tracks:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {PILLARS[1].focusAreas.slice(0, 4).map((fa, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span className="truncate">{fa.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-emerald-100">
                  <Link
                    href="/what-we-do?tab=environment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore all 8 Environment focus areas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 3 (Skills): Modern Tech Chamfered Cut */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="h-full bg-gradient-to-br from-amber-50/50 via-white to-white rounded-3xl rounded-tr-none border-t-4 border-t-amber-500 border border-amber-200/80 p-6 sm:p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      PILLAR 03
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    Skill Development
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Building self-reliant youth and women through industry-aligned vocational certifications, digital literacy, and sustainable green skills.
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Focus Tracks:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {PILLARS[2].focusAreas.slice(0, 4).map((fa, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                          <span className="truncate">{fa.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-amber-100">
                  <Link
                    href="/what-we-do?tab=skills"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore all 8 Skill Development focus areas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>View All 24 Grassroots Focus Areas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. THREE VERTICALS - CONNECTED ROADMAP PIPELINE */}
      <section className="py-12 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                INTEGRATED IMPACT VERTICALS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                From Higher Technical Education to Grassroots CSR
              </h2>
              <p className="text-xs sm:text-base text-slate-300">
                The foundation operates three synergized verticals that address every tier of human capital development in Eastern India.
              </p>
            </div>
          </ScrollReveal>

          {/* Connected Step Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {VERTICALS.map((v, i) => {
              const stepNumbers = ['01', '02', '03'];
              return (
                <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                  <div className="h-full bg-slate-800/90 rounded-3xl rounded-tr-sm p-6 sm:p-7 border border-slate-700/80 hover:border-blue-500/80 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Top Step Number Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                      <span className="text-2xl font-black text-amber-400 font-mono">
                        {stepNumbers[i]}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-900/60 px-2.5 py-1 rounded-md">
                        {v.category}
                      </span>
                    </div>

                    <div className="space-y-3 pt-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {v.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-400">
                        {v.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {v.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                          Key Highlights:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {v.highlights.map((h, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-700/60">
                      <Link
                        href="/about#verticals"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                      >
                        <span>Learn about {v.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. WHERE WE WORK - CIRCULAR DIAL METRICS & GALLERY VIEWPORT */}
      <section className="py-12 sm:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <ScrollReveal animation="fade-right">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  WHERE WE WORK
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                  Empowering Communities Across 10 Districts of Odisha
                </h2>
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed mt-2">
                  With a dedicated team of 20 field professionals, Dinabandhu Foundation works across 10 vital districts of Odisha, reaching more than <strong>200+ villages</strong> and positively impacting over <strong>10,000+ community members</strong>.
                </p>

                {/* Circular Dial / Pill Capsule Cluster */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-200/90 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center font-extrabold text-brand-900 text-sm flex-shrink-0 shadow-sm">
                      10
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Districts</span>
                      <span className="text-[10px] text-slate-500">Coastal, Tribal & Western</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl rounded-tr-sm border border-slate-200/90 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center font-extrabold text-emerald-800 text-xs flex-shrink-0 shadow-sm">
                      200+
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Villages</span>
                      <span className="text-[10px] text-slate-500">Grassroots Outreach</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl rounded-bl-sm border border-slate-200/90 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-500 flex items-center justify-center font-extrabold text-amber-800 text-xs flex-shrink-0 shadow-sm">
                      20
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Field Members</span>
                      <span className="text-[10px] text-slate-500">Full-time Grassroots Staff</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl rounded-br-sm border border-slate-200/90 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-50 border-2 border-purple-500 flex items-center justify-center font-extrabold text-purple-800 text-xs flex-shrink-0 shadow-sm">
                      10k+
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Beneficiaries</span>
                      <span className="text-[10px] text-slate-500">Youth & Rural Families</span>
                    </div>
                  </div>
                </div>

                {/* District Pills */}
                <div className="pt-2">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Active Operational Districts:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ODISHA_DISTRICTS.map((d, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white border border-slate-300 rounded-full text-[11px] font-semibold text-slate-700 shadow-sm hover:border-blue-500 hover:text-blue-700 transition-colors"
                      >
                        {d.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/where-we-work"
                    className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition"
                  >
                    <span>Explore Interactive District Profiles</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Map Image Showcase in Scalloped Viewport */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <ScrollReveal animation="fade-left">
                <div className="bg-white p-3 sm:p-5 rounded-[2.5rem] rounded-bl-lg border border-slate-200 shadow-xl max-w-lg w-full relative">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[4/3] flex items-center justify-center">
                    <Image
                      src="/images/odisha-map.png"
                      alt="Odisha Districts Map with Dinabandhu Foundation Operations"
                      width={500}
                      height={400}
                      className="object-contain w-full h-full p-2"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      Highlighted in red: Operational Districts across Coastal, Southern Tribal & Western Odisha
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 8. UN SDGS & 2036 / 2047 VISION */}
      <section className="py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                GLOBAL STANDARDS & STATE DREAMS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Aligned with UN SDGs • Developed Odisha 2036 • Viksit Bharat 2047
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                We know this dream cannot come true through buildings and roads alone. It will come true through people, and especially through young people who are skilled, confident, and ready to lead.
              </p>
            </div>
          </ScrollReveal>

          {/* SDG Badge Tokens */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {UN_SDGS.map((sdg, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="p-5 rounded-2xl rounded-tr-sm border border-slate-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-2.5">
                    <div
                      className="inline-block text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-sm group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.sdg}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {sdg.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sdg.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 2036 & 2047 Milestones Banner Shaped as Ceremonial Plaque */}
          <ScrollReveal animation="zoom-in" delay={150}>
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-brand-950 via-indigo-950 to-slate-950 rounded-[2.5rem] rounded-tr-none p-6 sm:p-10 text-white shadow-2xl border border-indigo-900/60 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-2">
                  <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    STATE & NATIONAL MILESTONES
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-2">
                    Building a Developed Odisha by 2036 & Viksit Bharat by 2047
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    So far, we have helped more than <strong>2,000 young people across Odisha</strong> learn green skills in clean energy, water conservation, waste recycling, and ecological livelihoods—ensuring that progress is inclusive and sustainable.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <Link
                    href="/impact"
                    className="w-full sm:w-auto text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-amber-500/30 transition-all text-xs sm:text-sm transform hover:-translate-y-0.5"
                  >
                    Read Impact Stories
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 9. CALL TO ACTION - SCALLOPED PILL BUTTONS */}
      <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <ScrollReveal animation="fade-up">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              GET INVOLVED TODAY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              If You Believe In This Dream, Come Walk With Us
            </h2>
            <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
              Whether you want to volunteer, partner as a corporate CSR donor, collaborate on research, or intern on the ground—there is a meaningful role for you.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 pt-2 sm:pt-4">
              <Link
                href="/get-involved?type=volunteer"
                className="bg-brand-900 hover:bg-brand-800 text-white font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/get-involved?type=csr"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
              >
                Corporate CSR Partnership
              </Link>
              <Link
                href="/get-involved?type=collaborate"
                className="bg-white hover:bg-slate-100 text-slate-800 font-bold px-6 py-3 rounded-full border border-slate-300 shadow-sm hover:shadow transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
              >
                Collaborate / Partner
              </Link>
              <Link
                href="/get-involved?type=internship"
                className="bg-white hover:bg-slate-100 text-slate-800 font-bold px-6 py-3 rounded-full border border-slate-300 shadow-sm hover:shadow transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
              >
                Apply for Internship
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
