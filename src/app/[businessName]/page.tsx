import { CustomerMenuClient } from './_components/CustomerMenuClient';

interface PageProps {
  params: Promise<{ businessName: string }>;
}

export default async function CustomerMenu({ params }: PageProps) {
  // Convert URL-friendly business name back to display name
  const getBusinessDisplayName = (urlName: string) => {
    const businessMap: { [key: string]: string } = {
      'joes-coffee-shop': "Joe's Coffee Shop",
      demo: 'Demo Restaurant',
      'mikes-pizza': "Mike's Pizza",
      'coffee-corner': 'Coffee Corner',
    };
    return (
      businessMap[urlName] ||
      urlName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    );
  };

  const { businessName: businessNameParam } = await params;
  const businessName = getBusinessDisplayName(businessNameParam);

  return (
    <CustomerMenuClient
      businessName={businessName}
      businessId={businessNameParam}
    />
  );
}
