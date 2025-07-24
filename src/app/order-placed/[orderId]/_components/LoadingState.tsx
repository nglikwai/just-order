export function LoadingState() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mx-auto mb-4' />
        <p className='text-gray-600'>Loading your order...</p>
      </div>
    </div>
  );
}
