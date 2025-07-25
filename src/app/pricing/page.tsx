import Link from 'next/link';

import { Check } from 'lucide-react';
import type { Metadata } from 'next';

import { Footer } from '../_components/Footer';

export const metadata: Metadata = {
  title: 'Pricing - Just Order',
  description:
    'Just Order is completely free for small businesses. No hidden fees, no transaction costs, unlimited orders. Get started today.',
};

export default function PricingPage() {
  const features = [
    'Unlimited orders',
    'Custom ordering page',
    'Real-time order management',
    'Customer information storage',
    'Basic analytics',
    'Mobile-responsive design',
    'Email notifications',
    '24/7 online availability',
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4'>
          <Link
            href='/'
            className='flex items-center gap-2 text-xl font-bold text-gray-900'
          >
            <div className='w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>J</span>
            </div>
            Just Order
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-16 sm:py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-900 mb-6'>
            Simple pricing for
            <span className='text-slate-600'> small businesses</span>
          </h1>
          <p className='text-xl text-gray-600 mb-12'>
            We believe great tools should be accessible to everyone. That's why
            Just Order is completely free for small businesses.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className='py-16'>
        <div className='max-w-lg mx-auto px-4 sm:px-6'>
          <div className='bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                Free Forever
              </h2>
              <div className='flex items-center justify-center gap-2 mb-4'>
                <span className='text-5xl font-bold text-slate-600'>$0</span>
                <span className='text-gray-600'>/month</span>
              </div>
              <p className='text-gray-600'>
                Everything you need to start taking orders online
              </p>
            </div>

            <div className='space-y-4 mb-8'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <Check className='w-5 h-5 text-green-500 flex-shrink-0' />
                  <span className='text-gray-700'>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href='/business/dashboard'
              className='block w-full text-center px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors'
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-8'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Is Just Order really free?
              </h3>
              <p className='text-gray-600'>
                Yes! Just Order is completely free for small businesses. We
                believe every business should have access to great tools without
                breaking the bank.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Are there any hidden fees?
              </h3>
              <p className='text-gray-600'>
                No hidden fees, no transaction fees, no setup costs. Just Order
                is 100% free to use.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                How many orders can I receive?
              </h3>
              <p className='text-gray-600'>
                Unlimited! There's no limit on the number of orders you can
                receive through your Just Order page.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Will this always be free?
              </h3>
              <p className='text-gray-600'>
                Yes, our core features will always remain free for small
                businesses. Our mission is to support small business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
