import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Award, CheckCircle, ExternalLink, ArrowRight, Heart } from 'lucide-react';
import { FOUNDATION_META } from '@/data/foundationData';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-cream-300 border-t border-brand-900">
      {/* Upper Footer: Newsletter / CSR callout */}
      <div className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 py-8 sm:py-12 border-b border-brand-900">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-amber-400 font-semibold tracking-wide uppercase text-[10px] sm:text-xs">
                Section 12AA & 80G Certified Apex Body
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cream-50">
                Partner With Dinabandhu Foundation for CSR & Grassroots Programs
              </h3>
              <p className="text-cream-200 text-xs sm:text-sm max-w-3xl leading-relaxed">
                As a registered trust under the Indian Trust Act 1882, we ensure transparent, accountable, and high-impact deployment of corporate CSR funds across health, environment, education, and skill development in Odisha.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3">
              <Link
                href="/csr-partnerships"
                className="w-full text-center bg-brand-800 hover:bg-brand-700 text-cream-50 font-bold px-5 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition text-xs sm:text-sm border border-brand-700"
              >
                Explore CSR Collaboration
              </Link>
              <Link
                href="/get-involved"
                className="w-full text-center bg-brand-900/80 hover:bg-brand-900 text-cream-100 font-medium px-5 py-2.5 sm:py-3 rounded-full border border-brand-800 transition text-xs sm:text-sm"
              >
                Volunteer / Internship
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Foundation Info */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-full shadow-md flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Dinabandhu Foundation Seal"
                  width={48}
                  height={48}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-cream-50 font-bold text-base sm:text-lg tracking-tight truncate">DINABANDHU FOUNDATION</h4>
                <p className="text-[11px] text-cream-400 line-clamp-1">Educational Research & Socio Economic Development</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-300 leading-relaxed">
              Conceptualised in 1999 by Mrs. Shovana Devi in memory of (Late) Sri Dinabandhu Panigrahi (1917–1997)—Commonwealth Scholar at the University of Leeds (1946). Bridging world-standard education with grassroots socio-economic empowerment across Odisha.
            </p>

            {/* Compliance Pills */}
            <div className="pt-1 flex flex-wrap gap-1.5 sm:gap-2 text-[11px]">
              <span className="bg-brand-900/60 border border-brand-800 text-amber-300 px-2 py-0.5 rounded">
                Indian Trust Act 1882
              </span>
              <span className="bg-brand-900/60 border border-brand-800 text-emerald-300 px-2 py-0.5 rounded">
                12AA & 80G Certified
              </span>
              <span className="bg-brand-900/60 border border-brand-800 text-cream-200 px-2 py-0.5 rounded">
                Bhubaneswar Jurisdiction
              </span>
            </div>
          </div>

          {/* Col 2: About & Governance */}
          <div>
            <h5 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 border-l-2 border-blue-500 pl-2">
              About & Trust
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about#story" className="hover:text-white transition">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link href="/about#founder" className="hover:text-white transition">
                  Late Sri Dinabandhu Panigrahi
                </Link>
              </li>
              <li>
                <Link href="/about#governance" className="hover:text-white transition">
                  Board of Trustees
                </Link>
              </li>
              <li>
                <Link href="/about#verticals" className="hover:text-white transition">
                  Trident Academy of Tech
                </Link>
              </li>
              <li>
                <Link href="/about#verticals" className="hover:text-white transition">
                  SkillEM (DDU-GKY / PMKVY)
                </Link>
              </li>
              <li>
                <Link href="/about#verticals" className="hover:text-white transition">
                  Indevin CSR Vertical
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Three Pillars */}
          <div>
            <h5 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 border-l-2 border-emerald-500 pl-2">
              Our 3 Pillars
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/what-we-do?tab=health" className="hover:text-emerald-400 transition">
                  Public Health & Nutrition
                </Link>
              </li>
              <li>
                <Link href="/what-we-do?tab=environment" className="hover:text-emerald-400 transition">
                  Environment & Climate Action
                </Link>
              </li>
              <li>
                <Link href="/what-we-do?tab=skills" className="hover:text-amber-400 transition">
                  Skill Development & Jobs
                </Link>
              </li>
              <li>
                <Link href="/where-we-work" className="hover:text-white transition">
                  10 Districts in Odisha
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition">
                  UN SDG Alignment
                </Link>
              </li>
              <li>
                <Link href="/impact#vision2036" className="hover:text-white transition">
                  Developed Odisha 2036
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h5 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 border-l-2 border-amber-500 pl-2">
              Registered Office
            </h5>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${FOUNDATION_META.email}`} className="hover:text-white break-all">
                  {FOUNDATION_META.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Mon–Sat | 10:00 AM – 6:00 PM IST</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium"
              >
                <span>Full Contact & Enquiry Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-black py-4 sm:py-6 border-t border-slate-900 text-[11px] sm:text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2.5 sm:gap-3 text-center sm:text-left">
          <p>© 1999–2026 Dinabandhu Foundation. All Rights Reserved. Regd. under Indian Trust Act 1882.</p>
          <div className="flex items-center gap-3 text-slate-400 flex-wrap justify-center">
            <Link href="/about" className="hover:underline">Legal Status</Link>
            <span>•</span>
            <Link href="/csr-partnerships" className="hover:underline">CSR Compliance</Link>
            <span>•</span>
            <Link href="/media" className="hover:underline">Annual Reports</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
