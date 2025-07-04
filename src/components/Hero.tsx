import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroChef from "@/assets/hero-chef.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroChef} 
          alt="Home Chef preparing fresh food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-primary bg-primary-light border-primary/20">
              🍽️ Connecting Communities Through Food
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fresh, Homemade Food from 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                {" "}Local Chefs
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover authentic, homemade dishes from verified local chefs. Order fresh meals 
              made-for-you or grab available-now options. Support your community while enjoying 
              delicious, home-cooked food.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="group">
                Start Ordering
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Become a Chef
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Local Chefs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50k+</div>
                <div className="text-sm text-gray-300">Meals Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-scale-in">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-large border border-white/10">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🍳</span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Made-for-You</h3>
              </div>
              <p className="text-muted-foreground">
                Order custom meals prepared fresh just for you. Work directly with chefs for your perfect dish.
              </p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-large border border-white/10">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Available Now</h3>
              </div>
              <p className="text-muted-foreground">
                Browse live menus and order immediately available homemade meals from nearby chefs.
              </p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-large border border-white/10">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Dine-in or Takeaway</h3>
              </div>
              <p className="text-muted-foreground">
                Choose to dine at the chef's place or pick up your order. Flexible options for every lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-accent rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;