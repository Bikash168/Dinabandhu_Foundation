'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, Mail, Award, HeartHandshake } from 'lucide-react';
import { FOUNDATION_META } from '@/data/foundationData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-brand-900 text-white text-xs py-2 px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1.5 font-medium">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Registered Trust (1999) • 12AA & 80G Certified</span>
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">Bhubaneswar, Odisha</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a href={`mailto:${FOUNDATION_META.email}`} className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-blue-300" />
              <span>{FOUNDATION_META.email}</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-300">Mon–Sat: 10:00 AM – 6:00 PM</span>
            <Link
              href="/csr-partnerships"
              className="bg-amber-500 hover:bg-amber-600 text-brand-950 font-bold px-2.5 py-0.5 rounded text-[11px] transition shadow-sm"
            >
              CSR Desk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Foundation Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/images/logo.png"
                alt="Dinabandhu Foundation Seal"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-brand-900 tracking-tight leading-none group-hover:text-blue-700 transition">
                DINABANDHU FOUNDATION
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide mt-1 uppercase">
                Est. 1999 • Bhubaneswar, Odisha
              </span>
              <span className="text-[10px] text-emerald-700 font-medium hidden sm:block">
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
              CSR Partnerships
            </Link>

            <Link href="/media" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              Media & Reports
            </Link>

            <Link href="/contact" className="px-3 py-2 rounded-md hover:text-brand-700 hover:bg-slate-50 transition">
              Contact
            </Link>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition transform active:scale-95"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Get Involved</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-brand-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            About Us & Governance
          </Link>
          <Link
            href="/what-we-do"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            What We Do (3 Pillars)
          </Link>
          <Link
            href="/where-we-work"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Where We Work (10 Odisha Districts)
          </Link>
          <Link
            href="/impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Impact & Stories of Change
          </Link>
          <Link
            href="/csr-partnerships"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            CSR Partnerships (12AA & 80G)
          </Link>
          <Link
            href="/media"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Media, Reports & Gallery
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Contact Desk
          </Link>

          <div className="pt-3 border-t border-slate-200">
            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-800 text-white font-semibold py-2.5 rounded-lg shadow-sm"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Get Involved / Partner</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
