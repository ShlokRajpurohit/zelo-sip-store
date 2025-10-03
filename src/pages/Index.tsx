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

      {/* The Enerzelo Promise - Core Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-primary mb-4">The Enerzelo Promise</h2>
            <p className="text-premium max-w-2xl mx-auto">
              Every ingredient, every process, every promise – crafted with one mission: to make India healthier, one natural bite at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Zero. Zero. Zero. */}
            <Card className="group cursor-pointer hover:shadow-premium transition-all duration-300 border-border/50 bg-gradient-to-br from-fresh-green/5 to-fresh-green/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-fresh-green" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Zero. Zero. Zero.</h3>
                <p className="text-lg font-semibold text-accent mb-3">100% Natural</p>
                <p className="text-muted-foreground">
                  Zero added sugar, zero preservatives, zero chemicals. Only nature's finest ingredients.
                </p>
              </CardContent>
            </Card>

            {/* The Enerzelo Effect */}
            <Card className="group cursor-pointer hover:shadow-premium transition-all duration-300 border-border/50 bg-gradient-to-br from-amber/5 to-amber/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-amber" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">The Enerzelo Effect</h3>
                <p className="text-lg font-semibold text-accent mb-3">Extra Glow, Bigger Smiles</p>
                <p className="text-muted-foreground">
                  Endless happiness starts from within. Natural nutrition for natural radiance.
                </p>
              </CardContent>
            </Card>

            {/* Protein Power */}
            <Card className="group cursor-pointer hover:shadow-premium transition-all duration-300 border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Protein Power</h3>
                <p className="text-lg font-semibold text-accent mb-3">Filling the Gap</p>
                <p className="text-muted-foreground">
                  90% of India is protein deficient. We're here to change that, one bar at a time.
                </p>
              </CardContent>
            </Card>

            {/* Zelolicious Taste */}
            <Card className="group cursor-pointer hover:shadow-premium transition-all duration-300 border-border/50 bg-gradient-to-br from-cranberry/5 to-cranberry/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cranberry/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-cranberry" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Zelolicious Taste</h3>
                <p className="text-lg font-semibold text-accent mb-3">Guilt-Free Indulgence</p>
                <p className="text-muted-foreground">
                  Taste your kids will love. Indulgence adults deserve. Health everyone needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Banner */}
      <section className="py-20 bg-gradient-to-br from-accent-light/5 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg text-primary mb-4">
            Taste Your Kids Will Love.<br />
            <span className="text-accent">Indulgence Adults Deserve.</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            From gym enthusiasts to busy professionals, from growing kids to health-conscious adults – there's a perfect Enerzelo for everyone.
          </p>
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
