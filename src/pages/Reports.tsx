import { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Mail, Slack, ArrowLeft, FileText, Settings, Home, PieChart, Users, Bell, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Reports = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("reports");

  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: PieChart, label: "Reports", id: "reports" },
    { icon: Users, label: "Teams", id: "teams" },
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: Settings, label: "Settings", id: "settings" },
    { icon: HelpCircle, label: "Help & Support", id: "help" },
  ];

  const reports = [
    {
      id: "product-dev",
      title: "Product Development Issues",
      summary: "Analysis of Product Development Tickets",
      content: `Based on the analysis of recent tickets:

• 45% of issues relate to UI/UX improvements
• Critical bug reports have decreased by 23%
• Performance optimization requests increased by 15%

Key Action Items:
1. Prioritize mobile responsiveness fixes
2. Schedule technical debt review
3. Update documentation for new features`,
    },
    {
      id: "operations",
      title: "Operations Overview",
      summary: "System Operations and Infrastructure Analysis",
      content: `Infrastructure Health Analysis:

• System uptime maintained at 99.9%
• Resource utilization optimized by 12%
• Deployment frequency increased by 30%

Recommendations:
1. Scale database resources
2. Implement additional monitoring
3. Review disaster recovery procedures`,
    },
    {
      id: "payments",
      title: "Payment Processing Report",
      summary: "Transaction Processing and Financial Analysis",
      content: `Payment System Analysis:

• Transaction success rate: 99.7%
• Average processing time: 1.2s
• Failed transaction rate reduced by 18%

Priority Actions:
1. Upgrade payment gateway
2. Enhance fraud detection
3. Optimize checkout flow`,
    },
  ];

  const handleShare = (platform: "gmail" | "slack") => {
    if (!selectedReport) return;
    
    const report = reports.find(r => r.id === selectedReport);
    if (!report) return;

    toast({
      title: "Sharing Report",
      description: `Report "${report.title}" will be shared via ${platform}`,
    });
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <Sidebar>
            <SidebarHeader className="flex items-center justify-center p-4">
              <img
                src="/lovable-uploads/8197dcdd-5c74-4b53-a25a-e2076a00cc25.png"
                alt="Hypersight Logo"
                className="w-32 object-contain"
              />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.id)}
                      data-active={activeSection === item.id}
                      className="w-full"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Reports Overview</h1>
                  <p className="text-gray-500 mt-1">Select a report to view detailed insights and analysis</p>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => navigate(-1)}
                  className="text-gray-600"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="space-y-4">
                      {reports.map((report) => (
                        <motion.button
                          key={report.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedReport(report.id)}
                          className={`w-full p-6 rounded-lg text-left transition-all ${
                            selectedReport === report.id
                              ? "bg-primary/10 border-2 border-primary"
                              : "bg-gray-50 hover:bg-gray-100"
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/5">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg">
                                {report.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {report.summary}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {selectedReport && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white rounded-xl shadow-lg"
                    >
                      <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900">
                          {reports.find(r => r.id === selectedReport)?.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Generated on {new Date().toLocaleDateString()}
                        </p>
                      </div>
                      <div className="p-6">
                        <div className="prose max-w-none">
                          <pre className="whitespace-pre-wrap font-sans text-sm text-gray-600 bg-transparent border-0 p-0">
                            {reports.find(r => r.id === selectedReport)?.content}
                          </pre>
                        </div>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-b-xl">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            onClick={() => handleShare("gmail")}
                            className="flex-1 bg-[#EA4335] hover:bg-[#D93025] text-white"
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Share via Gmail
                          </Button>
                          <Button
                            onClick={() => handleShare("slack")}
                            className="flex-1 bg-[#4A154B] hover:bg-[#3a1139] text-white"
                          >
                            <Slack className="mr-2 h-4 w-4" />
                            Share via Slack
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Reports;