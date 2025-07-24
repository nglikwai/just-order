'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { CartSummary } from './menu/CartSummary';
import { CheckoutForm } from './menu/CheckoutForm';
import { EmptyCart } from './menu/EmptyCart';
import { HeroSection } from './menu/HeroSection';
import { ProductCard } from './menu/ProductCard';
import { CartItem, CustomerInfo, Product } from './menu/types';

interface CustomerMenuClientProps {
  businessName: string;
  businessId: string;
}

export function CustomerMenuClient({
  businessName,
  businessId,
}: CustomerMenuClientProps) {
  const router = useRouter();

  // Mock products - in real app, this would come from API based on business
  const [products] = useState<Product[]>([
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
    {
      id: '3',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with caesar dressing',
      price: 7.5,
      available: true,
    },
    {
      id: '4',
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with cream frosting',
      price: 5.99,
      available: false,
    },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    notes: '',
  });

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, change: number) => {
    setCart(
      cart
        .map(item => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change;
            return newQuantity <= 0 ? null : { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      setShowCheckout(true);
    }
  };

  const confirmOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      return; // Basic validation
    }

    const orderId = Date.now().toString();
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const order = {
      items: cart,
      businessName,
      businessId,
      total: totalPrice,
      orderId,
      status: 'pending' as const,
      timestamp: new Date().toISOString(),
      customerName: customerInfo.name,
      customerPhone: customerInfo.phone,
      notes: customerInfo.notes,
    };

    // Store order in localStorage for tracking
    localStorage.setItem('currentOrder', JSON.stringify(order));
    localStorage.setItem(`order_${orderId}`, JSON.stringify(order));

    router.push(`/order-placed/${orderId}`);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50'>
      <HeroSection businessName={businessName} />

      <div className='max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8'>
        {/* Menu Section Header - Responsive */}
        <div className='mb-6 sm:mb-8 text-center sm:text-left'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
            Our Menu
          </h2>
          <p className='text-sm sm:text-base text-gray-600'>
            Discover our carefully curated selection
          </p>
        </div>

        {/* Products Grid - Mobile First Responsive */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8'>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              cart={cart}
              onAddToCart={addToCart}
              onUpdateQuantity={updateQuantity}
            />
          ))}
        </div>

        {!showCheckout && (
          <CartSummary cart={cart} onPlaceOrder={handlePlaceOrder} />
        )}

        {showCheckout && (
          <CheckoutForm
            cart={cart}
            customerInfo={customerInfo}
            onCustomerInfoChange={setCustomerInfo}
            onConfirmOrder={confirmOrder}
            onBackToMenu={() => setShowCheckout(false)}
          />
        )}

        {cart.length === 0 && <EmptyCart />}
      </div>
    </div>
  );
}
