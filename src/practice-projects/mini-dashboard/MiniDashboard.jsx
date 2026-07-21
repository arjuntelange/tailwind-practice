import React from "react";
import Navbar from "../responsive-navbar/Navbar";
import StatCards from "../dashboard-stats/StatCards";
import RecentOrders from "./RecentOrders";
import RecentActivity from "./RecentActivity";

function MiniDashboard() {
  return (
    <>
      <Navbar />
      
      <div className="my-12">
        <StatCards />
      </div>

      <RecentOrders />

      <div className="mt-12">
        <RecentActivity />
      </div>
    </>
  );
}

export default MiniDashboard;
