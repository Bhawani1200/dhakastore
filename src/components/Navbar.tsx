import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide text-black">CHAUBISEY</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS*/}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3">
        <Link href="/">
        <Image src="/nike.webp" alt="" height={64} width={64}/>
        <div className="text-2xl tracking-wide text-black">CHAUBISEY</div>
        </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
        <SearchBar/>
        <NavIcons/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
