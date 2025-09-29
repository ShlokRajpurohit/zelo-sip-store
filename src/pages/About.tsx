import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import heroIngredients from "@/assets/hero-ingredients.jpg";
import familyLifestyle from "@/assets/family-lifestyle.jpg";
import { Heart, Target, Shield, Users, Award, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-primary/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl text-primary mb-6">About Enerzelo</h1>
              <p className="heading-sm text-accent mb-6">Aapki Health Ka SIP</p>
              <p className="text-premium mb-8">
                Enerzelo is on a mission to make India healthy by fighting protein deficiency, one delicious bar at a time. 
                Our promise is simple—we use only 100% natural ingredients with zero added sugar, zero preservatives, 
                and zero chemicals. Every Zelolicious product is crafted for guilt-free indulgence, so you can enjoy 
                extra glow, bigger smiles, and endless happiness.
              </p>
              <p className="text-premium mb-8">
                We believe you shouldn't have to choose between taste and nutrition. Welcome to your new guilt-free 
                habit—join the movement today!
              </p>
              <Button size="lg" className="px-8">Join Our Mission</Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-premium">
                <img 
                  src={heroIngredients} 
                  alt="Natural ingredients" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To combat India's protein deficiency crisis by creating delicious, 100% natural snacks 
                  that make healthy eating accessible, enjoyable, and sustainable for every family.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A healthier India where families enjoy guilt-free indulgence, children love nutritious snacks, 
                  and every bite contributes to a stronger, happier nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-lg text-primary mb-6">The Challenge We Address</h2>
            <div className="bg-cranberry/10 border border-cranberry/20 rounded-2xl p-8">
              <div className="text-6xl font-bold text-cranberry mb-4">90%</div>
              <p className="text-xl text-primary font-semibold mb-4">of India is Protein Deficient</p>
              <p className="text-muted-foreground">
                According to ICMR studies, the vast majority of Indians don't get adequate protein in their daily diet. 
                This leads to poor immunity, muscle weakness, and overall health challenges. We're here to change that 
                with convenient, tasty, and nutritious solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-background to-accent-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-primary mb-6">Our Core Values</h2>
            <p className="text-premium max-w-2xl mx-auto">
              Everything we do is guided by these fundamental principles that shape our products and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-fresh-green" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">100% Natural</h3>
                <p className="text-muted-foreground">
                  Zero added sugar, zero preservatives, zero chemicals. Only pure, natural ingredients 
                  that nature intended.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We source the finest ingredients and maintain the highest quality standards 
                  in every product we create.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-premium transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Family First</h3>
                <p className="text-muted-foreground">
                  Creating products that bring families together through shared moments 
                  of healthy, delicious enjoyment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Enerzelo Effect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-premium">
                <img 
                  src={familyLifestyle} 
                  alt="Happy family enjoying Enerzelo products" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="heading-lg text-primary mb-6">The Enerzelo Effect</h2>
              <p className="text-xl text-accent font-medium mb-6">Extra Glow, Bigger Smiles, Endless Happiness</p>
              <p className="text-premium mb-6">
                When you nourish your body with pure, natural ingredients, the transformation goes beyond just 
                physical health. Our customers experience increased energy, better mood, glowing skin, and 
                the confidence that comes from making healthy choices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Sustained energy throughout the day</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Better immunity and overall health</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Guilt-free indulgence for the whole family</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Convenient nutrition that fits your lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-primary mb-6">Why Trust Enerzelo?</h2>
            <p className="text-premium max-w-2xl mx-auto">
              Our commitment to quality and transparency makes us the trusted choice for health-conscious families
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-fresh-green" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Zero Additives</h3>
              <p className="text-sm text-muted-foreground">No artificial preservatives or chemicals</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-cranberry/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-cranberry" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Natural Sourcing</h3>
              <p className="text-sm text-muted-foreground">Carefully selected premium ingredients</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Quality Tested</h3>
              <p className="text-sm text-muted-foreground">Rigorous quality control processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Family Safe</h3>
              <p className="text-sm text-muted-foreground">Safe for all ages and dietary needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">Join the Enerzelo Movement</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Be part of India's health transformation. Start your journey towards better nutrition and 
            endless happiness today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              Join Zelo Club
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;