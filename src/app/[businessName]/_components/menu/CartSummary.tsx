'use client';

import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/components/ui/button';
import type { CartItem } from '@/types';

interface CartSummaryProps {
  cart: CartItem[];
  onPlaceOrder: () => void;
}

export function CartSummary({ cart, onPlaceOrder }: CartSummaryProps) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (cart.length === 0) return null;

  return (
    <div className='bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 sticky bottom-2 sm:bottom-6 mx-2 sm:mx-4 animate-fadeInUp'>
      <div className='flex items-center justify-between mb-4 sm:mb-6'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-full flex items-center justify-center'>
            <ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5 text-slate-600' />
          </div>
          <div>
            <span className='font-bold text-gray-900 text-base sm:text-lg'>
              Your Order
            </span>
            <div className='text-xs sm:text-sm text-gray-500'>
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
            </div>
          </div>
        </div>
        <div className='text-right'>
          <div className='text-xl sm:text-2xl font-bold text-slate-600'>
            ${getTotalPrice().toFixed(2)}
          </div>
          <div className='text-xs text-gray-500'>Total</div>
        </div>
      </div>

      {/* Cart Items - Mobile Scrollable */}
      <div className='space-y-2 sm:space-y-3 mb-4 sm:mb-6 max-h-24 sm:max-h-32 overflow-y-auto'>
        {cart.map(item => (
          <div
            key={item.id}
            className='flex justify-between items-center bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3'
          >
            <div className='flex items-center gap-2 sm:gap-3 flex-1'>
              <div className='w-6 h-6 sm:w-8 sm:h-8 bg-slate-100 rounded-md sm:rounded-lg flex items-center justify-center text-slate-600 font-bold text-xs sm:text-sm flex-shrink-0'>
                {item.quantity}
              </div>
              <span className='text-gray-900 font-medium text-sm sm:text-base truncate'>
                {item.name}
              </span>
            </div>
            <span className='text-gray-900 font-bold text-sm sm:text-base flex-shrink-0 ml-2'>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <Button
        onClick={onPlaceOrder}
        className='w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl py-3 sm:py-4 text-base sm:text-lg font-bold transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-slate-500/25'
      >
        Continue to Checkout
      </Button>
    </div>
  );
}
