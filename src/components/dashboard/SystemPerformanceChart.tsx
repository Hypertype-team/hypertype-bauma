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
    <div className="rounded-xl border bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">System Performance Trends</h3>
        <p className="mt-1 text-sm text-gray-500">Monthly tracking of system issues and optimization requests</p>
      </div>
      <div className="relative aspect-[16/9] w-full max-h-[300px]">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={chartData} 
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4776e6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4776e6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="optimizationGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                tickLine={false}
                axisLine={true}
                dy={10}
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis 
                tickLine={false}
                axisLine={true}
                dx={-10}
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                wrapperClassName="rounded-lg shadow-md bg-white/90 backdrop-blur-sm border border-gray-100 p-2"
              />
              <Area
                type="monotone"
                dataKey="energyIssues"
                stroke="#4776e6"
                fill="url(#energyGradient)"
                strokeWidth={2}
                dot={{ stroke: '#4776e6', strokeWidth: 2, r: 4, fill: '#fff' }}
                activeDot={{ r: 6, stroke: '#4776e6', strokeWidth: 2, fill: '#fff' }}
              />
              <Area
                type="monotone"
                dataKey="systemOptimization"
                stroke="#9b87f5"
                fill="url(#optimizationGradient)"
                strokeWidth={2}
                dot={{ stroke: '#9b87f5', strokeWidth: 2, r: 4, fill: '#fff' }}
                activeDot={{ r: 6, stroke: '#9b87f5', strokeWidth: 2, fill: '#fff' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default SystemPerformanceChart;