import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Gift, Percent } from "lucide-react";

const ZeloClub = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Your Health Investment Plan:<br />
            <span className="text-accent">Join Zelo SIP & Get 10% Off!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Zelo Club */}
          <Card className="relative overflow-hidden border-2 border-accent/20 shadow-premium">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              FREE Year 1
            </div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="h-8 w-8 text-accent" />
                <h3 className="heading-md text-foreground">Zelo Club</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Exclusive membership program. First year completely free, then nominal charges. 
                Enjoy 5% discount for one full year from your last purchase.
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Free Now
              </Button>
            </CardContent>
          </Card>

          {/* Zelo SIP */}
          <Card className="relative overflow-hidden border-2 border-primary/20 shadow-premium">
            <div className="absolute top-4 right-4 bg-cranberry text-cranberry-foreground px-3 py-1 rounded-full text-sm font-medium">
              EXTRA 5% OFF
            </div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Gift className="h-8 w-8 text-primary" />
                <h3 className="heading-md text-foreground">Zelo SIP</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Annual subscription with monthly deliveries. Stack with Zelo Club for 
                total 10% savings. Your consistent health partner.
              </p>
              <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ZeloClub;