'use client';

import { usePathname } from 'next/navigation';

import { useState } from 'react';

import { ChevronDown, User } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export function FloatingAuth() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Don't show on auth pages
  if (pathname?.startsWith('/auth/')) {
    return null;
  }

  if (status === 'loading') {
    return (
      <div className='fixed top-4 right-4 z-50'>
        <div className='w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center'>
          <div className='w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin' />
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className='fixed top-4 right-4 z-50'>
        <div className='relative'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center gap-2 bg-white rounded-full shadow-lg border border-gray-200 p-2 hover:shadow-xl transition-all duration-200'
          >
            <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
              <User className='w-4 h-4 text-gray-600' />
            </div>
            <ChevronDown
              className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <div className='absolute top-12 right-0 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[280px] p-4 animate-fadeIn'>
              <div className='text-center mb-4'>
                <h3 className='font-semibold text-gray-900 mb-1'>
                  Sign in to Just Order
                </h3>
                <p className='text-sm text-gray-600'>
                  Choose an account to continue
                </p>
              </div>

              <button
                onClick={() =>
                  signIn('google', { callbackUrl: '/business/dashboard' })
                }
                className='w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors'
              >
                <svg className='w-6 h-6' viewBox='0 0 24 24'>
                  <path
                    fill='#4285F4'
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  />
                  <path
                    fill='#34A853'
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  />
                  <path
                    fill='#FBBC04'
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  />
                  <path
                    fill='#EA4335'
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  />
                </svg>
                <div className='text-left'>
                  <div className='text-sm font-medium text-gray-900'>
                    Continue with Google
                  </div>
                  <div className='text-xs text-gray-500'>
                    Use your Google account
                  </div>
                </div>
              </button>

              <div className='mt-3 text-xs text-gray-500 text-center'>
                By continuing, you agree to our{' '}
                <a href='#' className='text-blue-600 hover:underline'>
                  Terms
                </a>{' '}
                and{' '}
                <a href='#' className='text-blue-600 hover:underline'>
                  Privacy Policy
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className='fixed top-4 right-4 z-50'>
      <div className='relative'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center gap-2 bg-white rounded-full shadow-lg border border-gray-200 p-2 hover:shadow-xl transition-all duration-200'
        >
          {session.user?.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || 'User'}
              className='w-8 h-8 rounded-full'
            />
          ) : (
            <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
              <span className='text-white text-sm font-medium'>
                {session.user?.name?.charAt(0) || 'U'}
              </span>
            </div>
          )}
          <ChevronDown
            className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className='absolute top-12 right-0 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[280px] p-4 animate-fadeIn'>
            <div className='flex items-center gap-3 mb-4 pb-3 border-b border-gray-100'>
              {session.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className='w-10 h-10 rounded-full'
                />
              ) : (
                <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                  <span className='text-white font-medium'>
                    {session.user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
              )}
              <div>
                <div className='font-medium text-gray-900'>
                  {session.user?.name}
                </div>
                <div className='text-sm text-gray-600'>
                  {session.user?.email}
                </div>
              </div>
            </div>

            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className='w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors'
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
