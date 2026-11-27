'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
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
  Award,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDATION_META } from '@/data/foundationData';

function MediaCornerContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as 'news' | 'events' | 'gallery' | 'reports' | 'stories') || 'news';
  const [activeTab, setActiveTab] = useState<'news' | 'events' | 'gallery' | 'reports' | 'stories'>(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['news', 'events', 'gallery', 'reports', 'stories'].includes(tab)) {
      setActiveTab(tab as any);
    }
  }, [searchParams]);

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
      title: 'Native Afforestation Drive Plants 25,000 Mangrove & Forest Saplings',
      snippet: 'Collaborative initiative with Coastal Village Councils along the Bay of Bengal coastline in Bhadrak and Kendrapara to build natural cyclone barriers.',
      tag: 'Climate Action'
    },
    {
      date: 'August 2026',
      category: 'CSR Partnership',
      title: 'Dinabandhu Foundation Recognized as Leading CSR Apex Integrator in Eastern India',
      snippet: 'Awarded for transparent fund execution under Section 12AA/80G, serving 200+ villages with audited impact metrics and verified governance.',
      tag: 'Statutory Impact'
    }
  ];

  const events = [
    {
      title: 'Odisha Green Skilling Conclave 2026',
      date: 'Upcoming • December 12, 2026',
      location: 'Bhubaneswar Campus',
      desc: 'Annual symposium bringing together industry leaders, solar enterprises, and 500 vocational trainees.',
      type: 'Conference'
    },
    {
      title: 'Coastal Health & Safe Water Yatra',
      date: 'Bi-Weekly Drive',
      location: 'Puri & Ganjam Districts',
      desc: 'Mobile preventive health camp conducting water testing, eye checkups, and nutritional screening.',
      type: 'Health Camp'
    },
    {
      title: 'DDU-GKY & PMKVY Youth Mobilization Drives',
      date: 'Monthly Drive',
      location: 'Bhadrak, Khordha & Nuapada',
      desc: 'Free counseling sessions for 10th/12th dropouts and graduates linking to government-certified trades.',
      type: 'SkillEM Skilling'
    },
    {
      title: 'Swachhta & Safe Water Community Literacy',
      date: 'Ongoing Initiative',
      location: '10 Districts in Odisha',
      desc: 'Door-to-door water chlorination education, toilet hygiene workshops, and youth clean-up rallies.',
      type: 'Sanitation'
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
    },
    {
      title: 'Quarterly Field Newsletter: Voices from Coastal Odisha',
      type: 'Newsletter',
      period: 'Q3 2026',
      size: '1.2 MB • PDF',
      description: 'Highlights from village SHG handloom training, farm pond rejuvenation, and solar rooftop installations.'
    },
    {
      title: 'Event Report: Annual Skilling & Developed Odisha 2036 Conclave',
      type: 'Event Report',
      period: 'August 2026',
      size: '2.1 MB • PDF',
      description: 'Proceedings and whitepaper on public-private CSR models for rural employment in Eastern India.'
    }
  ];

  const galleryCategories = [
    { title: 'Mobile Medical Camps', count: '45+ Photos', desc: 'Door-to-door diagnostic screening in coastal & tribal Odisha' },
    { title: 'Green Skills Workshops', count: '60+ Photos', desc: 'Hands-on solar assembly, organic waste composting & repair' },
    { title: 'Native Tree Plantations', count: '35+ Photos', desc: 'Eco-clubs and panchayats planting mangrove & indigenous flora' },
    { title: 'Women SHG Training', count: '50+ Photos', desc: 'Textile craft, micro-enterprise bookkeeping & digital marketing' },
    { title: 'Documentary Video Library', count: '12 Videos', desc: 'Short field films on beneficiary transformations & village clinics' },
    { title: 'Clean Water & Sanitation Drives', count: '28+ Photos', desc: 'Village chlorination, pond cleaning & school awareness' }
  ];

  const stories = [
    {
      title: 'A Young Woman Finding Her Voice Through Tailoring & Micro-Enterprise',
      name: 'Puspalata Mohanty',
      district: 'Puri District',
      narrative: 'Leading a 12-member Self-Help Group supplying school uniforms to local institutions, earning steady independent income and speaking with confidence in her panchayat.',
      sdg: 'SDG 5 & 10'
    },
    {
      title: 'Staying in His Village: A Solar Technician’s Journey',
      name: 'Ranjan Barik',
      district: 'Bhadrak District',
      narrative: 'Trained under SkillEM green skills program. Now manages decentralized solar rooftops across 6 neighboring villages without needing to migrate to distant cities.',
      sdg: 'SDG 1 & 13'
    },
    {
      title: 'Eradicating Monsoon Diarrhea Through Community Water Audits',
      name: 'Sanatan Nayak & Village Council',
      district: 'Ganjam District',
      narrative: 'Collaborated with Dinabandhu Foundation mobile health van to test tube wells, fix pipe leakages, and educate families on water sanitization.',
      sdg: 'SDG 3 & 6'
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-brand-950 via-brand-900 to-[#23120f] text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-cream-200 font-semibold tracking-wider text-[10px] sm:text-xs uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cream-300" />
                <span>MEDIA CORNER & PUBLICATIONS</span>
              </span>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Media Corner: News, Field Updates & Publications
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-cream-200 leading-relaxed">
                Explore ground-level dispatches, events & campaigns, photo & video galleries, audited annual reports, newsletters, and stories of change from Dinabandhu Foundation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Interactive Navigation Tabs */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-cream-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-2 py-2.5 sm:py-3 px-2">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'news'
                  ? 'bg-brand-800 text-cream-50 shadow-md scale-105'
                  : 'bg-cream-100 text-cream-950 hover:bg-cream-200'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>News & Updates</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'events'
                  ? 'bg-brand-800 text-cream-50 shadow-md scale-105'
                  : 'bg-cream-100 text-cream-950 hover:bg-cream-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Events & Campaigns</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'gallery'
                  ? 'bg-brand-800 text-cream-50 shadow-md scale-105'
                  : 'bg-cream-100 text-cream-950 hover:bg-cream-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photo & Video Gallery</span>
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'reports'
                  ? 'bg-brand-800 text-cream-50 shadow-md scale-105'
                  : 'bg-cream-100 text-cream-950 hover:bg-cream-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Annual & Impact Reports</span>
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === 'stories'
                  ? 'bg-brand-800 text-cream-50 shadow-md scale-105'
                  : 'bg-cream-100 text-cream-950 hover:bg-cream-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blog / Stories of Change</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Tab Content Section */}
      <section className="py-10 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          {/* Tab 1: News & Updates in Document-Stub Shapes */}
          {activeTab === 'news' && (
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-3xl font-extrabold text-brand-950">
                    Latest Field Dispatches & Press Coverage
                  </h2>
                  <p className="text-xs sm:text-sm text-cream-700 mt-1">
                    Stay updated on our activities across health, environment, and skilling in Odisha.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {newsItems.map((item, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                    <div className="bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm p-6 sm:p-7 border-2 border-cream-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 sm:space-y-4 flex flex-col justify-between h-full group">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs font-bold text-brand-800 uppercase bg-cream-100 px-3 py-1 rounded-full border border-cream-200">
                            {item.category}
                          </span>
                          <span className="text-xs text-cream-700 font-mono">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-brand-950 leading-snug group-hover:text-brand-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-cream-900/80 leading-relaxed">
                          {item.snippet}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-cream-100 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-cream-700">{item.tag}</span>
                        <Link
                          href="/contact"
                          className="text-xs font-bold text-brand-800 hover:text-brand-950 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                          <span>Media Inquiry</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Events & Campaigns in Ticket-Stub Shapes */}
          {activeTab === 'events' && (
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-3xl font-extrabold text-brand-950">
                    Grassroots Events & Public Campaigns
                  </h2>
                  <p className="text-xs sm:text-sm text-cream-700 mt-1">
                    Active field drives bringing together youth, rural women, panchayats, and health professionals.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {events.map((ev, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                    <div className="bg-white rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm p-6 sm:p-7 border-2 border-cream-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between h-full group">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs font-bold text-brand-800 bg-cream-100 px-3 py-1 rounded-full border border-cream-200">
                            {ev.type}
                          </span>
                          <span className="text-xs font-mono text-cream-700">
                            {ev.date}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-brand-950 group-hover:text-brand-800 transition-colors">
                          {ev.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-cream-900/80">
                          {ev.desc}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-cream-100 flex items-center justify-between text-xs text-cream-700">
                        <span>Location: {ev.location}</span>
                        <Link href="/get-involved?type=volunteer" className="text-brand-800 font-bold hover:underline inline-flex items-center gap-1">
                          <span>Join Event</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Photo & Video Gallery in Framed Viewports */}
          {activeTab === 'gallery' && (
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-3xl font-extrabold text-brand-950">
                    Moments from the Field: Grassroots Action in Focus
                  </h2>
                  <p className="text-xs sm:text-sm text-cream-700 mt-1">
                    Documenting community engagement, health check-ups, and green skill sessions across Odisha.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {galleryCategories.map((g, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                    <div className="bg-white rounded-3xl p-5 border border-cream-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
                      <div className="h-44 rounded-2xl bg-gradient-to-br from-brand-950 to-brand-900 flex items-center justify-center text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                        <ImageIcon className="w-12 h-12 text-cream-200/40 group-hover:scale-110 transition-transform" />
                        <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-full shadow">
                          {g.count}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-950 text-sm sm:text-base group-hover:text-brand-800 transition-colors">{g.title}</h4>
                        <p className="text-xs text-cream-700 mt-1">{g.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Annual & Impact Reports in Dossier Folders */}
          {activeTab === 'reports' && (
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-3xl font-extrabold text-brand-950">
                    Annual Reports, Impact Reports & Newsletters
                  </h2>
                  <p className="text-xs sm:text-sm text-cream-700 mt-1">
                    Download our audited annual accounts, CSR apex portfolios, and quarterly newsletters.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {reports.map((rep, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                    <div className="bg-white rounded-2xl rounded-tr-none border-t-4 border-t-brand-800 p-5 sm:p-7 border border-cream-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 sm:space-y-4 flex flex-col justify-between h-full">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs font-bold text-brand-800 bg-cream-100 px-2.5 py-0.5 rounded-full border border-cream-200">
                            {rep.type}
                          </span>
                          <span className="text-xs text-cream-700 font-mono">
                            {rep.period}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-brand-950">
                          {rep.title}
                        </h3>
                        <p className="text-xs text-cream-900/80 leading-relaxed">
                          {rep.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-cream-100 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-cream-600">{rep.size}</span>
                        <a
                          href={`mailto:${FOUNDATION_META.email}?subject=Request%20Report%20${encodeURIComponent(rep.title)}`}
                          className="inline-flex items-center gap-1.5 bg-brand-800 hover:bg-brand-900 text-cream-50 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5 text-cream-200" />
                          <span>Request PDF</span>
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Blog & Stories of Change */}
          {activeTab === 'stories' && (
            <div className="space-y-6 sm:space-y-8">
              <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-3xl font-extrabold text-brand-950">
                    Blog / Stories of Change & Success Stories
                  </h2>
                  <p className="text-xs sm:text-sm text-cream-700 mt-1">
                    Personal journeys of youth, mothers, and artisans across Odisha.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {stories.map((s, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                    <div className="bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm p-6 border-2 border-cream-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between h-full group">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase text-brand-800 bg-cream-100 px-2.5 py-1 rounded-full border border-cream-200">
                          {s.sdg} • {s.district}
                        </span>
                        <h3 className="text-base font-bold text-brand-950 group-hover:text-brand-800 transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-xs text-cream-900/80 leading-relaxed">
                          {s.narrative}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-cream-100 text-xs font-semibold text-brand-800">
                        Beneficiary: {s.name}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default function MediaCornerPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 text-sm">Loading media corner...</div>}>
      <MediaCornerContent />
    </Suspense>
  );
}
