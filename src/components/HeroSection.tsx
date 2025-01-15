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
            Stop Guesstimating
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto"
          >
            Use your support tickets as product direction with Hypersight
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Your support tickets are more than tasks – they're a treasure map. 
            Hypersight analyzes and synthesizes your support tickets, generating powerful reports 
            that direct your organization and help you make data-driven decisions, prioritize 
            confidently, and stay laser-focused on what makes you better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mb-20"
          >
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg rounded-lg"
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
              <img src="/lovable-uploads/0d49ea4a-140e-4f5c-9274-eb01ad8c50f2.png" alt="Wired" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/0f3bf8be-3e80-4ee8-bf96-66a17672ccf5.png" alt="Breakit" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/14e8106c-3784-42e4-a732-6674b1e928e7.png" alt="Digital" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/32aa1dc1-bcab-4433-b372-7af6c64ef6ee.png" alt="Tech.eu" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/4bf29358-ac97-4c98-94fd-b6afa234ceb7.png" alt="Luminar Ventures" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/7e7127fb-d7da-47c0-828d-fc1724b0c7f3.png" alt="Sting" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
              <img src="/lovable-uploads/8197dcdd-5c74-4b53-a25a-e2076a00cc25.png" alt="Antler" className="h-8 opacity-50 hover:opacity-75 transition-opacity" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;