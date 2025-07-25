'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { CartSummary } from './menu/CartSummary';
import { CheckoutForm } from './menu/CheckoutForm';
import { EmptyCart } from './menu/EmptyCart';
import { ProductCard } from './menu/ProductCard';
import { CartItem, CustomerInfo, Product } from './menu/types';

interface MenuClientProps {
  products: Product[];
  businessName: string;
  businessId: string;
}

export function MenuClient({
  products,
  businessName,
  businessId,
}: MenuClientProps) {
  const router = useRouter();

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
    <>
      {/* Products Grid */}
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
    </>
  );
}
