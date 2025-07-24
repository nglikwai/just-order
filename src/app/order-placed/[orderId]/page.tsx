'use client';

import { useEffect, useState } from 'react';

import { CheckCircle, Clock, Package, Utensils } from 'lucide-react';

import { Button } from '@/components/components/ui/button';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  orderId: string;
  businessName: string;
  businessId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed';
  timestamp: string;
}

export default function OrderPlaced({
  params,
}: {
  params: { orderId: string };
}) {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get order from localStorage (in real app, this would be an API call)
    const storedOrder = localStorage.getItem('currentOrder');
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
    setLoading(false);

    // Simulate status updates every 30 seconds (in real app, this would be websockets or polling)
    const interval = setInterval(() => {
      const storedOrder = localStorage.getItem('currentOrder');
      if (storedOrder) {
        const currentOrder = JSON.parse(storedOrder);
        // Simulate status progression
        const statusProgression: Order['status'][] = [
          'pending',
          'confirmed',
          'preparing',
          'ready',
          'completed',
        ];
        const currentIndex = statusProgression.indexOf(currentOrder.status);
        if (currentIndex < statusProgression.length - 1) {
          const newStatus = statusProgression[currentIndex + 1];
          const updatedOrder = { ...currentOrder, status: newStatus };
          localStorage.setItem('currentOrder', JSON.stringify(updatedOrder));
          setOrder(updatedOrder);
        }
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className='w-6 h-6 text-yellow-600' />;
      case 'confirmed':
        return <CheckCircle className='w-6 h-6 text-blue-600' />;
      case 'preparing':
        return <Utensils className='w-6 h-6 text-orange-600' />;
      case 'ready':
        return <Package className='w-6 h-6 text-green-600' />;
      case 'completed':
        return <CheckCircle className='w-6 h-6 text-green-600' />;
      default:
        return <Clock className='w-6 h-6 text-gray-600' />;
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'Order Placed - Waiting for confirmation';
      case 'confirmed':
        return 'Order Confirmed - Being prepared';
      case 'preparing':
        return 'Preparing Your Order';
      case 'ready':
        return 'Order Ready for Pickup';
      case 'completed':
        return 'Order Completed';
      default:
        return 'Processing Order';
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'preparing':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'ready':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'completed':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4' />
          <p className='text-gray-600'>Loading your order...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Order Not Found
          </h1>
          <p className='text-gray-600 mb-6'>
            We couldn't find your order details.
          </p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-2xl mx-auto px-6 py-8'>
        {/* Success Header */}
        <div className='text-center mb-8'>
          <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <CheckCircle className='w-8 h-8 text-green-600' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Order Placed Successfully!
          </h1>
          <p className='text-gray-600'>
            Thank you for your order from {order.businessName}
          </p>
        </div>

        {/* Order Status */}
        <div
          className={`rounded-lg border-2 p-6 mb-6 ${getStatusColor(order.status)}`}
        >
          <div className='flex items-center gap-3 mb-2'>
            {getStatusIcon(order.status)}
            <h2 className='text-lg font-semibold'>
              {getStatusText(order.status)}
            </h2>
          </div>
          <p className='text-sm opacity-75'>
            Order #{order.orderId} • Placed at{' '}
            {new Date(order.timestamp).toLocaleTimeString()}
          </p>
        </div>

        {/* Order Progress */}
        <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Order Progress
          </h3>
          <div className='space-y-4'>
            {[
              {
                status: 'pending',
                label: 'Order Placed',
                time: new Date(order.timestamp).toLocaleTimeString(),
              },
              {
                status: 'confirmed',
                label: 'Order Confirmed',
                time: order.status !== 'pending' ? 'Confirmed' : '',
              },
              {
                status: 'preparing',
                label: 'Preparing',
                time: ['preparing', 'ready', 'completed'].includes(order.status)
                  ? 'In progress'
                  : '',
              },
              {
                status: 'ready',
                label: 'Ready for Pickup',
                time: ['ready', 'completed'].includes(order.status)
                  ? 'Ready'
                  : '',
              },
            ].map((step, index) => (
              <div key={step.status} className='flex items-center gap-3'>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    order.status === step.status
                      ? 'bg-blue-600 text-white'
                      : [
                            'confirmed',
                            'preparing',
                            'ready',
                            'completed',
                          ].includes(order.status) &&
                          ['pending', 'confirmed', 'preparing']
                            .slice(
                              0,
                              [
                                'pending',
                                'confirmed',
                                'preparing',
                                'ready',
                              ].indexOf(order.status) + 1
                            )
                            .includes(step.status as any)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {['confirmed', 'preparing', 'ready', 'completed'].includes(
                    order.status
                  ) &&
                  ['pending', 'confirmed', 'preparing']
                    .slice(
                      0,
                      ['pending', 'confirmed', 'preparing', 'ready'].indexOf(
                        order.status
                      ) + 1
                    )
                    .includes(step.status as any) ? (
                    <CheckCircle className='w-4 h-4' />
                  ) : (
                    <span className='text-xs font-bold'>{index + 1}</span>
                  )}
                </div>
                <div className='flex-1'>
                  <p
                    className={`font-medium ${
                      order.status === step.status
                        ? 'text-blue-600'
                        : 'text-gray-900'
                    }`}
                  >
                    {step.label}
                  </p>
                  {step.time && (
                    <p className='text-sm text-gray-500'>{step.time}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Order Details
          </h3>
          <div className='space-y-3'>
            {order.items.map(item => (
              <div key={item.id} className='flex justify-between items-center'>
                <div>
                  <span className='font-medium text-gray-900'>{item.name}</span>
                  <span className='text-gray-500 ml-2'>×{item.quantity}</span>
                </div>
                <span className='font-medium text-gray-900'>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className='border-t border-gray-200 pt-3 mt-3'>
              <div className='flex justify-between items-center'>
                <span className='text-lg font-semibold text-gray-900'>
                  Total
                </span>
                <span className='text-lg font-bold text-gray-900'>
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3'>
          <Button
            variant='outline'
            onClick={() => window.history.back()}
            className='flex-1'
          >
            Back to Menu
          </Button>
          <Button
            onClick={() => window.location.reload()}
            className='flex-1 bg-blue-600 hover:bg-blue-700'
          >
            Refresh Status
          </Button>
        </div>

        {/* Estimated Time */}
        {order.status !== 'completed' && (
          <div className='text-center mt-6 p-4 bg-blue-50 rounded-lg'>
            <p className='text-sm text-blue-800'>
              <Clock className='w-4 h-4 inline mr-1' />
              Estimated preparation time: 15-20 minutes
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
