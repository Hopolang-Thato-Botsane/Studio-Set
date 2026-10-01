import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import '../globals.css';

export const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-main',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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