
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from "react";

const CustomerStories = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const companies = [
    {
      name: "TechMachine Industries",
      logo: "/lovable-uploads/61285a54-795a-4658-a993-aa3b567c34e6.png",
    },
    {
      name: "GlobalEquip Manufacturing",
      logo: "/lovable-uploads/18e746c3-ea14-4381-8d1e-acac898e1b02.png",
    },
    {
      name: "Bauma Equipment",
      logo: "/lovable-uploads/ffb57380-8336-4dc7-b3d2-d1d2fa27a382.png",
    }
  ];

  const testimonials = [
    {
      quote: "We struggled to find the right answers fast enough in Zendesk. With Hypertype, our team now gets specialized, instant responses—dramatically improving our after-sales support."
    },
    {
      quote: "We heard about Hypertype from another Zendesk team and gave it a try—game changer. It surfaces precise answers instantly, and our support has never been faster or more reliable."
    },
    {
      quote: "We tried multiple solutions, but none could handle our multilingual support needs—until Hypertype. It fetches the right language and context instantly, something others just couldn't deliver."
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

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-8 px-4 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="h-16 md:h-20 w-48 md:w-56 flex items-center justify-center p-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full object-contain filter brightness-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Quotes Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            What Our Customers Say
          </h3>
          
          {isMounted && (
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-full">
                    <Card className="overflow-hidden bg-black/30 border border-white/10 backdrop-blur-sm">
                      <CardContent className="p-8 md:p-10">
                        <div className="flex flex-col items-center text-center">
                          <Quote className="text-primary h-10 w-10 mb-6 opacity-60" />
                          <p className="text-gray-300 italic mb-8 text-lg md:text-xl leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-2">
                <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 bg-primary/20 hover:bg-primary/30 border-white/10" />
                <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 bg-primary/20 hover:bg-primary/30 border-white/10" />
              </div>
            </Carousel>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerStories;
