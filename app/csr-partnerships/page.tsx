'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  HeartHandshake, 
  BarChart3, 
  Building2,
  Send,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDATION_META } from '@/data/foundationData';

export default function CSRPartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    csrPillar: 'Skills & Livelihoods',
    districtPreference: 'Any / Need Assessment Based',
    estimatedBudget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                <span>CORPORATE SOCIAL RESPONSIBILITY (CSR) DESK</span>
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Partner With Dinabandhu Foundation for High-Impact CSR Programs
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-cream-200 leading-relaxed">
                As a Section 12AA & 80G registered apex body, we ensure transparent, accountable, and audited deployment of corporate CSR funds across Health, Environment, Education, and Skill Development in Odisha.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Trust Badges */}
      <TrustBadges />

      {/* 3. Apex Integrator Value Proposition in Alternating Leaf-Crest Shapes */}
      <section className="py-12 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal animation="fade-right">
                <span className="text-xs font-bold tracking-wider text-brand-800 uppercase bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
                  INDEVIN CSR VERTICAL
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 leading-tight mt-2">
                  Why Corporations Choose Dinabandhu Foundation as Their CSR Apex Partner
                </h2>
                <p className="text-xs sm:text-base text-cream-900/80 leading-relaxed mt-2">
                  Under the brand <strong>&ldquo;Indevin&rdquo;</strong>, Dinabandhu Foundation acts as an apex integrator for corporate CSR mandates. We bridge the gap between corporate boards and grassroots communities, ensuring 100% statutory compliance under Schedule VII of the Indian Companies Act, 2013.
                </p>

                <div className="space-y-3 pt-3">
                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm border-l-4 border-l-brand-800 border border-cream-200 shadow-sm hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand-800 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-950 text-xs sm:text-sm block">12AA & 80G Certification:</strong>
                      <span className="text-[11px] sm:text-xs text-cream-700">Immediate 50% tax deductions for contributing entities under the Indian Income Tax Act 1961.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm border-l-4 border-l-brand-700 border border-cream-200 shadow-sm hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-950 text-xs sm:text-sm block">Complete Financial Auditing & Real-time Transparency:</strong>
                      <span className="text-[11px] sm:text-xs text-cream-700">Quarterly utilization certificates, audited expense books, geo-tagged field records, and baseline-endline impact assessment.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm border-l-4 border-l-brand-900 border border-cream-200 shadow-sm hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand-900 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-950 text-xs sm:text-sm block">Multi-Disciplinary Academic & Engineering Backing:</strong>
                      <span className="text-[11px] sm:text-xs text-cream-700">Backed by faculty and laboratory resources of Trident Academy of Technology for environmental testing, water validation, and high-tech skilling.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm border-l-4 border-l-brand-600 border border-cream-200 shadow-sm hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-950 text-xs sm:text-sm block">Presence in 10 High-Priority Odisha Districts:</strong>
                      <span className="text-[11px] sm:text-xs text-cream-700">Direct village network across Bhadrak, Khordha, Puri, Ganjam, Balasore, Kendrapara, Jagatsinghpur, Jajpur, Koraput, and Nuapada.</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Quick Compliance Statutory Plaque */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-left">
                <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-[#23120f] text-white rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-xl rounded-bl-xl p-6 sm:p-8 shadow-2xl border-2 border-brand-700 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-800 text-cream-50 rounded-2xl font-bold shadow-lg">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Statutory Credentials</h3>
                      <p className="text-xs text-cream-200">Indian Trust & Tax Authorities</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-cream-100">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                      <span>Trust Act Registration</span>
                      <strong className="text-white">Indian Trust Act 1882</strong>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-brand-500/40 flex justify-between items-center">
                      <span>Income Tax Exemption</span>
                      <strong className="text-cream-100">Section 12AA Regd.</strong>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-brand-500/40 flex justify-between items-center">
                      <span>Donor Tax Deduction</span>
                      <strong className="text-cream-100">Section 80G Certified</strong>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                      <span>Jurisdiction</span>
                      <strong className="text-white">Bhubaneswar, Odisha</strong>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
                      <span>Year of Establishment</span>
                      <strong className="text-white">1999 (27+ Years Legacy)</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`mailto:${FOUNDATION_META.email}?subject=CSR%20Partnership%20Enquiry`}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-800 to-brand-700 hover:from-brand-700 hover:to-brand-600 text-cream-50 font-bold py-3 rounded-full transition-all text-xs shadow-lg transform hover:-translate-y-0.5"
                    >
                      <span>Direct Email to CSR Secretariat</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Corporate Inquiry Form in Sculpted Capsule Shell */}
      <section className="py-12 sm:py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="zoom-in">
            <div className="bg-white rounded-[3rem] rounded-tr-lg rounded-bl-lg p-6 sm:p-12 border-2 border-cream-200 shadow-2xl space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-brand-800 uppercase tracking-wider bg-cream-200 px-3.5 py-1.5 rounded-full border border-cream-300 shadow-sm">
                  PROPOSAL & PARTNERSHIP INTAKE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-2">
                  Submit a Corporate CSR Collaboration Request
                </h3>
                <p className="text-xs sm:text-sm text-cream-800 max-w-xl mx-auto">
                  Share your corporate CSR priorities. Our institutional planning team in Bhubaneswar will prepare a customized DPR (Detailed Project Report) within 3 working days.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-cream-100 border-2 border-brand-300 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-800 mx-auto" />
                  <h4 className="text-xl font-bold text-brand-950">Thank You For Reaching Out!</h4>
                  <p className="text-sm text-cream-900 max-w-md mx-auto">
                    Your CSR partnership inquiry has been logged with the Dinabandhu Foundation CSR Desk. Our team will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Tata Power / Vedanta / Tech Mahindra"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Contact Person & Designation *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Ananya Das, Head of CSR"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="csr@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Focus Area of Interest
                      </label>
                      <select
                        value={formData.csrPillar}
                        onChange={e => setFormData({ ...formData, csrPillar: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none bg-white"
                      >
                        <option>Skill Development & Green Jobs</option>
                        <option>Public Health & Mobile Diagnostic Clinics</option>
                        <option>Environment, Native Tree Plantation & Water</option>
                        <option>Women SHG Micro-Enterprise Upliftment</option>
                        <option>Primary & English Education Enhancement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                        Estimated Project Budget
                      </label>
                      <input
                        type="text"
                        value={formData.estimatedBudget}
                        onChange={e => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        placeholder="e.g. ₹10 Lakhs - ₹50 Lakhs"
                        className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cream-900 uppercase mb-1.5">
                      Project Scope / Specific Mandate
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your organization's CSR mandate, preferred districts or timelines..."
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 text-sm focus:ring-2 focus:ring-brand-700 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-800 hover:bg-brand-900 text-cream-50 font-bold py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 text-cream-200" />
                    <span>Submit CSR Partnership Request</span>
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
