import { useState } from 'react';

import { Plus, Save, X } from 'lucide-react';

import { Button } from '@/components/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

interface AddProductFormProps {
  onAdd: (product: Omit<Product, 'id'>) => void;
  onCancel: () => void;
}

export function AddProductForm({ onAdd, onCancel }: AddProductFormProps) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    available: true,
  });

  const handleSubmit = () => {
    if (product.name && product.description && product.price) {
      onAdd(product);
      setProduct({ name: '', description: '', price: 0, available: true });
    }
  };

  return (
    <div className='bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center'>
          <Plus className='w-6 h-6 text-slate-600' />
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-900'>Add Product</h3>
          <p className='text-gray-600'>Create a new menu item</p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-800 mb-2'>
              Name
            </label>
            <input
              type='text'
              value={product.name}
              onChange={e => setProduct({ ...product, name: e.target.value })}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50'
              placeholder='Enter product name'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-800 mb-2'>
              Price ($)
            </label>
            <input
              type='number'
              step='0.01'
              value={product.price || ''}
              onChange={e =>
                setProduct({
                  ...product,
                  price: parseFloat(e.target.value),
                })
              }
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50'
              placeholder='0.00'
            />
          </div>
        </div>
        <div>
          <label className='block text-sm font-semibold text-gray-800 mb-2'>
            Description
          </label>
          <textarea
            value={product.description}
            onChange={e =>
              setProduct({
                ...product,
                description: e.target.value,
              })
            }
            className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50 resize-none h-32'
            placeholder='Enter product description'
          />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-3'>
        <Button
          onClick={handleSubmit}
          className='flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl py-3 font-semibold transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl'
        >
          <Save className='w-4 h-4 mr-2' />
          Save Product
        </Button>
        <Button
          variant='outline'
          onClick={onCancel}
          className='flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl py-3 font-semibold'
        >
          <X className='w-4 h-4 mr-2' />
          Cancel
        </Button>
      </div>
    </div>
  );
}
