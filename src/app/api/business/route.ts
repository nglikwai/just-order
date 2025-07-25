import { NextResponse } from 'next/server';

import { getServerSession } from 'next-auth/next';

import { authOptions } from '../../../lib/auth';

// Mock business data - in real app this would come from database
const mockBusinessData = {
  id: '1',
  name: "Joe's Coffee Shop",
  description: 'Fresh coffee and pastries daily',
  email: 'joe@coffeeshop.com',
  phone: '(555) 123-4567',
  address: '123 Main St, Coffee City, CC 12345',
  categories: ['Coffee', 'Pastries', 'Breakfast'],
  hours: {
    monday: '7:00 AM - 6:00 PM',
    tuesday: '7:00 AM - 6:00 PM',
    wednesday: '7:00 AM - 6:00 PM',
    thursday: '7:00 AM - 6:00 PM',
    friday: '7:00 AM - 8:00 PM',
    saturday: '8:00 AM - 8:00 PM',
    sunday: '8:00 AM - 4:00 PM',
  },
  settings: {
    acceptsOrders: true,
    estimatedPrepTime: 15,
    minimumOrder: 0,
    deliveryFee: 2.99,
    taxRate: 0.08,
  },
  stats: {
    totalOrders: 1247,
    totalRevenue: 18436.5,
    avgOrderValue: 14.8,
    customersThisMonth: 89,
  },
};

export async function GET() {
  try {
    // Get the current session
    const session = (await getServerSession(authOptions)) as any;

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // In a real app, you would fetch business data based on session.user.id
    // For now, return mock data
    const businessData = {
      ...mockBusinessData,
      ownerId: session.user.id,
      ownerEmail: session.user.email,
      ownerName: session.user.name,
    };

    return NextResponse.json(businessData);
  } catch (error) {
    console.error('Error fetching business data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = (await getServerSession(authOptions)) as any;

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const updates = await request.json();

    // In a real app, you would update the business in the database
    // For now, return updated mock data
    const updatedBusiness = {
      ...mockBusinessData,
      ...updates,
      ownerId: session.user.id,
      ownerEmail: session.user.email,
      ownerName: session.user.name,
    };

    return NextResponse.json(updatedBusiness);
  } catch (error) {
    console.error('Error updating business data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
