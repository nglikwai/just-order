import { Edit, Minus, Plus, Trash2 } from 'lucide-react';

import { Button } from '@/components/components/ui/button';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product & { image?: string };
  mode: 'customer' | 'business';
  quantity?: number;
  onAddToCart?: (product: Product & { image?: string }) => void;
  onUpdateQuantity?: (productId: string, change: number) => void;
  onEdit?: (product: Product & { image?: string }) => void;
  onDelete?: (productId: string) => void;
  onToggleAvailability?: (productId: string) => void;
}

export function ProductCard({
  product,
  mode,
  quantity = 0,
  onAddToCart,
  onUpdateQuantity,
  onEdit,
  onDelete,
  onToggleAvailability,
}: ProductCardProps) {
  if (mode === 'customer') {
    return (
      <div
        className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 ${
          !product.available ? 'opacity-60' : ''
        }`}
      >
        <div className='flex justify-between items-start mb-3'>
          <h3 className='text-lg font-semibold text-gray-900'>
            {product.name}
          </h3>
          <span className='text-lg font-bold text-gray-900'>
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className='text-gray-600 mb-4'>{product.description}</p>

        {product.available ? (
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              {quantity > 0 ? (
                <div className='flex items-center gap-2'>
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={() => onUpdateQuantity?.(product.id, -1)}
                  >
                    <Minus className='w-4 h-4' />
                  </Button>
                  <span className='font-medium'>{quantity}</span>
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={() => onUpdateQuantity?.(product.id, 1)}
                  >
                    <Plus className='w-4 h-4' />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => onAddToCart?.(product)}
                  className='bg-blue-600 hover:bg-blue-700'
                >
                  <Plus className='w-4 h-4 mr-2' />
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className='text-center'>
            <span className='px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium'>
              Currently Unavailable
            </span>
          </div>
        )}
      </div>
    );
  }

  // Business mode
  return (
    <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-6'>
      <div className='flex justify-between items-start mb-3'>
        <h3 className='text-lg font-semibold text-gray-900'>{product.name}</h3>
        <span className='text-lg font-bold text-gray-900'>
          ${product.price.toFixed(2)}
        </span>
      </div>

      <p className='text-gray-600 mb-4'>{product.description}</p>

      <div className='flex items-center justify-between mb-4'>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.available
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {product.available ? 'Available' : 'Unavailable'}
        </span>
        <button
          onClick={() => onToggleAvailability?.(product.id)}
          className='text-sm text-blue-600 hover:text-blue-800'
        >
          Toggle Availability
        </button>
      </div>

      <div className='flex gap-2'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => onEdit?.(product)}
          className='flex-1'
        >
          <Edit className='w-4 h-4 mr-1' />
          Edit
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => onDelete?.(product.id)}
          className='text-red-600 hover:text-red-700 hover:bg-red-50'
        >
          <Trash2 className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
}
