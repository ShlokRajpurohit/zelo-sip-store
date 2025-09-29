import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import proteinBarImage from "@/assets/protein-bar-hero.jpg";
import granolaBarImage from "@/assets/granola-bar-hero.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Protein Bars",
      subtitle: "The Original Zelolicious Fuel",
      description: "Premium blend of peanuts, honey, and dates. Perfect protein boost for active lifestyles.",
      image: proteinBarImage,
      price: "₹199",
      originalPrice: "₹249",
      badge: "Bestseller",
      badgeColor: "bg-cranberry",
      ingredients: ["Peanuts", "Honey", "Dates", "Seeds"],
    },
    {
      id: 2,
      name: "Granola Bars", 
      subtitle: "Fiber-Rich Energy, Naturally Sweet",
      description: "Wholesome oats, honey, and dates for sustained energy. Your healthy breakfast companion.",
      image: granolaBarImage,
      price: "₹179",
      originalPrice: "₹229",
      badge: "High Fiber",
      badgeColor: "bg-fresh-green",
      ingredients: ["Oats", "Honey", "Dates", "Nuts"],
    },
    {
      id: 3,
      name: "Protein Mix",
      subtitle: "Your Morning Power-Up",
      description: "Unsweetened protein blend. No honey, no dates - just pure nutritional power.",
      image: proteinBarImage,
      price: "₹159",
      originalPrice: "₹199",
      badge: "Sugar-Free",
      badgeColor: "bg-accent",
      ingredients: ["Nuts", "Seeds", "Protein", "Vitamins"],
    },
    {
      id: 4,
      name: "Granola Mix",
      subtitle: "The Cleanest Cereal Alternative",
      description: "Unsweetened granola perfection. Your breakfast bowl will never be the same.",
      image: granolaBarImage,
      price: "₹139",
      originalPrice: "₹179",
      badge: "Clean Eating",
      badgeColor: "bg-primary",
      ingredients: ["Oats", "Nuts", "Seeds", "Dried Fruits"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Taste Your Kids Will Love.<br />
            <span className="text-accent">Indulgence Adults Deserve.</span>
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            From gym enthusiasts to busy professionals, from growing kids to health-conscious adults – 
            there's a perfect Enerzelo for everyone.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                {/* Product Image */}
                <div 
                  className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">4.8</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="heading-sm text-foreground mb-2">{product.name}</h3>
                <p className="text-accent font-medium mb-3">{product.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Ingredients */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.ingredients.map((ingredient, index) => (
                    <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
                      {ingredient}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <span className="text-fresh-green text-sm font-medium">20% OFF</span>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth">
                  Add to Cart
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;