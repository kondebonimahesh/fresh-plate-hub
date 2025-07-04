import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            ✨ Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Everything You Need for Great Food
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to make ordering and serving homemade food seamless and enjoyable
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - For Customers */}
          <div id="for-customers" className="space-y-8">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4 bg-primary-light text-primary border-primary/20">
                For Food Lovers
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Discover Amazing Homemade Food
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white">🎯</span>
                    </div>
                    <CardTitle className="text-lg">Smart Matching</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Find chefs near you based on cuisine preferences, dietary restrictions, and availability
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white">⭐</span>
                    </div>
                    <CardTitle className="text-lg">Reviews & Ratings</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Read authentic reviews and see ratings from other customers to make informed choices
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white">📱</span>
                    </div>
                    <CardTitle className="text-lg">Real-time Updates</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get live updates on dish availability, preparation time, and order status
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right - For Chefs */}
          <div id="for-chefs" className="space-y-8">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4 bg-accent-light text-accent border-accent/20">
                For Home Chefs
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Turn Your Kitchen Into a Business
              </h3>
            </div>

            <div className="space-y-6">
              <Card className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-white">📊</span>
                    </div>
                    <CardTitle className="text-lg">Chef Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage your menu, track orders, update availability, and analyze your performance
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-white">🔔</span>
                    </div>
                    <CardTitle className="text-lg">Order Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive instant notifications, accept orders, and communicate with customers seamlessly
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-white">💳</span>
                    </div>
                    <CardTitle className="text-lg">Secure Payments</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get paid quickly and securely with automatic transfers to your bank account
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-3xl p-12 shadow-large border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Food Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers and home chefs who are already part of the HomeBite community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Order Your First Meal
            </Button>
            <Button variant="accent" size="xl">
              Start Cooking & Earning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;