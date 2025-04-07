
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const CustomerStories = () => {
  const customers = [
    {
      name: "TechMachine Industries",
      logo: "/lovable-uploads/366b4dc6-49c4-4978-9463-60aa1889cc41.png",
      quote: "Hypertype transformed our customer service. Our support team now resolves technical inquiries in 75% less time, dramatically improving customer satisfaction while reducing costs.",
      person: "Sarah Johnson, Head of Customer Support"
    },
    {
      name: "GlobalEquip Manufacturing",
      logo: "/lovable-uploads/4bf29358-ac97-4c98-94fd-b6afa234ceb7.png",
      quote: "Before Hypertype, our sales team spent hours searching for technical specifications. Now they get instant answers, closing deals 30% faster and with higher accuracy.",
      person: "Michael Chen, Sales Director"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how manufacturing companies are transforming their operations with Hypertype's AI-powered knowledge management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-black/30 border border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col-reverse md:flex-row gap-6 items-center md:items-start">
                    <div className="flex-1">
                      <Quote className="text-primary h-8 w-8 mb-4 opacity-60" />
                      <p className="text-gray-300 italic mb-6 leading-relaxed">
                        "{customer.quote}"
                      </p>
                      <p className="text-white font-medium">{customer.person}</p>
                    </div>
                    <div className="flex items-center justify-center md:flex-shrink-0 md:w-1/3">
                      <img
                        src={customer.logo}
                        alt={customer.name}
                        className="h-16 md:h-24 lg:h-32 object-contain filter brightness-90"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
