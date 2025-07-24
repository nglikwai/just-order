import { Coffee, ShoppingBag, Truck, Utensils } from 'lucide-react';

export function BusinessTypesSection() {
  const businessTypes = [
    {
      icon: Coffee,
      title: 'Cafés & Coffee Shops',
      description: 'Perfect for quick orders',
    },
    {
      icon: Utensils,
      title: 'Restaurants',
      description: 'Full menu management',
    },
    {
      icon: ShoppingBag,
      title: 'Retail Stores',
      description: 'Product catalog',
    },
    {
      icon: Truck,
      title: 'Food Trucks',
      description: 'Mobile ordering',
    },
  ];

  return (
    <section className='px-4 sm:px-6 py-16 sm:py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Built for every business
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            From coffee shops to food trucks
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {businessTypes.map((type, index) => (
            <div
              key={index}
              className='group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] text-center'
            >
              <div className='w-16 h-16 bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                <type.icon className='w-8 h-8 text-slate-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {type.title}
              </h3>
              <p className='text-gray-600'>{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
