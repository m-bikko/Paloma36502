import { Product, Category, CartItem } from '../types';

export const categories: Category[] = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'cold-drinks', name: 'Cold Drinks' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'hot-drinks', name: 'Hot Drinks' },
  { id: 'main-dishes', name: 'Main Dishes' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'sandwiches', name: 'Sandwiches' },
  { id: 'side-dishes', name: 'Side Dishes' },
  { id: 'salads', name: 'Salads' },
  { id: 'coffee', name: 'Кофе' },
  { id: 'other', name: 'Other' },
  { id: 'no-syrup', name: 'без сиропа' },
  { id: 'test', name: 'Test' },
];

export const products: Product[] = [
  // Hot Drinks
  {
    id: 'espresso',
    name: 'Espresso',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop',
    category: 'hot-drinks',
    description: 'Rich and bold espresso shot'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop',
    category: 'hot-drinks',
    description: 'Classic cappuccino with perfect foam'
  },
  {
    id: 'black-tea',
    name: 'Black Tea',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop',
    category: 'hot-drinks',
    description: 'Premium black tea blend'
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300&h=300&fit=crop',
    category: 'hot-drinks',
    description: 'Fresh green tea leaves'
  },
  
  // Burgers
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
    category: 'burgers',
    description: 'Beef patty with lettuce, tomato, and cheese'
  },
  {
    id: 'veggie-burger',
    name: 'Veggie Burger',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=300&h=300&fit=crop',
    category: 'burgers',
    description: 'Plant-based patty with fresh vegetables'
  },
  
  // Pizza
  {
    id: 'margherita',
    name: 'Margherita Pizza',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop',
    category: 'pizza',
    description: 'Classic tomato, mozzarella, and basil'
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni Pizza',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop',
    category: 'pizza',
    description: 'Pepperoni with mozzarella cheese'
  },
  
  // Desserts
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
    category: 'desserts',
    description: 'Rich chocolate layer cake'
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=300&fit=crop',
    category: 'desserts',
    description: 'Creamy New York style cheesecake'
  },
  
  // Salads
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=300&fit=crop',
    category: 'salads',
    description: 'Fresh romaine with Caesar dressing'
  },
  
  // Cold Drinks
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop',
    category: 'cold-drinks',
    description: 'Cold brew coffee with ice'
  }
];

export const mockCartItems: CartItem[] = [
  {
    id: '1',
    product: products.find(p => p.id === 'espresso')!,
    quantity: 1,
    note: 'Small',
  },
  {
    id: '2',
    product: products.find(p => p.id === 'cappuccino')!,
    quantity: 1,
    note: 'Regular $ 50.00',
  }
]; 