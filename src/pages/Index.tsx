import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Users, Shield, Search, Smartphone } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ContactHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your modern contact management solution. Organize, search, and manage all your contacts in one beautiful place.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Easy Management</h3>
            <p className="text-sm text-muted-foreground">
              Add, edit, and delete contacts with an intuitive interface
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
            <Search className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Quick Search</h3>
            <p className="text-sm text-muted-foreground">
              Find any contact instantly with powerful search and filtering
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
            <p className="text-sm text-muted-foreground">
              Your contacts are protected with enterprise-grade security
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
            <Smartphone className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fully Responsive</h3>
            <p className="text-sm text-muted-foreground">
              Access your contacts anywhere, on any device
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
