'use client';

import { useState } from 'react';

import {
  Edit,
  Plus,
  Save,
  ShoppingBag,
  Star,
  Trash2,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';

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
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white flex'>
      <BusinessSidebar />
      <div className='flex-1 lg:ml-0'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8'>
          {/* Header Section - Airbnb Style */}
          <div className='mb-8 lg:ml-0 ml-16'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
              <div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>
                  Product Dashboard
                </h1>
                <p className='text-gray-600 text-base sm:text-lg'>
                  Manage your menu and track performance
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-white rounded-2xl p-3 shadow-sm border border-gray-100'>
                  <div className='flex items-center gap-2 text-sm'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-gray-600 font-medium'>
                      Live Orders
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
              <div className='bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center'>
                    <ShoppingBag className='w-5 h-5 text-blue-600' />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-900'>
                      {products.length}
                    </p>
                    <p className='text-xs text-gray-500'>Products</p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center'>
                    <TrendingUp className='w-5 h-5 text-green-600' />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-900'>24</p>
                    <p className='text-xs text-gray-500'>Orders Today</p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center'>
                    <Star className='w-5 h-5 text-amber-600' />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-900'>4.8</p>
                    <p className='text-xs text-gray-500'>Rating</p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center'>
                    <Users className='w-5 h-5 text-slate-600' />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-900'>156</p>
                    <p className='text-xs text-gray-500'>Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Product Section - Airbnb Style */}
          <div className='mb-8 lg:ml-0 ml-16'>
            {!showAddForm ? (
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold text-gray-900'>
                  Your Products
                </h2>
                <Button
                  onClick={() => setShowAddForm(true)}
                  className='bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl px-6 py-3 font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl'
                >
                  <Plus className='w-4 h-4 mr-2' />
                  Add New Product
                </Button>
              </div>
            ) : (
              <div className='bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center'>
                    <Plus className='w-6 h-6 text-slate-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900'>
                      Add New Product
                    </h3>
                    <p className='text-gray-600'>
                      Create a new item for your menu
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                  <div className='space-y-4'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-800 mb-2'>
                        Product Name
                      </label>
                      <input
                        type='text'
                        value={newProduct.name || ''}
                        onChange={e =>
                          setNewProduct({ ...newProduct, name: e.target.value })
                        }
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
                        value={newProduct.price || ''}
                        onChange={e =>
                          setNewProduct({
                            ...newProduct,
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
                      value={newProduct.description || ''}
                      onChange={e =>
                        setNewProduct({
                          ...newProduct,
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
                    onClick={handleAddProduct}
                    className='flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl py-3 font-semibold transform transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl'
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
                    className='flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl py-3 font-semibold'
                  >
                    <X className='w-4 h-4 mr-2' />
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid - Airbnb Style */}
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:ml-0 ml-16'>
            {products.map((product, index) => (
              <div
                key={product.id}
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
                  {!product.available && (
                    <div className='absolute top-4 right-4'>
                      <span className='px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium'>
                        Unavailable
                      </span>
                    </div>
                  )}
                  {product.available && (
                    <div className='absolute top-4 right-4'>
                      <span className='px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium'>
                        Available
                      </span>
                    </div>
                  )}
                </div>

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
                        <h3 className='text-xl font-bold text-gray-900 group-hover:text-slate-600 transition-colors'>
                          {product.name}
                        </h3>
                        <span className='text-xl font-bold text-slate-600'>
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      <p className='text-gray-600 mb-6 line-clamp-2'>
                        {product.description}
                      </p>

                      <div className='flex items-center justify-between mb-6'>
                        <button
                          onClick={() => toggleAvailability(product.id)}
                          className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                            product.available
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-red-100 text-red-700 hover:bg-red-200'
                          }`}
                        >
                          {product.available ? '✓ Available' : '✗ Unavailable'}
                        </button>
                      </div>

                      <div className='flex gap-3'>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => setEditingProduct(product.id)}
                          className='flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-semibold'
                        >
                          <Edit className='w-4 h-4 mr-2' />
                          Edit
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => handleDeleteProduct(product.id)}
                          className='bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300 rounded-xl font-semibold'
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
            <div className='text-center py-16 lg:ml-0 ml-16 animate-fadeInUp'>
              <div className='relative mb-6 flex justify-center'>
                <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center animate-bounce'>
                  <ShoppingBag className='w-10 h-10 text-gray-400' />
                </div>
                <div className='absolute -top-2 -right-2 w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center animate-ping'>
                  <span className='text-white text-xs font-bold'>+</span>
                </div>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                No products yet
              </h3>
              <p className='text-gray-500 mb-6'>
                Start building your menu by adding your first product
              </p>
              <Button
                onClick={() => setShowAddForm(true)}
                className='bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl px-6 py-3 font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl'
              >
                <Plus className='w-4 h-4 mr-2' />
                Add Your First Product
              </Button>
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
          Product Name
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
      </div>
    </div>
  );
}
