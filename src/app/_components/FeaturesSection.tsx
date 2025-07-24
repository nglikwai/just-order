import { CheckCircle, Clock, Heart } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className='px-4 sm:px-6 py-16 sm:py-24'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Why choose Just Order
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Simple, fast, free ordering
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 sm:gap-8'>
          <div className='group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
            <div className='w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
              <CheckCircle className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Simple Setup
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Create your ordering page in minutes. No complicated setup or
              learning curve.
            </p>
          </div>

          <div className='group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
            <div className='w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
              <Clock className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Lightning Fast
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Customers order in seconds. No apps to download, no accounts to
              create.
            </p>
          </div>

          <div className='group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
            <div className='w-14 h-14 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
              <Heart className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Always Free
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              No monthly fees, no hidden charges. Perfect for small businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
