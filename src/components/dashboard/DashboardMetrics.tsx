import React from "react";

const DashboardMetrics = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Total Tickets</h3>
        <p className="mt-2 text-3xl font-bold">1,234</p>
        <p className="mt-1 text-sm text-green-500">↑ 12% from last month</p>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Response Time</h3>
        <p className="mt-2 text-3xl font-bold">2.4h</p>
        <p className="mt-1 text-sm text-red-500">↓ 5% from last month</p>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Customer Satisfaction</h3>
        <p className="mt-2 text-3xl font-bold">94%</p>
        <p className="mt-1 text-sm text-green-500">↑ 3% from last month</p>
      </div>
    </div>
  );
};

export default DashboardMetrics;