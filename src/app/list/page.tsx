import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 2xl:px-62 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 p-4 md:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab 50% Off on
            <br /> Selected Product
          </h1>
          <button className=" rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/bride1.jpg" alt="" height={200} width={150} />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="text-black mt-12 text-xl font-semibold ">Shoes For You!!!</h1>
      <ProductList/>
    </div>
  );
};

export default ListPage;
