import { Metadata } from 'next';

import { LoginForm } from './_components/LoginForm';

export const metadata: Metadata = {
  title: 'Sign In - Just Order',
  description: 'Sign in to your Just Order account',
};

export default function SignInPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <LoginForm />
      </div>
    </div>
  );
}
