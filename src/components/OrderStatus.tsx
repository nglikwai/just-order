import { CheckCircle, Clock, Package, Utensils } from 'lucide-react';

export type OrderStatusType =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'completed';

interface OrderStatusProps {
  status: OrderStatusType;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function OrderStatus({
  status,
  size = 'md',
  showText = true,
}: OrderStatusProps) {
  const getStatusIcon = (status: OrderStatusType) => {
    const iconSize =
      size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';

    switch (status) {
      case 'pending':
        return <Clock className={`${iconSize} text-yellow-600`} />;
      case 'confirmed':
        return <CheckCircle className={`${iconSize} text-blue-600`} />;
      case 'preparing':
        return <Utensils className={`${iconSize} text-orange-600`} />;
      case 'ready':
        return <Package className={`${iconSize} text-green-600`} />;
      case 'completed':
        return <CheckCircle className={`${iconSize} text-green-600`} />;
      default:
        return <Clock className={`${iconSize} text-gray-600`} />;
    }
  };

  const getStatusText = (status: OrderStatusType) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'confirmed':
        return 'Confirmed';
      case 'preparing':
        return 'Preparing';
      case 'ready':
        return 'Ready';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: OrderStatusType) => {
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

  const textSize =
    size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs';
  const padding =
    size === 'sm' ? 'px-2 py-1' : size === 'lg' ? 'px-3 py-2' : 'px-2 py-1';

  return (
    <span
      className={`${padding} rounded-full ${textSize} font-medium flex items-center gap-1 ${getStatusColor(status)}`}
    >
      {getStatusIcon(status)}
      {showText && getStatusText(status)}
    </span>
  );
}
