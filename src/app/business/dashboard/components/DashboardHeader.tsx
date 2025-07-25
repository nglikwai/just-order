interface DashboardHeaderProps {
  businessName?: string;
  ownerName?: string;
  onAddProduct: () => void;
}

export function DashboardHeader({
  businessName,
  ownerName,
  onAddProduct,
}: DashboardHeaderProps) {
  return (
    <div className='mb-8'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
        <div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>
            {businessName || 'Dashboard'}
          </h1>
          {ownerName && (
            <p className='text-gray-600'>Welcome back, {ownerName}</p>
          )}
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-white rounded-2xl p-3 shadow-sm border border-gray-100'>
            <div className='flex items-center gap-2 text-sm'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
              <span className='text-gray-600 font-medium'>Live Orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
