"use client";
import Image from "next/image";
import React, { useState } from "react";
const Images = [
  {
    id: 1,
    url: "/dhaka9.jpg",
  },
  {
    id: 2,
    url: "/dhaka11.jpg",
  },
    {
      id: 3,
      url: "/dhaka6.jpg",
    },
    {
      id: 4,
      url: "/dhaka14.jpg",
    },
];
const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={Images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {Images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
