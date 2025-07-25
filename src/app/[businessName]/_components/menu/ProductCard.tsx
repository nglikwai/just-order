'use client';

import { Minus, Plus } from 'lucide-react';

import { CartItem, Product } from './types';

import { Button } from '@/components/components/ui/button';

interface ProductCardProps {
  product: Product;
  index: number;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, change: number) => void;
}

export function ProductCard({
  product,
  index,
  cart,
  onAddToCart,
  onUpdateQuantity,
}: ProductCardProps) {
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div
      className={`group bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
        !product.available ? 'opacity-60' : ''
      }`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Product Image Placeholder - Responsive Height */}
      <div className='relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-100/50 to-gray-100/50' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-4xl sm:text-5xl md:text-6xl opacity-20'>🍽️</div>
        </div>
        {!product.available && (
          <div className='absolute top-2 right-2 sm:top-3 sm:right-3'>
            <span className='px-2 py-1 sm:px-3 bg-red-500 text-white rounded-full text-xs font-medium'>
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className='p-4 sm:p-6'>
        <div className='flex justify-between items-start mb-2 sm:mb-3'>
          <h3 className='text-lg sm:text-xl font-bold text-gray-900 group-hover:text-slate-600 transition-colors flex-1 pr-2'>
            {product.name}
          </h3>
          <span className='text-lg sm:text-xl font-bold text-slate-600 flex-shrink-0'>
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2'>
          {product.description}
        </p>

        {product.available ? (
          <div className='flex items-center justify-center'>
            {cartItem ? (
              <div className='flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full p-2 w-full sm:w-auto justify-center'>
                <Button
                  size='sm'
                  variant='outline'
                  className='rounded-full w-8 h-8 sm:w-10 sm:h-10 border-gray-300 hover:border-slate-500 hover:text-slate-600'
                  onClick={() => onUpdateQuantity(product.id, -1)}
                >
                  <Minus className='w-3 h-3 sm:w-4 sm:h-4' />
                </Button>
                <span className='font-bold text-base sm:text-lg px-2 sm:px-3 min-w-[2rem] text-center'>
                  {cartItem.quantity}
                </span>
                <Button
                  size='sm'
                  variant='outline'
                  className='rounded-full w-8 h-8 sm:w-10 sm:h-10 border-gray-300 hover:border-slate-500 hover:text-slate-600'
                  onClick={() => onUpdateQuantity(product.id, 1)}
                >
                  <Plus className='w-3 h-3 sm:w-4 sm:h-4' />
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => onAddToCart(product)}
                className='w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl py-2.5 sm:py-3 text-sm sm:text-base font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-slate-500/25'
              >
                <Plus className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                Add to Cart
              </Button>
            )}
          </div>
        ) : (
          <div className='text-center'>
            <Button
              disabled
              className='w-full rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed py-2.5 sm:py-3 text-sm sm:text-base'
            >
              Currently Unavailable
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
