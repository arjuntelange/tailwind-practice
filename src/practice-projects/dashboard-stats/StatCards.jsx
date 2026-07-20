import { IndianRupee, Package, Star, Users } from "lucide-react";
import React from "react";

function StatCards() {
  const stats = [
    {
      title: "Users",
      value: "12,345",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Revenue",
      value: "₹1.2L",
      icon: IndianRupee,
      color: "text-green-600",
    },
    {
      title: "Orders",
      value: "856",
      icon: Package,
      color: "text-orange-600",
    },
    {
      title: "Rating",
      value: "4.9",
      icon: Star,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="w-full max-w-sm h-fit p-7 bg-white rounded-2xl shadow-2xl shadow-gray-200 border border-gray-100 hover:shadow-xl hover:-translate-y-3 hover:scale-105 duration-200 ease-in"
          >
            <h2 className={`text-2xl ${stat.color} font-sans font-semibold flex items-center gap-2`}>
              <Icon size={24} />
              {stat.title}
            </h2>
            <p className={`mt-5 text-lg ${stat.color} font-sans`}>{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StatCards;
