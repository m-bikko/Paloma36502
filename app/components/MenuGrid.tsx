'use client';

import { ArrowLeft } from 'lucide-react';
import { Category } from '../types';

interface MenuGridProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
  currentCategory?: string;
}

export default function MenuGrid({ categories, onCategorySelect, currentCategory }: MenuGridProps) {
  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {currentCategory && (
            <button
              onClick={() => onCategorySelect('')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 text-gray-300 hover:text-white transition-all duration-200 border border-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Menu</span>
            </button>
          )}
          <h2 className="text-2xl font-bold text-white">
            {currentCategory ? 
              categories.find(c => c.id === currentCategory)?.name || 'Category' 
              : 'Menu'
            }
          </h2>
        </div>
        <div className="text-gray-400 text-sm">
          {categories.length} categories available
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className="group relative glass-effect p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 card-hover text-center overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Category Icon/Image Placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {category.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              
              {/* Category Name */}
              <h3 className="text-white font-semibold text-sm group-hover:text-white transition-colors duration-200">
                {category.name}
              </h3>
              
              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
            </div>

            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-dark-600 rounded-lg"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Categories</h3>
          <p className="text-gray-400">Categories will appear here when available</p>
        </div>
      )}
    </div>
  );
} 