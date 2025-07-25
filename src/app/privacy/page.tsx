import Link from 'next/link';

import type { Metadata } from 'next';

import { Footer } from '../_components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Just Order',
  description:
    "Learn how Just Order protects your privacy and handles your data. We're committed to transparency and keeping your information secure.",
};

export default function PrivacyPage() {
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

      {/* Content */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>
          Privacy Policy
        </h1>
        <p className='text-gray-600 mb-8'>
          <strong>Last updated:</strong> December 2024
        </p>

        <div className='prose prose-gray max-w-none'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Our Commitment to Privacy
          </h2>
          <p className='text-gray-700 mb-6'>
            At Just Order, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, and protect your information when you
            use our service. We are committed to being transparent about our
            data practices and giving you control over your information.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Information We Collect
          </h2>
          <h3 className='text-lg font-semibold text-gray-900 mb-3'>
            Information You Provide
          </h3>
          <ul className='list-disc pl-6 text-gray-700 mb-4 space-y-2'>
            <li>
              <strong>Account Information:</strong> When you sign up with Google
              OAuth, we receive your name, email address, and profile picture.
            </li>
            <li>
              <strong>Business Information:</strong> Business name, description,
              menu items, and pricing that you add to your account.
            </li>
            <li>
              <strong>Customer Orders:</strong> Order details, customer contact
              information, and order preferences submitted through your ordering
              page.
            </li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-3'>
            Information Automatically Collected
          </h3>
          <ul className='list-disc pl-6 text-gray-700 mb-6 space-y-2'>
            <li>
              <strong>Usage Data:</strong> How you interact with our service,
              pages visited, and features used.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, device type,
              and IP address for security and optimization purposes.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            How We Use Your Information
          </h2>
          <ul className='list-disc pl-6 text-gray-700 mb-6 space-y-2'>
            <li>
              <strong>Provide Our Service:</strong> Enable you to create and
              manage your ordering page and receive customer orders.
            </li>
            <li>
              <strong>Improve Our Service:</strong> Analyze usage patterns to
              enhance features and user experience.
            </li>
            <li>
              <strong>Communication:</strong> Send important updates about your
              account and new features (you can opt out anytime).
            </li>
            <li>
              <strong>Security:</strong> Protect against fraud, abuse, and
              security threats.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Information Sharing
          </h2>
          <p className='text-gray-700 mb-4'>
            We do not sell, rent, or trade your personal information. We may
            share information only in these limited circumstances:
          </p>
          <ul className='list-disc pl-6 text-gray-700 mb-6 space-y-2'>
            <li>
              <strong>With Your Consent:</strong> When you explicitly authorize
              us to share information.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights and users' safety.
            </li>
            <li>
              <strong>Service Providers:</strong> With trusted partners who help
              us operate our service (like hosting providers), bound by
              confidentiality agreements.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Data Security
          </h2>
          <p className='text-gray-700 mb-6'>
            We implement industry-standard security measures to protect your
            information, including encryption, secure servers, and regular
            security audits. However, no internet transmission is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Your Rights and Choices
          </h2>
          <ul className='list-disc pl-6 text-gray-700 mb-6 space-y-2'>
            <li>
              <strong>Access and Update:</strong> You can view and update your
              account information through your dashboard.
            </li>
            <li>
              <strong>Data Deletion:</strong> You can request deletion of your
              account and associated data by contacting us.
            </li>
            <li>
              <strong>Data Export:</strong> Request a copy of your data in a
              portable format.
            </li>
            <li>
              <strong>Communication Preferences:</strong> Opt out of promotional
              emails while still receiving important service updates.
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Data Retention
          </h2>
          <p className='text-gray-700 mb-6'>
            We retain your information only as long as necessary to provide our
            service and fulfill legal obligations. When you delete your account,
            we will delete your personal information within 30 days, except
            where retention is required by law.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Children's Privacy
          </h2>
          <p className='text-gray-700 mb-6'>
            Just Order is not intended for children under 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that a child under 13 has provided us with personal
            information, we will delete it immediately.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Changes to This Policy
          </h2>
          <p className='text-gray-700 mb-6'>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by email or through our service. The
            "Last updated" date at the top of this policy indicates when it was
            last revised.
          </p>

          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Contact Us</h2>
          <p className='text-gray-700 mb-4'>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <ul className='list-none text-gray-700 mb-8 space-y-2'>
            <li>
              <strong>Email:</strong> privacy@justorder.com
            </li>
            <li>
              <strong>Contact Form:</strong>{' '}
              <Link href='/contact' className='text-slate-600 hover:underline'>
                Contact Us
              </Link>
            </li>
            <li>
              <strong>Mail:</strong> Just Order Privacy Team, 123 Business
              Street, Suite 100, New York, NY 10001
            </li>
          </ul>

          <div className='bg-slate-50 p-6 rounded-lg'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              Quick Summary
            </h3>
            <p className='text-gray-700'>
              We collect minimal information needed to provide our service, we
              don't sell your data, we use industry-standard security, and you
              have full control over your information. We're committed to
              transparency and protecting your privacy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
