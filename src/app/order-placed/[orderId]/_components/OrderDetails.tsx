import type { OrderItem } from '@/types';

interface OrderDetailsProps {
  items: OrderItem[];
  total: number;
}

export function OrderDetails({ items, total }: OrderDetailsProps) {
  return (
    <div className='bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 mb-8'>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>
        Order Details
      </h3>
      <div className='space-y-3'>
        {items.map(item => (
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
            <span className='text-lg font-semibold text-gray-900'>Total</span>
            <span className='text-lg font-bold text-gray-900'>
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
