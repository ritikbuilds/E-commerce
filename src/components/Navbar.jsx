import React, { useState } from "react";
import logo from "../assets/amazon-logo.png";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import mobileLogo from "../assets/amazon-mobile-logo-white.png";
import { IoIosMenu } from "react-icons/io";

function Navbar({ openModal }) {
  const navigate = useNavigate()
  const products = useSelector((state) => {
    return state.products;
  });

  const [menuState, setMenuState] = useState(false)

  const cart = useSelector((state)=>{
    return state.cart;
  })
  const [searchValue, setSearchValue] = useState("");


  function handleSearch(e){
    e.preventDefault()
    if(searchValue.trim()==="") return;
    navigate(`/product?search=${searchValue}`)
    setSearchValue("")
    
  }

  function redirectToHome(){
    navigate("/")
  }

  function redirectToOrders(){
    navigate("/orders")
  }

  function handleMenu(){
    setMenuState(!menuState)
  }



  const cartQty = cart.reduce((acc,cartItem)=>{
    return acc+cartItem.quantity
  },0)

  return (
    <nav className="w-full fixed z-100 bg-black lg:p-6 py-6 px-2 flex left-0 top-0 gap-5 lg:gap-0 justify-center lg:justify-between items-center">
      <div className="w-[2rem] md:w-[5rem] lg:w-[8rem] cursor-pointer" onClick={redirectToHome}>
        <img src={logo} alt="logo" className="hidden md:block" />
        <img src={mobileLogo} alt="logo" className="block md:hidden" />
      </div>
      <form className="flex bg-green-600 sm:w-[40rem] md:w-[40rem] lg:w-[40rem]  rounded-lg" onSubmit={handleSearch} autoComplete="off">
        <input
          name="search"
          type="text"
          className="p-2 flex-1 text-sm sm:text-md rounded-l-lg outline-none w-[12rem] sm:w-full"
          placeholder="Search Products here"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 transition-all py-2 px-4 rounded-r-lg">
          <IoSearch size={"1.3rem"} />
        </button>
      </form>
      <div className={`flex gap-6 md:gap-4 w-full md:w-fit justify-center bg-black absolute transition-all duration-300 md:static top-[100%] -translate-x-[100%] md:-translate-x-0 pb-3 md:pb-0 ${menuState?"translate-x-0":""}`}>
        <button onClick={redirectToOrders}>
          <p className="text-white md:text-sm lg:text-md">Returns</p>
          <h2 className="text-white font-bold  md:text-sm lg:text-md">& Orders</h2>
        </button>

      <button onClick={openModal} className="flex flex-none gap-1 items-center relative">
        {cartQty>0 && <span className="absolute bg-yellow-500 rounded-full w-5 h-5 top-1 left-3 text-sm">
          {cartQty}
        </span>}
        <PiShoppingCartSimpleThin className="size-[2.5rem] md:size-[2rem] lg:size-[2.5rem]"  color="white" />
        <span className="text-white md:text-sm lg:text-md">Cart</span>
      </button>
      </div>
      <IoIosMenu onClick={handleMenu} color="white" size="3rem" className="block md:hidden cursor-pointer"/>
    </nav>
  );
}

export default Navbar;
