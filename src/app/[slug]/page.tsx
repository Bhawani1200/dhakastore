import React from "react";
import ListPage from "../list/page";
import ProductImages from "@/components/ProductImages";
import CustomizeProducts from "@/components/CustomizeProducts";
import Add from "@/components/Add";
const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* <ListPage/> */}
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-black">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat
          exercitationem, laborum explicabo eos sint libero voluptatem saepe
          quas quaerat?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h3 className="font-medium text-2xl">$49</h3>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            nihil? Libero aperiam delectus, cum minima recusandae deserunt autem
            voluptatibus. Repellat!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            nihil? Libero aperiam delectus, cum minima recusandae deserunt autem
            voluptatibus. Repellat!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            nihil? Libero aperiam delectus, cum minima recusandae deserunt autem
            voluptatibus. Repellat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
