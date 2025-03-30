import React, { useEffect, useState } from "react";
import { useOrderStore } from "../states/useOrderStore";
import { format } from "date-fns";


function OrderList() {
  const { loading, error, errorMsg, order, listOrder } = useOrderStore();

  useEffect(() => {
    listOrder();
  }, []);

  console.log("my order ====>", order[0]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{errorMsg}</p>;

  return (
    <div className="p-4">
      <div>
        <div>Status</div>
        <div className="badge badge-warning">ONSHELF</div>
        <div className="badge badge-warning">ONORDER</div>
        <div className="badge badge-warning">PENDING</div>
        <div className="badge badge-warning">ACTIVE</div>
        <div className="badge badge-soft badge-success">RETURNING</div>
        <div className="badge badge-warning">SUCCESS</div>
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

                <td>
                  {order.user?.userName}
                </td>
                <td>{order.rentalDate}</td>
                <td>{order.returnDate}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "ONORDER"
                        ? "badge-warning"
                        : order.status === "PENDING"
                        ? "badge-info"
                        : "badge-success"
                    }`}
                  >
                    {order.status}
                  </span>
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
