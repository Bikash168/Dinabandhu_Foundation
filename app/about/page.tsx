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
  UserCheck
} from 'lucide-react';
import { FOUNDATION_META, FOUNDER_HERITAGE, LEADERSHIP, VERTICALS } from '@/data/foundationData';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-950 text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              ABOUT DINABANDHU FOUNDATION
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our Story, Legacy & Governance
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              Dinabandhu Foundation works towards quality education, skill development, and the socio-economic empowerment of underserved communities across Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Founder Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                OUR HERITAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Conceptualised in 1999 in Memory of Late Sri Dinabandhu Panigrahi
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
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

              {/* Founder quote badge */}
              <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-slate-700 italic">
                &ldquo;True empowerment begins when knowledge reaches the doorsteps of those who need it most.&rdquo;
              </div>
            </div>

            {/* Founder Card */}
            <div id="founder" className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-800 space-y-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />

                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-slate-950 font-black text-3xl shadow-xl">
                  DP
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-400">
                    OUR FOUNDER & INSPIRATION
                  </span>
                  <h3 className="text-2xl font-bold">
                    Late Sri Dinabandhu Panigrahi
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    1917 – 1997 • Bhadrak, Odisha
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-300 text-left bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                  <p>• <strong>Commonwealth Scholar</strong> (University of Leeds, UK, 1946)</p>
                  <p>• <strong>Master&apos;s in Education</strong> (Patna University & Leeds University)</p>
                  <p>• Pioneer in Adult, Primary & Secondary Rural Education</p>
                  <p>• Village School Founder in Coastal Bhadrak</p>
                </div>

                <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                  <span>Trust Created By: </span>
                  <strong className="text-white">Mrs. Shovana Devi (Founder)</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Governance Section */}
      <section id="governance" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              LEADERSHIP & GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Management
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Meet the dedicated leadership guiding Dinabandhu Foundation towards educational excellence and sustainable social development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {LEADERSHIP.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-brand-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                      {leader.name.split(' ')[0][0]}{leader.name.split(' ')[1] ? leader.name.split(' ')[1][0] : ''}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-brand-700 mt-0.5">
                        {leader.role}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {leader.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.bio.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* Credentials */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Credentials & Roles:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {leader.credentials.map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700 border border-slate-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section id="vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/60 p-8 sm:p-10 rounded-3xl border border-blue-200/80 shadow-sm space-y-5">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">
                Our Vision
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>To excel in imparting various kinds of education to Indian students, ensuring quality with a delivery mechanism which is world standard.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>To contribute towards raising of income-earning capability and livelihood of rural and urban poor by focusing on skill development with job linkage, including self-employment, and to work towards socio-economic empowerment of the underprivileged in general.</span>
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/60 p-8 sm:p-10 rounded-3xl border border-emerald-200/80 shadow-sm space-y-5">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">
                Our Mission
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>To foster holistic excellence in the new generation of students.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>To instill in them the power of aggressive positive thinking, insatiable desire for information and knowledge, a penchant for out-of-the-box ideation and capacity of execution.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>To contribute to society with honesty and integrity through innovative research in multidisciplinary areas of evolving and upcoming technologies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>To act as an apex integrator ensuring proper spending of CSR funds to achieve desired impacts in relevant fields with absolute transparency.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>To become one of the best training organisations for effective implementation of skill development schemes of Central and State Governments.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Status & Registrations */}
          <div id="trust" className="mt-14 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl sm:rounded-3xl shadow-xl">
            <div id="legal" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider">
                  STATUTORY COMPLIANCE & LEGAL CONSTITUTION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  The Trust Constitution, Legal Status & Registrations
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Mrs. Shovana Devi formed <strong>Dinabandhu Foundation for Educational Research and Socio Economic Development</strong> as a registered trust under the <strong>Indian Trust Act, 1882</strong>, by the registering authority at Bhubaneswar. She appointed Dr. B. B. Panigrahi and Mrs. Smita Panigrahi as trustees. The trust is registered under <strong>Sections 12AA and 80G</strong> of the Indian Income-tax Act, 1961.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2.5 text-xs">
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                  <strong className="text-white block">Indian Trust Act, 1882</strong>
                  <span className="text-slate-400">Registered at Bhubaneswar (1999)</span>
                </div>
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                  <strong className="text-emerald-400 block">Section 12AA Certified</strong>
                  <span className="text-slate-400">Tax Exempt Educational & Social Trust</span>
                </div>
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                  <strong className="text-amber-400 block">Section 80G Certified</strong>
                  <span className="text-slate-400">50% Income Tax Exemption for Donors</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Executive Leadership
              </span>
              <h4 className="font-bold text-slate-900 text-base">Trustees & Directors</h4>
              <p className="text-xs text-slate-600">
                Guiding institutional strategy, higher technical education standards, and transparent governance.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Environment & Afforestation
              </span>
              <h4 className="font-bold text-slate-900 text-base">Ecological Specialists</h4>
              <p className="text-xs text-slate-600">
                Leading native plantation drives, watershed management, soil conservation, and school eco-clubs.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                SkillEM Vocational
              </span>
              <h4 className="font-bold text-slate-900 text-base">Master Trainers & Mobilizers</h4>
              <p className="text-xs text-slate-600">
                Executing DDU-GKY, PMKVY, solar installation, and women SHG trade courses with job linkages.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                Health & Outreach
              </span>
              <h4 className="font-bold text-slate-900 text-base">Field Health Coordinators</h4>
              <p className="text-xs text-slate-600">
                Managing mobile health screening clinics, maternal nutrition, and safe drinking-water awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals Breakdown */}
      <section id="verticals" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              OUR ARMS & VERTICALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Specialized Verticals Serving One Shared Vision
            </h2>
          </div>

          <div className="space-y-8">
            {VERTICALS.map((v, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 space-y-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                    {v.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {v.name}
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium">
                    {v.tagline}
                  </p>
                </div>

                <div className="lg:col-span-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.description}
                </div>

                <div className="lg:col-span-3">
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {v.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
