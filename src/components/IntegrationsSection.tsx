import { motion } from "framer-motion";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Zendesk", logo: "/lovable-uploads/4bf29358-ac97-4c98-94fd-b6afa234ceb7.png" },
    { name: "Intercom", logo: "/lovable-uploads/fe196bd1-4fe7-4741-90b3-1f9a23f33545.png" },
    { name: "Freshdesk", logo: "/lovable-uploads/8686579e-551d-4287-8280-93444ddd945c.png" },
    { name: "HubSpot", logo: "/lovable-uploads/0f3bf8be-3e80-4ee8-bf96-66a17672ccf5.png" },
    { name: "Salesforce", logo: "/lovable-uploads/32aa1dc1-bcab-4433-b372-7af6c64ef6ee.png" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Connect Your Support Stack</h2>
          <p className="text-xl text-white/70">
            Instantly integrate with your existing support tools
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Center Hypersight logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-24 h-24 rounded-full bg-black border-2 border-primary/30 flex items-center justify-center">
              <img
                src="/lovable-uploads/c8a54598-c4ba-4951-b583-b599b6ad2e7e.png"
                alt="Hypersight"
                className="w-16 h-16 object-contain"
              />
            </div>
          </motion.div>

          {/* Integration logos in a circle */}
          <div className="relative w-[500px] h-[500px] mx-auto">
            {integrations.map((integration, index) => {
              const angle = (index * 360) / integrations.length;
              const radius = 200; // Distance from center
              const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
              const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="absolute w-16 h-16"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                >
                  {/* Connection line */}
                  <div
                    className="absolute w-full h-full -z-10"
                    style={{
                      background: `linear-gradient(${angle}deg, transparent 40%, rgba(71, 118, 230, 0.2) 40%, rgba(138, 86, 233, 0.2) 60%, transparent 60%)`,
                    }}
                  />
                  
                  {/* Logo container */}
                  <div className="w-16 h-16 rounded-full bg-accent p-3 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;