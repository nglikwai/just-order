'use client';

import { useEffect, useState } from 'react';

import { EstimatedTime } from './_components/EstimatedTime';
import { LoadingState } from './_components/LoadingState';
import { OrderActions } from './_components/OrderActions';
import { OrderDetails } from './_components/OrderDetails';
import { OrderNotFound } from './_components/OrderNotFound';
import { OrderProgress } from './_components/OrderProgress';
import { OrderStatusCard } from './_components/OrderStatusCard';
import { SuccessHeader } from './_components/SuccessHeader';

import type { Order, OrderStatus } from '@/types/index';

interface ExtendedOrder extends Order {
  businessName: string;
  businessId: string;
  total: number;
  status: OrderStatus;
  timestamp: string;
}

export default function OrderPlaced() {
  const [order, setOrder] = useState<ExtendedOrder | null>(null);
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
        const statusProgression: OrderStatus[] = [
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

  if (loading) {
    return <LoadingState />;
  }

  if (!order) {
    return <OrderNotFound />;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50'>
      <div className='max-w-2xl mx-auto px-6 py-8'>
        <SuccessHeader businessName={order.businessName} />

        <OrderStatusCard
          status={order.status}
          orderId={order.orderId}
          timestamp={order.timestamp}
        />

        <OrderProgress
          currentStatus={order.status}
          timestamp={order.timestamp}
        />

        <OrderDetails items={order.items} total={order.total} />

        <OrderActions />

        <EstimatedTime status={order.status} />
      </div>
    </div>
  );
}
