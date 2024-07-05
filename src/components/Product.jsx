import React, { useRef, useState } from "react";
import { addItemToCart } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { format,addDays} from "date-fns";
import { enUS } from "date-fns/locale";
import { nanoid } from "@reduxjs/toolkit";

const currentDate = new Date();
const today = format(currentDate, "EEEE, MMMM d", { locale: enUS });
const uTenDaysLater = addDays(currentDate, 10);
const tenDaysLater = format(uTenDaysLater, "EEEE, MMMM d", { locale: enUS });

const selectQuantity = [1,2,3,4,5,6,7,8,9,10]

function Product({ img, price, title, id }) {
  const dispatch = useDispatch();

  const cart = useSelector((state)=>state.cart)

  const [dropQty, setDropQty] = useState(1)

  const addItemRef = useRef()

  function handleIncreaseQty(e){
    setDropQty(+e.target.value)
  }

  function addItem() {
    const newItem = {
      id: id,
      price: price,
      title: title,
      quantity: dropQty,
      img:img,
      arrivingOn:tenDaysLater,
      orderPlaced:today,
      orderId:nanoid()
    };

    dispatch(addItemToCart({ newItem }));
  }
  return (
    <div className="p-4 m-2 border-[1px] flex flex-col gap-4 w-[20rem] bg-white shadowc">
      <div className="h-[15rem] w-full rounded-lg overflow-hidden ">
        <img src={img} alt={title} className="h-full w-full object-cover object-center" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="capitalize">{title}</p>
        <select className="w-fit border-[1px] rounded-lg bg-slate-200 outline-none" value={dropQty} onChange={handleIncreaseQty}>
          {
            selectQuantity.map((item,index)=>(
              <option value={item} key={index}>{item}</option>
            ))
          }
        </select>
        <p>${price}</p>
        <button ref={addItemRef} onClick={addItem} className="py-2 px-4 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all">Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
