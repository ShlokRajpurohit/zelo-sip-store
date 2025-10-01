import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/enerzelo-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Enerzelo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-smooth">Home</Link>
          <Link to="/products" className="text-foreground hover:text-primary transition-smooth">Products</Link>
          <Link to="/zelo-rewards" className="text-foreground hover:text-primary transition-smooth">Zelo Rewards</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-smooth">About Us</Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/account">
            <Button variant="ghost" size="icon"><User className="h-5 w-5" /></Button>
          </Link>
          <Link to="/cart">
            <Button variant="outline" size="icon"><ShoppingCart className="h-5 w-5" /></Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-lg hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="text-lg hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/zelo-rewards" className="text-lg hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Zelo Rewards</Link>
            <Link to="/about" className="text-lg hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="text-lg hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
