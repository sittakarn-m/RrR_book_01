import React from "react";
import { Link } from "react-router-dom";
import OrderList from "../../components/OrderList";
import SearchBar from "../../components/SearchBar";
import OrderTable from "../../components/OrderTable";

function Dashboard() {
  return (
    <div className="pt-40 pl-[100px] min-h-screen mb-20">
      {/* <OrderTable /> */}
      <OrderList />
    </div>
  );
}

export default Dashboard;
