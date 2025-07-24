import { Button } from '@/components/components/ui/button';

export function OrderNotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center'>
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
