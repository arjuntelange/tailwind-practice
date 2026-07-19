import { Check } from "lucide-react";
import React from "react";

function PricingCard() {
  const plans = [
    {
      name: "Basic",
      price: "₹0/mo",
      textColor: "text-orange-500",
      lightText: "text-orange-300",
      btnColor: "bg-orange-400",
      btnHover: "hover:bg-orange-500",
    },
    {
      name: "Pro",
      price: "₹499/mo",
      featured: true,
      textColor: "text-blue-500",
      lightText: "text-blue-300",
      btnColor: "bg-blue-400",
      btnHover: "hover:bg-blue-500",
    },
    {
      name: "Premium",
      price: "₹999/mo",
      textColor: "text-purple-500",
      lightText: "text-purple-300",
      btnColor: "bg-purple-400",
      btnHover: "hover:bg-purple-500",
    },
  ];

  return (
    <>
      <div className="p-12 w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {plans.map((plan) => (
          <div
            className={
              plan.featured
                ? `w-full max-w-sm p-6 bg-white rounded-2xl shadow-2xl flex flex-col gap-3 hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 scale-105 border-2 border-blue-500`
                : `w-full max-w-sm p-6 bg-white rounded-2xl shadow-2xl flex flex-col gap-3 hover:-translate-y-2 hover:shadow-3xl transition-all duration-300`
            }
            key={plan.name}
          >
            <h2
              className={`text-center text-3xl font-bold ${plan.textColor} font-mono`}
            >
              {plan.name}
            </h2>
            <p
              className={`text-center text-xl font-semibold ${plan.lightText} font-mono`}
            >
              {plan.price}
            </p>
            <ul
              className={`p-6 flex flex-col gap-6 ${plan.textColor} font-sans font-semibold`}
            >
              <li className="flex gap-2 items-center text-lg">
                <Check size={22} />
                Features
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Check size={22} />
                Features
              </li>
              <li className="flex gap-2 items-center text-lg">
                <Check size={22} />
                Features
              </li>
            </ul>

            <button
              className={`my-3 px-3 py-2 ${plan.btnColor} rounded-xl text-md font-bold text-white ${plan.btnHover} hover:scale-105 transition-all duration-150 ease-in cursor-pointer`}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default PricingCard;
