import { Metadata } from 'next';

import { BusinessHero } from './_components/BusinessHero';
import { MenuSection } from './_components/MenuSection';
import { StructuredData } from './_components/StructuredData';
import { getBusinessData, getProducts } from './lib/business-data';

interface PageProps {
  params: Promise<{ businessName: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { businessName: businessId } = await params;
  const business = await getBusinessData(businessId);

  return {
    title: `${business.name} - Order Online`,
    description: `${business.description} Order online for pickup or delivery.`,
    keywords: `${business.name}, restaurant, food, order online, menu`,
    openGraph: {
      title: `${business.name} - Order Online`,
      description: `${business.description} Order online for pickup or delivery.`,
      type: 'website',
    },
  };
}

export default async function CustomerMenu({ params }: PageProps) {
  const { businessName: businessId } = await params;

  // Fetch business data and products server-side
  const [business, products] = await Promise.all([
    getBusinessData(businessId),
    getProducts(businessId),
  ]);

  return (
    <>
      <StructuredData
        businessName={business.name}
        description={business.description}
        products={products}
      />

      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50'>
        <BusinessHero
          businessName={business.name}
          description={business.description}
        />

        <MenuSection
          products={products}
          businessName={business.name}
          businessId={businessId}
        />
      </div>
    </>
  );
}
