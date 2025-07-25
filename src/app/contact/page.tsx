import Link from 'next/link';

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';

import { Footer } from '../_components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us - Just Order',
  description:
    "Get in touch with the Just Order team. We're here to help small businesses succeed with our ordering platform.",
};

export default function ContactPage() {
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
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Get in touch
          </h1>
          <p className='text-xl text-gray-600 mb-12'>
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 pb-16'>
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white p-8 rounded-xl border border-gray-200 shadow-sm'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              Send us a message
            </h2>
            <form className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    First name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
                  />
                </div>
                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Last name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent'
                  placeholder='Tell us how we can help you...'
                />
              </div>
              <button
                type='submit'
                className='w-full px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h2>
              <p className='text-gray-600 mb-8'>
                We're here to help small businesses succeed. Reach out to us
                through any of these channels.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-5 h-5 text-slate-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>Email</h3>
                  <p className='text-gray-600'>support@justorder.com</p>
                  <p className='text-sm text-gray-500'>
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <MessageCircle className='w-5 h-5 text-slate-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>
                    Live Chat
                  </h3>
                  <p className='text-gray-600'>Available on our help center</p>
                  <p className='text-sm text-gray-500'>
                    Monday to Friday, 9 AM - 6 PM
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Phone className='w-5 h-5 text-slate-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>Phone</h3>
                  <p className='text-gray-600'>+1 (555) 123-4567</p>
                  <p className='text-sm text-gray-500'>
                    Business hours: Mon-Fri, 9 AM - 6 PM EST
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-5 h-5 text-slate-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>Office</h3>
                  <p className='text-gray-600'>
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-slate-50 p-6 rounded-lg'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Frequently Asked Questions
              </h3>
              <p className='text-gray-600 mb-4'>
                Before reaching out, check our help center for quick answers to
                common questions.
              </p>
              <Link
                href='/help'
                className='inline-flex items-center text-slate-600 hover:text-slate-800 font-medium transition-colors'
              >
                Visit Help Center →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
