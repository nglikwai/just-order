export interface BusinessData {
  id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  categories: string[];
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  settings: {
    acceptsOrders: boolean;
    estimatedPrepTime: number;
    minimumOrder: number;
    deliveryFee: number;
    taxRate: number;
  };
  stats: {
    totalOrders: number;
    totalRevenue: number;
    avgOrderValue: number;
    customersThisMonth: number;
  };
  ownerId: string;
  ownerEmail?: string;
  ownerName?: string;
}

export interface BusinessStats {
  totalOrders: number;
  totalRevenue: number;
  avgOrderValue: number;
  customersThisMonth: number;
}
