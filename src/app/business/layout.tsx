import { BusinessSidebar } from '@/components/BusinessSidebar';

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white flex'>
      <BusinessSidebar />
      <div className='flex-1 lg:ml-0'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8'>
          <div className='lg:ml-0 ml-16'>{children}</div>
        </div>
      </div>
    </div>
  );
}
