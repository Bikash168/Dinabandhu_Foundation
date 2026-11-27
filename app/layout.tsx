import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dinabandhu Foundation | Est. 1999 • Bhubaneswar, Odisha',
  description: 'Nurturing Healthy Communities, Resilient Ecosystems & Skilled Lives. Registered Trust (1999) under Indian Trust Act 1882, Section 12AA & 80G Certified.',
  keywords: [
    'Dinabandhu Foundation',
    'Odisha NGO',
    'CSR in Odisha',
    'Trident Academy of Technology',
    'SkillEM',
    'Indevin',
    '12AA and 80G Certified Trust',
    'Skill Development Odisha',
    'Green Skills',
    'Bhubaneswar NGO'
  ],
  authors: [{ name: 'Dinabandhu Foundation' }],
  icons: {
    icon: '/images/logo.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-brand-900 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
