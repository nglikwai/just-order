import { CheckCircle } from 'lucide-react';

interface SuccessHeaderProps {
  businessName: string;
}

export function SuccessHeader({ businessName }: SuccessHeaderProps) {
  return (
    <div className='text-center mb-8'>
      <div className='w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
        <CheckCircle className='w-8 h-8 text-green-600' />
      </div>
      <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-2'>
        Order Placed Successfully!
      </h1>
      <p className='text-gray-600'>
        Thank you for your order from {businessName}
      </p>
    </div>
  );
}
