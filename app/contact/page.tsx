'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  HelpCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDATION_META } from '@/data/foundationData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Is Dinabandhu Foundation registered under Section 12AA and 80G?',
      a: 'Yes. Dinabandhu Foundation is a registered trust under the Indian Trust Act 1882 at Bhubaneswar and holds valid certifications under Sections 12AA and 80G of the Indian Income Tax Act 1961, qualifying donors for 50% tax deduction.'
    },
    {
      q: 'How does the foundation ensure transparent utilization of CSR funds?',
      a: 'We operate as an apex integrator (under Indevin) providing detailed project reports (DPR), audited utilization certificates, baseline-endline impact assessments, and geo-tagged project tracking across our 10 operational districts in Odisha.'
    },
    {
      q: 'Can individuals volunteer or intern with Dinabandhu Foundation?',
      a: 'Absolutely. We welcome college students, working professionals, and community activists to participate in our mobile medical camps, tree plantations, and digital literacy drives.'
    },
    {
      q: 'Where are the foundation’s educational institutions located?',
      a: 'Our flagship engineering and biotechnology institution, Trident Academy of Technology, and the SkillEM vocational development centers are headquartered in Bhubaneswar, Odisha, with field centres spreading across 10 districts.'
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-brand-950 via-brand-900 to-slate-900 text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <span className="text-amber-400 font-semibold tracking-wider text-[10px] sm:text-xs uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONTACT & FIELD DESK</span>
              </span>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Collaborate for Healthier Communities, Greener Ecosystems & Skilled Livelihoods
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed">
                Have a question about our grassroots initiatives, CSR partnerships, or volunteer opportunities? Reach out to the Dinabandhu Foundation team—we welcome every conversation that drives lasting social impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Contact Details & Form Grid */}
      <section className="py-10 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Contact Details Plaque in Asymmetric Crest Shape */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <ScrollReveal animation="fade-right">
                <div className="bg-white p-6 sm:p-8 rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl border-2 border-slate-200 shadow-xl space-y-5">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      CENTRAL HEADQUARTERS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                      Grassroots Coordination & Support Desk
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Whether you represent a corporate CSR desk, an institutional donor, a local self-help group, or wish to volunteer on the ground, our team is ready to connect.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                      <MapPin className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-bold text-xs uppercase">Registered & Field Office:</strong>
                        <span className="text-slate-600">Bhubaneswar, Odisha, India</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">Indian Trust Act 1882 Regd. Trust</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                      <Mail className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-bold text-xs uppercase">Email Correspondence:</strong>
                        <a href={`mailto:${FOUNDATION_META.email}`} className="text-brand-800 hover:underline font-semibold break-all">
                          {FOUNDATION_META.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                      <Clock className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-bold text-xs uppercase">Helpline & Office Hours:</strong>
                        <span className="text-slate-600">{FOUNDATION_META.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200 shadow-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Section 12AA & 80G Certified Non-Profit Trust</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Contact Form in Sculpted Capsule Shell */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-left">
                <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] rounded-tr-none border-2 border-slate-200 shadow-2xl space-y-5">
                  
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Send Us a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill out the form below and we will respond promptly within 24–48 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="text-xl font-bold text-emerald-900">Message Dispatched!</h4>
                      <p className="text-sm text-emerald-700 max-w-md mx-auto">
                        Thank you for contacting Dinabandhu Foundation. Our coordinator will review your inquiry and follow up at <strong>{formData.email}</strong>.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@email.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Contact Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Inquiry Subject
                          </label>
                          <select
                            value={formData.subject}
                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                          >
                            <option>General Inquiry</option>
                            <option>Corporate CSR Partnership</option>
                            <option>Volunteer Opportunity</option>
                            <option>Student Internship</option>
                            <option>Academic / Institutional Collaboration</option>
                            <option>Media & Press Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Your Message / Details *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please write your query, collaboration idea, or message here..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                      >
                        <Send className="w-4 h-4 text-amber-300" />
                        <span>Send Message to Dinabandhu Foundation</span>
                      </button>
                    </form>
                  )}

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions with Scalloped Accordion Shells */}
      <section className="py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Everything You Need to Know
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="p-5 sm:p-6 rounded-2xl rounded-tr-none bg-slate-50 border-l-4 border-l-blue-600 border border-slate-200 hover:shadow-md transition-all space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                    <span>{f.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
