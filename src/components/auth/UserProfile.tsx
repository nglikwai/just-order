'use client';

import { LogOut, User } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/components/ui/button';

export function UserProfile() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-2'>
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || 'User'}
            className='w-8 h-8 rounded-full'
          />
        ) : (
          <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
            <User className='w-4 h-4 text-gray-600' />
          </div>
        )}
        <span className='text-sm font-medium text-gray-700'>
          {session.user.name}
        </span>
      </div>

      <Button
        onClick={() => signOut()}
        variant='outline'
        size='sm'
        className='gap-1'
      >
        <LogOut className='w-3 h-3' />
        Sign out
      </Button>
    </div>
  );
}
