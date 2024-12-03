"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const slides = [
  {
    id: 1,
    title: "Summer Sale Collection",
    description: "sale! ,Upto 50% off!",
    img: "/dhaka1.jpg",
    url: "/",
    bg: "bg-gradient-to-r form-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collection",
    description: "Sale! ,Upto 50% off!",
    img: "/dhaka2.jpg",
    url: "/",
    bg: "bg-gradient-to-r form-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collection",
    description: "Sale! ,Upto 50% off!",
    img: "/dhaka3.jpg",
    url: "/",
    bg: "bg-gradient-to-r form-blue-50 to-yellow-50",
  },
];
const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div className="" key={slide.id}>
            {/* TEXT CONTAINER */}
            <div className="w-1/2">
              <h2 className="text-black">{slide.description}</h2>
              <h1 className="text-black">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="text-black">Shop Now</button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-1/2 relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
