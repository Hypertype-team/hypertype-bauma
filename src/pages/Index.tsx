import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
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
      <div id="features">
        <FeaturesSection />
      </div>
      <IntegrationsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="hypertype">
        {/* Hypertype section placeholder */}
      </div>
      <footer className="py-8 text-center text-gray-400">
        A <img src="/lovable-uploads/2e36b23b-1bf7-4a27-8701-ba0f74d0d83c.png" alt="Hypertype" className="h-6 mx-1 inline-block" /> product
      </footer>
    </div>
  );
};

export default Index;