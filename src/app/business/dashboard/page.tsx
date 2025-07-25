'use client';

import { useState } from 'react';

import { Plus, ShoppingBag } from 'lucide-react';

import { AddProductForm } from './components/AddProductForm';
import { DashboardHeader } from './components/DashboardHeader';
import { ProductCard } from './components/ProductCard';
import { StatsCards } from './components/StatsCards';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/components/ui/button';
import { useBusiness } from '@/hooks/useBusiness';
import type { Product } from '@/types';

export default function BusinessDashboard() {
  const { data: business, isLoading, error } = useBusiness();

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

  const [showAddForm, setShowAddForm] = useState(false);

  const handleUpdateProduct = (
    id: string,
    updatedProduct: Partial<Product>
  ) => {
    setProducts(
      products.map(p => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const toggleAvailability = (id: string) => {
    setProducts(
      products.map(p => (p.id === id ? { ...p, available: !p.available } : p))
    );
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
          <div className='text-center'>
            <div className='w-8 h-8 border-2 border-slate-600 border-t-transparent rounded-full animate-spin mx-auto mb-4' />
            <p className='text-gray-600'>Loading your business...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (error) {
    return (
      <ProtectedRoute>
        <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-red-600 mb-4'>Error loading business data</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className='min-h-screen'>
        <div className='max-w-7xl mx-auto'>
          <DashboardHeader
            businessName={business?.name || 'Your Business'}
            ownerName={business?.ownerName || 'Business Owner'}
            onAddProduct={() => setShowAddForm(true)}
          />
          <StatsCards productCount={products.length} stats={business?.stats} />

          <div className='mb-8'>
            {!showAddForm ? (
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold text-gray-900'>Products</h2>
                <Button
                  onClick={() => setShowAddForm(true)}
                  className='bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl px-6 py-3 font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl'
                >
                  <Plus className='w-4 h-4 mr-2' />
                  Add Product
                </Button>
              </div>
            ) : (
              <AddProductForm
                onAdd={product => {
                  const newProductWithId: Product = {
                    id: Date.now().toString(),
                    ...product,
                  };
                  setProducts([...products, newProductWithId]);
                  setShowAddForm(false);
                }}
                onCancel={() => setShowAddForm(false)}
              />
            )}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onUpdate={handleUpdateProduct}
                onDelete={handleDeleteProduct}
                onToggleAvailability={toggleAvailability}
              />
            ))}
          </div>

          {products.length === 0 && (
            <div className='text-center py-16 animate-fadeInUp'>
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
              <p className='text-gray-500 mb-6'>Start building your menu</p>
              <Button
                onClick={() => setShowAddForm(true)}
                className='bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl px-6 py-3 font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl'
              >
                <Plus className='w-4 h-4 mr-2' />
                Add Product
              </Button>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
