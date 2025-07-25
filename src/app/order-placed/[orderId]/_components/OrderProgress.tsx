import { CheckCircle } from 'lucide-react';

import { OrderStatus } from '@/types/order';

interface OrderProgressProps {
  currentStatus: OrderStatus;
  timestamp: string;
}

export function OrderProgress({
  currentStatus,
  timestamp,
}: OrderProgressProps) {
  const progressSteps = [
    {
      status: 'pending' as OrderStatus,
      label: 'Order Placed',
      time: new Date(timestamp).toLocaleTimeString(),
    },
    {
      status: 'confirmed' as OrderStatus,
      label: 'Order Confirmed',
      time: currentStatus !== 'pending' ? 'Confirmed' : '',
    },
    {
      status: 'preparing' as OrderStatus,
      label: 'Preparing',
      time: ['preparing', 'ready', 'completed'].includes(currentStatus)
        ? 'In progress'
        : '',
    },
    {
      status: 'ready' as OrderStatus,
      label: 'Ready for Pickup',
      time: ['ready', 'completed'].includes(currentStatus) ? 'Ready' : '',
    },
  ];

  const getStepStatus = (stepStatus: OrderStatus) => {
    const statusOrder = [
      'pending',
      'confirmed',
      'preparing',
      'ready',
      'completed',
    ];
    const currentIndex = statusOrder.indexOf(currentStatus);
    const stepIndex = statusOrder.indexOf(stepStatus);

    if (currentStatus === stepStatus) {
      return 'current';
    } else if (stepIndex < currentIndex) {
      return 'completed';
    } else {
      return 'pending';
    }
  };

  const getStepStyles = (stepStatus: OrderStatus) => {
    const status = getStepStatus(stepStatus);

    switch (status) {
      case 'current':
        return 'bg-blue-600 text-white';
      case 'completed':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  const getTextStyles = (stepStatus: OrderStatus) => {
    return currentStatus === stepStatus ? 'text-blue-600' : 'text-gray-900';
  };

  return (
    <div className='bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 mb-8'>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>
        Order Progress
      </h3>
      <div className='space-y-4'>
        {progressSteps.map((step, index) => (
          <div key={step.status} className='flex items-center gap-3'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${getStepStyles(step.status)}`}
            >
              {getStepStatus(step.status) === 'completed' ? (
                <CheckCircle className='w-4 h-4' />
              ) : (
                <span className='text-xs font-bold'>{index + 1}</span>
              )}
            </div>
            <div className='flex-1'>
              <p className={`font-medium ${getTextStyles(step.status)}`}>
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
  );
}
