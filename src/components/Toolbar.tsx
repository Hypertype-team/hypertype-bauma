import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Toolbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img
            src="/lovable-uploads/c8a54598-c4ba-4951-b583-b599b6ad2e7e.png"
            alt="Hypersight Logo"
            className="h-12"
          />
        </div>
        <Button
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white px-6 py-2"
        >
          Book a Meeting
        </Button>
      </div>
    </motion.div>
  );
};

export default Toolbar;