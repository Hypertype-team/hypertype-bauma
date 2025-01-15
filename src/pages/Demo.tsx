import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, Users, MessageCircle, TrendingUp, AlertCircle } from "lucide-react";

const Demo = () => {
  const mockData = [
    { category: "Feature Request", count: 156 },
    { category: "Bug Report", count: 98 },
    { category: "UX Issue", count: 72 },
    { category: "Performance", count: 45 },
    { category: "Documentation", count: 34 },
  ];

  const trendingTopics = [
    { topic: "Mobile App Crashes", growth: "+45%", tickets: 34 },
    { topic: "Login Issues", growth: "+28%", tickets: 27 },
    { topic: "API Integration", growth: "+22%", tickets: 23 },
    { topic: "Dashboard Loading", growth: "+15%", tickets: 19 },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Hypersight Analytics</h1>
            <p className="text-gray-400">Last updated: Today at 2:45 PM</p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-white/5 rounded-lg">
              <div className="text-sm text-gray-400">Total Tickets</div>
              <div className="text-2xl font-bold">1,247</div>
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-lg">
              <div className="text-sm text-gray-400">Resolution Rate</div>
              <div className="text-2xl font-bold">94.3%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Chart Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Ticket Distribution</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="category" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1a1a1a', 
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="count" fill="#4776e6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Trending Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Trending Topics</h2>
                <div className="space-y-4">
                  {trendingTopics.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-4">
                        <TrendingUp className="text-primary" />
                        <div>
                          <div className="font-medium">{item.topic}</div>
                          <div className="text-sm text-gray-400">{item.tickets} tickets</div>
                        </div>
                      </div>
                      <div className="text-green-400 flex items-center gap-1">
                        {item.growth}
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Users size={20} />
                  <span className="text-sm">Users</span>
                </div>
                <div className="text-2xl font-bold">2.4k</div>
                <div className="text-sm text-gray-400">Active this month</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MessageCircle size={20} />
                  <span className="text-sm">Response</span>
                </div>
                <div className="text-2xl font-bold">1.2h</div>
                <div className="text-sm text-gray-400">Average time</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Priority Issues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Priority Issues</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertCircle size={16} />
                      <span className="text-sm font-medium">Critical</span>
                    </div>
                    <div className="font-medium">Payment Gateway Error</div>
                    <div className="text-sm text-gray-400 mt-1">Affecting 3% of transactions</div>
                  </div>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <AlertCircle size={16} />
                      <span className="text-sm font-medium">High</span>
                    </div>
                    <div className="font-medium">Search Functionality</div>
                    <div className="text-sm text-gray-400 mt-1">Performance degradation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Demo;