import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "./features/products/productsSlice";
// import { products } from "./products";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dxovanotbjlvrpjdazuq.supabase.co";
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        dispatch(setProducts(data));
      }
    };

    fetchProducts();
  }, [dispatch]);
  return (
    <div className="flex flex-wrap items-center justify-center mt-[8rem]">
      {products &&
        products.map((product) => <Product {...product} key={product.id} />)}
    </div>
  );
}

export default Products;
