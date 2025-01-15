import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Slack, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Reports = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const reports = [
    {
      id: "product-dev",
      title: "Product Development Issues",
      summary: "AI-Generated Analysis of Product Development Tickets",
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-600 dark:text-gray-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                AI-Generated Reports
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Select a report category to view detailed AI analysis and insights.
              </p>
              <div className="space-y-4">
                {reports.map((report) => (
                  <motion.button
                    key={report.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedReport(report.id)}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      selectedReport === report.id
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {report.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {report.summary}
                    </p>
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
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {reports.find(r => r.id === selectedReport)?.title}
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-gray-600 dark:text-gray-300">
                      {reports.find(r => r.id === selectedReport)?.content}
                    </pre>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => handleShare("gmail")}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send with Gmail
                  </Button>
                  <Button
                    onClick={() => handleShare("slack")}
                    className="flex-1 bg-[#4A154B] hover:bg-[#3a1139] text-white"
                  >
                    <Slack className="mr-2 h-4 w-4" />
                    Send in Slack
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;