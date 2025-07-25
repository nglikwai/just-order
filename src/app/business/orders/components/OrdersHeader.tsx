import { RefreshCw } from 'lucide-react';

import { Button } from '@/components/components/ui/button';

export function OrdersHeader() {
  return (
    <div className='mb-8'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>
            Orders
          </h1>
        </div>
        <Button
          onClick={() => window.location.reload()}
          variant='outline'
          className='flex items-center gap-2'
        >
          <RefreshCw className='w-4 h-4' />
          Refresh
        </Button>
      </div>
    </div>
  );
}
