import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { products, getProductsByCategory } from "@/data/products";
import { productCategories } from "@/types/product";
import { ShoppingCart } from "lucide-react";

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category || !(category in productCategories)) {
    return <div>Category not found</div>;
  }

  const categoryInfo = productCategories[category as keyof typeof productCategories];
  const categoryProducts = getProductsByCategory(category);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent-light/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-primary mb-4">{categoryInfo.name}</h1>
          <p className="heading-sm text-accent mb-6">{categoryInfo.caption}</p>
          <p className="text-premium max-w-2xl mx-auto">{categoryInfo.description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-premium transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    {/* Nutrition Highlights */}
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

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{product.weight}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button className="px-4">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-fresh-green font-bold text-lg">0</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Zero Added Sugar</h3>
              <p className="text-sm text-muted-foreground">Naturally sweetened only</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-cranberry/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cranberry font-bold text-lg">0</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Zero Preservatives</h3>
              <p className="text-sm text-muted-foreground">Fresh & pure ingredients</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold text-lg">0</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Zero Chemicals</h3>
              <p className="text-sm text-muted-foreground">100% natural process</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">100%</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Natural</h3>
              <p className="text-sm text-muted-foreground">Pure ingredients only</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;