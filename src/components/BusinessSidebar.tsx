'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState } from 'react';

import {
  BarChart3,
  ExternalLink,
  Home,
  LayoutDashboard,
  Menu,
  Settings,
  ShoppingBag,
  X,
} from 'lucide-react';

import { useBusiness } from '@/hooks/useBusiness';

const navigation = [
  { name: 'Dashboard', href: '/business/dashboard', icon: LayoutDashboard },
  { name: 'Orders', href: '/business/orders', icon: ShoppingBag },
  { name: 'Analytics', href: '/business/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/business/settings', icon: Settings },
];

export function BusinessSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { data: business } = useBusiness();

  return (
    <>
      {/* Mobile menu button */}
      <div className='lg:hidden fixed top-4 left-4 z-50'>
        <button
          type='button'
          className='bg-white p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-500 shadow-md'
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className='h-6 w-6' />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className='lg:hidden fixed inset-0 z-40'>
          <div
            className='fixed inset-0 bg-gray-600 bg-opacity-75'
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0
      `}
      >
        <div className='flex flex-col h-full'>
          {/* Header */}
          <div className='flex items-center justify-between h-16 px-6 border-b border-gray-200'>
            <Link href='/' className='flex items-center'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <Home className='w-5 h-5 text-white' />
              </div>
              <span className='ml-2 text-lg font-semibold text-gray-900'>
                Just Order
              </span>
            </Link>
            <button
              type='button'
              className='lg:hidden text-gray-400 hover:text-gray-600'
              onClick={() => setSidebarOpen(false)}
            >
              <X className='h-6 w-6' />
            </button>
          </div>

          {/* Business info & Menu link */}
          <div className='px-6 py-4 border-b border-gray-200 bg-slate-50 space-y-3'>
            <div>
              <h2 className='text-sm font-medium text-gray-900'>
                {business?.name || 'Your Business'}
              </h2>
              <p className='text-xs text-gray-600'>Business Dashboard</p>
            </div>

            <Link
              href={`/${business?.id || 'demo-business'}`}
              target='_blank'
              className='inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 bg-white rounded-md border border-slate-200 hover:bg-slate-50 transition-colors'
            >
              <ExternalLink className='w-3 h-3' />
              View Customer Menu
            </Link>
          </div>

          {/* Navigation */}
          <nav className='flex-1 px-4 py-4 space-y-1 overflow-y-auto'>
            {navigation.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors
                    ${
                      isActive
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon
                    className={`
                    mr-3 h-6 w-6 transition-colors
                    ${isActive ? 'text-slate-600' : 'text-gray-400 group-hover:text-gray-500'}
                  `}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className='px-6 py-4 border-t border-gray-200'>
            <div className='flex items-center'>
              <div className='w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center'>
                <span className='text-sm font-medium text-slate-600'>
                  {business?.name?.charAt(0) || 'B'}
                </span>
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>
                  {business?.ownerName || 'Business Owner'}
                </p>
                <p className='text-xs text-gray-600'>Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
