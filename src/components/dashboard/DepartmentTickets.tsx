import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const departmentData = [
  { name: "Product Development", tickets: 245 },
  { name: "Operations", tickets: 180 },
  { name: "Payment Processing", tickets: 156 },
  { name: "Customer Support", tickets: 210 }
];

const COLORS = ['#4776e6', '#8a56e9', '#9b87f5', '#7E69AB'];

const DepartmentTickets = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-medium">Tickets per Department</h3>
      <div className="relative aspect-[4/3] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={departmentData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="tickets"
              nameKey="name"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {departmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value} tickets`, name]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DepartmentTickets;