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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. This injects both font variables into the root HTML tag
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}