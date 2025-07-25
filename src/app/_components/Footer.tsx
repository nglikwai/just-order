import Link from 'next/link';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>J</span>
              </div>
              <span className='text-xl font-bold'>Just Order</span>
            </div>
            <p className='text-gray-400 mb-6 max-w-md'>
              Simple ordering platform for small businesses. Simple, fast, free.
            </p>
            <div className='flex items-center gap-2 text-sm text-gray-400'>
              <span>Made with</span>
              <Heart className='w-4 h-4 text-red-500 fill-current' />
              <span>for small businesses</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Product</h3>
            <div className='space-y-3'>
              <Link
                href='/features'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Features
              </Link>
              <Link
                href='/demo'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Demo
              </Link>
              <Link
                href='/pricing'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Support</h3>
            <div className='space-y-3'>
              <Link
                href='/help'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Help Center
              </Link>
              <Link
                href='/contact'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Contact
              </Link>
              <Link
                href='/privacy'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm'>
            © 2025 Just Order. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <Link
              href='/business/dashboard'
              className='text-slate-400 hover:text-white transition-colors text-sm font-medium'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
