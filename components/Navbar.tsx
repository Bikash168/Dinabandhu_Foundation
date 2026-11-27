'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import { FOUNDATION_META } from '@/data/foundationData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  
  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-brand-900 text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex flex-col xs:flex-row justify-between items-center gap-1.5 sm:gap-2">
          
          <div className="flex items-center gap-2 sm:gap-4 text-slate-200 text-center xs:text-left">
            <span className="flex items-center gap-1 font-medium">
              <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 flex-shrink-0" />
              <span>Regd. Trust (1999) • 12AA & 80G</span>
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
          <Link href="/" className="flex items-center gap-2 sm:gap-3.5 group min-w-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/images/logo.png"
                alt="Dinabandhu Foundation Seal"
                width={56}
                height={56}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-xs xs:text-sm sm:text-lg md:text-2xl text-brand-900 tracking-tight leading-none group-hover:text-blue-700 transition truncate">
                DINABANDHU FOUNDATION
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide mt-0.5 sm:mt-1 uppercase truncate">
                Est. 1999 • Bhubaneswar, Odisha
              </span>
              <span className="text-[10px] text-emerald-700 font-medium hidden md:block truncate">
                Health • Environment • Skill Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 font-medium text-sm text-slate-700">
            <Link href="/" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link
                href="/about"
                className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-1"
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {aboutDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 border border-slate-100 z-50">
                  <Link href="/about#story" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-900">
                    Our Story & Heritage
                  </Link>
                  <Link href="/about#founder" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-900">
                    Late Sri Dinabandhu Panigrahi
                  </Link>
                  <Link href="/about#governance" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-900">
                    Leadership & Governance
                  </Link>
                  <Link href="/about#vision" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-900">
                    Vision, Mission & Trust Values
                  </Link>
                  <Link href="/about#verticals" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-900">
                    Verticals: Trident, SkillEM, Indevin
                  </Link>
                </div>
              )}
            </div>

            {/* What We Do Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdown(true)}
              onMouseLeave={() => setWorkDropdown(false)}
            >
              <Link
                href="/what-we-do"
                className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition flex items-center gap-1"
              >
                <span>What We Do</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {workDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg py-2 border border-slate-100 z-50">
                  <Link href="/what-we-do?tab=health" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-900">
                    <span className="font-semibold block text-blue-900">01 • Public Health & Nutrition</span>
                    <span className="text-xs text-slate-500">Preventive care, screening & maternal health</span>
                  </Link>
                  <Link href="/what-we-do?tab=environment" className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-900">
                    <span className="font-semibold block text-emerald-900">02 • Environment & Climate</span>
                    <span className="text-xs text-slate-500">Tree plantation, water, waste & eco-clubs</span>
                  </Link>
                  <Link href="/what-we-do?tab=skills" className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900">
                    <span className="font-semibold block text-amber-900">03 • Skill Development & Livelihoods</span>
                    <span className="text-xs text-slate-500">DDU-GKY, PMKVY, women SHGs & digital tools</span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/where-we-work" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              Where We Work
            </Link>

            <Link href="/impact" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              Impact & Stories
            </Link>

            <Link href="/csr-partnerships" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              CSR Desk
            </Link>

            <Link href="/media" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              Media & Reports
            </Link>

            <Link href="/contact" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              Contact
            </Link>
          </nav>

          {/* Action CTA Button on Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-1.5 bg-brand-800 hover:bg-brand-900 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition transform active:scale-95"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
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

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-8 space-y-2 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
          >
            Home
          </Link>

          {/* Accordion 1: About Us */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              <span>About Us & Governance</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileAboutOpen && (
              <div className="bg-slate-50 px-3 py-2 space-y-1.5 border-t border-slate-100 text-xs text-slate-600">
                <Link
                  href="/about#story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-brand-900 hover:bg-white"
                >
                  Our Story & Heritage
                </Link>
                <Link
                  href="/about#founder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-brand-900 hover:bg-white"
                >
                  Late Sri Dinabandhu Panigrahi
                </Link>
                <Link
                  href="/about#governance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-brand-900 hover:bg-white"
                >
                  Board of Trustees
                </Link>
                <Link
                  href="/about#vision"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-brand-900 hover:bg-white"
                >
                  Vision, Mission & Trust Values
                </Link>
                <Link
                  href="/about#verticals"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-brand-900 hover:bg-white"
                >
                  Verticals (Trident, SkillEM, Indevin)
                </Link>
              </div>
            )}
          </div>

          {/* Accordion 2: What We Do */}
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              <span>What We Do (3 Pillars)</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileWorkOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileWorkOpen && (
              <div className="bg-slate-50 px-3 py-2 space-y-1.5 border-t border-slate-100 text-xs text-slate-600">
                <Link
                  href="/what-we-do?tab=health"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-blue-900 hover:bg-white font-medium"
                >
                  01 • Public Health & Nutrition
                </Link>
                <Link
                  href="/what-we-do?tab=environment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-emerald-900 hover:bg-white font-medium"
                >
                  02 • Environment & Climate Action
                </Link>
                <Link
                  href="/what-we-do?tab=skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:text-amber-900 hover:bg-white font-medium"
                >
                  03 • Skill Development & Livelihoods
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/where-we-work"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
          >
            Where We Work (10 Odisha Districts)
          </Link>

          <Link
            href="/impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
          >
            Impact & Stories of Change
          </Link>

          <Link
            href="/csr-partnerships"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
          >
            CSR Partnerships (12AA & 80G)
          </Link>

          <Link
            href="/media"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
          >
            Media, Reports & Gallery
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
          >
            Contact Desk
          </Link>

          {/* Quick CTA inside drawer */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-800 text-white font-semibold py-3 rounded-xl shadow-md text-sm"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Get Involved / Partner</span>
            </Link>

            <Link
              href="/csr-partnerships"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs"
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
