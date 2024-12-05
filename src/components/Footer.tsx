import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="">
            <Image src="/logo.png" alt="" height={150} width={150} />
          </Link>
          <p className="text-black">Dharan,Sunsari Nepal</p>
          <span className="text-semibold text-black">
            chauiseydhaka12@gmail.com
          </span>
          <span className="text-semibold text-black">025-23456</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" height={16} width={16} />
            <Image src="/instagram.png" alt="" height={16} width={16} />
            <Image src="/youtube.png" alt="" height={16} width={16} />
            <Image src="/tiktok.png" alt="" height={16} width={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2 ">
          <div className="flex flex-col justify-between">
            <h1 className="text-black text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6 text-black">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Contact</Link>
              <Link href="">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-black text-lg">SHOP</h1>
            <div className="flex flex-col gap-6 text-black">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-black text-lg">Help</h1>
            <div className="flex flex-col gap-6 text-black">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift a Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 ">
          <h1 className="font-medium text-lg text-black">SUBSCRIBE</h1>
          <p className="text-black">
            Be the first to get handsome and beautiful
          </p>
          <div className="flex">
            <input type="text" placeholder="email" className="p-4 w-3/4" />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold text-black">SECURE PAYMENTS</span>
          <div className="flex justify-between">
            <Image src="/facebook.png" alt="" height={16} width={16} />
            <Image src="/instagram.png" alt="" height={16} width={16} />
            <Image src="/youtube.png" alt="" height={16} width={16} />
            <Image src="/tiktok.png" alt="" height={16} width={16} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="text-black ">{"\u00A9"}2024 Chaubisey Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="text-black font-medium">Nepali|English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="text-black font-medium">Rupees |$USD </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
