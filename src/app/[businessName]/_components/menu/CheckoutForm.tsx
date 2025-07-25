'use client';

import { CartItem, CustomerInfo } from './types';

import { Button } from '@/components/components/ui/button';

interface CheckoutFormProps {
  cart: CartItem[];
  customerInfo: CustomerInfo;
  onCustomerInfoChange: (info: CustomerInfo) => void;
  onConfirmOrder: () => void;
  onBackToMenu: () => void;
}

export function CheckoutForm({
  cart,
  customerInfo,
  onCustomerInfoChange,
  onConfirmOrder,
  onBackToMenu,
}: CheckoutFormProps) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md rounded-t-xl sm:rounded-t-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-8 max-h-[85vh] overflow-y-auto animate-fadeInUp'>
      <div className='flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8'>
        <div className='w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full flex items-center justify-center'>
          <span className='text-xl sm:text-2xl'>📝</span>
        </div>
        <div>
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900'>
            Complete Your Order
          </h2>
          <p className='text-sm sm:text-base text-gray-600'>
            Just a few details and you're done
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8'>
        {/* Customer Info */}
        <div className='space-y-4 sm:space-y-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-800 mb-2'>
              Your Name *
            </label>
            <input
              type='text'
              value={customerInfo.name}
              onChange={e =>
                onCustomerInfoChange({ ...customerInfo, name: e.target.value })
              }
              className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50 text-sm sm:text-base'
              placeholder='Enter your full name'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-800 mb-2'>
              Phone Number *
            </label>
            <input
              type='tel'
              value={customerInfo.phone}
              onChange={e =>
                onCustomerInfoChange({
                  ...customerInfo,
                  phone: e.target.value,
                })
              }
              className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50 text-sm sm:text-base'
              placeholder='(555) 123-4567'
              required
            />
            <p className='text-xs text-gray-500 mt-2 flex items-center gap-1'>
              <span>📱</span>
              We'll send order updates to this number
            </p>
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-800 mb-2'>
              Special Instructions
            </label>
            <textarea
              value={customerInfo.notes}
              onChange={e =>
                onCustomerInfoChange({
                  ...customerInfo,
                  notes: e.target.value,
                })
              }
              className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50 resize-none text-sm sm:text-base'
              rows={3}
              placeholder='Any dietary restrictions or special requests...'
            />
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className='text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2'>
            <span>🛍️</span>
            Order Summary
          </h3>
          <div className='bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100'>
            <div className='space-y-3 sm:space-y-4 mb-4 sm:mb-6'>
              {cart.map(item => (
                <div
                  key={item.id}
                  className='flex justify-between items-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm'
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
              <div className='border-t border-gray-200 pt-3 sm:pt-4 mt-3 sm:mt-4'>
                <div className='flex justify-between items-center bg-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4'>
                  <span className='text-gray-900 font-bold text-base sm:text-lg'>
                    Total
                  </span>
                  <span className='text-xl sm:text-2xl font-bold text-slate-600'>
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 sm:gap-4'>
        <Button
          onClick={onConfirmOrder}
          disabled={!customerInfo.name || !customerInfo.phone}
          className='w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl py-3 sm:py-4 text-base sm:text-lg font-bold transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-slate-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none order-2 sm:order-1'
        >
          Place Order 🎉
        </Button>
        <Button
          variant='outline'
          onClick={onBackToMenu}
          className='w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl py-2.5 sm:py-3 text-sm sm:text-base font-semibold order-1 sm:order-2'
        >
          ← Back to Menu
        </Button>
      </div>
    </div>
  );
}
