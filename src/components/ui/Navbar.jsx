import { navItems } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FloatingNav } from "./floating-navbar";

const Navbar = () => {
  return (
    <nav className="py-8 px-4 sm:py-2 sm:px-16 bg-blue-50">
      <div className="max-w-[1440px]  mx-auto flex items-center justify-between  border-blue-400">
        <div className="flex flex-row gap-4 sm:gap-8">
          {navItems.map((route, idx) => (
            <Link href={route.path} key={route.path + route.name + idx}>
              {route.name}
            </Link>
          ))}
        </div>
        <div className="max-sm:hidden">
          <Image
            src={"/heritage_logo.png"}
            width={80}
            height={80}
            alt="heritage company logo"
          />
        </div>
        <div>
          <h4 className="font-semibold cursor-pointer hover:opacity-80">
            Sign In
          </h4>
        </div>
      </div>
      <div className="w-full ">
        <FloatingNav />
      </div>
    </nav>
  );
};

export default Navbar;
