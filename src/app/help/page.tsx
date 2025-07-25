import Link from 'next/link';

import {
  BookOpen,
  HelpCircle,
  MessageCircle,
  Search,
  Settings,
  ShoppingBag,
} from 'lucide-react';
import type { Metadata } from 'next';

import { Footer } from '../_components/Footer';

export const metadata: Metadata = {
  title: 'Help Center - Just Order',
  description:
    'Get help with Just Order. Find answers to common questions, learn how to set up your business, and manage orders effectively.',
};

export default function HelpPage() {
  const helpCategories = [
    {
      icon: Settings,
      title: 'Getting Started',
      description: 'Learn how to set up your business and start taking orders',
      articles: [
        'Creating your first menu',
        'Setting up your business profile',
        'Customizing your ordering page',
        'Adding products and pricing',
      ],
    },
    {
      icon: ShoppingBag,
      title: 'Managing Orders',
      description: 'Everything about receiving and handling customer orders',
      articles: [
        'Viewing new orders',
        'Updating order status',
        'Handling special requests',
        'Order notifications',
      ],
    },
    {
      icon: BookOpen,
      title: 'Customer Experience',
      description: 'Help your customers have the best ordering experience',
      articles: [
        'How customers place orders',
        'Customer information storage',
        'Order tracking for customers',
        'Troubleshooting ordering issues',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with Just Order?',
      answer:
        'Simply sign in with your Google account and you can start setting up your business immediately. Add your menu items, customize your page, and share the link with customers.',
    },
    {
      question: 'How do customers place orders?',
      answer:
        'Customers visit your unique ordering page, browse your menu, add items to their cart, and submit their order with their contact information. You receive the order instantly.',
    },
    {
      question: 'Do I need any special equipment?',
      answer:
        'No special equipment needed! Just Order works on any device with internet access - your phone, tablet, or computer.',
    },
    {
      question: 'How do I receive payments?',
      answer:
        'Just Order handles order collection only. You can arrange payment directly with your customers (cash on delivery, bank transfer, etc.) based on your preference.',
    },
    {
      question: 'Can I customize my ordering page?',
      answer:
        'Yes! You can customize your business name, description, menu items, and pricing. More customization options are coming soon.',
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
      <section className='py-16 sm:py-24 bg-slate-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            How can we help you?
          </h1>
          <p className='text-xl text-gray-600 mb-8'>
            Find answers to common questions and learn how to make the most of
            Just Order
          </p>
          <div className='relative max-w-md mx-auto'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='Search help articles...'
              className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Help Categories
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {helpCategories.map((category, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow'
              >
                <div className='w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4'>
                  <category.icon className='w-6 h-6 text-slate-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {category.title}
                </h3>
                <p className='text-gray-600 mb-4'>{category.description}</p>
                <ul className='space-y-2'>
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <button className='text-slate-600 hover:text-slate-800 text-sm transition-colors'>
                        {article}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-6'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-lg border border-gray-200'
              >
                <div className='flex items-start gap-3'>
                  <HelpCircle className='w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5' />
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                      {faq.question}
                    </h3>
                    <p className='text-gray-600'>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className='py-16'>
        <div className='max-w-2xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Still need help?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors'
            >
              <MessageCircle className='w-5 h-5' />
              Contact Support
            </Link>
            <Link
              href='mailto:support@justorder.com'
              className='inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors'
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
