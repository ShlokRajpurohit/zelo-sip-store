import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CorePillars from "@/components/CorePillars";
import ProductShowcase from "@/components/ProductShowcase";
import ZeloClub from "@/components/ZeloClub";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CorePillars />
      <ProductShowcase />
      <ZeloClub />
    </div>
  );
};

export default Index;
