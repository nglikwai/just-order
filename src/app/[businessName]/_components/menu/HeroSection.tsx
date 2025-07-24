interface HeroSectionProps {
  businessName: string;
}

export function HeroSection({ businessName }: HeroSectionProps) {
  return (
    <div className='relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-slate-200/20 to-gray-200/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-slate-300/15 to-gray-300/15 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
          {/* Business Avatar & Info */}
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left flex-1'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 transform transition-all duration-300 hover:scale-105'>
                <div className='text-2xl sm:text-3xl font-bold bg-gradient-to-br from-slate-600 to-gray-700 bg-clip-text text-transparent'>
                  {businessName.charAt(0)}
                </div>
              </div>
              <div className='text-left'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1'>
                  {businessName}
                </h1>
                <p className='text-slate-600 text-sm sm:text-base'>
                  Simple, fast, free ordering
                </p>
              </div>
            </div>

            {/* Business Stats */}
            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm'>
              <div className='flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full'>
                <span className='text-yellow-500'>★</span>
                <span className='font-medium text-gray-700'>4.8</span>
                <span className='text-gray-500'>(125+)</span>
              </div>
              <div className='flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full'>
                <span className='text-slate-500'>📍</span>
                <span className='text-gray-600'>Downtown</span>
              </div>
              <div className='flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full'>
                <span className='text-blue-500'>⏱️</span>
                <span className='text-gray-600'>15-20 min</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className='relative lg:flex-shrink-0'>
            <div className='w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:rotate-3'>
              <div className='text-6xl sm:text-7xl opacity-60'>🍽️</div>
            </div>

            {/* Floating Badge */}
            <div className='absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl shadow-xl p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300'>
              <div className='text-center'>
                <div className='text-lg font-bold'>Open</div>
                <div className='text-xs opacity-90'>Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
