import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#333333";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default Index;