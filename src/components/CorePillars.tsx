import { Shield, Heart, Zap, Award } from "lucide-react";

const CorePillars = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Zero. Zero. Zero.",
      subtitle: "100% Natural",
      description: "Zero added sugar, zero preservatives, zero chemicals. Only nature's finest ingredients.",
      gradient: "from-cranberry to-red-600",
    },
    {
      icon: Heart,
      title: "The Enerzelo Effect",
      subtitle: "Extra Glow, Bigger Smiles",
      description: "Endless happiness starts from within. Natural nutrition for natural radiance.",
      gradient: "from-accent to-yellow-600",
    },
    {
      icon: Zap,
      title: "Protein Power",
      subtitle: "Filling the Gap",
      description: "90% of India is protein deficient. We're here to change that, one bar at a time.",
      gradient: "from-fresh-green to-green-600",
    },
    {
      icon: Award,
      title: "Zelolicious Taste",
      subtitle: "Guilt-Free Indulgence",
      description: "Taste your kids will love. Indulgence adults deserve. Health everyone needs.",
      gradient: "from-primary to-amber-800",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            The Enerzelo Promise
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            Every ingredient, every process, every promise – crafted with one mission: 
            to make India healthier, one natural bite at a time.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="heading-sm text-foreground mb-2">
                {pillar.title}
              </h3>
              <h4 className="text-lg font-semibold text-accent mb-3">
                {pillar.subtitle}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;