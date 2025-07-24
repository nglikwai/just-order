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

export default function CustomerMenu({
  params,
}: {
  params: { businessId: string };
}) {
  const router = useRouter();

  // Mock products - in real app, this would come from API
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
  const [businessName] = useState("Joe's Coffee Shop"); // Mock business name

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

  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    notes: '',
  });

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
      businessId: params.businessId,
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
      {/* Hero Section */}
      <div className='relative h-64 bg-gradient-to-r from-slate-100 to-slate-200 overflow-hidden'>
        {/* Background pattern */}
        <div className='absolute inset-0 bg-opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Business Image Placeholder */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white'>
            <div className='text-4xl font-bold text-slate-600'>
              {businessName.charAt(0)}
            </div>
          </div>
        </div>

        {/* Business Info Overlay */}
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent'>
          <div className='max-w-4xl mx-auto px-6 py-6'>
            <h1 className='text-3xl font-bold text-white mb-2'>
              {businessName}
            </h1>
            <p className='text-slate-200'>
              Browse our menu and place your order
            </p>
            <div className='flex items-center gap-4 mt-2 text-sm text-slate-300'>
              <span>⭐ 4.8 (125 reviews)</span>
              <span>📍 Downtown Location</span>
              <span>⏱️ 15-20 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-6 py-8'>
        {/* Products Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          {products.map(product => (
            <div
              key={product.id}
              className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 ${
                !product.available ? 'opacity-60' : ''
              }`}
            >
              <div className='flex justify-between items-start mb-3'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {product.name}
                </h3>
                <span className='text-lg font-bold text-gray-900'>
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <p className='text-gray-600 mb-4'>{product.description}</p>

              {product.available ? (
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    {cart.find(item => item.id === product.id) ? (
                      <div className='flex items-center gap-2'>
                        <Button
                          size='sm'
                          variant='outline'
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          <Minus className='w-4 h-4' />
                        </Button>
                        <span className='font-medium'>
                          {cart.find(item => item.id === product.id)
                            ?.quantity || 0}
                        </span>
                        <Button
                          size='sm'
                          variant='outline'
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          <Plus className='w-4 h-4' />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(product)}
                        className='bg-slate-600 hover:bg-slate-700'
                      >
                        <Plus className='w-4 h-4 mr-2' />
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className='text-center'>
                  <span className='px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium'>
                    Currently Unavailable
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && !showCheckout && (
          <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky bottom-4'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-2'>
                <ShoppingCart className='w-5 h-5 text-gray-600' />
                <span className='font-semibold text-gray-900'>
                  Your Order ({getTotalItems()} items)
                </span>
              </div>
              <span className='text-xl font-bold text-gray-900'>
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>

            {/* Cart Items */}
            <div className='space-y-2 mb-4'>
              {cart.map(item => (
                <div
                  key={item.id}
                  className='flex justify-between items-center text-sm'
                >
                  <span className='text-gray-900'>
                    {item.quantity}x {item.name}
                  </span>
                  <span className='text-gray-900 font-medium'>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={handlePlaceOrder}
              className='w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3'
            >
              Place Order - ${getTotalPrice().toFixed(2)}
            </Button>
          </div>
        )}

        {/* Checkout Form */}
        {showCheckout && (
          <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky bottom-4'>
            <h2 className='text-xl font-bold text-gray-900 mb-6'>
              Complete Your Order
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              {/* Customer Info */}
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Your Name *
                  </label>
                  <input
                    type='text'
                    value={customerInfo.name}
                    onChange={e =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
                    placeholder='Enter your name'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
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
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
                    placeholder='Enter your phone number'
                    required
                  />
                  <p className='text-xs text-gray-500 mt-1'>
                    We'll use this to track your order
                  </p>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
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
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
                    rows={3}
                    placeholder='Any special requests...'
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className='font-medium text-gray-900 mb-4'>
                  Order Summary
                </h3>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <div className='space-y-2 mb-4'>
                    {cart.map(item => (
                      <div
                        key={item.id}
                        className='flex justify-between text-sm'
                      >
                        <span className='text-gray-900'>
                          {item.quantity}x {item.name}
                        </span>
                        <span className='text-gray-900 font-medium'>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    <div className='border-t border-gray-200 pt-2 mt-2 flex justify-between font-medium'>
                      <span className='text-gray-900'>Total</span>
                      <span className='text-lg font-bold text-gray-900'>
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex gap-3'>
              <Button
                variant='outline'
                onClick={() => setShowCheckout(false)}
                className='flex-1'
              >
                Back to Menu
              </Button>
              <Button
                onClick={confirmOrder}
                disabled={!customerInfo.name || !customerInfo.phone}
                className='flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50'
              >
                Place Order
              </Button>
            </div>
          </div>
        )}

        {cart.length === 0 && (
          <div className='text-center py-12'>
            <ShoppingCart className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <p className='text-gray-500 text-lg'>Your cart is empty</p>
            <p className='text-gray-400'>Add some items to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}
