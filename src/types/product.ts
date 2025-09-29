export interface Product {
  id: string;
  name: string;
  category: 'protein-bars' | 'granola-bars' | 'protein-mix' | 'granola-mix';
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  caption: string;
  ingredients: string[];
  nutritionFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sugar: number;
  };
  benefits: string[];
  weight: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export const productCategories = {
  'protein-bars': {
    name: 'Protein Bars',
    caption: 'The Original Zelolicious Fuel',
    description: 'Power-packed protein bars with peanuts, honey, and dates for sustained energy and muscle recovery.'
  },
  'granola-bars': {
    name: 'Granola Bars',
    caption: 'Fiber-Rich Energy, Naturally Sweet',
    description: 'Wholesome granola bars with oats, honey, and dates - your perfect on-the-go healthy snack.'
  },
  'protein-mix': {
    name: 'Protein Mix',
    caption: 'Your Morning Power-Up',
    description: 'Unsweetened protein blend perfect for smoothies, cereals, and your daily nutrition boost.'
  },
  'granola-mix': {
    name: 'Granola Mix',
    caption: 'The Cleanest Cereal Alternative',
    description: 'Pure, unsweetened granola mix - the healthiest way to start your day with whole grains and nuts.'
  }
} as const;