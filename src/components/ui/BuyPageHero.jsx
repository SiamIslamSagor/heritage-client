"use client";

import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";

const BuyPageHero = () => {
  const [category, setCategory] = useState("Buy");

  const activeCategoryStyle =
    "relative cursor-pointer duration-300 hover:opacity-80 after:duration-30 after:content-[''] after:w-full after:h-1 after:bg-blue-600 after:rounded-full after:duration-300  after:absolute after:top-6 after:left-0 after:scale-x-0";

  return (
    <div>
      <div className="h-60 w-full border buyPageBanner relative">
        <div className="relative top-24  bg-white shadow-md rounded-md p-8 space-y-5 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div
              className={`${activeCategoryStyle} ${
                category === "Buy" && "after:scale-x-100"
              }`}
              onClick={() => setCategory("Buy")}
            >
              Buy
            </div>
            <div
              className={`${activeCategoryStyle} ${
                category === "Rent" && "after:scale-x-100"
              }`}
              onClick={() => setCategory("Rent")}
            >
              Rent
            </div>
            <div
              className={`${activeCategoryStyle} ${
                category === "Plot" && "after:scale-x-100"
              }`}
              onClick={() => setCategory("Plot")}
            >
              Plot
            </div>
            <div
              className={`${activeCategoryStyle} ${
                category === "Commercial" && "after:scale-x-100"
              }`}
              onClick={() => setCategory("Commercial")}
            >
              Commercial
            </div>
          </div>
          <div className="relative">
            <IconSearch className="absolute top-4 left-2" />
            <input
              className="w-full border pl-10 p-2 my-2 rounded-md"
              type="text"
              placeholder="Search Properties"
            />
          </div>
          <div className="flex max-sm:flex-wrap justify-between gap-5">
            <div className="w-full min-w-32">
              <div>Label</div>
              <div>
                <input
                  className="w-full border p-2 my-2 rounded-md"
                  type="text"
                  placeholder="Search Properties"
                />{" "}
              </div>
            </div>
            <div className="w-full min-w-32">
              <div>Label</div>
              <div>
                <input
                  className="w-full border p-2 my-2 rounded-md"
                  type="text"
                  placeholder="Search Properties"
                />{" "}
              </div>
            </div>
            <div className="w-full min-w-32">
              <div>Label</div>
              <div>
                <input
                  className="w-full border p-2 my-2 rounded-md"
                  type="text"
                  placeholder="Search Properties"
                />{" "}
              </div>
            </div>
          </div>
          <div>
            <button className="w-full px-4 mx-auto py-2 rounded-md bg-blue-600 text-white font-medium transition hover:bg-white hover:text-blue-600 active:scale-[0.97] duration-300  border-2 border-transparent hover:border-blue-600 flex items-center justify-center gap-2">
              <IconSearch /> Find Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPageHero;
