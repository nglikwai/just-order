'use client';

import { useState } from 'react';

import { Edit, Plus, Save, Trash2, X } from 'lucide-react';

import { BusinessSidebar } from '@/components/BusinessSidebar';
import { Button } from '@/components/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  available: boolean;
}

export default function BusinessDashboard() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Coffee Latte',
      description: 'Rich espresso with steamed milk',
      price: 4.5,
      available: true,
    },
    {
      id: '2',
      name: 'Chicken Sandwich',
      description: 'Grilled chicken with fresh vegetables',
      price: 8.99,
      available: true,
    },
  ]);

  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    available: true,
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.description && newProduct.price) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        available: true,
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', description: '', price: 0, available: true });
      setShowAddForm(false);
    }
  };

  const handleUpdateProduct = (
    id: string,
    updatedProduct: Partial<Product>
  ) => {
    setProducts(
      products.map(p => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const toggleAvailability = (id: string) => {
    setProducts(
      products.map(p => (p.id === id ? { ...p, available: !p.available } : p))
    );
  };

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      <BusinessSidebar />
      <div className='flex-1 lg:ml-0'>
        <div className='max-w-7xl mx-auto px-6 py-8'>
          <div className='mb-8 lg:ml-0 ml-16'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              Product Management
            </h1>
            <p className='text-gray-600'>Manage your products and menu</p>
          </div>

          {/* Add Product Button */}
          <div className='mb-6 lg:ml-0 ml-16'>
            {!showAddForm ? (
              <Button
                onClick={() => setShowAddForm(true)}
                className='bg-slate-600 hover:bg-slate-700'
              >
                <Plus className='w-4 h-4 mr-2' />
                Add New Product
              </Button>
            ) : (
              <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Add New Product
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Product Name
                    </label>
                    <input
                      type='text'
                      value={newProduct.name || ''}
                      onChange={e =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                      }
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
                      placeholder='Enter product name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Price ($)
                    </label>
                    <input
                      type='number'
                      step='0.01'
                      value={newProduct.price || ''}
                      onChange={e =>
                        setNewProduct({
                          ...newProduct,
                          price: parseFloat(e.target.value),
                        })
                      }
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
                      placeholder='0.00'
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Description
                  </label>
                  <textarea
                    value={newProduct.description || ''}
                    onChange={e =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value,
                      })
                    }
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
                    rows={3}
                    placeholder='Enter product description'
                  />
                </div>
                <div className='flex gap-2'>
                  <Button
                    onClick={handleAddProduct}
                    className='bg-emerald-600 hover:bg-emerald-700'
                  >
                    <Save className='w-4 h-4 mr-2' />
                    Save Product
                  </Button>
                  <Button
                    variant='outline'
                    onClick={() => {
                      setShowAddForm(false);
                      setNewProduct({
                        name: '',
                        description: '',
                        price: 0,
                        available: true,
                      });
                    }}
                  >
                    <X className='w-4 h-4 mr-2' />
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:ml-0 ml-16'>
            {products.map(product => (
              <div
                key={product.id}
                className='bg-white rounded-lg border border-gray-200 shadow-sm'
              >
                <div className='p-6'>
                  {editingProduct === product.id ? (
                    <EditProductForm
                      product={product}
                      onSave={updatedProduct =>
                        handleUpdateProduct(product.id, updatedProduct)
                      }
                      onCancel={() => setEditingProduct(null)}
                    />
                  ) : (
                    <>
                      <div className='flex justify-between items-start mb-3'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                          {product.name}
                        </h3>
                        <span className='text-lg font-bold text-gray-900'>
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <p className='text-gray-600 mb-4'>
                        {product.description}
                      </p>

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
                          onClick={() => toggleAvailability(product.id)}
                          className='text-sm text-slate-600 hover:text-slate-800'
                        >
                          Toggle Availability
                        </button>
                      </div>

                      <div className='flex gap-2'>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => setEditingProduct(product.id)}
                          className='flex-1'
                        >
                          <Edit className='w-4 h-4 mr-1' />
                          Edit
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => handleDeleteProduct(product.id)}
                          className='text-red-600 hover:text-red-700 hover:bg-red-50'
                        >
                          <Trash2 className='w-4 h-4' />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className='text-center py-12 lg:ml-0 ml-16'>
              <p className='text-gray-500 text-lg'>No products added yet</p>
              <p className='text-gray-400'>
                Click "Add New Product" to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EditProductForm({
  product,
  onSave,
  onCancel,
}: {
  product: Product;
  onSave: (product: Partial<Product>) => void;
  onCancel: () => void;
}) {
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
  });

  const handleSave = () => {
    onSave(editedProduct);
  };

  return (
    <div>
      <div className='mb-3'>
        <input
          type='text'
          value={editedProduct.name}
          onChange={e =>
            setEditedProduct({ ...editedProduct, name: e.target.value })
          }
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 font-semibold'
        />
      </div>
      <div className='mb-3'>
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
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
        />
      </div>
      <div className='mb-4'>
        <textarea
          value={editedProduct.description}
          onChange={e =>
            setEditedProduct({ ...editedProduct, description: e.target.value })
          }
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
          rows={3}
        />
      </div>
      <div className='flex gap-2'>
        <Button
          onClick={handleSave}
          size='sm'
          className='bg-emerald-600 hover:bg-emerald-700'
        >
          <Save className='w-4 h-4 mr-1' />
          Save
        </Button>
        <Button variant='outline' size='sm' onClick={onCancel}>
          <X className='w-4 h-4 mr-1' />
          Cancel
        </Button>
      </div>
    </div>
  );
}
