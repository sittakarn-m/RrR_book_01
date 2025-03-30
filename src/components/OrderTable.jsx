import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  // ดึงข้อมูล order จาก backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8899/order/");
        setOrders(res.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // กดปุ่มเพื่ออัปเดตสถานะ
  const handleUpdateStatus = async (orderId) => {
    const confirmUpdate = window.confirm(
      "Do you want to mark this as PENDING?"
    );
    if (!confirmUpdate) return;

    try {
      await axios.patch(`http://localhost:8899/order/${orderId}`, {
        status: "PENDING",
      });

      toast.success("Status updated to PENDING");

      // ลบแถวออกจาก UI หลังอัปเดต
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    } catch (error) {
      console.error("Failed to update status:", error);
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover">
              <td>{order.id}</td>
              <td>{order.user?.name || "N/A"}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "ONORDER"
                      ? "badge-warning"
                      : "badge-success"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td>
                {order.status === "ONORDER" && (
                  <button
                    className="btn btn-sm btn-outline btn-primary"
                    onClick={() => handleUpdateStatus(order.id)}
                  >
                    Mark as PENDING
                  </button>
                )}
              </td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 py-4">
                No orders available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
