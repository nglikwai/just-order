import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const businesses = [
    'joes-coffee-shop',
    'demo',
    'mikes-pizza',
    'coffee-corner',
  ];

  return businesses.map(business => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://justorder.com'}/${business}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));
}
