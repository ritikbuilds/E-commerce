import React, { useEffect, useRef, useState } from "react";
import buyAgain from "../assets/buy-again.png";
import { addItemToCart } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addDays, format } from "date-fns";
import { enUS } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const currentDate = new Date();
const today = format(currentDate, "EEEE, MMMM d", { locale: enUS });
const uTenDaysLater = addDays(currentDate, 10);
const tenDaysLater = format(uTenDaysLater, "EEEE, MMMM d", { locale: enUS });

function SingleOrder({
  id,
  img,
  title,
  quantity,
  price,
  arrivingOn,
  orderPlaced,
  orderId,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state)=>state.cart)
  const [itemAdded, setItemAdded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buyAgainRef = useRef();

  const newItem = {
    id: id,
    img: img,
    title: title,
    quantity: 1,
    price: price,
    arrivingOn: tenDaysLater,
    orderPlaced: today,
    orderId: nanoid(),
  };

  useEffect(() => {
    if (itemAdded) {
      let timeOutID;
      function addItem() {
        const existingItem = cart.find((item) => item.id === id);
        if (existingItem) {
          alert("Item already added to cart")
          setItemAdded(false)
          setIsAnimating(false)
          return;
        }
        dispatch(addItemToCart({ newItem }));
        buyAgainRef.current.textContent = "Added";
        timeOutID = setTimeout(() => {
          buyAgainRef.current.textContent = "Buy It Again";
          setIsAnimating(false);
          setItemAdded(false);
        }, 1000);
      }
      addItem();
      return () => {
        clearTimeout(timeOutID);
      };
    }
  }, [itemAdded, dispatch]);

  function preAddItem() {
    setIsAnimating(true);
    setItemAdded(true);
  }

  function handleTrackPackage() {
    navigate(`/trackorder?orderId=${orderId}`);
  }

  return (
    <div className=" md:h-[15rem] bg-white h-auto gap-2 justify-center md:gap-0 flex-col md:flex-row flex items-center px-[2rem] py-[1rem] mb-[0.5rem]">
      <div className="h-full w-full flex gap-10 items-center">
        <div className="w-[10rem] h-[60%] flex">
          <img
            className="object-cover object-center"
            src={img}
            alt="product-image"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-md md:text-xl font-semibold">{title}</h2>
          <p className=" text-sm md:text-md">Order Placed : {orderPlaced}</p>
          <p className=" text-sm md:text-md">Arriving on : {arrivingOn}</p>
          <p className=" text-sm md:text-md">Quantity:{quantity}</p>
          <button
            onClick={preAddItem}
            disabled={isAnimating}
            className="flex mt-2 items-center gap-2 py-1 md:px-2 px-1 bg-yellow-400 hover:bg-yellow-500 transition-all md:text-md w-fit whitespace-nowrap md:whitespace-normal text-sm rounded-xl"
          >
            <img src={buyAgain} alt="icon" className="w-[2rem]" />
            <p ref={buyAgainRef} className="md:text-md text-sm">Buy It Again</p>
          </button>
        </div>
      </div>
      <button
        onClick={handleTrackPackage}
        className="px-5 py-2 md:text-md mt-[1rem] md:mt-[0] text-sm bg-[#f1efef] w-full sm:w-fit md:w-fit hover:bg-[#e4e2e2] transition-all whitespace-nowrap rounded-md"
      >
        Track Package
      </button>
    </div>
  );
}

export default SingleOrder;
