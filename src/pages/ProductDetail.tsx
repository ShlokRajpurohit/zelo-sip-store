import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { getProductById } from "@/data/products";
import { ShoppingCart, Heart, Share2, Star, Shield, Leaf, Award } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!id) {
    return <div>Product not found</div>;
  }

  const product = getProductById(id);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-secondary/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/products/${product.category}`} className="hover:text-primary transition-smooth">
              {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-secondary/20">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-border hover:border-accent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="heading-lg text-primary mb-2">{product.name}</h1>
                <p className="text-xl text-accent font-medium mb-4">{product.caption}</p>
                <p className="text-premium mb-6">{product.description}</p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-fresh-green/10 text-fresh-green border-fresh-green/20">
                  <Leaf className="w-3 h-3 mr-1" />
                  100% Natural
                </Badge>
                <Badge variant="secondary" className="bg-cranberry/10 text-cranberry border-cranberry/20">
                  <Shield className="w-3 h-3 mr-1" />
                  Zero Added Sugar
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
                  <Award className="w-3 h-3 mr-1" />
                  Premium Quality
                </Badge>
              </div>

              {/* Price & Actions */}
              <div className="border-t border-b border-border py-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</span>
                  )}
                  <span className="text-sm text-muted-foreground">({product.weight})</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-border rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-accent/10 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-border">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-accent/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">In Stock</span>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1" size="lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center p-2 bg-accent/5 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      <span className="text-sm">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nutrition Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Nutrition Facts</CardTitle>
                <p className="text-sm text-muted-foreground">Per serving ({product.weight})</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.nutritionFacts).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm capitalize">{key === 'carbs' ? 'Carbohydrates' : key}</span>
                      <span className="font-medium">{value}{key === 'calories' ? '' : 'g'}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-primary mb-8 text-center">Customer Reviews</h2>
            
            {/* Review Summary */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
                <span className="text-2xl font-bold text-primary ml-2">4.8</span>
              </div>
              <p className="text-muted-foreground">Based on 127 reviews</p>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              {[
                {
                  name: "Priya Sharma",
                  rating: 5,
                  comment: "Absolutely love the taste! My kids enjoy it and I feel good giving them something healthy.",
                  date: "2 weeks ago"
                },
                {
                  name: "Rajesh Kumar",
                  rating: 5,
                  comment: "Perfect post-workout snack. Great protein content and tastes amazing!",
                  date: "1 month ago"
                },
                {
                  name: "Anita Patel",
                  rating: 4,
                  comment: "Good quality ingredients and no artificial taste. Will definitely reorder.",
                  date: "3 weeks ago"
                }
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-accent-foreground">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-primary">{review.name}</h4>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;