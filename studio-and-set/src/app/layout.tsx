import React from 'react';
import { CartProvider, useCart } from '@/context/CartContext';
import { Syne, Inter } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'], 
  variable: '--font-main',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-support',
});

export const metadata = {
  title: 'Studio & Set',
  description: 'Built for the Crew. Not the Runway.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}