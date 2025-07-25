import { useState } from 'react';

import { Edit, Save, Trash2, X } from 'lucide-react';

import { Button } from '@/components/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

interface EditProductFormProps {
  product: Product;
  onSave: (product: Partial<Product>) => void;
  onCancel: () => void;
  onDelete: () => void;
}

export function EditProductForm({
  product,
  onSave,
  onCancel,
  onDelete,
}: EditProductFormProps) {
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
  });

  const handleSave = () => {
    onSave(editedProduct);
  };

  return (
    <div className='space-y-4'>
      {/* Header */}
      <div className='flex items-center gap-2 mb-4'>
        <div className='w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center'>
          <Edit className='w-4 h-4 text-blue-600' />
        </div>
        <h4 className='font-bold text-gray-900'>Edit Product</h4>
      </div>

      {/* Form Fields */}
      <div>
        <label className='block text-xs font-semibold text-gray-700 mb-1'>
          Name
        </label>
        <input
          type='text'
          value={editedProduct.name}
          onChange={e =>
            setEditedProduct({ ...editedProduct, name: e.target.value })
          }
          className='w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50 font-semibold'
        />
      </div>

      <div>
        <label className='block text-xs font-semibold text-gray-700 mb-1'>
          Price ($)
        </label>
        <input
          type='number'
          step='0.01'
          value={editedProduct.price}
          onChange={e =>
            setEditedProduct({
              ...editedProduct,
              price: parseFloat(e.target.value),
            })
          }
          className='w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50'
        />
      </div>

      <div>
        <label className='block text-xs font-semibold text-gray-700 mb-1'>
          Description
        </label>
        <textarea
          value={editedProduct.description}
          onChange={e =>
            setEditedProduct({ ...editedProduct, description: e.target.value })
          }
          className='w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 bg-white/50 resize-none'
          rows={3}
        />
      </div>

      {/* Action Buttons */}
      <div className='flex gap-2 pt-2'>
        <Button
          onClick={handleSave}
          size='sm'
          className='flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl font-semibold'
        >
          <Save className='w-4 h-4 mr-1' />
          Save
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={onCancel}
          className='flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-semibold'
        >
          <X className='w-4 h-4 mr-1' />
          Cancel
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={onDelete}
          className='bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300 rounded-xl font-semibold'
        >
          <Trash2 className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
}
