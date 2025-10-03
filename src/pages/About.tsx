import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Leaf, Award, Users, Shield, Target, Heart } from "lucide-react";
import familyZeloMovement from "@/assets/family-zelo-movement.jpg";
import familyLifestyle from "@/assets/family-lifestyle.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-gradient-to-br from-background to-accent-light/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl text-primary mb-8 text-center">About Us</h1>
            <div className="text-premium leading-relaxed space-y-4 text-lg">
              <p>At Enerzelo, we believe health should never come at the cost of taste. Born from a simple idea — to create guilt-free snacks that are as delicious as they are nutritious — Enerzelo is more than just a brand, it's a lifestyle choice for modern families.</p>
              <p>Our flagship product, the Enerzelo Protein Bar, is crafted with crunchy dry fruits, plant-based proteins, and natural sweeteners. With zero added sugar, zero preservatives, and zero harmful chemicals, every bite is packed with the goodness your body deserves.</p>
              <p>What makes us different? We don't believe in shortcuts. No junk, no compromise — just clean ingredients, premium quality, and flavors that make both kids and parents happy.</p>
              <p>Our guiding philosophy is simple: <strong className="text-primary">"Aapki Health ka SIP"</strong> — because health is the best investment you can make. Whether you're a student, a working professional, a fitness enthusiast, or a parent choosing better snacks for your kids, Enerzelo is designed for everyone who values wellness with a touch of indulgence.</p>
              <p className="text-center text-xl font-semibold text-primary pt-4">Nutritious. Delicious. Zelolicious.<br />That's the promise of Enerzelo.</p>
            </div>
            <div className="text-center mt-8">
              <Link to="/products"><Button size="lg" className="px-8">Join Our Mission</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-primary mb-4">Our Core Values</h2>
            <p className="text-premium max-w-2xl mx-auto">
              Everything we do is guided by these fundamental principles that shape our products and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-fresh-green/30 hover:border-fresh-green transition-all hover:shadow-premium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-fresh-green" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">100% Natural</h3>
                <p className="text-muted-foreground">
                  Zero added sugar, zero preservatives, zero chemicals. Only pure, natural ingredients that nature intended.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber/30 hover:border-amber transition-all hover:shadow-premium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-amber" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We source the finest ingredients and maintain the highest quality standards in every product we create.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-premium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Family First</h3>
                <p className="text-muted-foreground">
                  Creating products that bring families together through shared moments of healthy, delicious enjoyment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Challenge We Address */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-primary mb-8">The Challenge We Address</h2>
            <Card className="border-2 border-cranberry/30 bg-gradient-to-br from-cranberry/5 to-cranberry/10">
              <CardContent className="p-12">
                <div className="text-7xl font-bold text-cranberry mb-4">90%</div>
                <h3 className="text-2xl font-bold text-primary mb-4">of India is Protein Deficient</h3>
                <p className="text-premium text-lg">
                  According to ICMR studies, the vast majority of Indians don't get adequate protein in their daily diet. This leads to poor immunity, muscle weakness, and overall health challenges. We're here to change that with convenient, tasty, and nutritious solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-border hover:shadow-premium transition-all">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To combat India's protein deficiency crisis by creating delicious, 100% natural snacks that make healthy eating accessible, enjoyable, and sustainable for every family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:shadow-premium transition-all">
              <CardContent className="p-10 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  A healthier India where families enjoy guilt-free indulgence, children love nutritious snacks, and every bite contributes to a stronger, happier nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Enerzelo Effect */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={familyLifestyle} 
                  alt="Happy family enjoying Enerzelo products" 
                  className="rounded-lg shadow-premium w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="heading-lg text-primary mb-6">The Enerzelo Effect</h2>
                <p className="text-xl font-semibold text-accent mb-6">Extra Glow, Bigger Smiles, Endless Happiness</p>
                <p className="text-premium mb-8">
                  When you nourish your body with pure, natural ingredients, the transformation goes beyond just physical health. Our customers experience increased energy, better mood, glowing skin, and the confidence that comes from making healthy choices.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Sustained energy throughout the day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Better immunity and overall health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Guilt-free indulgence for the whole family</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Convenient nutrition that fits your lifestyle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Enerzelo */}
      <section className="py-20 bg-gradient-to-br from-accent-light/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-primary mb-4">Why Trust Enerzelo?</h2>
            <p className="text-premium max-w-2xl mx-auto">
              Our commitment to quality and transparency makes us the trusted choice for health-conscious families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-fresh-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-fresh-green" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Zero Additives</h3>
              <p className="text-sm text-muted-foreground">No artificial preservatives or chemicals</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cranberry/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-cranberry" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Natural Sourcing</h3>
              <p className="text-sm text-muted-foreground">Carefully selected premium ingredients</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-amber" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Quality Tested</h3>
              <p className="text-sm text-muted-foreground">Rigorous quality control processes</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Family Safe</h3>
              <p className="text-sm text-muted-foreground">Safe for all ages and dietary needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-md text-primary mb-6">Join the Zelo Movement</h2>
              <p className="text-premium max-w-2xl mx-auto">Be part of a community that believes in health, happiness, and delicious nutrition for the whole family.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-premium mb-8">
              <img src={familyZeloMovement} alt="Happy Indian family" className="w-full h-auto object-cover" />
            </div>
            <div className="text-center">
              <Link to="/products"><Button size="lg" className="px-12">Shop Now</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
