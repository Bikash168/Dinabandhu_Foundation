'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  TreePine,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { ODISHA_DISTRICTS } from '@/data/foundationData';

export default function WhereWeWorkPage() {
  const [selectedDistrict, setSelectedDistrict] = useState(ODISHA_DISTRICTS[0].name);

  const activeDistrictData = ODISHA_DISTRICTS.find(d => d.name === selectedDistrict) || ODISHA_DISTRICTS[0];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-950 text-white py-10 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-amber-400 font-semibold tracking-wider text-[10px] sm:text-xs uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
              GEOGRAPHIC FOOTPRINT
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Where We Work: Across 10 Districts of Odisha
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed">
              Our organization is committed to empowering poor, vulnerable, and marginalized communities across coastal, tribal highland, and western dryland belts of Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-6 sm:py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 text-center">
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-blue-50/70 border border-blue-200/80">
              <span className="text-2xl sm:text-4xl font-black text-brand-900 block">10</span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 block mt-0.5 sm:mt-1">Districts Served</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1">Coastal to Tribal Highlands</span>
            </div>
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <span className="text-2xl sm:text-4xl font-black text-emerald-900 block">20+</span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 block mt-0.5 sm:mt-1">Field Members</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1">Grassroots Team</span>
            </div>
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <span className="text-2xl sm:text-4xl font-black text-amber-900 block">200+</span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 block mt-0.5 sm:mt-1">Villages Reached</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1">Rural community connect</span>
            </div>
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-purple-50/70 border border-purple-200/80">
              <span className="text-2xl sm:text-4xl font-black text-purple-900 block">10,000+</span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 block mt-0.5 sm:mt-1">Community Members</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1">Benefited across Odisha</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Showcase & Interactive District Explorer */}
      <section className="py-10 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Map Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl">
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Official Operational Map of Odisha
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Highlighted red districts signify active field interventions
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-red-100 text-red-800 rounded-md whitespace-nowrap">
                    10 Districts
                  </span>
                </div>

                <div className="relative mt-3 sm:mt-4 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[4/3] flex items-center justify-center">
                  <Image
                    src="/images/odisha-map.png"
                    alt="Official Map of Odisha highlighting Dinabandhu Foundation Operational Districts"
                    width={600}
                    height={480}
                    className="object-contain w-full h-full p-2"
                    priority
                  />
                </div>

                {/* District Buttons underneath map */}
                <div className="mt-4 sm:mt-6">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Click a district to view localized initiatives:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {ODISHA_DISTRICTS.map((d) => (
                      <button
                        key={d.name}
                        onClick={() => setSelectedDistrict(d.name)}
                        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-bold transition ${
                          selectedDistrict === d.name
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {d.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* District Details Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              
              <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl space-y-4 sm:space-y-6">
                <div className="flex items-start justify-between gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                      {activeDistrictData.zone}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                      {activeDistrictData.name} District
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Operational District • Dinabandhu Foundation Odisha Network
                    </p>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Core Strategic Focus:
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800 mt-0.5">
                      {activeDistrictData.focus}
                    </h4>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Ground Realities & Description:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {activeDistrictData.description}
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-[10px] sm:text-xs font-bold text-brand-900 uppercase tracking-wider block">
                      Key Grassroots Interventions:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      {activeDistrictData.keyWork}
                    </p>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap gap-2 sm:gap-3">
                  <Link
                    href="/get-involved?type=volunteer"
                    className="flex-1 sm:flex-none text-center bg-brand-900 hover:bg-brand-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
                  >
                    Volunteer in {activeDistrictData.name}
                  </Link>
                  <Link
                    href="/csr-partnerships"
                    className="flex-1 sm:flex-none text-center bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg border border-slate-300 transition"
                  >
                    Sponsor District Project
                  </Link>
                </div>
              </div>

              {/* Beneficiary Profile Spotlight */}
              <div className="bg-slate-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg space-y-3 sm:space-y-4">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                  BENEFICIARY PROFILE
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  Serving Marginalized & Vulnerable Segments
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Rural & Tribal Communities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Coastal Fisherfolk & Farmers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Women Self-Help Groups (SHGs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Unemployed Rural Youth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Mothers & Infants in Remote Pockets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Smallholder Climate-Risk Farmers</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
