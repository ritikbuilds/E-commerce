import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  increaseQty,
  decreaseQty,
  setArrivingOn,
} from "./features/cart/cartSlice";
import { MdDeleteOutline } from "react-icons/md";
import { format, addDays } from "date-fns";
import { enUS } from "date-fns/locale";

const currentDate = new Date();
const today = format(currentDate, "EEEE, MMMM d", { locale: enUS });

const uOneDayLater = addDays(currentDate, 1);
const oneDayLater = format(uOneDayLater, "EEEE, MMMM d", { locale: enUS });

const uFourDaysLater = addDays(currentDate, 4);
const fourDaysLater = format(uFourDaysLater, "EEEE, MMMM d", { locale: enUS });

const uTenDaysLater = addDays(currentDate, 10);
const tenDaysLater = format(uTenDaysLater, "EEEE, MMMM d", { locale: enUS });

function CartItem({ img, id, title, price, quantity, handleShippingCharges }) {
  const [selectedOption, setSelectedOption] = useState(tenDaysLater);
  const [itemShippingCharges, setItemShippingCharges] = useState(0);
  const dispatch = useDispatch();

  const updateShippingCharges = (newCharge) => {
    handleShippingCharges(newCharge - itemShippingCharges);
    setItemShippingCharges(newCharge);
  };

  return (
    <div className="border-[1px] p-[1rem] mx-[1rem] mb-[1rem] ">
      <h2 className="text-green-700 font-semibold mb-[1rem] lg:text-lg">
        Delivery Date: {selectedOption}
      </h2>
      <div className="flex items-center justify-center lg:justify-normal flex-wrap">
        <div className="w-[15rem] h-full rounded-lg">
          <img
            src={img}
            alt="product-img"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div className="flex gap-2 p-[1rem] justify-between flex-1">
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-sm lg:text-md">{title}</p>
            <p className="text-sm lg:text-md">
              {price} x {quantity} = ${price * quantity}
            </p>
            <div className="flex gap-2 items-center">
              <button
                className="p-2 lg:m-1 lg:w-[2rem] w-[1.5rem] lg:h-[2rem] h-[1.5rem] lg:text-md text-sm bg-slate-200 rounded-full flex justify-center items-center"
                onClick={() => {
                  dispatch(decreaseQty({ id }));
                }}
              >
                -
              </button>
              <p className="text-sm lg:text-md">{quantity}</p>
              <button
                className="p-2 lg:m-1 lg:w-[2rem] w-[1.5rem] lg:h-[2rem] h-[1.5rem] bg-slate-200 rounded-full flex justify-center items-center"
                onClick={() => {
                  dispatch(increaseQty({ id }));
                }}
              >
                +
              </button>
            </div>
            <button
              className="px-3 text-sm lg:py-2 py-[0.5rem] lg:text-md lg:m-1 bg-slate-200 rounded-full flex gap-1 items-center w-fit hover:bg-red-400 transition"
              onClick={() => {
                handleShippingCharges(-itemShippingCharges);
                dispatch(removeItemFromCart({ id }));
              }}
            >
              Remove <MdDeleteOutline color="red" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">Choose a delivery option:</p>
            <div className="flex gap-2">
              <input
                type="radio"
                className="cursor-pointer"
                value={tenDaysLater}
                checked={selectedOption === tenDaysLater}
                id={`radio-${id}-1`}
                onChange={(e) => {
                  updateShippingCharges(0);
                  dispatch(setArrivingOn({ id: id, arrivingOn: tenDaysLater }));
                  setSelectedOption(e.target.value);
                }}
              />
              <div className="flex flex-col">
                <label
                  htmlFor={`radio-${id}-1`}
                  className="cursor-pointer text-green-700 font-semibold text-sm lg:text-md"
                >
                  {tenDaysLater}
                </label>
                <label
                  htmlFor={`radio-${id}-1`}
                  className="cursor-pointer text-[#989898] text-sm lg:text-md"
                >
                  FREE Shipping
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="cursor-pointer"
                value={fourDaysLater}
                checked={selectedOption === fourDaysLater}
                id={`radio-${id}-2`}
                onChange={(e) => {
                  updateShippingCharges(4.99);
                  dispatch(
                    setArrivingOn({ id: id, arrivingOn: fourDaysLater })
                  );
                  setSelectedOption(e.target.value);
                }}
              />
              <div className="flex flex-col">
                <label
                  htmlFor={`radio-${id}-2`}
                  className="text-green-700 font-semibold cursor-pointer text-sm lg:text-md"
                >
                  {fourDaysLater}
                </label>
                <label
                  htmlFor={`radio-${id}-2`}
                  className="text-[#989898]  cursor-pointer text-sm lg:text-md"
                >
                  $4.99 - Shipping
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="cursor-pointer"
                value={oneDayLater}
                checked={selectedOption === oneDayLater}
                id={`radio-${id}-3`}
                onChange={(e) => {
                  updateShippingCharges(9.99);
                  dispatch(setArrivingOn({ id: id, arrivingOn: oneDayLater }));
                  setSelectedOption(e.target.value);
                }}
              />
              <div className="flex flex-col">
                <label
                  htmlFor={`radio-${id}-3`}
                  className="text-green-700 font-semibold cursor-pointer text-sm lg:text-md"
                >
                  {oneDayLater}
                </label>
                <label
                  htmlFor={`radio-${id}-3`}
                  className="text-[#989898] cursor-pointer text-sm lg:text-md"
                >
                  $9.99 - Shipping
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
