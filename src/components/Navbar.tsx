import { Button } from "@/components/ui/button";
import chefIcon from "@/assets/chef-icon.jpg";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={chefIcon} 
              alt="HomeBite" 
              className="h-10 w-10 rounded-lg shadow-soft"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">HomeBite</h1>
              <p className="text-xs text-muted-foreground">Fresh. Homemade. Local.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors duration-300">
              How it Works
            </a>
            <a href="#for-chefs" className="text-foreground hover:text-primary transition-colors duration-300">
              For Chefs
            </a>
            <a href="#for-customers" className="text-foreground hover:text-primary transition-colors duration-300">
              For Customers
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;