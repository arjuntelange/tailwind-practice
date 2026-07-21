import { Check } from "lucide-react";
import React from "react";

const activity = [
  "New user joined",
  "New order placed",
  "Premium subscription purchased",
];

function RecentActivity() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-6 flex flex-col gap-3.5">
        <h2 className="my-3 text-3xl font-sans font-semibold text-gray-700">Recent Activity</h2>

        {activity.map((currentActivity, index) => (
          <p
            className="mx-3 text-lg font-sans text-gray-600 flex items-center gap-1"
            key={index}
          >
            <Check /> {currentActivity}
          </p>
        ))}
      </div>
    </>
  );
}

export default RecentActivity;
