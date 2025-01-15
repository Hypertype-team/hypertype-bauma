import { motion } from "framer-motion";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Zendesk", logo: "/lovable-uploads/ac09c7d8-1ea4-4b5c-805e-1c06a08a158d.png" },
    { name: "Intercom", logo: "/lovable-uploads/0d49ea4a-140e-4f5c-9274-eb01ad8c50f2.png" },
    { name: "Freshdesk", logo: "/lovable-uploads/7e7127fb-d7da-47c0-828d-fc1724b0c7f3.png" },
    { name: "HubSpot", logo: "/lovable-uploads/82dfe857-3fff-4bc7-92d4-ae7f3829c15d.png" },
    { name: "Salesforce", logo: "/lovable-uploads/14e8106c-3784-42e4-a732-6674b1e928e7.png" },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Integration visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center">
              {/* Center Hypersight logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute z-10"
              >
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#9b87f5]/10 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/lovable-uploads/c8a54598-c4ba-4951-b583-b599b6ad2e7e.png"
                    alt="Hypersight"
                    className="w-20 h-20 md:w-28 md:h-28 object-contain"
                  />
                </div>
              </motion.div>

              {/* Integration logos in a circle */}
              {integrations.map((integration, index) => {
                const angle = (index * 360) / integrations.length;
                const radius = 200; // Increased radius for better spacing
                const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

                return (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="absolute w-20 h-20 md:w-28 md:h-28"
                    style={{
                      left: `calc(50% + ${x}px - 60px)`,
                      top: `calc(50% + ${y}px - 60px)`,
                    }}
                  >
                    {/* Connection line */}
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10"
                      style={{
                        transform: `rotate(${angle}deg)`,
                      }}
                    >
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Logo container */}
                    <div className="w-20 h-20 md:w-28 md:h-28 p-4 md:p-5 rounded-xl bg-[#9b87f5]/10 backdrop-blur-sm border border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-colors group">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-full h-full object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
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
            <div className="space-y-4">
              <p className="text-xl text-white/70 leading-relaxed">
                Seamlessly integrate Hypersight with your existing support tools. Our platform works instantly with leading solutions like Zendesk, Intercom, Freshdesk, HubSpot, and Salesforce.
              </p>
              <p className="text-xl text-white/70 leading-relaxed">
                Don't see your tool? No problem. Our flexible API allows for custom integrations with any support platform you use.
              </p>
            </div>
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