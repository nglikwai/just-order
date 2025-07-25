import Link from 'next/link';

import {
  ArrowRight,
  ChevronRight,
  Clock,
  Heart,
  Play,
  Shield,
  Star,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className='relative px-4 sm:px-6 py-8 overflow-hidden min-h-screen flex items-center'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50' />
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-200/20 to-gray-200/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-300/15 to-gray-300/15 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-slate-300/10 to-gray-300/10 rounded-full blur-3xl animate-pulse delay-2000' />
      </div>

      <div className='relative max-w-7xl mx-auto w-full'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-16 items-center'>
          {/* Left Column - Content */}
          <div className='text-center lg:text-left'>
            {/* Trust Badge */}
            <div className='inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeInUp border border-slate-200/50'>
              <Heart className='w-4 h-4' />
              <span>Simple, fast, free</span>
            </div>

            {/* Main Headline */}
            <h1
              className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] animate-fadeInUp'
              style={{ animationDelay: '0.1s' }}
            >
              <span className='block'>Just</span>
              <span className='block bg-gradient-to-r from-slate-600 via-slate-700 to-gray-800 bg-clip-text text-transparent'>
                Order
              </span>
              <span className='block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-700 font-medium'>
                Simple, fast, free
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className='text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fadeInUp'
              style={{ animationDelay: '0.2s' }}
            >
              Beautiful ordering for small businesses. Simple, fast, free.
            </p>

            {/* CTA Buttons */}
            <div
              className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mb-8 animate-fadeInUp'
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href='/business/dashboard'
                className='group bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-slate-500/25 flex items-center justify-center relative overflow-hidden'
              >
                <span className='relative z-10 flex items-center'>
                  Get Started Free
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
              </Link>

              <Link
                href='/demo'
                className='group border-2 border-gray-300 text-gray-700 hover:border-slate-500 hover:text-slate-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-slate-50 flex items-center justify-center backdrop-blur-sm bg-white/80'
              >
                <Play className='w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200' />
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className='flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fadeInUp'
              style={{ animationDelay: '0.4s' }}
            >
              <div className='flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full'>
                <Shield className='w-4 h-4 text-green-500' />
                <span>No credit card</span>
              </div>
              <div className='flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full'>
                <Clock className='w-4 h-4 text-blue-500' />
                <span>5 min setup</span>
              </div>
              <div className='flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full'>
                <Star className='w-4 h-4 text-yellow-500 fill-current' />
                <span>Free forever</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className='hidden md:block relative animate-fadeInUp mt-10'>
            {/* Main Device Mockup */}
            <div className='relative'>
              <div className='bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500'>
                <div className='aspect-[9/16] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-start justify-center pt-12 relative overflow-hidden'>
                  {/* Mock Phone Interface */}
                  <div className='absolute inset-4 bg-white rounded-2xl shadow-inner p-4'>
                    <div className='space-y-4'>
                      {/* Header */}
                      <div className='flex items-center justify-between'>
                        <div className='w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center'>
                          <span className='text-slate-600 font-bold text-sm'>
                            J
                          </span>
                        </div>
                        <div className='text-xs text-gray-500'>
                          Joe's Coffee
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className='space-y-3'>
                        {[1, 2, 3].map(item => (
                          <div
                            key={item}
                            className='flex items-center gap-3 bg-gray-50 rounded-xl p-3'
                          >
                            <div className='w-12 h-12 bg-gradient-to-br from-slate-200 to-gray-200 rounded-lg' />
                            <div className='flex-1'>
                              <div className='w-16 h-2 bg-gray-300 rounded mb-1' />
                              <div className='w-20 h-1.5 bg-gray-200 rounded' />
                            </div>
                            <div className='w-6 h-6 bg-slate-500 rounded-full' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-bounce border border-gray-100'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                  <span className='text-sm font-semibold text-gray-900'>
                    24 Live Orders
                  </span>
                </div>
              </div>

              <div className='absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-pulse border border-gray-100'>
                <div className='flex items-center gap-2'>
                  <div className='flex -space-x-1'>
                    {[1, 2, 3].map(i => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full border-2 border-white ${i === 1 ? 'bg-slate-400' : i === 2 ? 'bg-blue-400' : 'bg-green-400'}`}
                      />
                    ))}
                  </div>
                  <span className='text-sm font-semibold text-gray-900'>
                    156 Customers
                  </span>
                </div>
              </div>

              <div className='absolute top-1/2 -right-12 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl shadow-xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300'>
                <div className='text-center'>
                  <div className='text-2xl font-bold'>$0</div>
                  <div className='text-xs opacity-90'>Setup Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Bar */}
        <div
          className='mt-8 text-center animate-fadeInUp'
          style={{ animationDelay: '0.6s' }}
        >
          <div className='inline-flex items-center gap-2 text-sm text-gray-600'>
            <span>1. Sign up</span>
            <ChevronRight className='w-4 h-4' />
            <span>2. Add products</span>
            <ChevronRight className='w-4 h-4' />
            <span>3. Share link</span>
            <ChevronRight className='w-4 h-4' />
            <span className='text-slate-600 font-semibold'>
              Start receiving orders! 🎉
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
