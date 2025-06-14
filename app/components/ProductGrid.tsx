'use client';

import Image from 'next/image';
import { ArrowLeft, Plus, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  categoryName: string;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, categoryName, onBack, onAddToCart }: ProductGridProps) {
  return (
    <div className="flex-1 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 text-gray-300 hover:text-white transition-all duration-200 border border-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Menu</span>
          </button>
          <h2 className="text-2xl font-bold text-white">{categoryName}</h2>
        </div>
        <div className="text-gray-400 text-sm">
          {products.length} items available
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative glass-effect rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 card-hover overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-t-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Quick Add Button */}
              <button
                onClick={() => onAddToCart(product)}
                className="absolute top-2 right-2 w-8 h-8 bg-accent-600 hover:bg-accent-700 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
              >
                <Plus className="h-4 w-4" />
              </button>

              {/* Rating Badge */}
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Star className="h-2 w-2 text-yellow-400 fill-current" />
                <span className="text-white text-xs font-medium">4.8</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-3">
              <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-primary-300 transition-colors duration-200 leading-tight">
                {product.name}
              </h3>
              
              {product.description && (
                <p className="text-gray-400 text-xs mb-2 line-clamp-2 leading-tight">
                  {product.description}
                </p>
              )}

              {/* Price and Add Button */}
              <div className="flex items-center justify-between">
                <div className="text-accent-400 font-bold text-sm">
                  ${product.price.toFixed(2)}
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-xs font-medium transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center">
              <Plus className="h-6 w-6 text-gray-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Products</h3>
          <p className="text-gray-400">No products available in this category</p>
        </div>
      )}
    </div>
  );
} 