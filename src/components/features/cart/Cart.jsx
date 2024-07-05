import React, { useState } from "react";
import CartItem from "../../CartItem";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/amazon-mobile-logo.png";
import lock from "../../../assets/checkout-lock-icon.png";
import { useNavigate } from "react-router-dom";
import { setOrders } from "../orders/ordersSlice";
import { emptyCart } from "./cartSlice";

function Cart({ closeModal }) {
  const [shippingCharges, setShippingCharges] = useState(0);

  const handleShippingCharges = (amount) => {
    setShippingCharges((prev) => prev + amount);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  const totalAmount = cart.reduce((acc, cartItem) => {
    acc += cartItem.price * cartItem.quantity;
    return acc;
  }, 0);

  const totalQty = cart.reduce((acc, cartItem) => {
    acc += cartItem.quantity;
    return acc;
  }, 0);

  const taxAmount = ((totalAmount + shippingCharges) * 10) / 100
  const totalAfterTax = totalAmount + shippingCharges + taxAmount

  function handlePlaceOrder() {
    if (totalQty < 1) alert("Add Items to place an Order");
    else {
      navigate("/orders");
      dispatch(setOrders(cart));
      dispatch(emptyCart());
      closeModal();
    }
  }

  function handleEmptyCart() {
    closeModal();
    navigate("/");
  }

  if (totalQty < 1)
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h2 className="text-xl lg:text-2xl mb-4">Your cart is empty.</h2>
        <button
          className="px-3 py-2 text-sm lg:text-md font-semibold bg-yellow-500 rounded-full"
          onClick={handleEmptyCart}
        >
          View Products
        </button>
      </div>
    );

  return (
    <div>
      <div className="flex justify-between p-5">
        <div className="w-[2rem]">
          <img src={logo} alt="logo" />
        </div>
        <h2>
          Checkout({totalQty} {totalQty > 1 ? "items" : "item"})
        </h2>
        <div>
          <img src={lock} alt="lock-icon" />
        </div>
      </div>
      <h2 className="text-xl lg:text-2xl font-semibold text-center  m-[1rem]">
        Review Your Order
      </h2>
      <div className="flex lg:flex-row flex-col items-center lg:items-start gap-5">
        <div className="lg:w-[70%] order-1 lg:order-0 w-full">
          {cart.map((cartItem) => (
            <CartItem
              {...cartItem}
              key={cartItem.id}
              handleShippingCharges={handleShippingCharges}
            />
          ))}
        </div>

        <div className="md:w-[50%] lg:w-[30%] order-0 lg:order-1 w-[90%] border-[1px] p-2 flex flex-col gap-3 h-fit mx-3 ">
          <div className="w-full flex justify-between">
            <h3 className="text-sm lg:text-md">Order Summary</h3>
            <p className="text-sm lg:text-md">
              Items({totalQty}):${totalAmount.toFixed(2)}
            </p>
          </div>
          <div className="w-full flex justify-between">
            <h3 className="text-sm lg:text-md">Shipping & handling:</h3>
            <p className="text-sm lg:text-md">${shippingCharges.toFixed(2)}</p>
          </div>
          <div className="w-full flex justify-between">
            <h3 className="text-sm lg:text-md">Total before tax:</h3>
            <p className="text-sm lg:text-md">${(totalAmount + shippingCharges).toFixed(2)}</p>
          </div>
          <div className="w-full flex justify-between">
            <h3 className="text-sm lg:text-md">Estimated tax(10%):</h3>
            <p className="text-sm lg:text-md">${(taxAmount).toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="font-bold text-red-900 text-lg lg:text-xl">Order Total:</h3>
            <p className="font-bold text-red-900 text-lg lg:text-xl">
              ${(totalAfterTax).toFixed(2)}
            </p>
          </div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 transition-all rounded-lg py-2 text-sm lg:text-md"
            onClick={handlePlaceOrder}
          >
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
