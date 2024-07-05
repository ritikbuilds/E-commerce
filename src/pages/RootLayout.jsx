import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Modal from "../components/Modal"
import { useEffect, useState } from "react";
import Cart from "../components/features/cart/Cart"

function RootLayout() {
  const [modalState, setModalState] = useState(false);
                                                          
  useEffect(()=>{
    if(modalState){
      document.documentElement.style.overflowY='hidden'
    }else{
      document.documentElement.style.overflowY='scroll'
    }
  }
  ,[modalState])
    function openModal() {
      setModalState(true);
    }
  
    function closeModal() {
      setModalState(false);
    }
  return (
    <section className='overflow-x-hidden'>
       {modalState && (
        <Modal closeModal={closeModal}>
          <Cart closeModal={closeModal}/>
        </Modal>
      )}
      <Navbar openModal={openModal} />
      <Outlet/>
    </section>
  )
}

export default RootLayout