'use client';

import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

import { AlertCircle, CheckCircle, Clock, Package, Search } from 'lucide-react';

import { Button } from '@/components/components/ui/button';
import type { Order } from '@/types/index';

interface ExtendedOrder extends Order {
  businessName: string;
  businessId: string;
  customerPhone?: string;
}

export default function TrackOrder() {
  const [searchMethod, setSearchMethod] = useState<'phone' | 'orderId'>(
    'phone'
  );
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderId, setOrderId] = useState('');
  const [recentOrders, setRecentOrders] = useState<ExtendedOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Load recent orders from localStorage
    const loadRecentOrders = () => {
      const recent = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('order_')) {
          try {
            const order = JSON.parse(localStorage.getItem(key) || '');
            recent.push(order);
          } catch (e) {
            // Skip invalid orders
          }
        }
      }

      // Also check for current order
      const currentOrder = localStorage.getItem('currentOrder');
      if (currentOrder) {
        try {
          recent.push(JSON.parse(currentOrder));
        } catch (e) {
          // Skip invalid order
        }
      }

      // Sort by timestamp (newest first)
      recent.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      setRecentOrders(recent.slice(0, 5)); // Show only last 5 orders
    };

    loadRecentOrders();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      if (searchMethod === 'phone') {
        // Search by phone number in localStorage
        const matchingOrders = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key?.startsWith('order_')) {
            const order = JSON.parse(localStorage.getItem(key) || '');
            if (order.customerPhone === phoneNumber) {
              matchingOrders.push(order);
            }
          }
        }

        if (matchingOrders.length > 0) {
          // Show the most recent order
          const latestOrder = matchingOrders.sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )[0];
          router.push(`/order-placed/${latestOrder.orderId}`);
        } else {
          setError(
            'No orders found for this phone number. Please check and try again.'
          );
        }
      } else {
        // Search by order ID
        const orderKey = `order_${orderId}`;
        const order = localStorage.getItem(orderKey);

        if (order) {
          router.push(`/order-placed/${orderId}`);
        } else {
          // Check if it's the current order
          const currentOrder = localStorage.getItem('currentOrder');
          if (currentOrder) {
            const parsed = JSON.parse(currentOrder);
            if (parsed.orderId === orderId) {
              router.push(`/order-placed/${orderId}`);
              return;
            }
          }
          setError(
            'Order not found. Please check your order ID and try again.'
          );
        }
      }
    } catch (error) {
      setError(
        'An error occurred while searching for your order. Please try again.'
      );
    }

    setLoading(false);
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className='w-5 h-5 text-amber-600' />;
      case 'confirmed':
        return <CheckCircle className='w-5 h-5 text-slate-600' />;
      case 'preparing':
        return <Package className='w-5 h-5 text-orange-600' />;
      case 'ready':
        return <CheckCircle className='w-5 h-5 text-emerald-600' />;
      case 'completed':
        return <CheckCircle className='w-5 h-5 text-emerald-600' />;
      default:
        return <Clock className='w-5 h-5 text-gray-600' />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'confirmed':
        return 'bg-slate-50 text-slate-800 border-slate-200';
      case 'preparing':
        return 'bg-orange-50 text-orange-800 border-orange-200';
      case 'ready':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'completed':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      default:
        return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50'>
      <div className='max-w-2xl mx-auto px-6 py-8'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='w-16 h-16 bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
            <Search className='w-8 h-8 text-slate-600' />
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-2'>
            Track Your Order
          </h1>
          <p className='text-gray-600'>
            Enter your details to find and track your order status
          </p>
        </div>

        {/* Search Methods */}
        <div className='bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 mb-8'>
          <div className='flex gap-4 mb-6'>
            <button
              onClick={() => setSearchMethod('phone')}
              className={`flex-1 p-3 rounded-2xl border transition-colors ${
                searchMethod === 'phone'
                  ? 'bg-slate-50 border-slate-300 text-slate-900'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className='text-center'>
                <div className='text-sm font-medium'>Phone Number</div>
                <div className='text-xs text-gray-500'>
                  Find orders by phone
                </div>
              </div>
            </button>
            <button
              onClick={() => setSearchMethod('orderId')}
              className={`flex-1 p-3 rounded-2xl border transition-colors ${
                searchMethod === 'orderId'
                  ? 'bg-slate-50 border-slate-300 text-slate-900'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className='text-center'>
                <div className='text-sm font-medium'>Order ID</div>
                <div className='text-xs text-gray-500'>
                  Track with order number
                </div>
              </div>
            </button>
          </div>

          {/* Search Form */}
          <div className='space-y-4'>
            {searchMethod === 'phone' ? (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  className='w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50'
                  placeholder='Enter your phone number'
                />
                <p className='text-xs text-gray-500 mt-1'>
                  The phone number you used when placing the order
                </p>
              </div>
            ) : (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Order ID
                </label>
                <input
                  type='text'
                  value={orderId}
                  onChange={e => setOrderId(e.target.value)}
                  className='w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50'
                  placeholder='Enter your order ID'
                />
                <p className='text-xs text-gray-500 mt-1'>
                  Found in your order confirmation
                </p>
              </div>
            )}

            {error && (
              <div className='flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm'>
                <AlertCircle className='w-4 h-4' />
                {error}
              </div>
            )}

            <Button
              onClick={handleSearch}
              disabled={loading || (!phoneNumber && !orderId)}
              className='w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl py-3 font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-slate-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
            >
              {loading ? (
                <div className='flex items-center gap-2'>
                  <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white' />
                  Searching...
                </div>
              ) : (
                <div className='flex items-center gap-2'>
                  <Search className='w-4 h-4' />
                  Track Order
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Recent Orders */}
        {recentOrders.length > 0 && (
          <div className='bg-white rounded-2xl border border-gray-200 shadow-sm p-6'>
            <h2 className='text-lg font-semibold text-gray-900 mb-4'>
              Recent Orders
            </h2>
            <div className='space-y-3'>
              {recentOrders.map(order => (
                <div
                  key={order.orderId}
                  onClick={() => router.push(`/order-placed/${order.orderId}`)}
                  className='flex items-center justify-between p-4 sm:p-6 border border-gray-100 rounded-3xl hover:bg-slate-50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white'
                >
                  <div className='flex items-center gap-3'>
                    {getStatusIcon(order.status)}
                    <div>
                      <div className='font-medium text-gray-900'>
                        {order.businessName}
                      </div>
                      <div className='text-sm text-gray-600'>
                        Order #{order.orderId.slice(-6)} • $
                        {order.total.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className='text-right'>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                    <div className='text-xs text-gray-500 mt-1'>
                      {new Date(order.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className='text-center mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100'>
          <p className='text-gray-600 text-sm'>
            Need help? Contact the business directly or{' '}
            <a
              href='mailto:support@justorder.com'
              className='text-slate-600 hover:text-slate-800 underline'
            >
              reach out to support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
