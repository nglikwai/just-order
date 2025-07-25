interface BusinessHeroProps {
  businessName: string;
  description: string;
}

export function BusinessHero({ businessName, description }: BusinessHeroProps) {
  return (
    <div className='relative bg-white overflow-hidden border-b border-gray-100'>
      {/* Subtle Background Pattern */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-8 sm:py-12 lg:py-16'>
          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center'>
            {/* Left Content - Business Info */}
            <div className='lg:col-span-7'>
              {/* Business Header */}
              <div className='flex items-start gap-4 mb-8'>
                <div className='flex-shrink-0'>
                  <div className='w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-lg flex items-center justify-center'>
                    <div className='text-2xl sm:text-3xl font-bold text-white'>
                      {businessName.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className='flex-1 min-w-0'>
                  <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight'>
                    {businessName}
                  </h1>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='flex items-center gap-1'>
                      <div className='flex text-yellow-400'>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className='w-4 h-4 fill-current'
                            viewBox='0 0 20 20'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        ))}
                      </div>
                      <span className='font-semibold text-gray-900'>4.8</span>
                      <span className='text-gray-500'>(125+ reviews)</span>
                    </div>
                  </div>
                  <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                    {description}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className='flex items-center gap-2 mb-8'>
                <div className='w-3 h-3 bg-green-500 rounded-full' />
                <span className='text-green-700 font-medium'>
                  Open • Closes 10:00 PM
                </span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className='lg:col-span-5'>
              <div className='relative'>
                {/* Main Image Container */}
                <div className='aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl'>
                  <div className='w-full h-full bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 flex items-center justify-center'>
                    <div className='text-8xl opacity-80'>🍽️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
