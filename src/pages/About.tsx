import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import familyZeloMovement from "@/assets/family-zelo-movement.jpg";

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
