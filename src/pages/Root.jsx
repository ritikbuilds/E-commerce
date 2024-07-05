import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout"
import FilterProducts from "./FilterProducts";
import Products from "../components/Products";
import Orders from "./Orders";
import TrackOrder from "./TrackOrder";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Products/>} />
      <Route path="product" element={<FilterProducts/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/trackorder" element={<TrackOrder/>} />
    </Route>
  )
);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
