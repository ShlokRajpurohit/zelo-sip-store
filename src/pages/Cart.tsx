import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Gift } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import proteinBarHero from "@/assets/protein-bar-hero.jpg";
import granolaBarHero from "@/assets/granola-bar-hero.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 'pb-classic',
      name: 'Classic Peanut Protein Bar',
      price: 299,
      originalPrice: 349,
      image: proteinBarHero,
      quantity: 2,
      weight: '40g'
    },
    {
      id: 'gb-mixed-berry',
      name: 'Mixed Berry Granola Bar',
      price: 279,
      originalPrice: 329,
      image: granolaBarHero,
      quantity: 1,
      weight: '35g'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
  const savings = originalTotal - subtotal;
  const zeloClubDiscount = Math.round(subtotal * 0.05);
  const zeloSipDiscount = Math.round(subtotal * 0.05);
  const totalDiscount = zeloClubDiscount + zeloSipDiscount;
  const finalTotal = subtotal - totalDiscount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="heading-lg text-primary mb-4">Your Cart is Empty</h1>
          <p className="text-premium mb-8">
            Looks like you haven't added any healthy snacks to your cart yet.
          </p>
          <Link to="/">
            <Button size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="bg-secondary/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">Shopping Cart</h1>
              <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary/20 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-primary">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.weight}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-primary">₹{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{item.originalPrice}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-accent/10 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 border-x border-border">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-accent/10 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Subtotal */}
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  
                  {/* Product Savings */}
                  {savings > 0 && (
                    <div className="flex justify-between text-fresh-green">
                      <span>Product Discounts</span>
                      <span>-₹{savings}</span>
                    </div>
                  )}

                  {/* Membership Discounts */}
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          Zelo Club
                        </Badge>
                        <span className="text-sm">5% off</span>
                      </div>
                      <span className="text-fresh-green">-₹{zeloClubDiscount}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Zelo SIP
                        </Badge>
                        <span className="text-sm">5% off</span>
                      </div>
                      <span className="text-fresh-green">-₹{zeloSipDiscount}</span>
                    </div>
                  </div>

                  {/* Free Shipping */}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-fresh-green">FREE</span>
                  </div>

                  {/* Total */}
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span className="text-primary">Total</span>
                      <div className="text-right">
                        <div className="text-primary">₹{finalTotal}</div>
                        {totalDiscount > 0 && (
                          <div className="text-sm text-fresh-green">
                            You saved ₹{totalDiscount + savings}!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link to="/checkout" className="block">
                    <Button size="lg" className="w-full">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  {/* Promo Code */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Have a promo code?</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-1 px-3 py-2 border border-border rounded-md text-sm"
                      />
                      <Button variant="outline" size="sm">Apply</Button>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                      <span>Free shipping on all orders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                      <span>100% natural ingredients</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;