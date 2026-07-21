import React from "react";

const data = [
  {
    id: "#1001",
    name: "Priya",
    status: "Completed",
    amount: "₹999",
  },
  {
    id: "#1002",
    name: "Rahul",
    status: "Pending",
    amount: "₹499",
  },
  {
    id: "#1003",
    name: "John",
    status: "Completed",
    amount: "₹799",
  },
];

function RecentOrders() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="border-b hover:bg-gray-50">
              <th className="px-6 py-4 text-left">Order Id</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.map((currentData) => (
              <tr key={currentData.id}>
                <td className="px-6 py-4">{currentData.id}</td>
                <td className="px-6 py-4">{currentData.name}</td>
                <td className="px-6 py-4">{currentData.status}</td>
                <td className="px-6 py-4">{currentData.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RecentOrders;
