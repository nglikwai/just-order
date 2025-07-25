import { Clock } from 'lucide-react';

import { OrderStatus } from '@/types/order';

interface EstimatedTimeProps {
  status: OrderStatus;
}

export function EstimatedTime({ status }: EstimatedTimeProps) {
  if (status === 'completed') {
    return null;
  }

  return (
    <div className='text-center mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100'>
      <p className='text-sm text-slate-700'>
        <Clock className='w-4 h-4 inline mr-1' />
        Estimated preparation time: 15-20 minutes
      </p>
    </div>
  );
}
