import { motion } from "framer-motion";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Zendesk", logo: "/lovable-uploads/4bf29358-ac97-4c98-94fd-b6afa234ceb7.png" },
    { name: "Intercom", logo: "/lovable-uploads/fe196bd1-4fe7-4741-90b3-1f9a23f33545.png" },
    { name: "Freshdesk", logo: "/lovable-uploads/8686579e-551d-4287-8280-93444ddd945c.png" },
    { name: "HubSpot", logo: "/lovable-uploads/0f3bf8be-3e80-4ee8-bf96-66a17672ccf5.png" },
    { name: "Salesforce", logo: "/lovable-uploads/0262e216-a00c-495c-9ae0-b87df29b97c7.png" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Integration visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-[400px] h-[400px] mx-auto flex items-center justify-center">
              {/* Center Hypersight logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute z-10"
              >
                <div className="w-32 h-32 rounded-full bg-[#9b87f5]/10 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/lovable-uploads/c8a54598-c4ba-4951-b583-b599b6ad2e7e.png"
                    alt="Hypersight"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </motion.div>

              {/* Integration logos in a circle */}
              {integrations.map((integration, index) => {
                const angle = (index * 360) / integrations.length;
                const radius = 160; // Distance from center
                const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

                return (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="absolute w-24 h-24"
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`,
                    }}
                  >
                    {/* Connection line */}
                    <div
                      className="absolute w-full h-full -z-10"
                      style={{
                        background: `linear-gradient(${angle}deg, transparent 40%, rgba(155, 135, 245, 0.2) 40%, rgba(126, 105, 171, 0.2) 60%, transparent 60%)`,
                      }}
                    />
                    
                    {/* Logo container */}
                    <div className="w-24 h-24 p-4 rounded-xl bg-[#9b87f5]/10 backdrop-blur-sm border border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-colors">
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
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-6"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent">
              Connect Your Support Stack
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Seamlessly integrate Hypersight with your existing support tools. Our platform works instantly with leading solutions like Zendesk, Intercom, Freshdesk, HubSpot, and Salesforce.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#9b87f5]" />
                <span>One-click integration setup</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#9b87f5]" />
                <span>Real-time data synchronization</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#9b87f5]" />
                <span>No coding required</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
