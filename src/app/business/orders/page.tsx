'use client';

import { useState } from 'react';

import { CheckCircle, Clock, Package, Utensils } from 'lucide-react';

import { OrdersHeader } from './components/OrdersHeader';
import { OrderStats } from './components/OrderStats';

import { Button } from '@/components/components/ui/button';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  orderId: string;
  customerName?: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed';
  timestamp: string;
  notes?: string;
}

export default function BusinessOrders() {
  const [orders, setOrders] = useState<Order[]>([
    {
      orderId: '1234567890',
      customerName: 'John Smith',
      items: [
        { id: '1', name: 'Coffee Latte', price: 4.5, quantity: 2 },
        { id: '2', name: 'Chicken Sandwich', price: 8.99, quantity: 1 },
      ],
      total: 17.99,
      status: 'pending',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      notes: 'Extra hot please',
    },
    {
      orderId: '1234567891',
      customerName: 'Sarah Johnson',
      items: [{ id: '3', name: 'Caesar Salad', price: 7.5, quantity: 1 }],
      total: 7.5,
      status: 'preparing',
      timestamp: new Date(Date.now() - 600000).toISOString(),
    },
    {
      orderId: '1234567892',
      customerName: 'Mike Wilson',
      items: [
        { id: '1', name: 'Coffee Latte', price: 4.5, quantity: 1 },
        { id: '4', name: 'Chocolate Cake', price: 5.99, quantity: 1 },
      ],
      total: 10.49,
      status: 'ready',
      timestamp: new Date(Date.now() - 900000).toISOString(),
    },
  ]);

  const [filter, setFilter] = useState<'all' | Order['status']>('all');

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(
      orders.map(order =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className='w-5 h-5 text-yellow-600' />;
      case 'confirmed':
        return <CheckCircle className='w-5 h-5 text-blue-600' />;
      case 'preparing':
        return <Utensils className='w-5 h-5 text-orange-600' />;
      case 'ready':
        return <Package className='w-5 h-5 text-green-600' />;
      case 'completed':
        return <CheckCircle className='w-5 h-5 text-green-600' />;
      default:
        return <Clock className='w-5 h-5 text-gray-600' />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'preparing':
        return 'bg-orange-100 text-orange-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getNextStatus = (
    currentStatus: Order['status']
  ): Order['status'] | null => {
    const statusFlow: Order['status'][] = [
      'pending',
      'confirmed',
      'preparing',
      'ready',
      'completed',
    ];
    const currentIndex = statusFlow.indexOf(currentStatus);
    return currentIndex < statusFlow.length - 1
      ? statusFlow[currentIndex + 1]
      : null;
  };

  const getActionButtonText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'Confirm Order';
      case 'confirmed':
        return 'Start Preparing';
      case 'preparing':
        return 'Mark as Ready';
      case 'ready':
        return 'Mark as Completed';
      default:
        return null;
    }
  };

  const filteredOrders =
    filter === 'all' ? orders : orders.filter(order => order.status === filter);

  const getOrdersByStatus = (status: Order['status']) =>
    orders.filter(order => order.status === status).length;

  return (
    <>
      <OrdersHeader />
      <OrderStats orders={orders} />

      {/* Filter Tabs */}
      <div className='flex gap-2 mb-6'>
        {['all', 'pending', 'confirmed', 'preparing', 'ready', 'completed'].map(
          status => (
            <Button
              key={status}
              variant={filter === status ? 'default' : 'outline'}
              size='sm'
              onClick={() => setFilter(status as typeof filter)}
              className='capitalize'
            >
              {status === 'all' ? 'All' : status}
              {status !== 'all' && (
                <span className='ml-1 bg-white bg-opacity-20 px-1.5 py-0.5 rounded-full text-xs'>
                  {getOrdersByStatus(status as Order['status'])}
                </span>
              )}
            </Button>
          )
        )}
      </div>

      {/* Orders List */}
      <div className='space-y-4'>
        {filteredOrders.length === 0 ? (
          <div className='text-center py-12'>
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Package className='w-8 h-8 text-gray-400' />
            </div>
            <p className='text-gray-500 text-lg'>
              {filter === 'all' ? 'No orders yet' : `No ${filter} orders`}
            </p>
            <p className='text-gray-400'>
              {filter === 'all'
                ? 'Orders will appear when placed'
                : `${filter} orders will appear here`}
            </p>
          </div>
        ) : (
          filteredOrders.map(order => (
            <div
              key={order.orderId}
              className='bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8'
            >
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      #{order.orderId}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(order.status)}`}
                    >
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </div>
                  <div className='text-sm text-gray-600'>
                    {order.customerName && (
                      <span className='mr-4'>{order.customerName}</span>
                    )}
                    <span>{new Date(order.timestamp).toLocaleString()}</span>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-2xl font-bold text-gray-900'>
                    ${order.total.toFixed(2)}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {order.items.reduce((sum, item) => sum + item.quantity, 0)}{' '}
                    items
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className='mb-4'>
                <h4 className='font-medium text-gray-900 mb-2'>Items:</h4>
                <div className='space-y-1'>
                  {order.items.map(item => (
                    <div key={item.id} className='flex justify-between text-sm'>
                      <span className='text-gray-900'>
                        {item.quantity}x {item.name}
                      </span>
                      <span className='text-gray-600'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              {order.notes && (
                <div className='mb-4 p-4 bg-slate-50 rounded-2xl border border-slate-100'>
                  <h4 className='font-medium text-slate-900 mb-1'>
                    Special Instructions:
                  </h4>
                  <p className='text-slate-700 text-sm'>{order.notes}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className='flex gap-2'>
                {getNextStatus(order.status) && (
                  <Button
                    onClick={() =>
                      updateOrderStatus(
                        order.orderId,
                        getNextStatus(order.status)!
                      )
                    }
                    className={`
                    ${order.status === 'pending' ? 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-slate-500/25' : ''}
                    ${order.status === 'confirmed' ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-amber-500/25' : ''}
                    ${order.status === 'preparing' ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg hover:shadow-emerald-500/25' : ''}
                    ${order.status === 'ready' ? 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-gray-500/25' : ''}
                  `}
                  >
                    {getActionButtonText(order.status)}
                  </Button>
                )}

                {order.status === 'completed' && (
                  <span className='flex items-center text-green-600 text-sm font-medium'>
                    <CheckCircle className='w-4 h-4 mr-1' />
                    Completed
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
