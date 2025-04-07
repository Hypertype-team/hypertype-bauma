
import { motion } from "framer-motion";
import { MessageSquare, Users, Link } from "lucide-react";
import FeatureCard from "./features/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Sales Acceleration",
      description:
        "Help your sales team instantly retrieve accurate product specifications, pricing, and case studies, closing deals faster without needing to constantly check with engineering.",
      icon: Users
    },
    {
      title: "Customer Support Excellence",
      description:
        "Transform multi-hour research into seconds with our AI. Support teams can instantly answer complex technical questions about your machinery products and spare parts with confidence.",
      icon: MessageSquare
    },
    {
      title: "Seamless Integration",
      description:
        "Hypertype connects with your existing CRM, ticketing systems, and knowledge bases, bringing AI assistance directly to where your team already works without disrupting workflows.",
      icon: Link
    },
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
            Machinery Support Made Simple
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Hypertype transforms how machinery manufacturers respond to technical inquiries,
            turning hours of research into seconds of AI-powered answers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
