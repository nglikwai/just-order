import type { Product } from '@/types/index';

// Simulate fetching business data - in real app, this would be from a database
export async function getBusinessData(businessId: string) {
  // Mock business data based on businessId
  const businessMap: Record<string, { name: string; description: string }> = {
    'joes-coffee-shop': {
      name: "Joe's Coffee Shop",
      description: 'Delicious food made with love.',
    },
    demo: {
      name: 'Demo Restaurant',
      description: 'Experience our amazing cuisine.',
    },
    'mikes-pizza': {
      name: "Mike's Pizza",
      description: 'Authentic Italian pizza and more.',
    },
    'coffee-corner': {
      name: 'Coffee Corner',
      description: 'Premium coffee and pastries.',
    },
  };

  const fallbackName = businessId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  return {
    name: businessMap[businessId]?.name || fallbackName,
    description:
      businessMap[businessId]?.description || 'Great food awaits you.',
  };
}

export async function getProducts(businessId: string): Promise<Product[]> {
  // Mock products - in real app, this would be from API/database
  return [
    {
      id: '1',
      name: 'Coffee Latte',
      description: 'Rich espresso with steamed milk',
      price: 4.5,
      available: true,
    },
    {
      id: '2',
      name: 'Chicken Sandwich',
      description: 'Grilled chicken with fresh vegetables',
      price: 8.99,
      available: true,
    },
    {
      id: '3',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with caesar dressing',
      price: 7.5,
      available: true,
    },
    {
      id: '4',
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with cream frosting',
      price: 5.99,
      available: false,
    },
  ];
}
