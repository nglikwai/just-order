export function HowItWorksSection() {
  return (
    <section className='px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold text-gray-900 mb-6'>
            How it works
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Get started in minutes
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 xl:gap-24 items-center'>
          {/* Business Owners Side */}
          <div className='relative'>
            <div className='mb-8'>
              <div className='inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold'>
                For Business Owners
              </div>
            </div>

            <div className='space-y-8'>
              <div className='flex items-start gap-6 group'>
                <div className='w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                  1
                </div>
                <div className='pt-1'>
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>
                    Create Your Menu
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    Add products with photos, descriptions, and prices.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-6 group'>
                <div className='w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                  2
                </div>
                <div className='pt-1'>
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>
                    Share Your Link
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    Get your unique link and share it with customers.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-6 group'>
                <div className='w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                  3
                </div>
                <div className='pt-1'>
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>
                    Receive Orders
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    Get notified and manage orders from your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customers Side */}
          <div className='relative'>
            <div className='mb-8'>
              <div className='inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold'>
                For Customers
              </div>
            </div>

            <div className='space-y-8'>
              <div className='flex items-start gap-6 group'>
                <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                  1
                </div>
                <div className='pt-1'>
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>
                    Visit the Link
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    Click the link shared by your favorite business.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-6 group'>
                <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                  2
                </div>
                <div className='pt-1'>
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>
                    Browse & Order
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    Browse the menu and add items to your cart.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-6 group'>
                <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                  3
                </div>
                <div className='pt-1'>
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>
                    Submit & Track
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    Submit your order and track until ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
