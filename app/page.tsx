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
  Globe2
} from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import { FOUNDATION_META, FOUNDER_HERITAGE, VERTICALS, PILLARS, UN_SDGS, ODISHA_DISTRICTS } from '@/data/foundationData';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-slate-900 text-white pt-16 pb-24 lg:pt-20 lg:pb-32">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>EST. 1999 • BHUBANESWAR, ODISHA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Nurturing Healthy Communities, <span className="text-emerald-400">Resilient Ecosystems</span> & <span className="text-blue-300">Skilled Lives</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Founded by Mrs. Shovana Devi in memory of (Late) Sri Dinabandhu Panigrahi to bridge world-standard education with grassroots socio-economic empowerment across Health, Environment, and Skill Development.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/what-we-do"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition transform active:scale-95"
                >
                  <span>Explore What We Do</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/csr-partnerships"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition"
                >
                  <span>Corporate CSR Desk</span>
                </Link>
              </div>

              {/* Trust Pill Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>12AA & 80G Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Indian Trust Act 1882</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>10 Odisha Districts</span>
                </div>
              </div>
            </div>

            {/* Right Card / Seal Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/15 p-8 rounded-3xl shadow-2xl text-center space-y-6">
                
                {/* Logo with pulsing glow & SDG Wheel */}
                <div className="relative mx-auto w-36 h-36 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-emerald-500/20 to-amber-500/30 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-32 h-32 bg-white p-1 rounded-full shadow-2xl flex items-center justify-center ring-4 ring-white/20">
                    <Image
                      src="/images/logo.png"
                      alt="Dinabandhu Foundation Official Seal with SDG Wheel"
                      width={124}
                      height={124}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    Dinabandhu Foundation
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    For Educational Research & Socio Economic Development
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="text-2xl font-black text-amber-400 block">27+</span>
                    <span className="text-[11px] text-slate-300 font-medium">Years of Grassroots Legacy</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="text-2xl font-black text-emerald-400 block">2,000+</span>
                    <span className="text-[11px] text-slate-300 font-medium">Youth Trained in Green Skills</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="text-2xl font-black text-blue-400 block">10,000+</span>
                    <span className="text-[11px] text-slate-300 font-medium">Graduates Produced</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="text-2xl font-black text-purple-400 block">200+</span>
                    <span className="text-[11px] text-slate-300 font-medium">Villages Empowered</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold"
                  >
                    <span>Read Our Heritage & Governance</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <TrustBadges />

      {/* Core Metrics Counter Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {FOUNDATION_META.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition">
                <span className="text-3xl font-extrabold text-brand-900 block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-slate-700 block mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Heritage & Purpose Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                OUR HERITAGE & PURPOSE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Inspired by a Visionary Educator from Coastal Odisha
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Conceptualised in 1999 by <strong>Mrs. Shovana Devi</strong> in memory of her late husband <strong>(Late) Sri Dinabandhu Panigrahi (1917–1997)</strong>—a Commonwealth Scholar at the University of Leeds (1946) from Bhadrak—Dinabandhu Foundation transforms lives through formal technical education, vocational training, and grassroots social welfare.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                  <span>Governed by Trustees Dr. B.B. Panigrahi, IRS (Retd.) and Mrs. Smita Panigrahi</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                  <span>Combining world-standard academic delivery with rural and urban livelihood upliftment</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
                  <span>Dedicated focus on preventive public health, climate resilience, and women&apos;s self-reliance</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-800 hover:text-brand-900 underline underline-offset-4"
                >
                  <span>Read Full Story & Governance Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-6 border-b border-slate-100">
                  <div className="w-20 h-20 bg-brand-900 text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                    DP
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                      Our Guiding Inspiration
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      (Late) Sri Dinabandhu Panigrahi
                    </h3>
                    <p className="text-xs text-slate-500">
                      1917–1997 • Commonwealth Scholar, University of Leeds (1946)
                    </p>
                  </div>
                </div>

                <div className="pt-6 space-y-3 text-sm text-slate-600 leading-relaxed italic">
                  <p>
                    &ldquo;Coming from an extremely humble background in the district of Bhadrak, Mr. Panigrahi lost his parents in early childhood. Yet his determination led him to earn two Master&apos;s Degrees in Education—one from Patna University and one from the University of Leeds as a British Commonwealth Scholar in 1946.&rdquo;
                  </p>
                  <p className="not-italic text-xs text-slate-500">
                    His legacy of community schools, adult literacy, and passionate educational administration continues to guide the Dinabandhu Foundation across Odisha today.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span>Founder: </span>
                    <strong className="text-slate-800">Mrs. Shovana Devi</strong>
                  </div>
                  <Link
                    href="/about#founder"
                    className="text-xs text-blue-700 hover:underline font-semibold"
                  >
                    View Founder Biography &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE FOCUS AREAS - 3 Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              CORE FOCUS AREAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Pillars of Holistic Community Transformation
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              At Dinabandhu Foundation, we believe that a healthier society, a sustainable environment, and a skilled population are the foundations of meaningful development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {PILLARS.map((p) => {
              const isHealth = p.id === 'health';
              const isEnv = p.id === 'environment';
              const Icon = isHealth ? Heart : isEnv ? Leaf : GraduationCap;
              const cardBorder = isHealth 
                ? 'hover:border-blue-500 hover:shadow-blue-500/10' 
                : isEnv 
                ? 'hover:border-emerald-500 hover:shadow-emerald-500/10' 
                : 'hover:border-amber-500 hover:shadow-amber-500/10';
              const iconBg = isHealth 
                ? 'bg-blue-600 text-white' 
                : isEnv 
                ? 'bg-emerald-600 text-white' 
                : 'bg-amber-600 text-white';

              return (
                <div
                  key={p.id}
                  className={`bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between ${cardBorder}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl shadow-md ${iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        PILLAR {p.pillarNumber}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {p.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.shortDesc}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Key Focus Tracks:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {p.focusAreas.slice(0, 4).map((fa, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                            <span>{fa.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      href={`/what-we-do?tab=${p.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-800 hover:text-brand-900 group"
                    >
                      <span>Explore all 8 focus areas</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
            >
              <span>View All 24 Grassroots Focus Areas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* THREE VERTICALS SHOWCASE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              INTEGRATED IMPACT VERTICALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Higher Technical Education to Grassroots CSR
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              The foundation operates three synergized verticals that address every tier of human capital development in Eastern India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERTICALS.map((v, i) => (
              <div
                key={i}
                className="bg-slate-800/80 rounded-2xl p-7 border border-slate-700 hover:border-slate-500 transition duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                    {v.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {v.name}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400">
                    {v.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {v.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {v.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/60">
                  <Link
                    href="/about#verticals"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>Learn about {v.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHERE WE WORK & ODISHA MAP PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                WHERE WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Empowering Communities Across 10 Districts of Odisha
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                With a dedicated team of 20 field professionals, Dinabandhu Foundation works across 10 vital districts of Odisha, reaching more than <strong>200+ villages</strong> and positively impacting over <strong>10,000+ community members</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xl font-extrabold text-brand-900 block">10 Districts</span>
                  <span className="text-xs text-slate-500">Coastal, Tribal & Western Belts</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xl font-extrabold text-brand-900 block">200+ Villages</span>
                  <span className="text-xs text-slate-500">Grassroots Rural Outreach</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xl font-extrabold text-brand-900 block">20 Members</span>
                  <span className="text-xs text-slate-500">Dedicated Field Team</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xl font-extrabold text-brand-900 block">10,000+</span>
                  <span className="text-xs text-slate-500">Community Beneficiaries</span>
                </div>
              </div>

              {/* District Pills */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Active Operational Districts:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ODISHA_DISTRICTS.map((d, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white border border-slate-300 rounded-md text-xs font-semibold text-slate-700 shadow-sm"
                    >
                      {d.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/where-we-work"
                  className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
                >
                  <span>Explore Interactive District Profiles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Map Image Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xl max-w-lg w-full">
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
                  <span className="text-xs text-slate-500">
                    Highlighted in red: Operational Districts across Coastal, Southern Tribal & Western Odisha
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UN SDGs & 2036 / 2047 VISION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
              GLOBAL STANDARDS & STATE DREAMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aligned with UN SDGs • Developed Odisha 2036 • Viksit Bharat 2047
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We know this dream cannot come true through buildings and roads alone. It will come true through people, and especially through young people who are skilled, confident, and ready to lead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {UN_SDGS.map((sdg, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div
                    className="inline-block text-white font-extrabold text-xs px-3 py-1 rounded-md"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.sdg}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {sdg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sdg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2036 & 2047 Milestones Banner */}
          <div className="mt-12 bg-gradient-to-r from-brand-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  STATE & NATIONAL MILESTONES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">
                  Building a Developed Odisha by 2036 & Viksit Bharat by 2047
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  So far, we have helped more than <strong>2,000 young people across Odisha</strong> learn green skills in clean energy, water conservation, waste recycling, and ecological livelihoods—ensuring that progress is inclusive and sustainable.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/impact"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition"
                >
                  Read Impact Stories
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION FOR VOLUNTEERS & PARTNERS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            GET INVOLVED TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            If You Believe In This Dream, Come Walk With Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Whether you want to volunteer, partner as a corporate CSR donor, collaborate on research, or intern on the ground—there is a meaningful role for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/get-involved?type=volunteer"
              className="bg-brand-900 hover:bg-brand-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/get-involved?type=csr"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-md transition"
            >
              Corporate CSR Partnership
            </Link>
            <Link
              href="/get-involved?type=collaborate"
              className="bg-white hover:bg-slate-100 text-slate-800 font-bold px-6 py-3.5 rounded-xl border border-slate-300 shadow-sm transition"
            >
              Collaborate / Partner
            </Link>
            <Link
              href="/get-involved?type=internship"
              className="bg-white hover:bg-slate-100 text-slate-800 font-bold px-6 py-3.5 rounded-xl border border-slate-300 shadow-sm transition"
            >
              Apply for Internship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
