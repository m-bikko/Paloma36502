export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  note?: string;
  discount?: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  createdAt: Date;
  status: 'pending' | 'processing' | 'completed';
} 