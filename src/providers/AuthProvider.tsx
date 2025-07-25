'use client';

import { SessionProvider } from 'next-auth/react';

import type { AuthProviderProps } from '@/types/index';

export function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
