import type { Order } from '@/types/index';

interface OrderStatsProps {
  orders: Order[];
}

export function OrderStats({ orders }: OrderStatsProps) {
  const getOrdersByStatus = (status: Order['status']) =>
    orders.filter(order => order.status === status).length;

  const stats = [
    {
      label: 'Total',
      value: orders.length,
      color: 'text-gray-900',
    },
    {
      label: 'Pending',
      value: getOrdersByStatus('pending'),
      color: 'text-yellow-600',
    },
    {
      label: 'Preparing',
      value: getOrdersByStatus('preparing'),
      color: 'text-orange-600',
    },
    {
      label: 'Ready',
      value: getOrdersByStatus('ready'),
      color: 'text-green-600',
    },
    {
      label: 'Completed',
      value: getOrdersByStatus('completed'),
      color: 'text-gray-600',
    },
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mb-6'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className='bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300'
        >
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className='text-sm text-gray-600'>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
