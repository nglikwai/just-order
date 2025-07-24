import { ShoppingCart } from 'lucide-react';

export function EmptyCart() {
  return (
    <div className='text-center py-12 sm:py-16 animate-fadeInUp px-4'>
      <div className='relative mb-4 sm:mb-6 flex justify-center'>
        <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center animate-bounce'>
          <ShoppingCart className='w-8 h-8 sm:w-10 sm:h-10 text-gray-400' />
        </div>
        <div className='absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-slate-500 rounded-full flex items-center justify-center animate-ping'>
          <span className='text-white text-xs font-bold'>+</span>
        </div>
      </div>
      <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-2'>
        Your cart is empty
      </h3>
      <p className='text-sm sm:text-base text-gray-500 mb-4 sm:mb-6'>
        Discover our delicious menu items above
      </p>
      <div className='flex justify-center'>
        <div className='flex items-center gap-2 text-gray-400 text-xs sm:text-sm bg-gray-50 rounded-full px-4 py-2'>
          <span>👆</span>
          <span>Start by adding some items</span>
        </div>
      </div>
    </div>
  );
}
