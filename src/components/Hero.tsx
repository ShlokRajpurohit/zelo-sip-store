import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-ingredients.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent font-medium px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>100% Natural • Zero Additives • Protein Rich</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-xl text-foreground mb-6">
            <span className="text-accent">Aapki Health Ka SIP:</span><br />
            Start Investing in Wellness, One Bar at a Time
          </h1>

          {/* Subheading */}
          <p className="text-premium max-w-2xl mb-8">
            Experience the Zelolicious taste of guilt-free indulgence. Our 100% natural protein and granola bars are crafted with zero added sugar, zero preservatives, and zero chemicals – because your health deserves nothing but the best.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mb-8">
            <div className="text-center">
              <div className="heading-sm text-cranberry">90%</div>
              <p className="text-sm text-muted-foreground">Indians are protein deficient</p>
            </div>
            <div className="text-center">
              <div className="heading-sm text-fresh-green">0%</div>
              <p className="text-sm text-muted-foreground">Added sugar or chemicals</p>
            </div>
            <div className="text-center">
              <div className="heading-sm text-accent">100%</div>
              <p className="text-sm text-muted-foreground">Natural ingredients</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold transition-smooth shadow-premium">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth">
              Join Zelo Club
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;