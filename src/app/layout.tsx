import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import type { Metadata } from 'next';

import { FloatingAuth } from '@/components/auth/FloatingAuth';
import { AuthProvider } from '@/providers/AuthProvider';
import ReactQueryClientProvider from '@/providers/ReactQueryClientProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Just Order - Simple, Fast, Free Ordering for Small Businesses',
  description:
    'Connect your small business with customers through our simple, fast, and completely free ordering platform. Perfect for cafes, restaurants, and local shops.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ReactQueryClientProvider>
            {children}
            <FloatingAuth />
          </ReactQueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
