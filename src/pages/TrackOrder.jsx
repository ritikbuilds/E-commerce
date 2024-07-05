import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

function TrackOrder() {
  const navigate = useNavigate()
  const orders = useSelector((state)=>state.orders);
  const [params] = useSearchParams()
  const id = params.get("orderId")
  const order = orders.filter(order=>order.orderId==id)[0]
  return (
    <section className='max-w-[1200px] w-[90%] mx-auto p-[1rem] flex flex-col gap-3 mt-[8rem] '>
      <button className='underline text-purple-500 hover:text-purple-700' onClick={()=>{navigate("/orders")}}>View all orders</button>
      <h2 className='text-xl lg:text-2xl  font-semibold lg:font-bold mt-[2rem]'>Arriving On {order.arrivingOn}</h2>
      <p>{order.title}</p>
      <p>Quantity : {order.quantity}</p>
      <img src={order.img} alt={order.title} className='w-[10rem] object-cover object-center ' />
      <div>
        <div className='w-full flex justify-between  rounded-full px-4 py-6'>
          <h2 className='text-green-700 font-bold'>Preparing</h2>
          <h2 className='font-bold'>Shipped</h2>
          <h2 className='font-bold'>Delievered</h2>
        </div>
        <div className='w-full border-[1px] border-black h-9 rounded-full overflow-hidden'>
          <div className='bg-green-700 rounded-full h-full lg:w-[5%] w-[10%]'></div>
        </div>
      </div>
    </section>
  )
}

export default TrackOrder;