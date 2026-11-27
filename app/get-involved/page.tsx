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
      desc: 'Join our weekend camps, health literacy drives, tree plantation missions, or digital literacy coaching in your home district.',
      badge: 'Community Action'
    },
    {
      id: 'csr',
      title: 'Corporate CSR Partnership',
      icon: Building2,
      desc: 'Deploy corporate funds through a Section 12AA & 80G certified apex integrator with transparent audits and real impact metrics.',
      badge: '12AA & 80G'
    },
    {
      id: 'collaborate',
      title: 'Collaborate / Partner',
      icon: HeartHandshake,
      desc: 'Partner as an academic institution, research body, NGO, or government agency to co-create sustainable development solutions.',
      badge: 'Institutional'
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
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-brand-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 font-semibold tracking-wider text-xs uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
              COMMUNITY PARTICIPATION
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Get Involved with Dinabandhu Foundation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              If you believe in the dream of a healthier, greener, and skilled Odisha, come walk with us. Choose how you want to create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Options Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {involvementOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = activeTab === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id)}
                  className={`p-6 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-brand-900 text-white border-brand-900 shadow-xl scale-[1.02]'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/15 text-white' : 'bg-white text-brand-900 shadow-sm'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'}`}>
                        {opt.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-base leading-snug">
                      {opt.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {opt.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2">
                    <span className={`text-[11px] font-bold uppercase ${isSelected ? 'text-amber-300' : 'text-brand-700'}`}>
                      {isSelected ? 'Currently Selected' : 'Select This Track &rarr;'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Application / Sign-up Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                APPLICATION & INQUIRY FORM
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Join As: {involvementOptions.find(o => o.id === activeTab)?.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill in your details below and our team in Bhubaneswar will get in touch.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">Application Submitted!</h4>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  Thank you for stepping forward. We have received your expression of interest for <strong>{involvementOptions.find(o => o.id === activeTab)?.title}</strong>. We will contact you at {formState.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Preferred Operational District
                    </label>
                    <select
                      value={formState.district}
                      onChange={e => setFormState({ ...formState, district: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
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
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formState.interest}
                    onChange={e => setFormState({ ...formState, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                  >
                    <option>Public Health & Free Diagnostic Camps</option>
                    <option>Native Tree Plantation & Environmental Conservation</option>
                    <option>Green Skills & Youth Technical Training</option>
                    <option>Digital Literacy & Women SHG Entrepreneurship</option>
                    <option>Primary & English Education for Children</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Your Background / Experience / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about yourself, your availability, or any skills you'd love to contribute..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Expression of Interest</span>
                </button>
              </form>
            )}

          </div>
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
