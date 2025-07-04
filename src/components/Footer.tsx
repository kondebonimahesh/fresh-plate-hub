import chefIcon from "@/assets/chef-icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={chefIcon} 
                alt="HomeBite" 
                className="h-8 w-8 rounded-lg shadow-soft"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">HomeBite</h3>
                <p className="text-xs text-muted-foreground">Fresh. Homemade. Local.</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting food lovers with passionate home chefs for authentic, 
              homemade meals that bring communities together.
            </p>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">How to Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Made-for-You</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Available Now</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Customer Reviews</a></li>
            </ul>
          </div>

          {/* For Chefs */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">For Chefs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Become a Chef</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Chef Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Pricing & Fees</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 HomeBite. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;