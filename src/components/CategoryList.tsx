import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/choli8.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Dhaka Topi</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/dhaka10.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Dhaka Sari</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/dhaka.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Dhaka Blouse</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/dhaka11.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Dhaka Coat</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/half.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Half Coat</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/dhaka8.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Dhaka Sari</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/dhaka7.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Dhaka Set</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/purse.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Dhaka Purse</h1>
        </Link>
        <Link href="/list?cat=test " className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96 ">
            <Image src="/galbandi.jpg" alt="" fill sizes="200vw" className="object-cover" />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide text-black">Galbandi</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
