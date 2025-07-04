import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            🔄 Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How HomeBite Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting food lovers with passionate home chefs in just a few simple steps
          </p>
        </div>

        {/* For Customers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            For Food Lovers 🍽️
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-primary-foreground">🔍</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Discover</h4>
                <p className="text-muted-foreground">
                  Browse nearby home chefs and their amazing homemade dishes
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-primary-foreground">📱</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Order</h4>
                <p className="text-muted-foreground">
                  Choose "Made-for-You" or "Available Now" and place your order
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-primary-foreground">🍳</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Prepare</h4>
                <p className="text-muted-foreground">
                  Watch as your chef prepares your meal with love and care
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-primary-foreground">🎉</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Enjoy</h4>
                <p className="text-muted-foreground">
                  Pick up or dine-in and enjoy your fresh, homemade meal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* For Chefs */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            For Home Chefs 👨‍🍳
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-accent-foreground">📝</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Register</h4>
                <p className="text-muted-foreground">
                  Sign up and get verified as a trusted home chef in our community
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-accent-foreground">📋</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">List Dishes</h4>
                <p className="text-muted-foreground">
                  Add your signature dishes with photos, prices, and availability
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-accent-foreground">🛎️</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Receive Orders</h4>
                <p className="text-muted-foreground">
                  Get notified when customers place orders for your delicious food
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-accent-foreground">💰</span>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">Earn Money</h4>
                <p className="text-muted-foreground">
                  Turn your passion for cooking into a rewarding income stream
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;