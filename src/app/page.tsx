"use client";
import CategoryList from "@/components/CategoryList";
import NewProducts from "@/components/NewProducts";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/contexts/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { useContext, useEffect } from "react";
export default function Home() {
  const wixClient = useWixClient()

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };
    getProducts();
  }, [wixClient]);

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
        <h1 className="text-2xl text-black">Featured Product</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl text-black px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
        <h1 className="text-2xl text-black">New Product</h1>
        <NewProducts />
      </div>
    </div>
  );
}
