import { Product } from '@/types/product';
import proteinBarPouch from '@/assets/protein-bar-pouch.png';
import granolaBarPouch from '@/assets/granola-bar-pouch.png';
import heroIngredients from '@/assets/hero-ingredients.jpg';

export const products: Product[] = [
  // Protein Bars
  {
    id: 'protein-bars',
    name: 'Protein Bars (With Natural Sweeteners)',
    category: 'protein-bars',
    price: 549,
    image: proteinBarPouch,
    images: [proteinBarPouch, heroIngredients],
    description: 'Power-packed protein bars with peanuts, honey, and dates for sustained energy and muscle recovery. 30 pieces x 12g per pouch.',
    caption: 'The Original Zelolicious Fuel',
    ingredients: ['Roasted Peanuts', 'Dates', 'Honey', 'Oats', 'Chia Seeds', 'Himalayan Pink Salt'],
    nutritionFacts: {
      calories: 180,
      protein: 12,
      carbs: 15,
      fat: 8,
      fiber: 4,
      sugar: 8
    },
    benefits: ['High Protein Content', 'Natural Energy Boost', 'Zero Added Sugar', 'Rich in Fiber'],
    weight: '360g (30 pieces x 12g)',
    inStock: true
  },
  {
    id: 'protein-mix',
    name: 'Protein Mix (Without Any Sweeteners)',
    category: 'protein-mix',
    price: 449,
    image: heroIngredients,
    images: [heroIngredients, proteinBarPouch],
    description: 'Premium unsweetened protein blend perfect for smoothies, cereals, and your daily nutrition boost.',
    caption: 'Your Morning Power-Up',
    ingredients: ['Pea Protein', 'Brown Rice Protein', 'Natural Vanilla', 'Chia Seeds', 'Flax Seeds'],
    nutritionFacts: {
      calories: 120,
      protein: 25,
      carbs: 3,
      fat: 2,
      fiber: 3,
      sugar: 0
    },
    benefits: ['Plant-Based Protein', 'Zero Sugar', 'Complete Amino Profile', 'Easy Digestion'],
    weight: '300g',
    inStock: true
  },
  {
    id: 'granola-bars',
    name: 'Granola Bars (With Natural Sweeteners)',
    category: 'granola-bars',
    price: 499,
    image: granolaBarPouch,
    images: [granolaBarPouch, heroIngredients],
    description: 'Wholesome granola bars with oats, honey, and dates - your perfect on-the-go healthy snack. 30 pieces x 12g per pouch.',
    caption: 'Fiber-Rich Energy, Naturally Sweet',
    ingredients: ['Rolled Oats', 'Dried Cranberries', 'Blueberries', 'Dates', 'Honey', 'Almonds'],
    nutritionFacts: {
      calories: 160,
      protein: 6,
      carbs: 25,
      fat: 5,
      fiber: 6,
      sugar: 12
    },
    benefits: ['High Fiber', 'Antioxidant Rich', 'Heart Healthy', 'Sustained Energy'],
    weight: '360g (30 pieces x 12g)',
    inStock: true
  },
  {
    id: 'granola-mix',
    name: 'Granola Mix (Without Any Sweeteners)',
    category: 'granola-mix',
    price: 399,
    image: heroIngredients,
    images: [heroIngredients, granolaBarPouch],
    description: 'Pure, unsweetened granola mix - the healthiest way to start your day with whole grains and nuts.',
    caption: 'The Cleanest Cereal Alternative',
    ingredients: ['Rolled Oats', 'Almonds', 'Walnuts', 'Pumpkin Seeds', 'Sunflower Seeds', 'Coconut Flakes'],
    nutritionFacts: {
      calories: 150,
      protein: 6,
      carbs: 18,
      fat: 7,
      fiber: 4,
      sugar: 0
    },
    benefits: ['Zero Added Sugar', 'High Fiber', 'Healthy Fats', 'Nutrient Dense'],
    weight: '300g',
    inStock: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};