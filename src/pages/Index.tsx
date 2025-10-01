import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { products } from "@/data/products";
import { ShoppingCart } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full">
          <img 
            src={heroBanner} 
            alt="Invest in Your Health, The Zelo Way" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="bg-gradient-to-br from-background to-accent-light/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="heading-xl text-primary mb-6">Aapki Health Ka SIP</h1>
            <p className="text-premium max-w-2xl mx-auto mb-8">
              Start Investing in Wellness, One Bar at a Time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="px-8">
                  Shop Now
                </Button>
              </Link>
              <Link to="/zelo-rewards">
                <Button size="lg" variant="outline" className="px-8">
                  Zelo Rewards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Our Products</h2>
            <p className="text-premium max-w-2xl mx-auto">
              100% Natural. Zero Added Sugar. Zero Preservatives. Zero Chemicals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-premium transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-semibold text-primary mb-2 hover:text-accent transition-smooth">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-accent font-medium mb-2">{product.caption}</p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-fresh-green/10 text-fresh-green text-xs rounded-full">
                        {product.nutritionFacts.protein}g Protein
                      </span>
                      <span className="px-2 py-1 bg-cranberry/10 text-cranberry text-xs rounded-full">
                        Zero Added Sugar
                      </span>
                      <span className="px-2 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full">
                        100% Natural
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-sm text-muted-foreground">{product.weight}</span>
                    </div>

                    <Button className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
