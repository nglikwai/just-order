import { CheckCircle, Clock, Package, Utensils } from 'lucide-react';

import type { OrderStatus } from '@/types';

interface OrderStatusCardProps {
  status: OrderStatus;
  orderId: string;
  timestamp: string;
}

export function OrderStatusCard({
  status,
  orderId,
  timestamp,
}: OrderStatusCardProps) {
  const getStatusIcon = (status: OrderStatus) => {
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

  const getStatusText = (status: OrderStatus) => {
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

  const getStatusColor = (status: OrderStatus) => {
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
        return 'bg-gradient-to-br from-slate-50 via-white to-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div
      className={`rounded-3xl border-2 p-6 sm:p-8 mb-8 shadow-lg ${getStatusColor(status)}`}
    >
      <div className='flex items-center gap-3 mb-2'>
        {getStatusIcon(status)}
        <h2 className='text-lg font-semibold'>{getStatusText(status)}</h2>
      </div>
      <p className='text-sm opacity-75'>
        Order #{orderId} • Placed at {new Date(timestamp).toLocaleTimeString()}
      </p>
    </div>
  );
}
