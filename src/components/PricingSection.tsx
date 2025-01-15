import { motion } from "framer-motion";
import { Button } from "./ui/button";

const PricingCard = ({ title, originalPrice, earlyBirdPrice, yearlyPrice, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto"
  >
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-white text-sm">
      Early Bird Program
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="mb-6">
      <div className="text-gray-400 line-through mb-1">${originalPrice}/month</div>
      <div className="text-4xl font-bold text-white">${earlyBirdPrice}/month</div>
      <div className="text-primary mt-1">${yearlyPrice} billed yearly</div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-300 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <Button
      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6"
    >
      Get Started
    </Button>
  </motion.div>
);

const PricingSection = () => {
  const plan = {
    title: "Early Bird Plan",
    originalPrice: "1,000",
    earlyBirdPrice: "500",
    yearlyPrice: "6,000",
    features: [
      "Unlimited tickets",
      "Custom support integration",
      "Any sync interval",
      "Priority support",
      "Custom features",
    ],
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Early Bird Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our early bird program and get premium features at a fraction of the regular price. 
            We'll sync your tickets at any interval you need - whether it's daily, weekly, or monthly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <PricingCard {...plan} />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;