'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import CartPanel from './components/CartPanel';
import MenuGrid from './components/MenuGrid';
import { categories, mockCartItems } from './data/mockData';
import { CartItem } from './types';

export default function Home() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.product.price * item.quantity;
      const discount = item.discount || 0;
      return total + (itemTotal * (1 - discount / 100));
    }, 0) * 1.085; // Including tax
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Navigation */}
      <Navbar totalAmount={calculateTotal()} />
      
      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)] max-w-[1200px] mx-auto">
        {/* Cart Panel - Left Side */}
        <CartPanel cartItems={cartItems} />
        
        {/* Menu Area - Right Side */}
        <div className="flex-1 flex flex-col">
          <MenuGrid
            categories={categories}
            onCategorySelect={handleCategorySelect}
          />
        </div>
      </div>
    </main>
  );
} 