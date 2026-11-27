'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Award, 
  HeartHandshake, 
  ShieldCheck,
  Building,
  Users,
  FileText,
  Compass,
  Heart,
  Leaf,
  GraduationCap,
  MapPin,
  TrendingUp,
  Newspaper,
  BookOpen
} from 'lucide-react';
import { FOUNDATION_META } from '@/data/foundationData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mobile accordion state
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-brand-900 text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex flex-col xs:flex-row justify-between items-center gap-1.5 sm:gap-2">
          
          <div className="flex items-center gap-2 sm:gap-4 text-slate-200 text-center xs:text-left">
            <span className="flex items-center gap-1 font-medium">
              <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 flex-shrink-0" />
              <span>EST. 1999 • Registered Trust • 12AA & 80G Certified</span>
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">Bhubaneswar, Odisha</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-slate-300 text-[11px] sm:text-xs">
            <a href={`mailto:${FOUNDATION_META.email}`} className="flex items-center gap-1 hover:text-white transition">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-300 flex-shrink-0" />
              <span className="truncate max-w-[170px] sm:max-w-none">{FOUNDATION_META.email}</span>
            </a>
            <span className="text-slate-500">|</span>
            <Link
              href="/csr-partnerships"
              className="bg-amber-500 hover:bg-amber-400 text-brand-950 font-bold px-2 py-0.5 rounded text-[10px] sm:text-[11px] transition shadow-sm whitespace-nowrap"
            >
              CSR Desk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Foundation Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/images/logo.png"
                alt="Dinabandhu Foundation Official Seal"
                width={56}
                height={56}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl text-brand-900 tracking-tight leading-none group-hover:text-blue-700 transition truncate">
                DINABANDHU FOUNDATION
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide mt-0.5 sm:mt-1 uppercase truncate">
                EST. 1999 • BHUBANESWAR, ODISHA
              </span>
              <span className="text-[10px] text-emerald-700 font-medium hidden lg:block truncate">
                Health • Environment • Skill Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links matching exact portal items */}
          <nav className="hidden xl:flex items-center space-x-0.5 font-medium text-xs lg:text-[13px] text-slate-700">
            
            {/* 1. HOME */}
            <Link href="/" className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              HOME
            </Link>

            {/* 2. ABOUT US */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-0.5"
              >
                <span>ABOUT US</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-2 border border-slate-100 z-50">
                  <Link href="/about#story" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Our Story</span>
                    <span className="text-[11px] text-slate-400">Founded in 1999 by Mrs. Shovana Devi</span>
                  </Link>
                  <Link href="/about#founder" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Our Founder</span>
                    <span className="text-[11px] text-slate-400">Late Sri Dinabandhu Panigrahi (1917–1997)</span>
                  </Link>
                  <Link href="/about#governance" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Leadership & Governance</span>
                    <span className="text-[11px] text-slate-400">Dr. B. B. Panigrahi & Smt. Smitarani Panigrahi</span>
                  </Link>
                  <Link href="/about#vision" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Vision & Mission</span>
                    <span className="text-[11px] text-slate-400">Aggressive positive thinking & execution</span>
                  </Link>
                  <Link href="/about#trust" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Core Values & The Trust</span>
                    <span className="text-[11px] text-slate-400">Indian Trust Act 1882 • 12AA & 80G Certified</span>
                  </Link>
                  <Link href="/about#team" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Our Team & Mentors</span>
                    <span className="text-[11px] text-slate-400">Dedicated trustees, educators & field staff</span>
                  </Link>
                  <Link href="/about#legal" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Legal Status & Registrations</span>
                    <span className="text-[11px] text-slate-400">Bhubaneswar jurisdiction statutory filings</span>
                  </Link>
                  <Link href="/media?tab=reports" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Annual Reports</span>
                    <span className="text-[11px] text-slate-400">Audited financial statements</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. WHAT WE DO */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('work')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/what-we-do"
                className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-0.5"
              >
                <span>WHAT WE DO</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {activeDropdown === 'work' && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-xl py-2 border border-slate-100 z-50">
                  <Link href="/what-we-do?tab=health" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold text-blue-900 block">Health</span>
                    <span className="text-[11px] text-slate-500">Preventive care, screening & maternal health</span>
                  </Link>
                  <Link href="/what-we-do?tab=environment" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-900 text-xs text-slate-700">
                    <span className="font-semibold text-emerald-900 block">Environment and Sustainability</span>
                    <span className="text-[11px] text-slate-500">Tree plantation, water, waste & eco-clubs</span>
                  </Link>
                  <Link href="/what-we-do?tab=skills" className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-900 text-xs text-slate-700">
                    <span className="font-semibold text-amber-900 block">Skill Development</span>
                    <span className="text-[11px] text-slate-500">DDU-GKY, PMKVY, women SHGs & digital tools</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. WHERE WE WORK */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('where')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/where-we-work"
                className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-0.5"
              >
                <span>WHERE WE WORK</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {activeDropdown === 'where' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-2 border border-slate-100 z-50">
                  <Link href="/where-we-work#districts" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Districts Served</span>
                    <span className="text-[11px] text-slate-400">10 operational districts across Odisha</span>
                  </Link>
                  <Link href="/where-we-work#training-centres" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Training Centres</span>
                    <span className="text-[11px] text-slate-400">Skill hubs & mobile clinics</span>
                  </Link>
                  <Link href="/where-we-work#institutions" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Partner Institutions</span>
                    <span className="text-[11px] text-slate-400">Trident Academy, SkillEM, Indevin</span>
                  </Link>
                  <Link href="/where-we-work#beneficiaries" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Beneficiary Profile</span>
                    <span className="text-[11px] text-slate-400">Rural & Tribal Communities</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. IMPACT STORIES */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('impact')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/impact"
                className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-0.5"
              >
                <span>IMPACT STORIES</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {activeDropdown === 'impact' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-2 border border-slate-100 z-50">
                  <Link href="/impact" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Stories of Change</span>
                    <span className="text-[11px] text-slate-400">Segregated by categories with data</span>
                  </Link>
                  <Link href="/impact#green-skills" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">2,000+ Green Skills Youth</span>
                    <span className="text-[11px] text-slate-400">Solar, waste, water & eco livelihoods</span>
                  </Link>
                  <Link href="/impact#vision2036" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Developed Odisha 2036</span>
                    <span className="text-[11px] text-slate-400">State centenary & Viksit Bharat 2047</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 6. GET INVOLVED */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('involved')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/get-involved"
                className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-0.5"
              >
                <span>GET INVOLVED</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {activeDropdown === 'involved' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-2 border border-slate-100 z-50">
                  <Link href="/get-involved?type=volunteer" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Volunteer</span>
                    <span className="text-[11px] text-slate-400">Join village camps & campaigns</span>
                  </Link>
                  <Link href="/csr-partnerships" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Corporate CSR Partnership</span>
                    <span className="text-[11px] text-slate-400">12AA & 80G Certified CSR Apex Integrator</span>
                  </Link>
                  <Link href="/get-involved?type=collaborate" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Collaborate / Partner With Us</span>
                    <span className="text-[11px] text-slate-400">NGO, institutional & academic alliances</span>
                  </Link>
                  <Link href="/get-involved?type=fundraise" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Fundraise For Us</span>
                    <span className="text-[11px] text-slate-400">Rally support for grassroots causes</span>
                  </Link>
                  <Link href="/get-involved?type=internship" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Internship</span>
                    <span className="text-[11px] text-slate-400">Experiential social learning</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 7. MEDIA CORNER */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('media')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/media"
                className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-0.5"
              >
                <span>MEDIA CORNER</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {activeDropdown === 'media' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-2 border border-slate-100 z-50">
                  <Link href="/media?tab=news" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">News & Updates</span>
                    <span className="text-[11px] text-slate-400">Field dispatches & press coverage</span>
                  </Link>
                  <Link href="/media?tab=gallery" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Photo & Video Gallery</span>
                    <span className="text-[11px] text-slate-400">Grassroots action in focus</span>
                  </Link>
                  <Link href="/media?tab=reports" className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-900 text-xs text-slate-700">
                    <span className="font-semibold block">Annual & Impact Reports</span>
                    <span className="text-[11px] text-slate-400">Audited accounts & newsletters</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 8. CONTACT US */}
            <Link href="/contact" className="px-2.5 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition font-bold text-brand-900">
              CONTACT US
            </Link>
          </nav>

          {/* Action CTA Button on Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-1.5 bg-brand-800 hover:bg-brand-900 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition transform active:scale-95"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-amber-300" />
              <span>Get Involved</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
            <Link
              href="/get-involved"
              className="inline-flex sm:hidden items-center gap-1 bg-brand-800 text-white text-[10px] font-bold px-2 py-1.5 rounded-md"
            >
              <span>Join</span>
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-brand-900 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Drawer with all exact portal items */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-8 space-y-1.5 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-slate-100 uppercase"
          >
            HOME
          </Link>

          {/* Mobile ABOUT US Accordion */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleMobileAccordion('about')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase"
            >
              <span>ABOUT US</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileAccordion === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'about' && (
              <div className="bg-slate-50 px-3 py-2 space-y-1 border-t border-slate-100 text-xs">
                <Link href="/about#story" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Our Story
                </Link>
                <Link href="/about#founder" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Our Founder (Late Sri Dinabandhu Panigrahi)
                </Link>
                <Link href="/about#governance" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Leadership & Governance / Our Management
                </Link>
                <Link href="/about#vision" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Vision & Mission
                </Link>
                <Link href="/about#trust" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Core Values & The Trust
                </Link>
                <Link href="/about#team" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Our Team
                </Link>
                <Link href="/about#legal" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Legal Status & Registrations
                </Link>
                <Link href="/media?tab=reports" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Annual Reports
                </Link>
              </div>
            )}
          </div>

          {/* Mobile WHAT WE DO Accordion */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleMobileAccordion('work')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase"
            >
              <span>WHAT WE DO</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileAccordion === 'work' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'work' && (
              <div className="bg-slate-50 px-3 py-2 space-y-1 border-t border-slate-100 text-xs">
                <Link href="/what-we-do?tab=health" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 text-blue-900 font-semibold rounded hover:bg-white">
                  Health (8 Focus Areas)
                </Link>
                <Link href="/what-we-do?tab=environment" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 text-emerald-900 font-semibold rounded hover:bg-white">
                  Environment and Sustainability (8 Focus Areas)
                </Link>
                <Link href="/what-we-do?tab=skills" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 text-amber-900 font-semibold rounded hover:bg-white">
                  Skill Development (8 Focus Areas)
                </Link>
              </div>
            )}
          </div>

          {/* Mobile WHERE WE WORK Accordion */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleMobileAccordion('where')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase"
            >
              <span>WHERE WE WORK</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileAccordion === 'where' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'where' && (
              <div className="bg-slate-50 px-3 py-2 space-y-1 border-t border-slate-100 text-xs">
                <Link href="/where-we-work#districts" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Districts Served (10 Districts)
                </Link>
                <Link href="/where-we-work#training-centres" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Training Centres
                </Link>
                <Link href="/where-we-work#institutions" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Partner Institutions (Trident, SkillEM, Indevin)
                </Link>
                <Link href="/where-we-work#beneficiaries" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Beneficiary Profile (Rural & Tribal)
                </Link>
              </div>
            )}
          </div>

          {/* Mobile IMPACT STORIES */}
          <Link
            href="/impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-slate-100 uppercase"
          >
            IMPACT STORIES
          </Link>

          {/* Mobile GET INVOLVED Accordion */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleMobileAccordion('involved')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase"
            >
              <span>GET INVOLVED</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileAccordion === 'involved' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'involved' && (
              <div className="bg-slate-50 px-3 py-2 space-y-1 border-t border-slate-100 text-xs">
                <Link href="/get-involved?type=volunteer" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Volunteer
                </Link>
                <Link href="/csr-partnerships" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Corporate CSR Partnership
                </Link>
                <Link href="/get-involved?type=collaborate" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Collaborate / Partner With Us
                </Link>
                <Link href="/get-involved?type=fundraise" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Fundraise For Us
                </Link>
                <Link href="/get-involved?type=internship" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Internship
                </Link>
              </div>
            )}
          </div>

          {/* Mobile MEDIA CORNER Accordion */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleMobileAccordion('media')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-50 uppercase"
            >
              <span>MEDIA CORNER</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileAccordion === 'media' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'media' && (
              <div className="bg-slate-50 px-3 py-2 space-y-1 border-t border-slate-100 text-xs">
                <Link href="/media?tab=news" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  News & Updates
                </Link>
                <Link href="/media?tab=gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Photo & Video Gallery
                </Link>
                <Link href="/media?tab=reports" onClick={() => setMobileMenuOpen(false)} className="block py-1 px-2 rounded hover:text-brand-900">
                  Annual Reports & Impact Reports
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-xs font-bold text-brand-900 hover:bg-slate-100 uppercase"
          >
            CONTACT US
          </Link>

          {/* Quick CTA inside drawer */}
          <div className="pt-3 border-t border-slate-200 space-y-2">
            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-800 text-white font-semibold py-2.5 rounded-xl shadow-md text-xs"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Get Involved / Partner</span>
            </Link>

            <Link
              href="/csr-partnerships"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-2 rounded-xl text-xs"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Corporate CSR Engagement</span>
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
