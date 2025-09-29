import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Check, Gift, Calendar, Percent, Crown, Zap } from "lucide-react";

const ZeloClub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-light/20 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-primary mb-6">Your Health Investment Plan</h1>
          <p className="heading-sm text-accent mb-8">Join Zelo SIP & Get 10% Off!</p>
          <p className="text-premium max-w-3xl mx-auto mb-8">
            Transform your health journey with our exclusive membership programs. 
            Save more, stay healthier, and enjoy premium benefits designed for your wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">Join Zelo Club</Button>
            <Button size="lg" variant="outline" className="px-8">Start Zelo SIP</Button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Choose Your Plan</h2>
            <p className="text-premium">Select the perfect plan for your health journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Zelo Club */}
            <Card className="relative border-2 border-accent/30 hover:border-accent transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground px-4 py-1">
                  <Gift className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              </div>
              
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Zelo Club</CardTitle>
                <p className="text-muted-foreground">Premium Membership Program</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">FREE</div>
                  <p className="text-sm text-muted-foreground">First year complimentary</p>
                  <p className="text-sm text-accent font-medium mt-1">Then ₹99/year</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>5% discount on all orders</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Discount valid for 1 year from last purchase</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Early access to new products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Exclusive health tips & recipes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Priority customer support</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Join Zelo Club
                </Button>
              </CardContent>
            </Card>

            {/* Zelo SIP */}
            <Card className="relative border-2 border-primary/30 hover:border-primary transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  <Zap className="w-4 h-4 mr-1" />
                  Maximum Savings
                </Badge>
              </div>
              
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Zelo SIP</CardTitle>
                <p className="text-muted-foreground">Systematic Investment Plan</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <span className="text-2xl">From </span>₹299<span className="text-lg">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Annual subscription</p>
                  <p className="text-sm text-cranberry font-medium mt-1">Additional 5% off</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Additional 5% discount (stacks with Club)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Monthly delivery at your doorstep</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Customize your monthly box</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Never run out of healthy snacks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-fresh-green" />
                    <span>Pause or cancel anytime</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" variant="outline">
                  Start Zelo SIP
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Savings Calculator */}
          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-accent-light/10 to-primary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Maximum Savings with Both Plans</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">10% OFF</div>
                <p className="text-muted-foreground mb-6">
                  Combine Zelo Club (5%) + Zelo SIP (5%) for maximum savings on every order!
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-primary">₹500</div>
                    <div className="text-sm text-muted-foreground">Order Value</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-cranberry">- ₹50</div>
                    <div className="text-sm text-muted-foreground">You Save</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-fresh-green">₹450</div>
                    <div className="text-sm text-muted-foreground">You Pay</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-primary mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What's the difference between Zelo Club and Zelo SIP?",
                  answer: "Zelo Club is our membership program offering 5% discount and exclusive benefits. Zelo SIP is our subscription service with monthly deliveries and an additional 5% discount. You can have both for maximum 10% savings!"
                },
                {
                  question: "How does the Zelo Club discount work?",
                  answer: "Once you join Zelo Club, you get 5% off on all orders. The discount stays active for 1 year from your last purchase, so regular customers always enjoy the benefits."
                },
                {
                  question: "Can I customize my Zelo SIP box?",
                  answer: "Absolutely! You can choose your preferred products, quantities, and delivery frequency. Modify your box anytime through your account dashboard."
                },
                {
                  question: "Can I pause my Zelo SIP subscription?",
                  answer: "Yes, you can pause, modify, or cancel your Zelo SIP subscription anytime without any penalty. We want maximum flexibility for your lifestyle."
                },
                {
                  question: "How much can I save with both plans?",
                  answer: "With both Zelo Club (5%) and Zelo SIP (5%), you save a total of 10% on every order plus enjoy all the membership benefits and monthly convenience."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">Ready to Start Your Health Investment?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've made Enerzelo their daily wellness partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Join Zelo Club Free
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              Start Zelo SIP Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZeloClub;