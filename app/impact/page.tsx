'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  TrendingUp, 
  Heart, 
  Leaf, 
  GraduationCap, 
  CheckCircle2, 
  Quote, 
  ArrowRight,
  Target,
  Award,
  Globe2,
  Users
} from 'lucide-react';
import { UN_SDGS } from '@/data/foundationData';

export default function ImpactPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'green-skills' | 'health' | 'women'>('all');

  const stories = [
    {
      category: 'green-skills',
      name: 'Ranjan Barik',
      district: 'Bhadrak',
      trade: 'Solar Rooftop & Energy Technician',
      title: 'From Unemployed Youth to Certified Solar Micro-Entrepreneur',
      quote: 'I used to think I had to migrate to a metropolitan city to find work. After learning green skills and solar maintenance through Dinabandhu Foundation, I now manage rooftop solar systems in 6 neighboring villages and earn a steady livelihood right from my home district.',
      impactMetric: 'Monthly earnings ₹18,000+ • 45 Solar Installations Supported',
      sdg: 'SDG 1 & SDG 13'
    },
    {
      category: 'women',
      name: 'Puspalata Mohanty',
      district: 'Puri',
      trade: 'Apparel Design & Self-Help Group Leader',
      title: 'Transforming Coastal Women into Self-Sustaining Producers',
      quote: 'Before the skill training, most women in our village had no personal savings. Today, our 12-member SHG produces school uniforms and eco-friendly cloth bags, supplying local cooperatives. We speak with pride and confidence in our families and panchayat meetings.',
      impactMetric: '12 Women in SHG Earning • 100% Repayment on Micro-Credit',
      sdg: 'SDG 5 & SDG 10'
    },
    {
      category: 'health',
      name: 'Sanatan Nayak & Community',
      district: 'Ganjam',
      trade: 'Preventive Health & Safe Drinking Water Drive',
      title: 'Tackling Chronic Water-Borne Illness Through Village Health Education',
      quote: 'Every monsoon our village struggled with water contamination and diarrhea among children. The mobile screening camp and clean water education conducted by Dinabandhu Foundation helped us identify water pipeline leaks, test our borewell quality, and adopt household chlorination.',
      impactMetric: '65% Reduction in Seasonal Water-borne Cases • 400+ Families Screened',
      sdg: 'SDG 3: Good Health'
    },
    {
      category: 'green-skills',
      name: 'Subrat Jena',
      district: 'Balasore',
      trade: 'Organic Composting & Agro-Waste Recycling',
      title: 'Turning Agricultural Residue into Bio-Fertilizer Income',
      quote: 'Burning crop stubble was depleting our soil and polluting the air. With training in vermicomposting and decentralized waste management, we turned 25 tons of biomass into organic compost for vegetable farmers in our panchayat.',
      impactMetric: '25 Metric Tons Bio-Waste Diverted • 60 Local Farmers Benefited',
      sdg: 'SDG 12 & SDG 13'
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(s => s.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              IMPACT STORIES & RESULTS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Real Lives Changed, Real Communities Transformed
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every young person in Odisha deserves a fair chance to build a good life. That simple belief is what gets us up and moving every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="p-8 bg-blue-50/70 border border-blue-200 rounded-3xl space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl font-bold text-brand-950">
              The Journey of Youth Skilling & Sustainable Hope
            </h2>
            <p>
              Across our state, there are so many young men and women who are full of talent and energy, but they don&apos;t always get the right chance or the right guidance. Some live in small villages, some come from families that struggle to make ends meet, and some have simply never been shown what is possible. <strong>We started our work to change that.</strong>
            </p>
            <p>
              So far, we have helped <strong>more than 2,000 young people across Odisha learn green skills</strong>. These are hands-on skills that open the door to real work, such as using clean energy, saving water, managing waste, and farming in ways that are kind to the earth. We have trained young men and young women side by side, because we believe that progress is only real when everyone moves forward together.
            </p>
            <p>
              The change we see is not just on paper. We see it in a young woman who now earns her own money and speaks with confidence at home. We see it in a young man who no longer has to leave his village to find work. We see families eating better, living better, and feeling hopeful about tomorrow. <strong>This is what a better quality of life really looks like.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* UN SDGs Alignment Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
              UNITED NATIONS FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Guided by Sustainable Development Goals (SDGs)
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Every step we take connects to globally recognized indicators of social progress and ecological resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {UN_SDGS.map((sdg, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.sdg}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {sdg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sdg.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dinabandhu Core Metric</span>
                </div>
              </div>
            ))}
          </div>

          {/* 2036 & 2047 Vision Banner */}
          <div id="vision2036" className="mt-16 bg-gradient-to-r from-brand-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  COMMITTED TO ODISHA&apos;S CENTENARY & INDIA&apos;S INDEPENDENCE CENTENARY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Developed Odisha by 2036 • Viksit Bharat by 2047
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We share a big dream for our home. We want to be part of building a <strong>Developed Odisha by 2036</strong> and a <strong>Viksit Bharat by 2047</strong>. We know this dream cannot come true through buildings and roads alone. It will come true through people, and especially through young people who are skilled, confident, and ready to lead.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/get-involved"
                  className="w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Walk With Us
                </Link>
                <Link
                  href="/csr-partnerships"
                  className="w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl border border-slate-700 transition"
                >
                  Partner for Impact
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Segregated Stories of Change */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                EVIDENCE & DATA
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Grassroots Stories of Change
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Real accounts from our participants across Odisha districts.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                  selectedCategory === 'all'
                    ? 'bg-brand-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Stories
              </button>
              <button
                onClick={() => setSelectedCategory('green-skills')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                  selectedCategory === 'green-skills'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Green Skills & Energy
              </button>
              <button
                onClick={() => setSelectedCategory('women')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                  selectedCategory === 'women'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Women SHGs
              </button>
              <button
                onClick={() => setSelectedCategory('health')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                  selectedCategory === 'health'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Preventive Health
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStories.map((story, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                      {story.district} District
                    </span>
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded">
                      {story.sdg}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {story.title}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-700">
                    Beneficiary: {story.name} • {story.trade}
                  </div>

                  <blockquote className="text-xs sm:text-sm text-slate-600 italic border-l-2 border-brand-500 pl-3 py-1 leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-800">
                      {story.impactMetric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
