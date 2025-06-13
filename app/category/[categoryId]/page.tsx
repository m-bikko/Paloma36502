'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import CartPanel from '../../components/CartPanel';
import ProductGrid from '../../components/ProductGrid';
import { categories, products, mockCartItems } from '../../data/mockData';
import { Product, CartItem } from '../../types';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.categoryId as string;
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      const newCartItem: CartItem = {
        id: Date.now().toString(),
        product,
        quantity: 1
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.product.price * item.quantity;
      const discount = item.discount || 0;
      return total + (itemTotal * (1 - discount / 100));
    }, 0) * 1.085; // Including tax
  };

  const filteredProducts = products.filter(product => product.category === categoryId);
  const selectedCategory = categories.find(cat => cat.id === categoryId);

  if (!selectedCategory) {
    router.push('/');
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Navigation */}
      <Navbar totalAmount={calculateTotal()} />
      
      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)] max-w-[1200px] mx-auto">
        {/* Cart Panel - Left Side */}
        <CartPanel cartItems={cartItems} />
        
        {/* Products Area - Right Side */}
        <div className="flex-1 flex flex-col">
          <ProductGrid
            products={filteredProducts}
            categoryName={selectedCategory.name}
            onBack={() => router.push('/')}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </main>
  );
} 