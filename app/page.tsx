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
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-[#23120f] text-white py-8 sm:py-10 lg:py-12 xl:py-14">
        {/* Animated ambient glowing blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cream-400/15 rounded-full blur-3xl pointer-events-none animate-blob" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-400/15 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">
              <ScrollReveal animation="fade-down" delay={50}>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cream-200 text-[10px] sm:text-xs font-semibold tracking-wide uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cream-300 animate-spin-slow flex-shrink-0" />
                  <span>EST. 1999 • BHUBANESWAR, ODISHA</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Nurturing Healthy Communities, <span className="text-cream-200">Resilient Ecosystems</span> & <span className="text-cream-300">Skilled Lives</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={150}>
                <p className="text-xs sm:text-sm lg:text-base text-cream-100 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
                  Founded by Mrs. Shovana Devi in memory of (Late) Sri Dinabandhu Panigrahi to bridge world-standard education with grassroots socio-economic empowerment across Health, Environment, and Skill Development.
                </p>
              </ScrollReveal>

              {/* CTAs with hover bounce */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                  <Link
                    href="/what-we-do"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-600 hover:to-brand-700 text-cream-50 border border-brand-600 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-brand-700/40 transition-all transform hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm group"
                  >
                    <span>Explore What We Do</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/csr-partnerships"
                    className="inline-flex items-center justify-center gap-2 bg-cream-100/15 hover:bg-cream-100/25 text-cream-100 font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-cream-200/30 backdrop-blur-sm transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm"
                  >
                    <span>Corporate CSR Desk</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust Pill Highlights */}
              <ScrollReveal animation="fade-up" delay={250}>
                <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs text-cream-200">
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cream-300 flex-shrink-0" />
                    <span>12AA & 80G Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cream-300 flex-shrink-0" />
                    <span>Indian Trust Act 1882</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cream-300 flex-shrink-0" />
                    <span>10 Odisha Districts</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Asymmetric Organic Shield Showcase with Rotating Orbital Ring */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <ScrollReveal animation="zoom-in" delay={150}>
                <div className="relative w-full max-w-sm lg:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 lg:p-6 rounded-[2.5rem] rounded-tr-lg rounded-bl-lg shadow-2xl text-center space-y-3 sm:space-y-4 hover:shadow-brand-800/30 transition-all duration-300">
                  
                  {/* Logo with pulsing glow & Orbital Ring */}
                  <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/40 via-cream-400/30 to-brand-500/40 rounded-full blur-xl animate-pulse-slow" />
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
                    <p className="text-[10px] sm:text-xs text-cream-200 mt-0.5">
                      For Educational Research & Socio Economic Development
                    </p>
                  </div>

                  {/* Asymmetric Pill Capsule Metrics */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-left">
                    <div className="bg-gradient-to-r from-brand-700/35 to-brand-800/25 p-2 sm:p-2.5 rounded-2xl rounded-tr-sm border border-brand-500/40 hover:border-brand-400 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-cream-100 block">27+</span>
                      <span className="text-[9px] sm:text-[10px] text-cream-200 font-medium">Years of Legacy</span>
                    </div>
                    <div className="bg-gradient-to-r from-cream-400/20 to-cream-500/10 p-2 sm:p-2.5 rounded-2xl rounded-tl-sm border border-cream-300/40 hover:border-cream-300 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-cream-100 block">2,000+</span>
                      <span className="text-[9px] sm:text-[10px] text-cream-200 font-medium">Youth in Green Skills</span>
                    </div>
                    <div className="bg-gradient-to-r from-brand-600/35 to-brand-700/25 p-2 sm:p-2.5 rounded-2xl rounded-br-sm border border-brand-500/40 hover:border-brand-400 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-cream-100 block">10,000+</span>
                      <span className="text-[9px] sm:text-[10px] text-cream-200 font-medium">Graduates Produced</span>
                    </div>
                    <div className="bg-gradient-to-r from-cream-300/20 to-cream-400/10 p-2 sm:p-2.5 rounded-2xl rounded-bl-sm border border-cream-300/40 hover:border-cream-300 transition-colors">
                      <span className="text-lg sm:text-xl font-black text-cream-100 block">200+</span>
                      <span className="text-[9px] sm:text-[10px] text-cream-200 font-medium">Villages Empowered</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-xs text-cream-200 hover:text-white font-semibold group"
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
      <section className="py-8 sm:py-12 bg-cream-50 relative">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
              {FOUNDATION_META.stats.map((stat, idx) => {
                const borderColors = [
                  'border-l-brand-800 hover:border-brand-800',
                  'border-l-brand-700 hover:border-brand-700',
                  'border-l-brand-600 hover:border-brand-600',
                  'border-l-brand-800 hover:border-brand-800',
                  'border-l-brand-900 hover:border-brand-900',
                  'border-l-brand-700 hover:border-brand-700',
                ];
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
                    <div className={`p-3.5 rounded-2xl rounded-tr-none bg-white border border-cream-200 border-l-4 ${borderColors[idx % borderColors.length]} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
                      <span className="text-2xl sm:text-3xl font-black text-brand-900 block tracking-tight group-hover:scale-105 transition-transform">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-cream-950 block mt-1 line-clamp-1">
                        {stat.label}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-cream-700 block mt-0.5 line-clamp-1">
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
      <section className="py-12 sm:py-20 bg-cream-100/60 border-t border-cream-200 relative overflow-hidden">
        {/* Soft background shape */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal animation="fade-right">
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200/80 px-3 py-1 rounded-full border border-cream-300 shadow-sm">
                  OUR HERITAGE & PURPOSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-950 leading-tight mt-2">
                  Inspired by a Visionary Educator from Coastal Odisha
                </h2>
                <p className="text-xs sm:text-base text-cream-900/80 leading-relaxed mt-2">
                  Conceptualised in 1999 by <strong>Mrs. Shovana Devi</strong> in memory of her late husband <strong>(Late) Sri Dinabandhu Panigrahi (1917–1997)</strong>—a Commonwealth Scholar at the University of Leeds (1946) from Bhadrak—Dinabandhu Foundation transforms lives through formal technical education, vocational training, and grassroots social welfare.
                </p>

                <div className="space-y-2.5 pt-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-900 bg-white p-2.5 rounded-xl border border-cream-200 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>Governed by Trustees Dr. B.B. Panigrahi, IRS (Retd.) and Mrs. Smita Panigrahi</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-900 bg-white p-2.5 rounded-xl border border-cream-200 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>Combining world-standard academic delivery with rural livelihood upliftment</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-900 bg-white p-2.5 rounded-xl border border-cream-200 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>Dedicated focus on preventive public health, climate resilience & women&apos;s self-reliance</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-800 hover:text-brand-950 underline underline-offset-4 group"
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
                <div className="relative bg-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl p-6 sm:p-9 border-2 border-brand-200/80 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-brand-300/15 via-brand-200/10 to-transparent rounded-bl-full pointer-events-none" />
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center pb-5 border-b border-cream-200">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-brand-950 to-brand-800 text-cream-100 rounded-3xl rounded-tr-md flex items-center justify-center font-serif font-black text-2xl sm:text-3xl flex-shrink-0 shadow-lg ring-4 ring-cream-100">
                      DP
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-bold text-brand-800 uppercase tracking-widest bg-cream-100 px-2.5 py-0.5 rounded-md border border-cream-300">
                        Our Guiding Inspiration
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-950 mt-1">
                        (Late) Sri Dinabandhu Panigrahi
                      </h3>
                      <p className="text-xs text-cream-700 font-medium">
                        1917–1997 • Commonwealth Scholar, University of Leeds (1946)
                      </p>
                    </div>
                  </div>

                  {/* Quote Body with Quotation Icon */}
                  <div className="pt-5 space-y-3 text-xs sm:text-sm text-cream-900/80 leading-relaxed italic relative">
                    <Quote className="w-8 h-8 text-cream-300/70 absolute -top-1 -left-2 -z-0 pointer-events-none" />
                    <p className="relative z-10">
                      &ldquo;Coming from an extremely humble background in the district of Bhadrak, Mr. Panigrahi lost his parents in early childhood. Yet his determination led him to earn two Master&apos;s Degrees in Education—one from Patna University and one from the University of Leeds as a British Commonwealth Scholar in 1946.&rdquo;
                    </p>
                    <p className="not-italic text-[11px] sm:text-xs text-cream-600">
                      His legacy of community schools, adult literacy, and passionate educational administration continues to guide the Dinabandhu Foundation across Odisha today.
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 pt-4 border-t border-cream-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs text-cream-700">
                      <span>Founder: </span>
                      <strong className="text-brand-950">Mrs. Shovana Devi</strong>
                    </div>
                    <Link
                      href="/about#founder"
                      className="inline-flex items-center gap-1 text-xs text-brand-800 hover:text-brand-950 font-semibold group"
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
      <section className="py-12 sm:py-20 bg-cream-50 relative">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200/90 px-3 py-1 rounded-full border border-cream-300">
                CORE FOCUS AREAS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                Three Pillars of Holistic Community Transformation
              </h2>
              <p className="text-xs sm:text-base text-cream-900/80">
                At Dinabandhu Foundation, we believe that a healthier society, a sustainable environment, and a skilled population are the foundations of meaningful development.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Different Shapes for 3 Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
            
            {/* Pillar 1 (Health): Organic Droplet / Heart Curvature */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="h-full bg-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl p-5 sm:p-6 border-2 border-brand-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                <div className="space-y-3">
                  {/* Photo Banner */}
                  <div className="relative h-40 w-full rounded-tl-[2.5rem] rounded-br-2xl rounded-tr-lg rounded-bl-lg overflow-hidden border border-cream-200 bg-cream-100 shadow-inner">
                    <Image
                      src="/images/drive/photo_15_472067853_122132348918513320_7317603235333479596_n.jpg"
                      alt="Mobile Diagnostic Clinic and Preventive Health Camp"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-mono font-bold text-brand-900 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-brand-200 shadow-sm">
                        PILLAR 01
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="p-2.5 rounded-xl bg-gradient-to-tr from-brand-800 to-brand-600 text-cream-50 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-brand-800">
                      Preventive & Grassroots
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-950 group-hover:text-brand-800 transition-colors">
                    Health
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                    Promoting community health awareness, preventive care, maternal-child health, clean drinking water, and sanitization drives across rural hamlets.
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-cream-600 uppercase tracking-wider block mb-2">
                      Key Focus Tracks:
                    </span>
                    <ul className="space-y-1.5 text-xs text-cream-900">
                      {PILLARS[0].focusAreas.slice(0, 4).map((fa, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-600 flex-shrink-0" />
                          <span className="truncate">{fa.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-cream-200">
                  <Link
                    href="/what-we-do?tab=health"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore all 8 Health focus areas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 2 (Environment): Organic Leaf Petal Curvature */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="h-full bg-white rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-xl rounded-br-xl p-5 sm:p-6 border-2 border-cream-300 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                <div className="space-y-3">
                  {/* Photo Banner */}
                  <div className="relative h-40 w-full rounded-tr-[2.5rem] rounded-bl-2xl rounded-tl-lg rounded-br-lg overflow-hidden border border-cream-200 bg-cream-100 shadow-inner">
                    <Image
                      src="/images/drive/photo_47_IMG_20251219_155359.jpg"
                      alt="Panchayat Youth Afforestation & Eco Restoration"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-mono font-bold text-brand-900 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-cream-300 shadow-sm">
                        PILLAR 02
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="p-2.5 rounded-xl bg-gradient-to-tr from-brand-900 to-brand-700 text-cream-50 shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-brand-800">
                      Climate & Ecology
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-950 group-hover:text-brand-800 transition-colors">
                    Environment
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                    Safeguarding nature through active climate action, native afforestation, watershed management, renewable energy adoption, and waste reduction.
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-cream-600 uppercase tracking-wider block mb-2">
                      Key Focus Tracks:
                    </span>
                    <ul className="space-y-1.5 text-xs text-cream-900">
                      {PILLARS[1].focusAreas.slice(0, 4).map((fa, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-700 flex-shrink-0" />
                          <span className="truncate">{fa.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-cream-200">
                  <Link
                    href="/what-we-do?tab=environment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore all 8 Environment focus areas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 3 (Skills): Modern Tech Chamfered Cut */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="h-full bg-white rounded-3xl rounded-tr-none border-t-4 border-t-brand-800 border border-cream-300 p-5 sm:p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                <div className="space-y-3">
                  {/* Photo Banner */}
                  <div className="relative h-40 w-full rounded-2xl rounded-tr-none overflow-hidden border border-cream-200 bg-cream-100 shadow-inner">
                    <Image
                      src="/images/drive/photo_38_IMG_20250712_125403.jpg"
                      alt="Women SHG Skill Development & Vocational Lab"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-mono font-bold text-brand-900 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-brand-200 shadow-sm">
                        PILLAR 03
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="p-2.5 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 text-cream-50 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-brand-800">
                      Livelihood & Skilling
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-950 group-hover:text-brand-800 transition-colors">
                    Skill Development
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                    Building self-reliant youth and women through industry-aligned vocational certifications, digital literacy, and sustainable green skills.
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-cream-600 uppercase tracking-wider block mb-2">
                      Key Focus Tracks:
                    </span>
                    <ul className="space-y-1.5 text-xs text-cream-900">
                      {PILLARS[2].focusAreas.slice(0, 4).map((fa, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-600 flex-shrink-0" />
                          <span className="truncate">{fa.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-cream-200">
                  <Link
                    href="/what-we-do?tab=skills"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950 group-hover:translate-x-1 transition-all"
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
              className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-cream-50 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>View All 24 Grassroots Focus Areas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. THREE VERTICALS - CONNECTED ROADMAP PIPELINE */}
      <section className="py-12 sm:py-20 bg-brand-950 text-cream-50 relative overflow-hidden border-y border-brand-900">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-cream-200 uppercase bg-brand-900/90 px-3 py-1 rounded-full border border-brand-700">
                INTEGRATED IMPACT VERTICALS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                From Higher Technical Education to Grassroots CSR
              </h2>
              <p className="text-xs sm:text-base text-cream-200">
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
                  <div className="h-full bg-brand-900/70 rounded-3xl rounded-tr-sm p-6 sm:p-7 border border-brand-800/90 hover:border-cream-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Top Step Number Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-brand-800">
                      <span className="text-2xl font-black text-cream-200 font-mono">
                        {stepNumbers[i]}
                      </span>
                      <span className="text-[10px] font-bold text-cream-300 uppercase tracking-widest bg-brand-950/70 px-2.5 py-1 rounded-md">
                        {v.category}
                      </span>
                    </div>

                    {/* Official Entity Logo in Clean Crisp Badge */}
                    <div className="my-3.5 p-3 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-white/20 h-20 w-full overflow-hidden group-hover:scale-[1.02] transition-transform">
                      <Image
                        src={v.logo}
                        alt={`${v.name} Official Logo`}
                        width={220}
                        height={70}
                        className="max-h-14 max-w-full object-contain"
                      />
                    </div>

                    <div className="space-y-3 pt-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-cream-200 transition-colors">
                        {v.name}
                      </h3>
                      <p className="text-xs font-semibold text-cream-300">
                        {v.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-cream-100 leading-relaxed">
                        {v.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] font-bold text-cream-300 uppercase tracking-wider block mb-1.5">
                          Key Highlights:
                        </span>
                        <ul className="space-y-1 text-xs text-cream-200">
                          {v.highlights.map((h, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cream-300 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-5 border-t border-brand-800/80">
                      <Link
                        href="/about#verticals"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cream-200 hover:text-white group-hover:translate-x-1 transition-all"
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
      <section className="py-12 sm:py-20 bg-cream-100/60 relative">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <ScrollReveal animation="fade-right">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
                  WHERE WE WORK
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight mt-2">
                  Empowering Communities Across 10 Districts of Odisha
                </h2>
                <p className="text-xs sm:text-base text-cream-900/80 leading-relaxed mt-2">
                  With a dedicated team of 20 field professionals, Dinabandhu Foundation works across 10 vital districts of Odisha, reaching more than <strong>200+ villages</strong> and positively impacting over <strong>10,000+ community members</strong>.
                </p>

                {/* Circular Dial / Pill Capsule Cluster */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-cream-200 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-50 border-2 border-brand-800 flex items-center justify-center font-extrabold text-brand-900 text-sm flex-shrink-0 shadow-sm">
                      10
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-950 block">Districts</span>
                      <span className="text-[10px] text-cream-700">Coastal, Tribal & Western</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl rounded-tr-sm border border-cream-200 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cream-100 border-2 border-brand-700 flex items-center justify-center font-extrabold text-brand-900 text-xs flex-shrink-0 shadow-sm">
                      200+
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-950 block">Villages</span>
                      <span className="text-[10px] text-cream-700">Grassroots Outreach</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl rounded-bl-sm border border-cream-200 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-50 border-2 border-brand-800 flex items-center justify-center font-extrabold text-brand-900 text-xs flex-shrink-0 shadow-sm">
                      20
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-950 block">Field Members</span>
                      <span className="text-[10px] text-cream-700">Full-time Grassroots Staff</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl rounded-br-sm border border-cream-200 shadow-sm flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cream-100 border-2 border-brand-700 flex items-center justify-center font-extrabold text-brand-900 text-xs flex-shrink-0 shadow-sm">
                      10k+
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-950 block">Beneficiaries</span>
                      <span className="text-[10px] text-cream-700">Youth & Rural Families</span>
                    </div>
                  </div>
                </div>

                {/* District Pills */}
                <div className="pt-2">
                  <span className="text-[11px] sm:text-xs font-bold text-cream-800 uppercase tracking-wider block mb-2">
                    Active Operational Districts:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ODISHA_DISTRICTS.map((d, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white border border-cream-300 rounded-full text-[11px] font-semibold text-cream-950 shadow-sm hover:border-brand-800 hover:text-brand-800 transition-colors"
                      >
                        {d.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/where-we-work"
                    className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-cream-50 font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition"
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
                <div className="bg-white p-3 sm:p-5 rounded-[2.5rem] rounded-bl-lg border border-cream-200 shadow-xl max-w-lg w-full relative">
                  <div className="relative rounded-2xl overflow-hidden border border-cream-100 bg-cream-50 aspect-[4/3] flex items-center justify-center">
                    <Image
                      src="/images/odisha-map.png"
                      alt="Odisha Districts Map with Dinabandhu Foundation Operations"
                      width={500}
                      height={400}
                      className="object-contain w-full h-full p-2"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-[11px] sm:text-xs text-cream-700 font-medium">
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
      <section className="py-12 sm:py-20 bg-cream-50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
                GLOBAL STANDARDS & STATE DREAMS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                Aligned with UN SDGs • Developed Odisha 2036 • Viksit Bharat 2047
              </h2>
              <p className="text-xs sm:text-base text-cream-900/80">
                We know this dream cannot come true through buildings and roads alone. It will come true through people, and especially through young people who are skilled, confident, and ready to lead.
              </p>
            </div>
          </ScrollReveal>

          {/* SDG Badge Tokens */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {UN_SDGS.map((sdg, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="p-5 rounded-2xl rounded-tr-sm border border-cream-200 bg-white hover:shadow-xl hover:border-brand-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-2.5">
                    <div
                      className="inline-block text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-sm group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.sdg}
                    </div>
                    <h3 className="text-base font-bold text-brand-950 group-hover:text-brand-800 transition-colors">
                      {sdg.title}
                    </h3>
                    <p className="text-xs text-cream-900/80 leading-relaxed">
                      {sdg.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 2036 & 2047 Milestones Banner Shaped as Ceremonial Plaque */}
          <ScrollReveal animation="zoom-in" delay={150}>
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 rounded-[2.5rem] rounded-tr-none p-6 sm:p-10 text-white shadow-2xl border border-brand-800 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-2">
                  <span className="text-[10px] sm:text-xs font-bold text-cream-200 uppercase tracking-widest bg-brand-900/90 px-3 py-1 rounded-full border border-brand-700">
                    STATE & NATIONAL MILESTONES
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-2">
                    Building a Developed Odisha by 2036 & Viksit Bharat by 2047
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-100 leading-relaxed">
                    So far, we have helped more than <strong>2,000 young people across Odisha</strong> learn green skills in clean energy, water conservation, waste recycling, and ecological livelihoods—ensuring that progress is inclusive and sustainable.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <Link
                    href="/impact"
                    className="w-full sm:w-auto text-center bg-cream-100 hover:bg-cream-200 text-brand-950 font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-cream-100/30 transition-all text-xs sm:text-sm transform hover:-translate-y-0.5"
                  >
                    Read Impact Stories
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 9. GRASSROOTS PHOTO SHOWCASE - REAL FIELD ACTION FROM GOOGLE DRIVE */}
      <section className="py-12 sm:py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
                  REAL ACTION • REAL IMPACT
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                  Moments from the Ground in Odisha
                </h2>
                <p className="text-xs sm:text-base text-cream-900/80">
                  Real photos of our field teams, doctors, youth skilling workshops, and coastal afforestation drives across rural communities.
                </p>
              </div>

              <Link
                href="/media?tab=gallery"
                className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-cream-50 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow transition-all self-start sm:self-auto flex-shrink-0"
              >
                <span>Explore Full Gallery (50+ Photos)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Asymmetric Photo Mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                src: '/images/drive/photo_38_IMG_20250712_125403.jpg',
                tag: 'SkillEM Workshop',
                title: 'Women SHG Tailoring & Stitching Hub',
                location: 'Bhadrak Center',
                shape: 'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-md rounded-bl-md'
              },
              {
                src: '/images/drive/photo_15_472067853_122132348918513320_7317603235333479596_n.jpg',
                tag: 'Public Health',
                title: 'Mobile Diagnostic Clinic in Coastal Hamlets',
                location: 'Puri District',
                shape: 'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-md rounded-br-md'
              },
              {
                src: '/images/drive/photo_47_IMG_20251219_155359.jpg',
                tag: 'Environment',
                title: 'Panchayat Youth Afforestation Drive',
                location: 'Kendrapara Mangroves',
                shape: 'rounded-3xl rounded-tr-none'
              },
              {
                src: '/images/drive/photo_1__MG_2324.JPG',
                tag: 'Convocation',
                title: 'Certified Trainees Graduation & Placement',
                location: 'Main Training Campus',
                shape: 'rounded-3xl rounded-bl-none'
              },
              {
                src: '/images/drive/photo_45_IMG_20251219_155051.jpg',
                tag: 'Community',
                title: 'Village Gram Sabha & Micro-Enterprise Meet',
                location: 'Balasore District',
                shape: 'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-md rounded-bl-md'
              },
              {
                src: '/images/drive/photo_35_Facilities12.JPG',
                tag: 'Infrastructure',
                title: 'Modern IT Educational Infrastructure',
                location: 'Bhubaneswar Academic Wing',
                shape: 'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-md rounded-br-md'
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 70}>
                <Link
                  href="/media?tab=gallery"
                  className={`group block bg-white ${item.shape} border-2 border-cream-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-700 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between`}
                >
                  <div className="relative aspect-[4/3] w-full bg-cream-200 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold text-brand-900 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-cream-300 shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 space-y-1">
                    <span className="text-[11px] font-semibold text-cream-700 block">
                      {item.location}
                    </span>
                    <h4 className="font-bold text-brand-950 text-sm sm:text-base group-hover:text-brand-800 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION - SCALLOPED PILL BUTTONS */}
      <section className="py-12 sm:py-20 bg-cream-100/70 border-t border-cream-200">
        <ScrollReveal animation="fade-up">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3.5 py-1.5 rounded-full border border-cream-300">
              GET INVOLVED TODAY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
              If You Believe In This Dream, Come Walk With Us
            </h2>
            <p className="text-xs sm:text-base text-cream-900/80 max-w-2xl mx-auto">
              Whether you want to volunteer, partner as a corporate CSR donor, collaborate on research, or intern on the ground—there is a meaningful role for you.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 pt-2 sm:pt-4">
              <Link
                href="/get-involved?type=volunteer"
                className="bg-brand-800 hover:bg-brand-900 text-cream-50 font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/get-involved?type=csr"
                className="bg-brand-900 hover:bg-brand-950 text-cream-50 font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
              >
                Corporate CSR Partnership
              </Link>
              <Link
                href="/get-involved?type=collaborate"
                className="bg-white hover:bg-cream-100 text-cream-950 font-bold px-6 py-3 rounded-full border border-cream-300 shadow-sm hover:shadow transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
              >
                Collaborate / Partner
              </Link>
              <Link
                href="/get-involved?type=internship"
                className="bg-white hover:bg-cream-100 text-cream-950 font-bold px-6 py-3 rounded-full border border-cream-300 shadow-sm hover:shadow transition-all text-xs sm:text-sm text-center transform hover:-translate-y-0.5"
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
