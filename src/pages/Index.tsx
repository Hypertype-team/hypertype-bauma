
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CustomerStories from "@/components/CustomerStories";
import PricingSection from "@/components/PricingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import Toolbar from "@/components/Toolbar";

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Toolbar />
      <HeroSection />
      <CustomerStories />
      <div id="features">
        <FeaturesSection />
      </div>
      <IntegrationsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <footer className="py-8 text-center text-gray-400">
        A <a href="https://www.hypertype.ai/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/lovable-uploads/9fe56b51-bb4e-4019-8bf9-a2efe848460a.png" 
            alt="Hypertype" 
            className="h-12 mx-1 inline-block"
          />
        </a> product
      </footer>
    </div>
  );
};

export default Index;
