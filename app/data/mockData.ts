import { Product, Category, CartItem } from '../types';

export const categories: Category[] = [
  { id: 'hot-drinks', name: 'Hot Drinks', description: 'Coffee, tea, hot chocolate' },
  { id: 'cold-drinks', name: 'Cold Drinks', description: 'Iced coffee, smoothies, sodas' },
  { id: 'burgers', name: 'Burgers', description: 'Classic and premium burgers' },
  { id: 'pizza', name: 'Pizza', description: 'Fresh baked pizzas' },
  { id: 'desserts', name: 'Desserts', description: 'Sweet treats and pastries' },
  { id: 'salads', name: 'Salads', description: 'Fresh and healthy salads' },
  { id: 'appetizers', name: 'Appetizers', description: 'Starters and finger foods' },
  { id: 'sandwiches', name: 'Sandwiches', description: 'Deli sandwiches and wraps' },
  { id: 'breakfast', name: 'Breakfast', description: 'Morning favorites' },
  { id: 'pasta', name: 'Pasta', description: 'Italian pasta dishes' },
  { id: 'soups', name: 'Soups', description: 'Hot and hearty soups' },
  { id: 'seafood', name: 'Seafood', description: 'Fresh fish and shellfish' },
  { id: 'steaks', name: 'Steaks', description: 'Premium grilled steaks' },
  { id: 'vegetarian', name: 'Vegetarian', description: 'Plant-based options' }
];

export const products: Product[] = [
  // Hot Drinks
  { id: '1', name: 'Espresso', price: 2.50, category: 'hot-drinks', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e76?w=400&h=400&fit=crop' },
  { id: '2', name: 'Cappuccino', price: 3.75, category: 'hot-drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop' },
  { id: '3', name: 'Latte', price: 4.25, category: 'hot-drinks', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop' },
  { id: '4', name: 'Americano', price: 3.00, category: 'hot-drinks', image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&h=400&fit=crop' },
  
  // Cold Drinks
  { id: '5', name: 'Iced Coffee', price: 3.50, category: 'cold-drinks', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop' },
  { id: '6', name: 'Smoothie', price: 5.25, category: 'cold-drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop' },
  
  // Burgers
  { id: '7', name: 'Classic Burger', price: 12.99, category: 'burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop' },
  { id: '8', name: 'Cheese Burger', price: 14.99, category: 'burgers', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop' },
  
  // Pizza
  { id: '9', name: 'Margherita', price: 15.99, category: 'pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop' },
  { id: '10', name: 'Pepperoni', price: 17.99, category: 'pizza', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop' },
  
  // Desserts  
  { id: '11', name: 'Chocolate Cake', price: 6.99, category: 'desserts', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
  { id: '12', name: 'Cheesecake', price: 7.99, category: 'desserts', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop' },
  
  // Salads
  { id: '13', name: 'Caesar Salad', price: 9.99, category: 'salads', image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=400&fit=crop' },
  { id: '14', name: 'Greek Salad', price: 8.99, category: 'salads', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop' }
];

export const mockCartItems: CartItem[] = [
  {
    id: '1',
    product: products[0], // Espresso
    quantity: 2,
    note: 'Extra shot'
  },
  {
    id: '2', 
    product: products[1], // Cappuccino
    quantity: 1,
    discount: 10
  },
  {
    id: '3',
    product: products[7], // Cheese Burger  
    quantity: 1,
    note: 'No pickles, extra cheese'
  },
  {
    id: '4',
    product: products[11], // Chocolate Cake
    quantity: 2
  },
  {
    id: '5',
    product: products[12], // Cheesecake
    quantity: 1,
    note: 'With berries on top'
  },
  {
    id: '6',
    product: products[5], // Smoothie
    quantity: 3,
    discount: 15
  }
]; 