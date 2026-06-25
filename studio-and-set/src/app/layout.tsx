// src/app/layout.tsx

import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext'; // Adjust path based on your exact file casing
import './globals.css';

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
    <html lang="en">
      <body>
        {/* Wrapping the children in our Client State Provider.
          This allows any page or component deep in the tree (like our store page)
          to safely use the useCart() hook without making the layout a Client Component!
        */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}