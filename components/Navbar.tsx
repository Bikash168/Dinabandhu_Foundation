'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronDown, 
  HeartHandshake, 
  ShieldCheck,
  Award,
  Mail,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
  Heart,
  Leaf,
  GraduationCap
} from 'lucide-react';
import { FOUNDATION_META, PILLARS } from '@/data/foundationData';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [drawerOpen]);

  return (
    <>
      {/* Sticky Main Header matching user reference screenshot in Terracotta & Cream theme */}
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md border-t-4 border-brand-800 shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Official Logo & Three-tier Typography */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
              <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
                <Image
                  src="/images/logo.png"
                  alt="Dinabandhu Foundation Official Seal"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              <div className="flex flex-col min-w-0 justify-center">
                {/* 1. Main Foundation Name in Terracotta Maroon */}
                <span className="font-extrabold text-sm xs:text-base sm:text-xl lg:text-2xl text-brand-800 tracking-tight leading-none group-hover:text-brand-950 transition truncate">
                  DINABANDHU FOUNDATION
                </span>
                
                {/* 2. Sub-line 1: EST. 1999 • BHUBANESWAR, ODISHA in warm gray */}
                <span className="text-[9px] xs:text-[10px] sm:text-xs font-semibold text-cream-700 tracking-wider uppercase mt-1 truncate">
                  EST. 1999 • BHUBANESWAR, ODISHA
                </span>

                {/* 3. Sub-line 2: Health • Environment • Skill Development in terracotta accent */}
                <span className="text-[9px] xs:text-[10px] sm:text-xs font-semibold text-brand-700 tracking-wide mt-0.5 truncate">
                  Health • Environment • Skill Development
                </span>
              </div>
            </Link>

            {/* Right: Get Involved Button & Hamburger Menu Icon */}
            <div className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0">
              {/* Terracotta Button with Yellow Heart Handshake Icon */}
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-800 hover:bg-brand-900 active:bg-brand-950 text-cream-50 font-bold text-xs sm:text-sm px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95"
              >
                <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 flex-shrink-0" />
                <span className="whitespace-nowrap">Get Involved</span>
              </Link>

              {/* Hamburger Menu Toggle Icon */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-cream-300 text-brand-900 hover:text-brand-800 hover:bg-cream-100 transition focus:outline-none focus:ring-2 focus:ring-brand-700"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop Overlay when Drawer is open */}
      {drawerOpen && (
        <div 
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Slide-over Right Navigation Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Site Navigation Menu"
      >
        {/* Drawer Top Header */}
        <div className="p-5 sm:p-6 border-b border-cream-200 flex items-center justify-between bg-cream-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-sm text-brand-800 block leading-tight">
                DINABANDHU FOUNDATION
              </span>
              <span className="text-[10px] font-semibold text-cream-700 uppercase">
                Est. 1999 • Bhubaneswar
              </span>
            </div>
          </div>

          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-xl text-cream-700 hover:text-brand-950 hover:bg-cream-200 transition"
            aria-label="Close Navigation Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Scrollable Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
          
          {/* 1. HOME */}
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:text-brand-800 hover:bg-cream-100 transition"
          >
            <span>HOME</span>
            <ArrowRight className="w-4 h-4 text-cream-500" />
          </Link>

          {/* 2. ABOUT US Accordion */}
          <div className="border border-cream-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleAccordion('about')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 hover:text-brand-800 hover:bg-cream-50 transition text-left"
            >
              <span>ABOUT US</span>
              <ChevronDown className={`w-4 h-4 text-cream-500 transition-transform ${openAccordion === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'about' && (
              <div className="bg-cream-50 px-4 py-2.5 space-y-2 text-xs border-t border-cream-200">
                <Link
                  href="/about#story"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Our Story</strong>
                  <span className="text-slate-500 text-[11px]">Founded in 1999 by Mrs. Shovana Devi</span>
                </Link>
                <Link
                  href="/about#founder"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Our Founder</strong>
                  <span className="text-slate-500 text-[11px]">Late Sri Dinabandhu Panigrahi (1917–1997)</span>
                </Link>
                <Link
                  href="/about#governance"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Leadership & Governance</strong>
                  <span className="text-slate-500 text-[11px]">Dr. B.B. Panigrahi & Smt. Smitarani Panigrahi</span>
                </Link>
                <Link
                  href="/about#vision"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Vision & Mission</strong>
                  <span className="text-slate-500 text-[11px]">Aggressive positive thinking & execution</span>
                </Link>
                <Link
                  href="/about#trust"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Core Values & The Trust</strong>
                  <span className="text-slate-500 text-[11px]">Indian Trust Act 1882 • 12AA & 80G Certified</span>
                </Link>
                <Link
                  href="/about#team"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Our Team</strong>
                  <span className="text-slate-500 text-[11px]">Dedicated 20-member field force</span>
                </Link>
                <Link
                  href="/about#legal"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Legal Status & Registrations</strong>
                  <span className="text-slate-500 text-[11px]">Bhubaneswar statutory registration</span>
                </Link>
                <Link
                  href="/media?tab=reports"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Annual Reports</strong>
                  <span className="text-slate-500 text-[11px]">Audited financial statements</span>
                </Link>
              </div>
            )}
          </div>

          {/* 3. WHAT WE DO Accordion */}
          <div className="border border-cream-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleAccordion('work')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 hover:text-brand-800 hover:bg-cream-50 transition text-left"
            >
              <span>WHAT WE DO</span>
              <ChevronDown className={`w-4 h-4 text-cream-500 transition-transform ${openAccordion === 'work' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'work' && (
              <div className="bg-cream-50 px-4 py-2.5 space-y-2 text-xs border-t border-cream-200">
                <Link
                  href="/what-we-do?tab=health"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-2 px-3 rounded-lg bg-white border border-cream-200 hover:border-brand-300 transition"
                >
                  <span className="font-bold text-brand-900 block">Health</span>
                  <span className="text-[11px] text-slate-500">Preventive care, screening & maternal health (8 Focus Areas)</span>
                </Link>
                <Link
                  href="/what-we-do?tab=environment"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-2 px-3 rounded-lg bg-white border border-cream-200 hover:border-emerald-300 transition"
                >
                  <span className="font-bold text-emerald-900 block">Environment and Sustainability</span>
                  <span className="text-[11px] text-slate-500">Tree plantation, water, waste & eco-clubs (8 Focus Areas)</span>
                </Link>
                <Link
                  href="/what-we-do?tab=skills"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-2 px-3 rounded-lg bg-white border border-cream-200 hover:border-amber-300 transition"
                >
                  <span className="font-bold text-amber-900 block">Skill Development</span>
                  <span className="text-[11px] text-slate-500">DDU-GKY, PMKVY, women SHGs & digital tools (8 Focus Areas)</span>
                </Link>
              </div>
            )}
          </div>

          {/* 4. WHERE WE WORK Accordion */}
          <div className="border border-cream-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleAccordion('where')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 hover:text-brand-800 hover:bg-cream-50 transition text-left"
            >
              <span>WHERE WE WORK</span>
              <ChevronDown className={`w-4 h-4 text-cream-500 transition-transform ${openAccordion === 'where' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'where' && (
              <div className="bg-cream-50 px-4 py-2.5 space-y-1.5 text-xs border-t border-cream-200">
                <Link
                  href="/where-we-work#districts"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Districts Served</strong>
                  <span className="text-slate-500 text-[11px]">10 operational districts across Odisha</span>
                </Link>
                <Link
                  href="/where-we-work#training-centres"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Training Centres</strong>
                  <span className="text-slate-500 text-[11px]">Bhubaneswar, Bhadrak, Ganjam & Koraput</span>
                </Link>
                <Link
                  href="/where-we-work#institutions"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Partner Institutions</strong>
                  <span className="text-slate-500 text-[11px]">Trident Academy of Tech, SkillEM, Indevin</span>
                </Link>
                <Link
                  href="/where-we-work#beneficiaries"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Beneficiary Profile</strong>
                  <span className="text-slate-500 text-[11px]">Rural & Tribal Communities</span>
                </Link>
              </div>
            )}
          </div>

          {/* 5. IMPACT STORIES */}
          <Link
            href="/impact"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:text-brand-800 hover:bg-cream-100 transition"
          >
            <span>IMPACT STORIES</span>
            <ArrowRight className="w-4 h-4 text-cream-500" />
          </Link>

          {/* 6. GET INVOLVED Accordion */}
          <div className="border border-cream-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleAccordion('involved')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 hover:text-brand-800 hover:bg-cream-50 transition text-left"
            >
              <span>GET INVOLVED</span>
              <ChevronDown className={`w-4 h-4 text-cream-500 transition-transform ${openAccordion === 'involved' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'involved' && (
              <div className="bg-cream-50 px-4 py-2.5 space-y-1.5 text-xs border-t border-cream-200">
                <Link
                  href="/get-involved?type=volunteer"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Volunteer</strong>
                  <span className="text-slate-500 text-[11px]">Join village health camps & afforestation drives</span>
                </Link>
                <Link
                  href="/csr-partnerships"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-brand-900">Corporate CSR Partnership</strong>
                  <span className="text-slate-500 text-[11px]">12AA & 80G Certified CSR Apex Integrator</span>
                </Link>
                <Link
                  href="/get-involved?type=collaborate"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Collaborate / Partner With Us</strong>
                  <span className="text-slate-500 text-[11px]">Institutional, NGO & research alliances</span>
                </Link>
                <Link
                  href="/get-involved?type=fundraise"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Fundraise For Us</strong>
                  <span className="text-slate-500 text-[11px]">Champion grassroots empowerment causes</span>
                </Link>
                <Link
                  href="/get-involved?type=internship"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Internship</strong>
                  <span className="text-slate-500 text-[11px]">Experiential learning in community development</span>
                </Link>
              </div>
            )}
          </div>

          {/* 7. MEDIA CORNER Accordion */}
          <div className="border border-cream-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleAccordion('media')}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 hover:text-brand-800 hover:bg-cream-50 transition text-left"
            >
              <span>MEDIA CORNER</span>
              <ChevronDown className={`w-4 h-4 text-cream-500 transition-transform ${openAccordion === 'media' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'media' && (
              <div className="bg-cream-50 px-4 py-2.5 space-y-1.5 text-xs border-t border-cream-200">
                <Link
                  href="/media?tab=news"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">News & Updates</strong>
                  <span className="text-slate-500 text-[11px]">Field dispatches & press releases</span>
                </Link>
                <Link
                  href="/media?tab=events"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Events & Campaigns</strong>
                  <span className="text-slate-500 text-[11px]">Tree plantation weeks & diagnostic camps</span>
                </Link>
                <Link
                  href="/media?tab=gallery"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Photo & Video Gallery</strong>
                  <span className="text-slate-500 text-[11px]">Grassroots action in focus</span>
                </Link>
                <Link
                  href="/media?tab=reports"
                  onClick={() => setDrawerOpen(false)}
                  className="block py-1.5 px-2 rounded-lg hover:bg-white hover:text-brand-800 transition"
                >
                  <strong className="block text-slate-800">Annual Reports & Newsletters</strong>
                  <span className="text-slate-500 text-[11px]">Audited accounts & impact decks</span>
                </Link>
              </div>
            )}
          </div>

          {/* 8. CONTACT US */}
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-cream-50 bg-brand-800 hover:bg-brand-900 transition shadow-sm"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4 text-cream-200" />
          </Link>

        </div>

        {/* Drawer Bottom Utility & Info */}
        <div className="p-5 border-t border-cream-200 bg-cream-100/70 space-y-3">
          <Link
            href="/csr-partnerships"
            onClick={() => setDrawerOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-brand-800 hover:bg-brand-900 text-cream-50 font-bold py-2.5 rounded-xl text-xs shadow transition"
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Corporate CSR Desk (12AA & 80G)</span>
          </Link>

          <div className="text-[11px] text-cream-800 space-y-1 pt-1">
            <p className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-700 flex-shrink-0" />
              <span>Bhubaneswar, Odisha, India</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-700 flex-shrink-0" />
              <span>{FOUNDATION_META.email}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-700 flex-shrink-0" />
              <span>Mon–Sat | 10:00 AM – 6:00 PM IST</span>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
