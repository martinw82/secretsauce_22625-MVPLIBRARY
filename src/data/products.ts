export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

export const products: Product[] = [
  {
    id: 'smoky-mayo',
    name: 'Smoky Mayo',
    description: 'A rich, creamy mayonnaise infused with smoky paprika and chipotle peppers. Perfect for burgers, sandwiches, and grilled vegetables. This artisanal sauce brings depth and complexity to any dish.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    category: 'Creamy Sauces'
  },
  {
    id: 'tangy-drip',
    name: 'Tangy Drip',
    description: 'Zesty, bold, and burger\'s best friend. This tangy sauce combines the perfect balance of vinegar, spices, and secret ingredients that make every bite memorable. A must-have for sauce enthusiasts.',
    price: 9.99,
    image: 'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    category: 'Tangy Sauces'
  },
  {
    id: 'heatwave-honey',
    name: 'Heatwave Honey',
    description: 'Sweet meets heat in this perfectly balanced sauce. Made with real honey and carefully selected hot peppers, it delivers a gentle burn followed by smooth sweetness. Ideal for wings, pizza, and marinades.',
    price: 10.99,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    category: 'Spicy Sauces'
  }
];