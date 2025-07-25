'use client';

import { ReactNode } from 'react';

import { FloatingAuth } from '@/components/auth/FloatingAuth';
import { AuthProvider } from '@/providers/AuthProvider';
import { I18nProvider } from '@/providers/I18nProvider';
import ReactQueryClientProvider from '@/providers/ReactQueryClientProvider';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <AuthProvider>
        <ReactQueryClientProvider>
          {children}
          <FloatingAuth />
        </ReactQueryClientProvider>
      </AuthProvider>
    </I18nProvider>
  );
}
