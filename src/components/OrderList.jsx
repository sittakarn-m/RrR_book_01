import React, { useEffect, useState } from "react";
import { useOrderStore } from "../states/useOrderStore";
import { format } from "date-fns";

function OrderList() {
  const { loading, error, errorMsg, order, updateStatus, listOrder } =
    useOrderStore();

  useEffect(() => {
    listOrder();
  }, []);

  console.log("my order ====>", order[0]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{errorMsg}</p>;

  const handleStatus = async (orderId, newStatus) => {
    const confirm = window.confirm(
      `เปลี่ยนสถานะเป็น "${newStatus}" ใช่หรือไม่?`
    );
    if (!confirm) return;

    await updateStatus(orderId, newStatus);
    await listOrder();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "ONSHELF":
        return "bg-blue-200";
      case "ONORDER":
        return "bg-red-200";
      case "PENDING":
        return "bg-yellow-200";
      case "ACTIVE":
        return "bg-purple-200";
      case "RETURNING":
        return "bg-pink-200";
      case "SUCCESS":
        return "bg-green-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="p-4">
      <div className="mb-5">
        <div className="text-2xl font-bold mb-4">Status</div>
        <div className="flex gap-2 cursor-pointer bg-gray-50 p-4 rounded-lg w-fit">
          <div className="tooltip tooltip-top" data-tip="หนังสือพร้อมให้เช่า">
            <div className="badge bg-blue-400 py-4 w-[95px] text-white font-semibold shadow ">
              ONSHELF
            </div>
          </div>
          <div className="tooltip tooltip-top" data-tip="เตรียมจัดส่ง">
            <div className="badge bg-red-400 py-4 w-[95px] text-white font-semibold shadow border-none">
              ONORDER
            </div>
          </div>
          <div className="tooltip tooltip-top" data-tip="จัดส่งสินค้า">
            <div className="badge bg-yellow-400 py-4 w-[95px] text-white font-semibold shadow">
              PENDING
            </div>
          </div>
          <div className="tooltip tooltip-top" data-tip="ผู้อ่านได้รับหนังสือ">
            <div className="badge bg-purple-400 py-4 w-[95px] text-white font-semibold shadow">
              ACTIVE
            </div>
          </div>
          <div className="tooltip tooltip-top" data-tip="คืนหนังสือ">
            <div className="badge bg-pink-400 py-4 w-[95px] text-white font-semibold shadow">
              RETURNING
            </div>
          </div>
          <div className="tooltip tooltip-top" data-tip="ได้รับหนังสือ">
            <div className="badge bg-green-400 py-4 w-[95px] text-white font-semibold shadow">
              SUCCESS
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Order Table</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>User</th>
            <th>Rental Date</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Order</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(order) &&
            order.map((order) => (
              <tr key={order.id} className="hover">
                <td>{order.id}</td>

                {/* ถ้า order มี book เดียว */}
                <td>{order.book?.title || "N/A"}</td>

                {/* ถ้า order มีหลาย books */}
                {/* <td>{order.books?.map(b => b.title).join(", ")}</td> */}

                <td>{order.user?.userName}</td>
                <td>{order.rentalDate}</td>
                <td>{order.returnDate}</td>
                <td>
                  <select
                    className={`select select-sm ${getStatusColor(
                      order.status
                    )}`}
                    value={order.status}
                    onChange={(e) =>
                      handleStatus(order.orderId, e.target.value)
                    }
                  >
                    <option value="ONSHELF">ONSHELF</option>
                    <option value="ONORDER">ONORDER</option>
                    <option value="PENDING">PENDING</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="RETURNING">RETURNING</option>
                    <option value="SUCCESS">SUCCESS</option>
                  </select>
                </td>

                <td>{order.orderId}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
