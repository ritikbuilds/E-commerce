import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'
import { useNavigate, useSearchParams } from 'react-router-dom'

function FilterProducts() {
    const products = useSelector((state)=>state.products)

    const navigate = useNavigate()

    const [params] = useSearchParams()
    const searchParam = params.get("search")

    const filteredProducts = products.filter((product)=>product.title.toLowerCase().includes(searchParam.toLowerCase()))

  if(filteredProducts.length<1) return <div className='h-screen w-full flex flex-col justify-center items-center'>
    <h1 className='text-2xl font-semibold'>No matching items found!!!</h1>
    <button className='text-xl underline text-purple-400 hover:text-purple-700' onClick={()=>{navigate("/")}}>Go Back</button>
  </div>
  return (
    <section className='mt-[8rem]'>
        {
            filteredProducts && filteredProducts.map((product)=>{
                return <Product {...product} key={product.id}/>
            })
        }
    </section>
  )
}

export default FilterProducts