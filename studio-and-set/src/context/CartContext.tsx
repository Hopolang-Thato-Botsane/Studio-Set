'use client';

//Built with aid from LLM Gemini, inssufficient knowledge to execute on my own

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. Define the structural blueprint of an item in the cart ledger
export interface CartItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  size: string;
  quantity: number;
}

// 2. Define the logical interface for what components can see and do
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Core Action: Add an item to the basket ledger
  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      // Find out if this exact item-and-size combo is already in the ledger
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItemIndex > -1) {
        // If it exists, increment its quantity safely without mutating state directly
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }

      // If it's a completely fresh combination, append it with an initial quantity of 1
      return [...prevCart, { ...newItem, quantity: 1 }];
    });
  };

  // Core Action: Wipe an entire line item completely out of the ledger
  const removeFromCart = (id: string, size: string) => {
    setCart((prevCart) => 
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // Core Action: Increment or Decrement quantities (+1 / -1) from the checkout drawer view
  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        // If a user clicks minus down to 0, completely scrub it from the cart array automatically
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  // Live Derived Math: Calculated automatically on every state change
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        cartTotal, 
        cartCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to cleanly consume this context engine across any UI file
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}