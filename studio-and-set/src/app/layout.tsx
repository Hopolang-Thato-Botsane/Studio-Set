// src/app/(marketing)/layout.tsx

import { CartProvider } from '@/context/CartContext';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="marketing-shell">
      {/* This wraps ONLY your marketing & store pages in the Cart State */}
      <CartProvider>
        {children}
      </CartProvider>
    </div>
  );
}