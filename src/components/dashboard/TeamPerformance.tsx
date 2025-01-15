import React from "react";

const teamMembers = [
  { name: "Alice Smith", tickets: 45, rating: 4.8 },
  { name: "Bob Johnson", tickets: 38, rating: 4.6 },
  { name: "Carol Williams", tickets: 42, rating: 4.9 },
];

const TeamPerformance = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-medium">Team Performance</h3>
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-medium text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-500">{member.tickets} tickets resolved</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="font-medium">{member.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPerformance;