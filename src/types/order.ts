export type OrderStatusType =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'completed';

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'completed';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  orderId: string;
  customerName?: string;
  items: OrderItem[];
  total: number;
  status: OrderStatusType;
  timestamp: string;
  notes?: string;
}
