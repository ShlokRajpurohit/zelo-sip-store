import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { CreditCard, Truck, Shield, Lock, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import proteinBarHero from "@/assets/protein-bar-hero.jpg";
import granolaBarHero from "@/assets/granola-bar-hero.jpg";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  // Mock cart data
  const cartItems = [
    {
      id: 'pb-classic',
      name: 'Classic Peanut Protein Bar',
      price: 299,
      quantity: 2,
      image: proteinBarHero
    },
    {
      id: 'gb-mixed-berry',
      name: 'Mixed Berry Granola Bar',
      price: 279,
      quantity: 1,
      image: granolaBarHero
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const zeloClubDiscount = Math.round(subtotal * 0.05);
  const zeloSipDiscount = Math.round(subtotal * 0.05);
  const totalDiscount = zeloClubDiscount + zeloSipDiscount;
  const finalTotal = subtotal - totalDiscount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="bg-secondary/20 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-primary">Secure Checkout</h1>
          <div className="flex items-center gap-2 mt-2">
            <Shield className="w-4 h-4 text-fresh-green" />
            <span className="text-sm text-muted-foreground">SSL Encrypted & Secure</span>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Email Address *</label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Phone Number *</label>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">First Name *</label>
                        <Input
                          name="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Last Name *</label>
                        <Input
                          name="lastName"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Address *</label>
                      <Input
                        name="address"
                        placeholder="Street address, apartment, suite, etc."
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">City *</label>
                        <Input
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">State *</label>
                        <Input
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">PIN Code *</label>
                        <Input
                          name="pincode"
                          placeholder="123456"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Payment Options */}
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="text-primary"
                        />
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          <span>Credit/Debit Card</span>
                        </div>
                      </label>
                      
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleInputChange}
                          className="text-primary"
                        />
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>UPI</span>
                        </div>
                      </label>
                      
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={handleInputChange}
                          className="text-primary"
                        />
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          <span>Cash on Delivery</span>
                        </div>
                      </label>
                    </div>

                    {/* Payment Form (shown when card is selected) */}
                    {formData.paymentMethod === 'card' && (
                      <div className="space-y-4 mt-6 p-4 border border-border rounded-lg">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-primary">Card Number *</label>
                          <Input placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">Expiry Date *</label>
                            <Input placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">CVV *</label>
                            <Input placeholder="123" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-primary">Cardholder Name *</label>
                          <Input placeholder="Name on card" />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary/20">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-primary">{item.name}</h4>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-muted-foreground">Qty: {item.quantity}</span>
                            <span className="text-sm font-medium">₹{item.price * item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    
                    <div className="flex justify-between text-fresh-green">
                      <span>Zelo Club (5%)</span>
                      <span>-₹{zeloClubDiscount}</span>
                    </div>
                    
                    <div className="flex justify-between text-fresh-green">
                      <span>Zelo SIP (5%)</span>
                      <span>-₹{zeloSipDiscount}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-fresh-green">FREE</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span className="text-primary">Total</span>
                      <span className="text-primary">₹{finalTotal}</span>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <Button size="lg" className="w-full" onClick={handleSubmit}>
                    <Lock className="w-4 h-4 mr-2" />
                    Place Order
                  </Button>

                  {/* Trust Badges */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-fresh-green" />
                      <span>SSL Encrypted Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-fresh-green" />
                      <span>Free shipping & returns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-fresh-green rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
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

export default Checkout;