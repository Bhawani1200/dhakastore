import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return;
  <div className="">
    {/* TOP */}
    <div className="">
      {/* LEFT */}
      <div className="w-1/4 ">
        <Link href="">
          <Image src="/logo.png" alt="" height={200} width={200} />
        </Link>
        <p>Dharan,Sunsari Nepal</p>
        <span className="text-semibold">chauiseydhaka12@gmail.com</span>
        <span className="text-semibold">025-23456</span>
        <div className="flex gap-6">
        <Image src="/facebook.png" alt="" height={16} width={16} />
        <Image src="/instagram.png" alt="" height={16} width={16} />
        <Image src="/youtube.png" alt="" height={16} width={16} />
        <Image src="/tiktok.png" alt="" height={16} width={16} />
        </div>
      </div>
      {/* CENTER */}
      <div className="w-1/2 "></div>
      {/* RIGHT */}
      <div className="w-1/4 "></div>
    </div>
    {/* BOTTOM */}
    <div className=""></div>
  </div>;
};

export default Footer;
