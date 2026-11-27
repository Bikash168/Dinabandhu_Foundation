'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  Download, 
  Calendar, 
  Image as ImageIcon, 
  Newspaper, 
  Video, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Award
} from 'lucide-react';
import { FOUNDATION_META } from '@/data/foundationData';

export default function MediaCornerPage() {
  const [activeTab, setActiveTab] = useState<'news' | 'reports' | 'gallery'>('news');

  const newsItems = [
    {
      date: 'November 2026',
      category: 'Skill Development',
      title: 'Dinabandhu Foundation Completes Green Skills Training for 2,000+ Odisha Youth',
      snippet: 'Youth across Bhadrak, Puri, Balasore and Ganjam complete certified programs in solar installation, rainwater auditing, and organic composting under SkillEM initiative.',
      tag: 'Press Release'
    },
    {
      date: 'October 2026',
      category: 'Public Health',
      title: 'Mobile Diagnostic Clinic Reaches 15 Tribal Hamlets in Koraput',
      snippet: 'Over 650 villagers received preventive screenings for diabetes, hypertension, and water-borne pathogens along with free nutritional supplements for mothers.',
      tag: 'Field Update'
    },
    {
      date: 'September 2026',
      category: 'Environment',
      title: 'Mega Coastal Native Tree Plantation Drive Across Jagatsinghpur & Kendrapara',
      snippet: 'In partnership with local panchayats and school eco-clubs, 15,000 climate-resilient native saplings were planted with geo-tagged survival tracking.',
      tag: 'Eco Action'
    },
    {
      date: 'August 2026',
      category: 'Education & CSR',
      title: 'Trident Academy and Indevin Host Annual Skill & Innovation Conclave',
      snippet: 'Key industry leaders, CSR directors, and government dignitaries gathered in Bhubaneswar to strategize youth skilling pathways for Developed Odisha 2036.',
      tag: 'Conclave'
    }
  ];

  const reports = [
    {
      title: 'Annual Audited Report 2025–26',
      type: 'Statutory Report',
      period: 'FY 2025-26',
      size: '2.4 MB • PDF',
      description: 'Comprehensive financial statements, 12AA/80G compliance audit, governance report, and beneficiary reach across 10 Odisha districts.'
    },
    {
      title: 'Impact Assessment Report: Green Skills & Youth Livelihoods',
      type: 'Impact Report',
      period: '2024–2026',
      size: '3.8 MB • PDF',
      description: 'Detailed analysis of 2,000+ trained youth, employment linkages, income upliftment data, and alignment with UN SDGs 1, 3, 10 & 13.'
    },
    {
      title: 'Grassroots Health & Water Screening Report',
      type: 'Field Study',
      period: '2025–2026',
      size: '1.9 MB • PDF',
      description: 'Findings from mobile preventive clinics in Ganjam, Koraput and Puri on seasonal water-borne diseases and community nutrition.'
    },
    {
      title: 'Indevin CSR Apex Portfolio & Corporate Partnership Guide',
      type: 'CSR Deck',
      period: 'Current Edition',
      size: '4.1 MB • PDF',
      description: 'Guidelines for corporate donors, CSR project matrices, monitoring methodologies, and tax-exemption mechanisms.'
    }
  ];

  const galleryCategories = [
    { title: 'Mobile Medical Camps', count: '45+ Photos', desc: 'Door-to-door diagnostic screening in coastal & tribal Odisha' },
    { title: 'Green Skills Workshops', count: '60+ Photos', desc: 'Hands-on solar assembly, organic waste composting & repair' },
    { title: 'Native Tree Plantations', count: '35+ Photos', desc: 'Eco-clubs and panchayats planting mangrove & indigenous flora' },
    { title: 'Women SHG Training', count: '50+ Photos', desc: 'Textile craft, micro-enterprise bookkeeping & digital marketing' }
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              MEDIA CORNER & PUBLICATIONS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              News, Field Updates & Statutory Reports
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore ground-level dispatches, audited annual reports, photo galleries, and publication archives from Dinabandhu Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-20 z-30 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3 py-3">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                activeTab === 'news'
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>News & Updates</span>
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                activeTab === 'reports'
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Annual & Impact Reports</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                activeTab === 'gallery'
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Field Action Gallery</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content based on tab */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activeTab === 'news' && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Latest Field Dispatches & Press Releases
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Stay updated on our activities across health, environment, and skilling in Odisha.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-brand-700 uppercase bg-blue-50 px-2.5 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.snippet}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">{item.tag}</span>
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-brand-800 hover:text-brand-900 inline-flex items-center gap-1"
                      >
                        <span>Media Inquiry</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Transparency & Statutory Reports
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Download our audited annual accounts, impact evaluations, and CSR documentation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((rep, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded">
                          {rep.type}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {rep.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {rep.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {rep.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">{rep.size}</span>
                      <a
                        href={`mailto:${FOUNDATION_META.email}?subject=Request%20Report%20${encodeURIComponent(rep.title)}`}
                        className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Request PDF Copy</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Moments from the Field: Grassroots Action in Focus
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Documenting community engagement, workshops, and transformations across Odisha.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryCategories.map((g, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition space-y-4"
                  >
                    <div className="h-40 rounded-2xl bg-gradient-to-br from-brand-900 to-slate-900 flex items-center justify-center text-white relative overflow-hidden">
                      <ImageIcon className="w-10 h-10 text-white/40" />
                      <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded">
                        {g.count}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{g.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
