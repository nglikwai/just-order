import { DollarSign, ShoppingBag, Star, Users } from 'lucide-react';

import type { BusinessStats } from '@/types/index';

interface StatsCardsProps {
  productCount: number;
  stats?: BusinessStats;
}

export function StatsCards({ productCount, stats }: StatsCardsProps) {
  const statsData = [
    {
      icon: ShoppingBag,
      value: productCount,
      label: 'Products',
      color: 'blue',
    },
    {
      icon: Users,
      value: stats?.totalOrders || 0,
      label: 'Total Orders',
      color: 'green',
    },
    {
      icon: DollarSign,
      value: `$${(stats?.totalRevenue || 0).toLocaleString()}`,
      label: 'Revenue',
      color: 'emerald',
    },
    {
      icon: Star,
      value: stats?.customersThisMonth || 0,
      label: 'Customers This Month',
      color: 'amber',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      amber: 'bg-amber-100 text-amber-600',
      slate: 'bg-slate-100 text-slate-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
      {statsData.map((stat, index) => (
        <div
          key={index}
          className='bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300'
        >
          <div className='flex items-center gap-3 mb-2'>
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${getColorClasses(stat.color)}`}
            >
              <stat.icon className='w-5 h-5' />
            </div>
            <div>
              <p className='text-2xl font-bold text-gray-900'>{stat.value}</p>
              <p className='text-xs text-gray-500'>{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
