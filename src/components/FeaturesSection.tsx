import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BarChart3, Layers, TrendingUp } from "lucide-react";
import FeatureCard from "./features/FeatureCard";
import ImageShowcase from "./features/ImageShowcase";

const FeaturesSection = () => {
  const [frontImage, setFrontImage] = useState<'reports' | 'dashboard'>('reports');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontImage(prev => prev === 'reports' ? 'dashboard' : 'reports');
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      title: "Data-Driven Insights",
      description:
        "Transform your support tickets into actionable insights with our advanced analytics engine. Understand user pain points and prioritize improvements effectively.",
      icon: BarChart3
    },
    {
      title: "Smart Categorization",
      description:
        "Automatically categorize and prioritize support tickets using AI-powered analysis. Save time and ensure consistent ticket handling across your team.",
      icon: Layers
    },
    {
      title: "Trend Analysis",
      description:
        "Identify patterns and trends in your support data to proactively address customer needs. Stay ahead of issues before they become widespread problems.",
      icon: TrendingUp
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" 
        style={{ transform: 'translateY(-2px)', height: 'calc(100% + 4px)' }} 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,118,230,0.1)_0%,rgba(138,86,233,0.06)_35%,rgba(138,86,233,0.02)_70%,transparent_100%)] animate-gradient-shift bg-[length:200%_200%]"
        style={{ transform: 'translateY(-2px)', height: 'calc(100% + 4px)' }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/5 via-black/10 to-transparent"
        style={{ transform: 'translateY(-2px)', height: 'calc(100% + 4px)', opacity: 0.4 }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
            Your Support Data is Your Goldmine
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hypersight synthesizes your ticket data into actionable insights,
            helping you make informed decisions to improve your product.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <ImageShowcase frontImage={frontImage} setFrontImage={setFrontImage} />
          </div>

          <div className="lg:col-span-5 space-y-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;