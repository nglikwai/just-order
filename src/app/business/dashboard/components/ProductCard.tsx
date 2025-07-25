import { useState } from 'react';

import { Edit } from 'lucide-react';

import { EditProductForm } from './EditProductForm';

import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  index: number;
  onUpdate: (id: string, product: Partial<Product>) => void;
  onDelete: (id: string) => void;
  onToggleAvailability: (id: string) => void;
}

export function ProductCard({
  product,
  index,
  onUpdate,
  onDelete,
  onToggleAvailability,
}: ProductCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <div
        className='group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden'
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        }}
      >
        <div className='p-6'>
          <EditProductForm
            product={product}
            onSave={updatedProduct => {
              onUpdate(product.id, updatedProduct);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
            onDelete={() => onDelete(product.id)}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className='group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden'
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Product Image Placeholder */}
      <div className='relative h-48 bg-gradient-to-br from-gray-100 to-gray-200'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-100/50 to-gray-100/50' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-6xl opacity-20'>🍽️</div>
        </div>
        <div className='absolute top-4 right-4'>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              product.available
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {product.available ? 'Available' : 'Unavailable'}
          </span>
        </div>
        {/* Edit icon in top-left */}
        <button
          onClick={() => setIsEditing(true)}
          className='absolute top-4 left-4 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100'
        >
          <Edit className='w-4 h-4 text-gray-600' />
        </button>
      </div>

      <div className='p-6'>
        <div className='flex justify-between items-start mb-3'>
          <h3 className='text-xl font-bold text-gray-900 group-hover:text-slate-600 transition-colors'>
            {product.name}
          </h3>
          <span className='text-xl font-bold text-slate-600'>
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className='text-gray-600 mb-6 line-clamp-2'>{product.description}</p>

        <div className='flex items-center justify-between'>
          <button
            onClick={() => onToggleAvailability(product.id)}
            className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
              product.available
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            {product.available ? '✓ Available' : '✗ Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}
