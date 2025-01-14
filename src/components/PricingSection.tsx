import { motion } from "framer-motion";
import { Button } from "./ui/button";

const PricingCard = ({ title, price, features, isPopular = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 ${
      isPopular ? "transform scale-105" : ""
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-white text-sm">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="mb-6">
      <div className="text-gray-400 line-through mb-1">Original price</div>
      <div className="text-4xl font-bold text-white">${price}</div>
      <div className="text-primary">Early bird pricing</div>
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
      className={`w-full ${
        isPopular
          ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          : "bg-white/10 hover:bg-white/20"
      } text-white py-6`}
    >
      Get Started
    </Button>
  </motion.div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      price: "29",
      features: [
        "Up to 1,000 tickets/month",
        "Basic analytics",
        "Email support",
        "1 team member",
      ],
    },
    {
      title: "Pro",
      price: "99",
      features: [
        "Up to 10,000 tickets/month",
        "Advanced analytics",
        "Priority support",
        "5 team members",
        "Custom reports",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "299",
      features: [
        "Unlimited tickets",
        "Custom analytics",
        "24/7 support",
        "Unlimited team members",
        "Custom integration",
        "Dedicated account manager",
      ],
    },
  ];

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
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;