import Link from 'next/link';

import {
  CheckCircle,
  Globe,
  MessageSquare,
  Smartphone,
  TrendingUp,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

import { Footer } from '../_components/Footer';

export const metadata: Metadata = {
  title: 'Features - Just Order',
  description:
    'Discover all the features that make Just Order the perfect ordering platform for small businesses. Mobile-first design, real-time orders, and more.',
};

export default function FeaturesPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description:
        'Optimized for smartphones and tablets. Your customers can order easily from any device.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Built with modern technology for instant loading and smooth ordering experience.',
    },
    {
      icon: Globe,
      title: 'Online Presence',
      description:
        'Get your own ordering page that customers can access 24/7 from anywhere.',
    },
    {
      icon: MessageSquare,
      title: 'Real-time Orders',
      description:
        'Receive orders instantly and manage them through your dashboard.',
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      description:
        'Track your sales, popular items, and customer insights to grow your business.',
    },
    {
      icon: CheckCircle,
      title: 'Easy Setup',
      description: 'Get started in minutes. No technical knowledge required.',
    },
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
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-900 mb-6'>
            Everything you need to
            <span className='text-slate-600'> grow your business</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
            Just Order provides all the tools small businesses need to take
            orders online and manage their operations efficiently.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'
              >
                <div className='w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4'>
                  <feature.icon className='w-6 h-6 text-slate-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 sm:py-24 bg-slate-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
            Ready to get started?
          </h2>
          <p className='text-xl text-slate-200 mb-8'>
            Join thousands of small businesses already using Just Order.
          </p>
          <Link
            href='/business/dashboard'
            className='inline-flex items-center px-8 py-4 bg-white text-slate-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors'
          >
            Start Your Free Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
