import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(71,118,230,0.1)_0%,transparent_100%)] animate-gradient-shift bg-[length:200%_200%]" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#535050] to-white bg-clip-text text-transparent"
          >
            Know Your Customers. For Real.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Unlock the data from your support tickets
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Your support tickets are more than tasks – they're a treasure map. 
            Hypersight analyzes your tickets to help you make data-driven decisions, 
            prioritize effectively, and focus on what matters most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mb-20"
          >
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg rounded-lg"
              onClick={() => window.open('https://hypertype.fillout.com/talktosales?_gl=1*fyovem*_gcl_au*MTQxOTAzNDA1OC4xNzMxNTgzNTYz', '_blank')}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Logos Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-gray-400 text-lg mb-8">As seen in and backed by</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
              <img src="/lovable-uploads/4d30b938-fed0-47b5-8014-6116fe6fa1db.png" alt="Wired" className="h-16 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/40696f0c-0512-453e-81d7-823afb5b0525.png" alt="Breakit" className="h-16 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/2d335a7f-ab0e-4913-a639-863a380fa80c.png" alt="Di digital" className="h-16 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/3f22f212-acc6-460e-96b0-fbf9f0cdd08f.png" alt="Tech.eu" className="h-16 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/a6fa5011-77ea-48e8-bf98-3799ce5b016e.png" alt="Luminar Ventures" className="h-16 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/a80c2b3d-8898-478b-8798-73180313c739.png" alt="Sting" className="h-16 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/b8098f2a-7fc5-40fe-b1d9-9384a3da29ce.png" alt="Antler" className="h-16 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;