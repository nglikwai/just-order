'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { Minus, Plus, ShoppingCart } from 'lucide-react';

import { Button } from '@/components/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

interface CustomerMenuClientProps {
  businessName: string;
  businessId: string;
}

export function CustomerMenuClient({
  businessName,
  businessId,
}: CustomerMenuClientProps) {
  const router = useRouter();

  // Mock products - in real app, this would come from API based on business
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Coffee Latte',
      description: 'Rich espresso with steamed milk',
      price: 4.5,
      available: true,
    },
    {
      id: '2',
      name: 'Chicken Sandwich',
      description: 'Grilled chicken with fresh vegetables',
      price: 8.99,
      available: true,
    },
    {
      id: '3',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with caesar dressing',
      price: 7.5,
      available: true,
    },
    {
      id: '4',
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with cream frosting',
      price: 5.99,
      available: false,
    },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    notes: '',
  });

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, change: number) => {
    setCart(
      cart
        .map(item => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change;
            return newQuantity <= 0 ? null : { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      setShowCheckout(true);
    }
  };

  const confirmOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      return; // Basic validation
    }

    const orderId = Date.now().toString();
    const order = {
      items: cart,
      businessName,
      businessId,
      total: getTotalPrice(),
      orderId,
      status: 'pending' as const,
      timestamp: new Date().toISOString(),
      customerName: customerInfo.name,
      customerPhone: customerInfo.phone,
      notes: customerInfo.notes,
    };

    // Store order in localStorage for tracking
    localStorage.setItem('currentOrder', JSON.stringify(order));
    localStorage.setItem(`order_${orderId}`, JSON.stringify(order));

    router.push(`/order-placed/${orderId}`);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section - Mobile Responsive */}
      <div className='relative h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden'>
        {/* Subtle geometric background - Responsive */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-4 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-xl animate-pulse' />
          <div className='absolute top-16 right-6 sm:top-32 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-xl animate-pulse delay-1000' />
          <div className='absolute bottom-12 left-16 sm:bottom-20 sm:left-32 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-xl animate-pulse delay-2000' />
        </div>

        {/* Business Avatar - Responsive */}
        <div className='absolute inset-0 flex items-center justify-center pt-4 sm:pt-0'>
          <div className='transform transition-all duration-500 hover:scale-105'>
            <div className='w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center border border-gray-100 backdrop-blur-sm bg-white/90'>
              <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-rose-500 to-pink-600 bg-clip-text text-transparent'>
                {businessName.charAt(0)}
              </div>
            </div>
          </div>
        </div>

        {/* Business Info Card - Mobile First */}
        <div className='absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6'>
          <div className='bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 transform transition-all duration-300 hover:shadow-2xl'>
            <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2'>
              {businessName}
            </h1>
            <p className='text-sm sm:text-base text-gray-600 mb-2 sm:mb-3'>
              Handcrafted dishes made with love
            </p>
            <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500'>
              <div className='flex items-center gap-1'>
                <span className='text-yellow-400'>★</span>
                <span className='font-medium text-gray-700'>4.8</span>
                <span className='hidden sm:inline'>(125 reviews)</span>
                <span className='sm:hidden'>(125)</span>
              </div>
              <div className='flex items-center gap-1'>
                <span>📍</span>
                <span>Downtown</span>
              </div>
              <div className='flex items-center gap-1'>
                <span>⏱️</span>
                <span>15-20 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8'>
        {/* Menu Section Header - Responsive */}
        <div className='mb-6 sm:mb-8 text-center sm:text-left'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
            Our Menu
          </h2>
          <p className='text-sm sm:text-base text-gray-600'>
            Discover our carefully curated selection
          </p>
        </div>

        {/* Products Grid - Mobile First Responsive */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8'>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                !product.available ? 'opacity-60' : ''
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Product Image Placeholder - Responsive Height */}
              <div className='relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-rose-100/50 to-pink-100/50' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-4xl sm:text-5xl md:text-6xl opacity-20'>
                    🍽️
                  </div>
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
                  <h3 className='text-lg sm:text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors flex-1 pr-2'>
                    {product.name}
                  </h3>
                  <span className='text-lg sm:text-xl font-bold text-rose-600 flex-shrink-0'>
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <p className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2'>
                  {product.description}
                </p>

                {product.available ? (
                  <div className='flex items-center justify-center'>
                    {cart.find(item => item.id === product.id) ? (
                      <div className='flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-full p-2 w-full sm:w-auto justify-center'>
                        <Button
                          size='sm'
                          variant='outline'
                          className='rounded-full w-8 h-8 sm:w-10 sm:h-10 border-gray-300 hover:border-rose-500 hover:text-rose-600'
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          <Minus className='w-3 h-3 sm:w-4 sm:h-4' />
                        </Button>
                        <span className='font-bold text-base sm:text-lg px-2 sm:px-3 min-w-[2rem] text-center'>
                          {cart.find(item => item.id === product.id)
                            ?.quantity || 0}
                        </span>
                        <Button
                          size='sm'
                          variant='outline'
                          className='rounded-full w-8 h-8 sm:w-10 sm:h-10 border-gray-300 hover:border-rose-500 hover:text-rose-600'
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          <Plus className='w-3 h-3 sm:w-4 sm:h-4' />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(product)}
                        className='w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-xl py-2.5 sm:py-3 text-sm sm:text-base font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl'
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
          ))}
        </div>

        {/* Cart Summary - Mobile Responsive */}
        {cart.length > 0 && !showCheckout && (
          <div className='bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 sticky bottom-2 sm:bottom-6 mx-2 sm:mx-4 animate-fadeInUp'>
            <div className='flex items-center justify-between mb-4 sm:mb-6'>
              <div className='flex items-center gap-2 sm:gap-3'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-rose-100 rounded-full flex items-center justify-center'>
                  <ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5 text-rose-600' />
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
                <div className='text-xl sm:text-2xl font-bold text-rose-600'>
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
                    <div className='w-6 h-6 sm:w-8 sm:h-8 bg-rose-100 rounded-md sm:rounded-lg flex items-center justify-center text-rose-600 font-bold text-xs sm:text-sm flex-shrink-0'>
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
              onClick={handlePlaceOrder}
              className='w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-xl py-3 sm:py-4 text-base sm:text-lg font-bold transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl'
            >
              Continue to Checkout
            </Button>
          </div>
        )}

        {/* Checkout Form - Mobile Responsive */}
        {showCheckout && (
          <div className='bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 animate-fadeInUp'>
            <div className='flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-full flex items-center justify-center'>
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
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/50 text-sm sm:text-base'
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
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/50 text-sm sm:text-base'
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
                      setCustomerInfo({
                        ...customerInfo,
                        notes: e.target.value,
                      })
                    }
                    className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/50 resize-none text-sm sm:text-base'
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
                          <div className='w-6 h-6 sm:w-8 sm:h-8 bg-rose-100 rounded-md sm:rounded-lg flex items-center justify-center text-rose-600 font-bold text-xs sm:text-sm flex-shrink-0'>
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
                      <div className='flex justify-between items-center bg-rose-50 rounded-lg sm:rounded-xl p-3 sm:p-4'>
                        <span className='text-gray-900 font-bold text-base sm:text-lg'>
                          Total
                        </span>
                        <span className='text-xl sm:text-2xl font-bold text-rose-600'>
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
                onClick={confirmOrder}
                disabled={!customerInfo.name || !customerInfo.phone}
                className='w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-xl py-3 sm:py-4 text-base sm:text-lg font-bold transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none order-2 sm:order-1'
              >
                Place Order 🎉
              </Button>
              <Button
                variant='outline'
                onClick={() => setShowCheckout(false)}
                className='w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl py-2.5 sm:py-3 text-sm sm:text-base font-semibold order-1 sm:order-2'
              >
                ← Back to Menu
              </Button>
            </div>
          </div>
        )}

        {cart.length === 0 && (
          <div className='text-center py-12 sm:py-16 animate-fadeInUp px-4'>
            <div className='relative mb-4 sm:mb-6 flex justify-center'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center animate-bounce'>
                <ShoppingCart className='w-8 h-8 sm:w-10 sm:h-10 text-gray-400' />
              </div>
              <div className='absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-rose-500 rounded-full flex items-center justify-center animate-ping'>
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
        )}
      </div>
    </div>
  );
}
