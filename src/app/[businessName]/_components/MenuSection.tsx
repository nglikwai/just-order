import { Product } from './menu/types';
import { MenuClient } from './MenuClient';

interface MenuSectionProps {
  products: Product[];
  businessName: string;
  businessId: string;
}

export function MenuSection({
  products,
  businessName,
  businessId,
}: MenuSectionProps) {
  return (
    <div className='max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8'>
      {/* Menu Section Header */}
      <div className='mb-6 sm:mb-8 text-center sm:text-left'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
          Our Menu
        </h2>
        <p className='text-sm sm:text-base text-gray-600'>
          Discover our carefully curated selection
        </p>
      </div>

      {/* Interactive Menu Client Component */}
      <MenuClient
        products={products}
        businessName={businessName}
        businessId={businessId}
      />
    </div>
  );
}
