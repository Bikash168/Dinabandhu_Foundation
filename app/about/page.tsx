'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Award, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Target, 
  HeartHandshake,
  Building,
  UserCheck,
  Quote,
  Sparkles
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDATION_META, FOUNDER_HERITAGE, LEADERSHIP, VERTICALS } from '@/data/foundationData';

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      
      {/* 1. HEADER BANNER */}
      <section className="bg-gradient-to-b from-brand-950 via-brand-900 to-slate-900 text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT DINABANDHU FOUNDATION</span>
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Our Story, Legacy & Governance
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                Dinabandhu Foundation works towards quality education, skill development, and the socio-economic empowerment of underserved communities across Odisha.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. STORY & FOUNDER SECTION - ASYMMETRIC TABLET SHAPE */}
      <section id="story" className="py-12 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal animation="fade-right">
                <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                  OUR HERITAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mt-2">
                  Conceptualised in 1999 in Memory of Late Sri Dinabandhu Panigrahi
                </h2>
                
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                  <p>
                    <strong>Dinabandhu Foundation for Educational Research and Socio Economic Development</strong> was conceptualised and founded by <strong>Mrs. Shovana Devi</strong> in the memory of her late husband <strong>Mr. Dinabandhu Panigrahi</strong> in 1999.
                  </p>
                  <p>
                    Mr. Panigrahi came from an extremely humble background in the district of Bhadrak in coastal Odisha, India. He was extremely passionate about getting educated to the highest level, although he had lost his parents in early childhood.
                  </p>
                  <p>
                    His determination eventually enabled him to acquire a Master&apos;s Degree in Education from Patna University and then another Master&apos;s Degree in Education from the University of Leeds in the United Kingdom. He had been a student at Leeds with a <strong>Commonwealth Scholarship granted to him by the British Government in 1946</strong>.
                  </p>
                  <p>
                    He dedicated his career to educational administration, focusing passionately on primary education, secondary education, and adult education. He was responsible for setting up a school in his own native village, which went on to flourish as a beacon of learning.
                  </p>
                </div>

                {/* Founder quote in an archival ribbon shape */}
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50/50 border-l-4 border-amber-500 rounded-r-2xl text-xs sm:text-sm text-slate-700 italic shadow-sm mt-4">
                  &ldquo;True empowerment begins when knowledge reaches the doorsteps of those who need it most.&rdquo;
                </div>
              </ScrollReveal>
            </div>

            {/* Founder Card in Archival Tablet Shape */}
            <div id="founder" className="lg:col-span-5">
              <ScrollReveal animation="fade-left">
                <div className="bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900 text-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl p-6 sm:p-8 shadow-2xl border-2 border-amber-400/40 space-y-5 text-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Cameo Medallion */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gradient-to-tr from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-950 font-serif font-black text-2xl sm:text-3xl shadow-xl ring-4 ring-amber-300/30 group-hover:scale-105 transition-transform">
                    DP
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
                      OUR FOUNDER & INSPIRATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                      Late Sri Dinabandhu Panigrahi
                    </h3>
                    <p className="text-xs text-amber-200/80 font-mono">
                      1917 – 1997 • Bhadrak, Odisha
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 text-left bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p>• <strong>Commonwealth Scholar</strong> (University of Leeds, UK, 1946)</p>
                    <p>• <strong>Master&apos;s in Education</strong> (Patna University & Leeds University)</p>
                    <p>• Pioneer in Adult, Primary & Secondary Rural Education</p>
                    <p>• Village School Founder in Coastal Bhadrak</p>
                  </div>

                  <div className="pt-2 text-xs text-slate-400 border-t border-white/10">
                    <span>Trust Created By: </span>
                    <strong className="text-amber-300">Mrs. Shovana Devi (Founder)</strong>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP & GOVERNANCE - ASYMMETRIC CREST SHAPES */}
      <section id="governance" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                LEADERSHIP & GOVERNANCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Management & Board of Trustees
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                Meet the dedicated leadership guiding Dinabandhu Foundation towards educational excellence and sustainable social development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader, i) => {
              const isFirst = i === 0;
              const shapeClass = isFirst 
                ? 'rounded-tl-[3.5rem] rounded-br-2xl rounded-tr-xl rounded-bl-xl border-t-4 border-t-blue-600' 
                : 'rounded-tr-[3.5rem] rounded-bl-2xl rounded-tl-xl rounded-br-xl border-t-4 border-t-emerald-600';
              return (
                <ScrollReveal key={i} animation={isFirst ? 'fade-right' : 'fade-left'} delay={i * 100}>
                  <div className={`bg-white ${shapeClass} p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between h-full`}>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-brand-950 to-brand-800 text-white flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0 shadow-md">
                          {leader.name.split(' ')[0][0]}{leader.name.split(' ')[1] ? leader.name.split(' ')[1][0] : ''}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                            {leader.name}
                          </h3>
                          <p className="text-xs font-semibold text-brand-700 mt-0.5">
                            {leader.role}
                          </p>
                          <p className="text-[11px] text-slate-500 font-medium">
                            {leader.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {leader.bio.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Key Credentials & Roles:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.credentials.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 bg-slate-100 rounded-full text-[11px] font-medium text-slate-700 border border-slate-200"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. VISION & MISSION - INTERLOCKING YIN-YANG CURVED PAIR */}
      <section id="vision" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* Vision: Left Curved */}
            <ScrollReveal animation="fade-right">
              <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50/70 p-6 sm:p-10 rounded-l-[3rem] rounded-r-2xl border-2 border-blue-200 shadow-md hover:shadow-xl transition-all space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  Our Vision
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>To excel in imparting various kinds of education to Indian students, ensuring quality with a delivery mechanism which is world standard.</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>To contribute towards raising of income-earning capability and livelihood of rural and urban poor by focusing on skill development with job linkage, including self-employment, and to work towards socio-economic empowerment of the underprivileged in general.</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission: Right Curved */}
            <ScrollReveal animation="fade-left">
              <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50/70 p-6 sm:p-10 rounded-r-[3rem] rounded-l-2xl border-2 border-emerald-200 shadow-md hover:shadow-xl transition-all space-y-4">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-950">
                  Our Mission
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>To foster holistic excellence in the new generation of students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>To instill positive thinking, desire for knowledge, and execution capacity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>To conduct innovative research in evolving multidisciplinary technologies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>To act as an apex integrator ensuring proper spending of CSR funds with absolute transparency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>To become a benchmark training organisation for state & central skilling schemes.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* 5. LEGAL STATUS & REGISTRATIONS - OFFICIAL CERTIFICATE STUB */}
          <ScrollReveal animation="zoom-in" delay={100}>
            <div id="trust" className="mt-10 sm:mt-14 p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-brand-950 to-slate-900 text-white rounded-[2.5rem] rounded-tr-none shadow-2xl border-2 border-amber-400/30 relative">
              <div id="legal" className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-8 space-y-2.5">
                  <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    STATUTORY COMPLIANCE & LEGAL CONSTITUTION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    The Trust Constitution, Legal Status & Registrations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Mrs. Shovana Devi formed <strong>Dinabandhu Foundation for Educational Research and Socio Economic Development</strong> as a registered trust under the <strong>Indian Trust Act, 1882</strong>, by the registering authority at Bhubaneswar. She appointed Dr. B. B. Panigrahi and Mrs. Smita Panigrahi as trustees. The trust is registered under <strong>Sections 12AA and 80G</strong> of the Indian Income-tax Act, 1961.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-2.5 text-xs">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none border border-white/10 backdrop-blur-sm">
                    <strong className="text-white block">Indian Trust Act, 1882</strong>
                    <span className="text-slate-300 text-[11px]">Registered at Bhubaneswar (1999)</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none border border-emerald-400/30 backdrop-blur-sm">
                    <strong className="text-emerald-300 block">Section 12AA Certified</strong>
                    <span className="text-slate-300 text-[11px]">Tax Exempt Educational & Social Trust</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none border border-amber-400/30 backdrop-blur-sm">
                    <strong className="text-amber-300 block">Section 80G Certified</strong>
                    <span className="text-slate-300 text-[11px]">50% Income Tax Exemption for Donors</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 6. OUR TEAM - DYNAMIC SCALLOPED SHAPES */}
      <section id="team" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                OUR TEAM
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dedicated Team & Field Execution Force
              </h2>
              <p className="text-xs sm:text-base text-slate-600">
                With a dedicated team of 20 professionals across Odisha, our personnel blend academic expertise, technical skills training, and passionate grassroots social work.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="h-full bg-white p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-2 border-blue-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Executive Leadership
                </span>
                <h4 className="font-bold text-slate-900 text-base">Trustees & Directors</h4>
                <p className="text-xs text-slate-600">
                  Guiding institutional strategy, higher technical education standards, and transparent governance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="h-full bg-white p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm border-2 border-emerald-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Environment & Afforestation
                </span>
                <h4 className="font-bold text-slate-900 text-base">Ecological Specialists</h4>
                <p className="text-xs text-slate-600">
                  Leading native plantation drives, watershed management, soil conservation, and school eco-clubs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="h-full bg-white p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-2 border-amber-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  SkillEM Vocational
                </span>
                <h4 className="font-bold text-slate-900 text-base">Master Trainers & Mobilizers</h4>
                <p className="text-xs text-slate-600">
                  Executing DDU-GKY, PMKVY, solar installation, and women SHG trade courses with job linkages.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="h-full bg-white p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm border-2 border-purple-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  Health & Outreach
                </span>
                <h4 className="font-bold text-slate-900 text-base">Field Health Coordinators</h4>
                <p className="text-xs text-slate-600">
                  Managing mobile health screening clinics, maternal nutrition, and safe drinking-water awareness.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. VERTICALS BREAKDOWN - SLANTED PANELS */}
      <section id="verticals" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                OUR ARMS & VERTICALS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Three Specialized Verticals Serving One Shared Vision
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {VERTICALS.map((v, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-white rounded-[2rem] rounded-tr-sm p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4 space-y-1.5">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      {v.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {v.name}
                    </h3>
                    <p className="text-xs text-emerald-700 font-semibold">
                      {v.tagline}
                    </p>
                  </div>

                  <div className="lg:col-span-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </div>

                  <div className="lg:col-span-3">
                    <ul className="space-y-1 text-xs text-slate-700">
                      {v.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
