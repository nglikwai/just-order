export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
