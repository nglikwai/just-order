import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className='px-4 sm:px-6 py-16 sm:py-24'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 sm:p-16 border border-gray-100 shadow-xl'>
          <h2 className='text-3xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Ready to get started?
          </h2>
          <p className='text-lg text-gray-600 mb-10 max-w-2xl mx-auto'>
            Join hundreds of businesses using Just Order
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/business/dashboard'
              className='group bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-slate-500/25 flex items-center justify-center'
            >
              Start Free Today
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
