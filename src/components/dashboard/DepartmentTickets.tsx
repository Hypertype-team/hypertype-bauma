import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const departmentData = [
  { name: "Product Development", tickets: 245, color: "#4776e6" },
  { name: "Operations", tickets: 180, color: "#8a56e9" },
  { name: "Payment Processing", tickets: 156, color: "#9b87f5" },
  { name: "Customer Support", tickets: 210, color: "#7E69AB" }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-3">
        <p className="font-medium text-gray-800">{payload[0].name}</p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">{payload[0].value}</span> tickets
        </p>
      </div>
    );
  }
  return null;
};

const DepartmentTickets = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Tickets per Department</h3>
        <p className="mt-1 text-sm text-gray-500">Distribution of support tickets across teams</p>
      </div>
      <div className="relative aspect-[4/3] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={departmentData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="tickets"
              nameKey="name"
            >
              {departmentData.map((entry) => (
                <Cell 
                  key={entry.name} 
                  fill={entry.color}
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              layout="vertical" 
              align="right"
              verticalAlign="middle"
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-gray-600">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DepartmentTickets;