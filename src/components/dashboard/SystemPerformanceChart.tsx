import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", energyIssues: 28, systemOptimization: 37 },
  { month: "Feb", energyIssues: 35, systemOptimization: 50 },
  { month: "Mar", energyIssues: 32, systemOptimization: 43 },
  { month: "Apr", energyIssues: 40, systemOptimization: 55 },
  { month: "May", energyIssues: 45, systemOptimization: 70 },
  { month: "Jun", energyIssues: 48, systemOptimization: 77 },
];

const config = {
  energyIssues: {
    theme: {
      light: "#4776e6",
      dark: "#8a56e9",
    },
    label: "Energy System Issues",
  },
  systemOptimization: {
    theme: {
      light: "#9b87f5",
      dark: "#7E69AB",
    },
    label: "System Optimization Requests",
  },
};

const SystemPerformanceChart = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-medium">System Performance Trends</h3>
      <div className="h-[300px] w-full">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="energyIssues"
                stroke="var(--color-energyIssues)"
                fill="var(--color-energyIssues)"
                fillOpacity={0.2}
                stackId="1"
              />
              <Area
                type="monotone"
                dataKey="systemOptimization"
                stroke="var(--color-systemOptimization)"
                fill="var(--color-systemOptimization)"
                fillOpacity={0.2}
                stackId="1"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default SystemPerformanceChart;