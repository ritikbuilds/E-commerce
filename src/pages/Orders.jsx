import React from "react";
import SingleOrder from "../components/SingleOrder";
import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.orders);
  return (
    <section className="w-[90%] mx-auto min-h-screen max-w-[1200px] mt-[8rem]  ">
      <h2 className="text-2xl font-semibold text-center mt-5 mb-5">
        Your Orders
      </h2>
      <div className="border-[1px] rounded-lg">
        {orders.map((item, index) => (
          <SingleOrder {...item} key={index} />
        ))}

      </div>
      </section>
  );
}

export default Orders;
