'use client';

import { useState } from 'react';

import {
  Calendar,
  Clock,
  DollarSign,
  ShoppingBag,
  Star,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';

import { Button } from '@/components/components/ui/button';

export default function BusinessAnalytics() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Mock analytics data
  const analytics = {
    revenue: {
      current: 2840.5,
      previous: 2120.3,
      change: 34.0,
    },
    orders: {
      current: 142,
      previous: 98,
      change: 44.9,
    },
    customers: {
      current: 89,
      previous: 67,
      change: 32.8,
    },
    avgOrderValue: {
      current: 18.45,
      previous: 21.64,
      change: -14.7,
    },
  };

  const topProducts = [
    { name: 'Coffee Latte', orders: 45, revenue: 202.5 },
    { name: 'Chicken Sandwich', orders: 38, revenue: 341.62 },
    { name: 'Caesar Salad', orders: 29, revenue: 217.5 },
    { name: 'Chocolate Cake', orders: 22, revenue: 131.78 },
    { name: 'Cappuccino', orders: 18, revenue: 81.0 },
  ];

  const ordersByDay = [
    { day: 'Mon', orders: 18 },
    { day: 'Tue', orders: 22 },
    { day: 'Wed', orders: 16 },
    { day: 'Thu', orders: 28 },
    { day: 'Fri', orders: 35 },
    { day: 'Sat', orders: 42 },
    { day: 'Sun', orders: 38 },
  ];

  const peakHours = [
    { hour: '8 AM', orders: 12 },
    { hour: '9 AM', orders: 18 },
    { hour: '12 PM', orders: 35 },
    { hour: '1 PM', orders: 42 },
    { hour: '6 PM', orders: 28 },
    { hour: '7 PM', orders: 22 },
  ];

  const getChangeIcon = (change: number) => {
    return change > 0 ? (
      <TrendingUp className='w-4 h-4 text-emerald-600' />
    ) : (
      <TrendingDown className='w-4 h-4 text-red-600' />
    );
  };

  const getChangeColor = (change: number) => {
    return change > 0 ? 'text-emerald-600' : 'text-red-600';
  };

  return (
    <>
      {/* Header */}
      <div className='mb-8'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>Analytics</h1>
          </div>

          {/* Time Range Selector */}
          <div className='flex gap-2'>
            {(['7d', '30d', '90d'] as const).map(range => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'outline'}
                size='sm'
                onClick={() => setTimeRange(range)}
                className='bg-slate-600 hover:bg-slate-700'
              >
                {range === '7d' ? '7d' : range === '30d' ? '30d' : '90d'}
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <div className='w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center'>
                <DollarSign className='w-5 h-5 text-emerald-600' />
              </div>
              <div
                className={`flex items-center gap-1 ${getChangeColor(analytics.revenue.change)}`}
              >
                {getChangeIcon(analytics.revenue.change)}
                <span className='text-sm font-medium'>
                  {Math.abs(analytics.revenue.change)}%
                </span>
              </div>
            </div>
            <div className='text-2xl font-bold text-gray-900'>
              ${analytics.revenue.current.toFixed(2)}
            </div>
            <div className='text-sm text-gray-600'>Revenue</div>
          </div>

          <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <div className='w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center'>
                <ShoppingBag className='w-5 h-5 text-slate-600' />
              </div>
              <div
                className={`flex items-center gap-1 ${getChangeColor(analytics.orders.change)}`}
              >
                {getChangeIcon(analytics.orders.change)}
                <span className='text-sm font-medium'>
                  {Math.abs(analytics.orders.change)}%
                </span>
              </div>
            </div>
            <div className='text-2xl font-bold text-gray-900'>
              {analytics.orders.current}
            </div>
            <div className='text-sm text-gray-600'>Orders</div>
          </div>

          <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <div className='w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center'>
                <Users className='w-5 h-5 text-amber-600' />
              </div>
              <div
                className={`flex items-center gap-1 ${getChangeColor(analytics.customers.change)}`}
              >
                {getChangeIcon(analytics.customers.change)}
                <span className='text-sm font-medium'>
                  {Math.abs(analytics.customers.change)}%
                </span>
              </div>
            </div>
            <div className='text-2xl font-bold text-gray-900'>
              {analytics.customers.current}
            </div>
            <div className='text-sm text-gray-600'>Customers</div>
          </div>

          <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                <TrendingUp className='w-5 h-5 text-blue-600' />
              </div>
              <div
                className={`flex items-center gap-1 ${getChangeColor(analytics.avgOrderValue.change)}`}
              >
                {getChangeIcon(analytics.avgOrderValue.change)}
                <span className='text-sm font-medium'>
                  {Math.abs(analytics.avgOrderValue.change)}%
                </span>
              </div>
            </div>
            <div className='text-2xl font-bold text-gray-900'>
              ${analytics.avgOrderValue.current}
            </div>
            <div className='text-sm text-gray-600'>Avg Order Value</div>
          </div>
        </div>

        {/* Charts and Tables */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Orders by Day */}
          <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
              <Calendar className='w-5 h-5' />
              Orders by Day
            </h3>
            <div className='space-y-3'>
              {ordersByDay.map(day => {
                const maxOrders = Math.max(...ordersByDay.map(d => d.orders));
                const percentage = (day.orders / maxOrders) * 100;

                return (
                  <div key={day.day} className='flex items-center gap-3'>
                    <div className='w-12 text-sm text-gray-600 font-medium'>
                      {day.day}
                    </div>
                    <div className='flex-1 bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-slate-600 h-2 rounded-full transition-all duration-300'
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className='w-8 text-sm text-gray-900 font-medium'>
                      {day.orders}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Peak Hours */}
          <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
              <Clock className='w-5 h-5' />
              Peak Hours
            </h3>
            <div className='space-y-3'>
              {peakHours.map(hour => {
                const maxOrders = Math.max(...peakHours.map(h => h.orders));
                const percentage = (hour.orders / maxOrders) * 100;

                return (
                  <div key={hour.hour} className='flex items-center gap-3'>
                    <div className='w-16 text-sm text-gray-600 font-medium'>
                      {hour.hour}
                    </div>
                    <div className='flex-1 bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-emerald-600 h-2 rounded-full transition-all duration-300'
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className='w-8 text-sm text-gray-900 font-medium'>
                      {hour.orders}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-6'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
            <Star className='w-5 h-5' />
            Top Products
          </h3>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-gray-200'>
                  <th className='text-left py-3 px-4 font-medium text-gray-600'>
                    Product
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-600'>
                    Orders
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-600'>
                    Revenue
                  </th>
                  <th className='text-left py-3 px-4 font-medium text-gray-600'>
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, index) => {
                  const maxOrders = Math.max(...topProducts.map(p => p.orders));
                  const percentage = (product.orders / maxOrders) * 100;

                  return (
                    <tr
                      key={product.name}
                      className='border-b border-gray-100 hover:bg-gray-50'
                    >
                      <td className='py-4 px-4'>
                        <div className='flex items-center gap-3'>
                          <div className='w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-medium text-slate-600'>
                            {index + 1}
                          </div>
                          <span className='font-medium text-gray-900'>
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className='py-4 px-4 text-gray-600'>
                        {product.orders}
                      </td>
                      <td className='py-4 px-4 text-gray-600'>
                        ${product.revenue.toFixed(2)}
                      </td>
                      <td className='py-4 px-4'>
                        <div className='flex items-center gap-3'>
                          <div className='flex-1 bg-gray-200 rounded-full h-2 max-w-24'>
                            <div
                              className='bg-amber-600 h-2 rounded-full'
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className='text-sm text-gray-600'>
                            {percentage.toFixed(0)}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
