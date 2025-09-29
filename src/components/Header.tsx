import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">E</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Enerzelo</h1>
            <p className="text-xs text-accent font-medium">Aapki Health Ka SIP</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-smooth">
            Home
          </Link>
          <Link to="/products" className="text-foreground hover:text-primary transition-smooth">
            Products
          </Link>
          <Link to="/zelo-club" className="text-foreground hover:text-primary transition-smooth">
            Zelo Club
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
            About Us
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-cranberry text-cranberry-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;