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
import { Home, PieChart, Settings, Users, Bell, HelpCircle } from "lucide-react";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import TeamPerformance from "@/components/dashboard/TeamPerformance";
import PriorityIssues from "@/components/dashboard/PriorityIssues";

const Demo = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: PieChart, label: "Reports", id: "reports" },
    { icon: Users, label: "Teams", id: "teams" },
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: Settings, label: "Settings", id: "settings" },
    { icon: HelpCircle, label: "Help & Support", id: "help" },
  ];

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
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <div className="flex items-center gap-4">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                    JD
                  </div>
                </div>
              </div>

              <DashboardMetrics />

              <div className="grid gap-6 md:grid-cols-2">
                <SystemPerformanceChart />
                <TeamPerformance />
              </div>

              <PriorityIssues />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Demo;