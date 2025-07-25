import { Product } from './menu/types';

interface StructuredDataProps {
  businessName: string;
  description: string;
  products: Product[];
}

export function StructuredData({
  businessName,
  description,
  products,
}: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: businessName,
    description: description,
    servesCuisine: 'American',
    priceRange: '$$',
    acceptsReservations: false,
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: {
        '@type': 'MenuSection',
        name: 'Main Menu',
        hasMenuItem: products.map(product => ({
          '@type': 'MenuItem',
          name: product.name,
          description: product.description,
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'USD',
            availability: product.available
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
          },
        })),
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '125',
    },
    openingHours: ['Mo-Su 07:00-22:00'],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
