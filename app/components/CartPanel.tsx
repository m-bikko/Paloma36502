'use client';

import { useState } from 'react';
import { Plus, Minus, X, Edit3, Percent, StickyNote } from 'lucide-react';
import { CartItem } from '../types';

interface CartPanelProps {
  cartItems: CartItem[];
}

export default function CartPanel({ cartItems }: CartPanelProps) {
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.product.price * item.quantity;
      const discount = item.discount || 0;
      return total + (itemTotal * (1 - discount / 100));
    }, 0);
  };

  const handleNoteEdit = (itemId: string, currentNote?: string) => {
    setEditingNote(itemId);
    setNoteText(currentNote || '');
  };

  const saveNote = () => {
    // Here you would update the cart item with the new note
    setEditingNote(null);
    setNoteText('');
  };

  return (
    <div className="w-80 glass-effect border-r border-white/10 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Current Order</h2>
          <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {cartItems.length} items
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-1">Order #0.3.170.06122223</p>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cartItems.map((item, index) => (
          <div key={item.id} className="glass-effect p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
            {/* Item Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {index + 1}
                  </span>
                  <h3 className="text-white font-semibold">{item.product.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mt-1">${item.product.price.toFixed(2)} each</p>
              </div>
              <button className="p-1 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 rounded-lg bg-dark-700 hover:bg-dark-600 text-white flex items-center justify-center transition-colors">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-white font-semibold">{item.quantity}</span>
                <button className="w-8 h-8 rounded-lg bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>
                {item.discount && (
                  <div className="text-accent-400 text-xs">
                    -{item.discount}% discount
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleNoteEdit(item.id, item.note)}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-dark-700/50 hover:bg-dark-600/50 text-gray-300 hover:text-white text-xs transition-all duration-200 border border-white/10"
              >
                <StickyNote className="h-3 w-3" />
                <span>Note</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-dark-700/50 hover:bg-dark-600/50 text-gray-300 hover:text-white text-xs transition-all duration-200 border border-white/10">
                <Percent className="h-3 w-3" />
                <span>Discount</span>
              </button>
            </div>

            {/* Note Display */}
            {item.note && !editingNote && (
              <div className="mt-3 p-2 bg-dark-800/50 rounded-lg border border-white/10">
                <p className="text-gray-300 text-xs">{item.note}</p>
              </div>
            )}

            {/* Note Editor */}
            {editingNote === item.id && (
              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add a note..."
                  className="w-full px-3 py-2 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-primary-500"
                  autoFocus
                />
                <div className="flex space-x-2">
                  <button
                    onClick={saveNote}
                    className="px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white text-xs rounded-lg transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingNote(null)}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {cartItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <StickyNote className="h-8 w-8 text-gray-500" />
            </div>
            <p className="text-gray-400">No items in cart</p>
            <p className="text-gray-500 text-sm mt-1">Add items from the menu</p>
          </div>
        )}
      </div>

      {/* Total Summary */}
      {cartItems.length > 0 && (
        <div className="p-6 border-t border-white/10 space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-300 text-sm">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-300 text-sm">
              <span>Tax (8.5%)</span>
              <span>${(calculateTotal() * 0.085).toFixed(2)}</span>
            </div>
            <div className="h-px bg-white/10"></div>
            <div className="flex justify-between text-white font-bold text-lg">
              <span>Total</span>
              <span>${(calculateTotal() * 1.085).toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 