
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { BadgePercent, CalendarCheck, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            One plan for everyone with unlimited generations. Expand as your needs grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main pricing card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-2"
          >
            <Card className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl h-full">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20 pb-8 pt-8">
                <CardTitle className="text-3xl font-bold text-white">Hypertype</CardTitle>
                <CardDescription className="text-lg text-white/80">
                  Complete AI solution for machinery manufacturers
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-white">$59</span>
                  <span className="text-white/70 ml-2">per user / month</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited AI generations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Custom machinery knowledge base</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Support system integrations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Fast response generation for complex machinery questions</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6"
                  onClick={() => window.open('https://hypertype.fillout.com/talktosales?_gl=1*fyovem*_gcl_au*MTQxOTAzNDA1OC4xNzMxNTgzNTYz', '_blank')}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Side cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Add-ons card */}
            <Card className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-white">Add-ons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Learn from your customer conversations: continuously sync your ticket data every month to improve answers and update your help center.
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">$50</span>
                    <span className="text-white/70 ml-2 text-sm">per 1000 tickets synced</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special offer card */}
            <Card className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg relative">
              <div className="absolute -top-2 right-4 bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full text-white text-xs font-medium">
                Limited Time
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <BadgePercent className="h-5 w-5 mr-2 text-primary" />
                  Bauma Special Offer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CalendarCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">20% discount</p>
                      <p className="text-gray-400 text-sm">If signing during Bauma week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">10% discount</p>
                      <p className="text-gray-400 text-sm">If signing week after Bauma</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
