// src/app/layout.tsx

import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import '../globals.css'; // This targets your global stylesheet

// 1. Configure the Syne font for headings
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-main',
});

// 2. Configure the Inter font for regular body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-support',
});

export const metadata: Metadata = {
  title: 'Studio & Set',
  description: 'Inventory for the Unforgiving',
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-layout-wrapper">
      {children}
    </div>
  );
}