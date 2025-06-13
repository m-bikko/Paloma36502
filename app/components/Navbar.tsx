'use client';

import { Menu, Receipt, CreditCard, Settings, Search } from 'lucide-react';

interface NavbarProps {
  totalAmount: number;
}

export default function Navbar({ totalAmount }: NavbarProps) {
  return (
    <nav className="glass-effect h-16 px-6 flex items-center justify-between border-b border-white/10 sticky top-0 z-50">
      {/* Left Section - Menu */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 transition-colors duration-200 border border-white/10">
          <Menu className="h-5 w-5 text-white" />
        </button>
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search items..."
              className="pl-10 pr-4 py-2 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
            />
          </div>
        </div>
      </div>

      {/* Center Section - Total Amount */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-300 text-sm font-medium">Total:</span>
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-2 rounded-xl">
          <span className="text-white text-lg font-bold">
            $ {totalAmount.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 transition-all duration-200 border border-white/10 group">
          <Receipt className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
          <span className="text-gray-300 group-hover:text-white text-sm font-medium">Receipt</span>
        </button>
        
        <button className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
          <CreditCard className="h-4 w-4 text-white" />
          <span className="text-white text-sm font-bold">Payment</span>
        </button>

        <button className="p-2 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 transition-colors duration-200 border border-white/10">
          <Settings className="h-4 w-4 text-gray-300 hover:text-white transition-colors" />
        </button>
      </div>
    </nav>
  );
} 