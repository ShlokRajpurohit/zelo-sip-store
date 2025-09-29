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
          <div className="relative group">
            <span className="text-foreground hover:text-primary transition-smooth cursor-pointer">
              Products
            </span>
            <div className="absolute top-full left-0 w-48 bg-card border border-border rounded-lg shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-2">
                <Link to="/products/protein-bars" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth">
                  Protein Bars
                </Link>
                <Link to="/products/granola-bars" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth">
                  Granola Bars
                </Link>
                <Link to="/products/protein-mix" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth">
                  Protein Mix
                </Link>
                <Link to="/products/granola-mix" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth">
                  Granola Mix
                </Link>
              </div>
            </div>
          </div>
          <Link to="/zelo-club" className="text-foreground hover:text-primary transition-smooth">
            Zelo Club
          </Link>
          <Link to="/account" className="text-foreground hover:text-primary transition-smooth">
            Account
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
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-cranberry text-cranberry-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;