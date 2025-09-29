import { Product } from '@/types/product';
import proteinBarHero from '@/assets/protein-bar-hero.jpg';
import granolaBarHero from '@/assets/granola-bar-hero.jpg';
import heroIngredients from '@/assets/hero-ingredients.jpg';

export const products: Product[] = [
  // Protein Bars
  {
    id: 'pb-classic',
    name: 'Classic Peanut Protein Bar',
    category: 'protein-bars',
    price: 299,
    originalPrice: 349,
    image: proteinBarHero,
    images: [proteinBarHero, heroIngredients],
    description: 'Our signature protein bar packed with roasted peanuts, natural honey, and dates for the perfect balance of taste and nutrition.',
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
    weight: '40g',
    inStock: true
  },
  {
    id: 'pb-chocolate',
    name: 'Chocolate Protein Bar',
    category: 'protein-bars',
    price: 319,
    originalPrice: 369,
    image: proteinBarHero,
    images: [proteinBarHero, heroIngredients],
    description: 'Indulgent chocolate protein bar with cocoa, peanuts, and dates - guilt-free chocolate satisfaction.',
    caption: 'The Original Zelolicious Fuel',
    ingredients: ['Roasted Peanuts', 'Dates', 'Raw Cocoa', 'Honey', 'Oats', 'Dark Chocolate Chips'],
    nutritionFacts: {
      calories: 190,
      protein: 13,
      carbs: 16,
      fat: 9,
      fiber: 5,
      sugar: 9
    },
    benefits: ['Antioxidant Rich', 'Mood Enhancer', 'High Protein', 'Natural Sweetness'],
    weight: '45g',
    inStock: true
  },

  // Granola Bars
  {
    id: 'gb-mixed-berry',
    name: 'Mixed Berry Granola Bar',
    category: 'granola-bars',
    price: 279,
    originalPrice: 329,
    image: granolaBarHero,
    images: [granolaBarHero, heroIngredients],
    description: 'Wholesome granola bar with oats, mixed berries, honey, and dates for a naturally sweet and fiber-rich snack.',
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
    weight: '35g',
    inStock: true
  },
  {
    id: 'gb-coconut',
    name: 'Coconut Almond Granola Bar',
    category: 'granola-bars',
    price: 289,
    image: granolaBarHero,
    images: [granolaBarHero, heroIngredients],
    description: 'Tropical coconut and almond granola bar with oats and natural sweeteners for exotic flavor.',
    caption: 'Fiber-Rich Energy, Naturally Sweet',
    ingredients: ['Rolled Oats', 'Coconut Flakes', 'Almonds', 'Dates', 'Honey', 'Vanilla Extract'],
    nutritionFacts: {
      calories: 170,
      protein: 7,
      carbs: 20,
      fat: 8,
      fiber: 5,
      sugar: 10
    },
    benefits: ['Healthy Fats', 'Vitamin E', 'Energy Boost', 'Digestive Health'],
    weight: '40g',
    inStock: true
  },

  // Protein Mix
  {
    id: 'pm-vanilla',
    name: 'Vanilla Protein Mix',
    category: 'protein-mix',
    price: 899,
    originalPrice: 999,
    image: heroIngredients,
    images: [heroIngredients, proteinBarHero],
    description: 'Premium unsweetened protein blend with natural vanilla flavor - perfect for smoothies and shakes.',
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
    weight: '500g',
    inStock: true
  },

  // Granola Mix
  {
    id: 'gm-classic',
    name: 'Classic Granola Mix',
    category: 'granola-mix',
    price: 549,
    originalPrice: 599,
    image: heroIngredients,
    images: [heroIngredients, granolaBarHero],
    description: 'Pure, unsweetened granola mix with oats, nuts, and seeds - the cleanest breakfast option.',
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
    weight: '400g',
    inStock: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};