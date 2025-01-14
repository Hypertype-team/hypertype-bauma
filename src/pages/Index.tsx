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
    </div>
  );
};

export default Index;