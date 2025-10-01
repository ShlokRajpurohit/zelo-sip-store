import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ZeloRewards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent-light/5 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-primary mb-6">Zelo Rewards</h1>
          <p className="text-premium max-w-2xl mx-auto mb-8">
            Your Health Investment Plan. Make your healthy habits yummier with rewards that grow with your commitment.
          </p>
        </div>
      </section>

      {/* Three Rewards Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Zelo Welcome - Achhi Shuruaat Offer */}
            <Card className="border-2 border-accent/30 hover:border-accent transition-all hover:shadow-premium">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Achhi Shuruaat Offer</CardTitle>
                <p className="text-sm text-muted-foreground">Zelo Welcome</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-accent mb-4">10% OFF</div>
                <p className="text-premium">
                  Celebrate your healthy beginning—enjoy 10% off on your first Enerzelo order as our warm welcome to the community.
                </p>
              </CardContent>
            </Card>

            {/* Zelo Club - Join the Mission */}
            <Card className="border-2 border-primary/50 hover:border-primary transition-all hover:shadow-premium relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full">
                Most Popular
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Join the Mission</CardTitle>
                <p className="text-sm text-muted-foreground">Zelo Club</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">5% OFF</div>
                <p className="text-premium">
                  Stay active with at least one purchase a year and enjoy a 5% discount as a Zelo Club member — your commitment matters!
                </p>
              </CardContent>
            </Card>

            {/* Zelo SIP - Maximum Savings */}
            <Card className="border-2 border-fresh-green/30 hover:border-fresh-green transition-all hover:shadow-premium">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-fresh-green" />
                </div>
                <CardTitle className="text-2xl text-primary">Maximum Savings</CardTitle>
                <p className="text-sm text-muted-foreground">Zelo SIP</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-fresh-green mb-4">10% OFF</div>
                <p className="text-premium">
                  Build a healthy habit by buying monthly or at least once every two months. Enjoy an extra 5% off with every order—that means, a total 10% off for consistent commitment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left">
                  What is Zelo Welcome (Achhi Shuruaat Offer)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Zelo Welcome is our way of celebrating your healthy beginning. Get 10% off on your very first Enerzelo order as our warm welcome gift to the community.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left">
                  How does Zelo Club work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Stay active with at least one purchase within a year from your last purchase, and enjoy a 5% discount as a Zelo Club member. Your commitment to health matters!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left">
                  What is Zelo SIP (Maximum Savings)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Build a healthy habit by purchasing monthly or at least once every two months. You'll get an extra 5% off with every order—meaning a total 10% discount for consistent commitment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left">
                  Can I combine Zelo Club and Zelo SIP discounts?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! If you maintain purchases every 1-2 months (Zelo SIP), you automatically qualify for both the 5% Club discount and the additional 5% SIP discount, giving you a total of 10% off.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left">
                  Do I need to sign up separately for these rewards?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No separate signup is needed! Your discounts are automatically tracked based on your purchase history and applied at checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left">
                  What happens if I miss a purchase window?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Don't worry! You can always restart your journey. Make a purchase to reactivate your Zelo Club status, and maintain consistency for Zelo SIP benefits.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md text-primary mb-6">Ready to Start Your Yummy Health Investment?</h2>
          <p className="text-premium max-w-2xl mx-auto mb-8">
            Join thousands of happy customers who are making healthy habits delicious and rewarding.
          </p>
          <Link to="/products">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Zelo Journey Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ZeloRewards;
