'use client';

import { useSession } from 'next-auth/react';

import { LoginButton } from './LoginButton';
import { UserProfile } from './UserProfile';

interface AuthButtonProps {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function AuthButton({ variant, size, className }: AuthButtonProps) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className='w-8 h-8 bg-gray-200 rounded-full animate-pulse' />;
  }

  if (session) {
    return <UserProfile />;
  }

  return <LoginButton variant={variant} size={size} className={className} />;
}
