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
      <section className="bg-gradient-to-b from-brand-950 via-brand-900 to-[#23120f] text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-500/15 blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-cream-200 font-semibold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT DINABANDHU FOUNDATION</span>
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Our Story, Legacy & Governance
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-cream-200 leading-relaxed">
                Dinabandhu Foundation works towards quality education, skill development, and the socio-economic empowerment of underserved communities across Odisha.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. STORY & FOUNDER SECTION - ASYMMETRIC TABLET SHAPE */}
      <section id="story" className="py-12 sm:py-20 bg-cream-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal animation="fade-right">
                <span className="text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3.5 py-1.5 rounded-full border border-cream-300">
                  OUR HERITAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 leading-tight mt-2">
                  Conceptualised in 1999 in Memory of Late Sri Dinabandhu Panigrahi
                </h2>
                
                <div className="space-y-4 text-xs sm:text-sm text-cream-900/80 leading-relaxed mt-3">
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
                <div className="p-4 bg-cream-100 border-l-4 border-brand-800 rounded-r-2xl text-xs sm:text-sm text-cream-950 italic shadow-sm mt-4">
                  &ldquo;True empowerment begins when knowledge reaches the doorsteps of those who need it most.&rdquo;
                </div>
              </ScrollReveal>
            </div>

            {/* Founder Card in Archival Tablet Shape */}
            <div id="founder" className="lg:col-span-5">
              <ScrollReveal animation="fade-left">
                <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-[#23120f] text-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl p-6 sm:p-8 shadow-2xl border-2 border-brand-700 space-y-5 text-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-cream-400/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Cameo Medallion */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gradient-to-tr from-brand-800 to-brand-600 rounded-full flex items-center justify-center text-cream-50 font-serif font-black text-2xl sm:text-3xl shadow-xl ring-4 ring-cream-200/20 group-hover:scale-105 transition-transform">
                    DP
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-cream-200 bg-brand-800/60 px-3 py-1 rounded-full border border-cream-200/20">
                      OUR FOUNDER & INSPIRATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                      Late Sri Dinabandhu Panigrahi
                    </h3>
                    <p className="text-xs text-cream-200 font-mono">
                      1917 – 1997 • Bhadrak, Odisha
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-cream-100 text-left bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p>• <strong>Commonwealth Scholar</strong> (University of Leeds, UK, 1946)</p>
                    <p>• <strong>Master&apos;s in Education</strong> (Patna University & Leeds University)</p>
                    <p>• Pioneer in Adult, Primary & Secondary Rural Education</p>
                    <p>• Village School Founder in Coastal Bhadrak</p>
                  </div>

                  <div className="pt-2 text-xs text-cream-300 border-t border-white/10">
                    <span>Trust Created By: </span>
                    <strong className="text-cream-100">Mrs. Shovana Devi (Founder)</strong>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP & GOVERNANCE - ASYMMETRIC CREST SHAPES */}
      <section id="governance" className="py-12 sm:py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3.5 py-1.5 rounded-full border border-cream-300">
                LEADERSHIP & GOVERNANCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                Our Management & Board of Trustees
              </h2>
              <p className="text-xs sm:text-base text-cream-900/80">
                Meet the dedicated leadership guiding Dinabandhu Foundation towards educational excellence and sustainable social development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader, i) => {
              const isFirst = i === 0;
              const shapeClass = isFirst 
                ? 'rounded-tl-[3.5rem] rounded-br-2xl rounded-tr-xl rounded-bl-xl border-t-4 border-t-brand-800' 
                : 'rounded-tr-[3.5rem] rounded-bl-2xl rounded-tl-xl rounded-br-xl border-t-4 border-t-brand-700';
              return (
                <ScrollReveal key={i} animation={isFirst ? 'fade-right' : 'fade-left'} delay={i * 100}>
                  <div className={`bg-white ${shapeClass} p-6 sm:p-8 border border-cream-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between h-full`}>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-brand-950 to-brand-800 text-cream-50 flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0 shadow-md">
                          {leader.name.split(' ')[0][0]}{leader.name.split(' ')[1] ? leader.name.split(' ')[1][0] : ''}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-brand-950">
                            {leader.name}
                          </h3>
                          <p className="text-xs font-semibold text-brand-800 mt-0.5">
                            {leader.role}
                          </p>
                          <p className="text-[11px] text-cream-700 font-medium">
                            {leader.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                        {leader.bio.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="pt-4 border-t border-cream-100">
                      <span className="text-[10px] sm:text-[11px] font-bold text-cream-600 uppercase tracking-wider block mb-2">
                        Key Credentials & Roles:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.credentials.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 bg-cream-100 rounded-full text-[11px] font-medium text-cream-900 border border-cream-200"
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
              <div className="h-full bg-cream-50 p-6 sm:p-10 rounded-l-[3rem] rounded-r-2xl border-2 border-brand-200 shadow-md hover:shadow-xl transition-all space-y-4">
                <div className="w-12 h-12 bg-brand-800 text-cream-50 rounded-2xl flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-950">
                  Our Vision
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                  <p className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>To excel in imparting various kinds of education to Indian students, ensuring quality with a delivery mechanism which is world standard.</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>To contribute towards raising of income-earning capability and livelihood of rural and urban poor by focusing on skill development with job linkage, including self-employment, and to work towards socio-economic empowerment of the underprivileged in general.</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission: Right Curved */}
            <ScrollReveal animation="fade-left">
              <div className="h-full bg-cream-50 p-6 sm:p-10 rounded-r-[3rem] rounded-l-2xl border-2 border-cream-300 shadow-md hover:shadow-xl transition-all space-y-4">
                <div className="w-12 h-12 bg-brand-900 text-cream-50 rounded-2xl flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-950">
                  Our Mission
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>To foster holistic excellence in the new generation of students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>To instill positive thinking, desire for knowledge, and execution capacity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>To conduct innovative research in evolving multidisciplinary technologies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>To act as an apex integrator ensuring proper spending of CSR funds with absolute transparency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-800 flex-shrink-0 mt-0.5" />
                    <span>To become a benchmark training organisation for state & central skilling schemes.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* 5. LEGAL STATUS & REGISTRATIONS - OFFICIAL CERTIFICATE STUB */}
          <ScrollReveal animation="zoom-in" delay={100}>
            <div id="trust" className="mt-10 sm:mt-14 p-6 sm:p-8 bg-gradient-to-r from-brand-950 via-brand-900 to-[#23120f] text-white rounded-[2.5rem] rounded-tr-none shadow-2xl border-2 border-brand-700 relative">
              <div id="legal" className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-8 space-y-2.5">
                  <span className="text-[10px] sm:text-xs font-bold text-cream-200 uppercase tracking-widest bg-brand-900/80 px-3 py-1 rounded-full border border-brand-700">
                    STATUTORY COMPLIANCE & LEGAL CONSTITUTION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    The Trust Constitution, Legal Status & Registrations
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-100 leading-relaxed">
                    Mrs. Shovana Devi formed <strong>Dinabandhu Foundation for Educational Research and Socio Economic Development</strong> as a registered trust under the <strong>Indian Trust Act, 1882</strong>, by the registering authority at Bhubaneswar. She appointed Dr. B. B. Panigrahi and Mrs. Smita Panigrahi as trustees. The trust is registered under <strong>Sections 12AA and 80G</strong> of the Indian Income-tax Act, 1961.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-2.5 text-xs">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none border border-white/10 backdrop-blur-sm">
                    <strong className="text-white block">Indian Trust Act, 1882</strong>
                    <span className="text-cream-200 text-[11px]">Registered at Bhubaneswar (1999)</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none border border-brand-500/40 backdrop-blur-sm">
                    <strong className="text-cream-100 block">Section 12AA Certified</strong>
                    <span className="text-cream-200 text-[11px]">Tax Exempt Educational & Social Trust</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none border border-brand-500/40 backdrop-blur-sm">
                    <strong className="text-cream-100 block">Section 80G Certified</strong>
                    <span className="text-cream-200 text-[11px]">50% Income Tax Exemption for Donors</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 6. OUR TEAM - DYNAMIC SCALLOPED SHAPES */}
      <section id="team" className="py-12 sm:py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
                OUR TEAM
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                Dedicated Team & Field Execution Force
              </h2>
              <p className="text-xs sm:text-base text-cream-900/80">
                With a dedicated team of 20 professionals across Odisha, our personnel blend academic expertise, technical skills training, and passionate grassroots social work.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="h-full bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-2 border-brand-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group">
                <div className="relative aspect-[16/10] w-full bg-cream-200 overflow-hidden">
                  <Image
                    src="/images/drive/photo_1__MG_2324.JPG"
                    alt="Executive Leadership & Convocation"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-900 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
                      Leadership
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-brand-950 text-base group-hover:text-brand-800 transition-colors">Trustees & Directors</h4>
                    <p className="text-xs text-cream-800 mt-1">
                      Guiding institutional strategy, higher technical education standards, and transparent governance.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="h-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm border-2 border-cream-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group">
                <div className="relative aspect-[16/10] w-full bg-cream-200 overflow-hidden">
                  <Image
                    src="/images/drive/photo_47_IMG_20251219_155359.jpg"
                    alt="Ecological Specialists"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-900 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
                      Ecology
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-brand-950 text-base group-hover:text-brand-800 transition-colors">Ecological Specialists</h4>
                    <p className="text-xs text-cream-800 mt-1">
                      Leading native plantation drives, watershed management, soil conservation, and school eco-clubs.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="h-full bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-2 border-brand-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group">
                <div className="relative aspect-[16/10] w-full bg-cream-200 overflow-hidden">
                  <Image
                    src="/images/drive/photo_38_IMG_20250712_125403.jpg"
                    alt="Master Trainers & Mobilizers"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-900 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
                      SkillEM
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-brand-950 text-base group-hover:text-brand-800 transition-colors">Master Trainers & Mobilizers</h4>
                    <p className="text-xs text-cream-800 mt-1">
                      Executing DDU-GKY, PMKVY, solar installation, and women SHG trade courses with job linkages.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="h-full bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm border-2 border-cream-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group">
                <div className="relative aspect-[16/10] w-full bg-cream-200 overflow-hidden">
                  <Image
                    src="/images/drive/photo_15_472067853_122132348918513320_7317603235333479596_n.jpg"
                    alt="Field Health Coordinators"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-900 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
                      Health
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-brand-950 text-base group-hover:text-brand-800 transition-colors">Field Health Coordinators</h4>
                    <p className="text-xs text-cream-800 mt-1">
                      Managing mobile health screening clinics, maternal nutrition, and safe drinking-water awareness.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. VERTICALS BREAKDOWN - SLANTED PANELS */}
      <section id="verticals" className="py-12 sm:py-20 bg-cream-50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-10 sm:mb-14">
              <span className="text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3.5 py-1.5 rounded-full border border-cream-300">
                OUR ARMS & VERTICALS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
                Three Specialized Verticals Serving One Shared Vision
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {VERTICALS.map((v, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-white rounded-[2rem] rounded-tr-sm p-6 sm:p-8 border border-cream-200 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4 space-y-3">
                    <div className="w-44 h-16 bg-cream-50/80 rounded-xl p-2 border border-cream-200 flex items-center justify-center overflow-hidden shadow-sm">
                      <Image
                        src={v.logo}
                        alt={`${v.name} Logo`}
                        width={180}
                        height={55}
                        className="max-h-12 max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-800 uppercase tracking-wider block">
                        {v.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-950 mt-0.5">
                        {v.name}
                      </h3>
                      <p className="text-xs text-cream-800 font-semibold mt-0.5">
                        {v.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                    {v.description}
                  </div>

                  <div className="lg:col-span-3">
                    <ul className="space-y-1 text-xs text-cream-900">
                      {v.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 flex-shrink-0" />
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
