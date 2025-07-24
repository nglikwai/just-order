'use client';
import Link from 'next/link';

import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Smartphone,
  Users,
} from 'lucide-react';

import { Button, buttonVariants } from '@/components/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100'>
      {/* Hero Section */}
      <section className='px-6 py-16 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-6xl font-black text-gray-900 mb-6'>Just Order</h1>
          <p className='text-2xl text-gray-600 mb-8'>
            Simple ordering for small businesses
          </p>
          <p className='text-lg text-gray-500 mb-12 max-w-2xl mx-auto'>
            Connect your business with customers through a simple, fast, and
            completely free ordering platform. Perfect for cafes, restaurants,
            and local shops who want to focus on what they do best.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/business/dashboard'
              className={
                buttonVariants({ variant: 'default', size: 'lg' }) +
                'px-8 py-4 bg-slate-600 hover:bg-slate-700 '
              }
            >
              Get Started for Free
              <ArrowRight className='ml-2' />
            </Link>
            <Link
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href='/menu/demo'
            >
              Try Demo
            </Link>
          </div>

          <div className='mt-6'>
            <a
              href='/track-order'
              className='text-slate-600 hover:text-slate-800 underline text-sm'
            >
              Track an existing order →
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className='px-6 py-16 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            Why Choose Just Order?
          </h2>

          <div className='grid md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <CheckCircle className='w-8 h-8 text-emerald-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Simple</h3>
              <p className='text-gray-600'>
                No complicated setup. No learning curve. Create your ordering
                page in minutes and start taking orders immediately.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Clock className='w-8 h-8 text-slate-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Fast</h3>
              <p className='text-gray-600'>
                Customers can browse your menu and place orders quickly. No apps
                to download, no accounts to create.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <DollarSign className='w-8 h-8 text-amber-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Free</h3>
              <p className='text-gray-600'>
                Completely free to use. No monthly fees, no hidden charges.
                Perfect for small businesses watching their budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='px-6 py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            How It Works
          </h2>

          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                For Business Owners
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1'>
                    1
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Create Your Menu
                    </h4>
                    <p className='text-gray-600'>
                      Add your products with photos, descriptions, and prices in
                      minutes.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1'>
                    2
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Share Your Link
                    </h4>
                    <p className='text-gray-600'>
                      Get a unique ordering link to share with your customers.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1'>
                    3
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Receive Orders
                    </h4>
                    <p className='text-gray-600'>
                      Get notified when customers place orders and manage them
                      easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                For Customers
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1'>
                    1
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Visit the Link
                    </h4>
                    <p className='text-gray-600'>
                      Click the ordering link shared by your favorite business.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1'>
                    2
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Browse & Order
                    </h4>
                    <p className='text-gray-600'>
                      Browse the menu and add items to your order with just a
                      few taps.
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1'>
                    3
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Submit & Enjoy
                    </h4>
                    <p className='text-gray-600'>
                      Submit your order and wait for pickup or delivery
                      confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className='px-6 py-16 bg-white'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-16'>
            Perfect for Small Businesses
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='p-6 rounded-lg border border-gray-200'>
              <Users className='w-12 h-12 text-blue-600 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Local Restaurants
              </h3>
              <p className='text-gray-600'>
                Take takeout and delivery orders without expensive third-party
                apps.
              </p>
            </div>

            <div className='p-6 rounded-lg border border-gray-200'>
              <Smartphone className='w-12 h-12 text-blue-600 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Coffee Shops
              </h3>
              <p className='text-gray-600'>
                Let customers order ahead and skip the line during busy hours.
              </p>
            </div>

            <div className='p-6 rounded-lg border border-gray-200'>
              <CheckCircle className='w-12 h-12 text-blue-600 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Retail Stores
              </h3>
              <p className='text-gray-600'>
                Accept pre-orders and manage inventory with simple tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-6 py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>Ready to Get Started?</h2>
          <p className='text-xl mb-8 opacity-90'>
            Join hundreds of small businesses already using Just Order to
            connect with their customers.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100'
            >
              Start Your Free Account
              <ArrowRight className='ml-2' />
            </Button>
            <Button
              size='lg'
              variant='ghost'
              className='text-lg px-8 py-4 text-white border-white hover:bg-white/10'
            >
              Contact Support
            </Button>
          </div>

          <p className='text-sm mt-6 opacity-75'>
            No credit card required • Free forever • Set up in 5 minutes
          </p>
        </div>
      </section>
    </div>
  );
}
