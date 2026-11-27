'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  HeartHandshake, 
  Users, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  Send, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDATION_META } from '@/data/foundationData';

function GetInvolvedContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'volunteer';
  const [activeTab, setActiveTab] = useState(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    district: 'Bhadrak',
    interest: 'Community Health Awareness',
    background: '',
    message: ''
  });

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && ['volunteer', 'csr', 'collaborate', 'fundraise', 'internship'].includes(type)) {
      setActiveTab(type);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const involvementOptions = [
    {
      id: 'volunteer',
      title: 'Volunteer On Ground',
      icon: Users,
      desc: 'Join our mobile medical clinics, tree plantations, or youth career guidance camps in your local district.',
      badge: 'Community'
    },
    {
      id: 'csr',
      title: 'Corporate CSR Partner',
      icon: HeartHandshake,
      desc: 'Deploy statutory corporate CSR funds across 10 Odisha districts with 12AA & 80G certification and full auditing.',
      badge: 'Companies'
    },
    {
      id: 'collaborate',
      title: 'Institutional Partner',
      icon: Building2,
      desc: 'Colleges, government departments, and NGOs partnering on skilling curricula, research, and resource sharing.',
      badge: 'Strategic'
    },
    {
      id: 'internship',
      title: 'Student Internship',
      icon: GraduationCap,
      desc: 'Hands-on experiential learning for social work, public health, engineering, and environmental studies students.',
      badge: 'Certified'
    },
    {
      id: 'fundraise',
      title: 'Fundraise For Us',
      icon: Award,
      desc: 'Champion grassroots causes by rallying friends, colleagues, or alumni to support village clinics and green skills.',
      badge: 'Tax Relief'
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-brand-950 via-brand-900 to-[#23120f] text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-cream-200 font-semibold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cream-300" />
                <span>COMMUNITY PARTICIPATION</span>
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Get Involved with Dinabandhu Foundation
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-cream-200 leading-relaxed">
                If you believe in the dream of a healthier, greener, and skilled Odisha, come walk with us. Choose how you want to create lasting impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Engagement Options Grid in Asymmetric Scalloped Shells */}
      <section className="py-12 sm:py-16 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {involvementOptions.map((opt, idx) => {
              const Icon = opt.icon;
              const isSelected = activeTab === opt.id;
              return (
                <ScrollReveal key={opt.id} animation="fade-up" delay={idx * 60}>
                  <button
                    onClick={() => setActiveTab(opt.id)}
                    className={`w-full p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-2 text-left transition-all duration-300 flex flex-col justify-between h-full group ${
                      isSelected
                        ? 'bg-gradient-to-br from-brand-950 to-brand-900 text-white border-brand-800 shadow-xl scale-[1.03]'
                        : 'bg-white text-cream-950 border-cream-200 hover:border-brand-700 hover:bg-cream-100/50 hover:shadow-lg hover:-translate-y-1'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-2xl ${isSelected ? 'bg-white/15 text-white' : 'bg-cream-100 text-brand-900 shadow-sm'} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm ${isSelected ? 'bg-cream-100 text-brand-950' : 'bg-cream-100 text-cream-900 border border-cream-200'}`}>
                          {opt.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-base leading-snug">
                        {opt.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${isSelected ? 'text-cream-200' : 'text-cream-700'}`}>
                        {opt.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-2">
                      <span className={`text-[11px] font-bold uppercase ${isSelected ? 'text-cream-200' : 'text-brand-800 group-hover:translate-x-1 inline-block transition-transform'}`}>
                        {isSelected ? 'Selected Track ✓' : 'Select Track →'}
                      </span>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Application Form in Sculpted Shell */}
      <section className="py-12 sm:py-20 bg-cream-100/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="zoom-in">
            <div className="bg-white rounded-[2.5rem] rounded-tr-none p-6 sm:p-12 border-2 border-cream-200 shadow-2xl space-y-8">
              
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-brand-800 uppercase tracking-wider bg-cream-200 px-3.5 py-1.5 rounded-full border border-cream-300 shadow-sm">
                  APPLICATION & INQUIRY FORM
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-2">
                  Join As: {involvementOptions.find(o => o.id === activeTab)?.title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-800">
                  Fill in your details below and our team in Bhubaneswar will get in touch.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-cream-100 border-2 border-brand-300 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-800 mx-auto" />
                  <h4 className="text-xl font-bold text-brand-950">Application Submitted!</h4>
                  <p className="text-sm text-cream-900 max-w-md mx-auto">
                    Thank you for stepping forward. We have received your expression of interest for <strong>{involvementOptions.find(o => o.id === activeTab)?.title}</strong>. We will contact you at {formState.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Preferred Operational District
                      </label>
                      <select
                        value={formState.district}
                        onChange={e => setFormState({ ...formState, district: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none bg-white"
                      >
                        <option>Bhadrak</option>
                        <option>Khordha (Bhubaneswar)</option>
                        <option>Puri</option>
                        <option>Ganjam</option>
                        <option>Balasore</option>
                        <option>Kendrapara</option>
                        <option>Jagatsinghpur</option>
                        <option>Jajpur</option>
                        <option>Koraput</option>
                        <option>Nuapada</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                      Primary Area of Interest
                    </label>
                    <select
                      value={formState.interest}
                      onChange={e => setFormState({ ...formState, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none bg-white"
                    >
                      <option>Public Health & Free Diagnostic Camps</option>
                      <option>Native Tree Plantation & Environmental Conservation</option>
                      <option>Green Skills & Youth Technical Training</option>
                      <option>Digital Literacy & Women SHG Entrepreneurship</option>
                      <option>Primary & English Education for Children</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                      Your Background / Experience / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about yourself, your availability, or any skills you'd love to contribute..."
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-800 hover:bg-brand-900 text-cream-50 font-bold py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 text-cream-200" />
                    <span>Submit Expression of Interest</span>
                  </button>
                </form>
              )}

            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

export default function GetInvolvedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 text-sm">Loading application form...</div>}>
      <GetInvolvedContent />
    </Suspense>
  );
}
