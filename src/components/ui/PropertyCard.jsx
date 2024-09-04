import {
  IconLoader,
  IconLocation,
  IconTruckLoading,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const PropertyCard = ({
  image = "https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.8,gy-1,q-75,rh-3264,rw-5824,th-1080,tw-1920/1263413515398680636.jpeg",
  title = "SunnySlope Suites",
  propertyCategory = "apartment",
  location = "Meadowshire park, Greenfield, USA",
  highestBid = 250000,
}) => {
  return (
    <div>
      <div className="border rounded-md duration-300 hover:shadow-lg max-w-96 min-w-64 w-full cursor-pointer group">
        <div className="w-full rounded-t-md  overflow-hidden">
          <Image
            className="w-full group-hover:scale-110 duration-500"
            src={image}
            width={256}
            height={200}
            alt={title + propertyCategory}
          />
        </div>
        <div className="p-5 space-y-5">
          <div className="flex flex-row justify-between items-center">
            <p className="capitalize bg-blue-100 rounded-md px-2 py-1">
              {propertyCategory}
            </p>
            <p>
              {" "}
              <span className="relative after:content-[''] after:absolute after:size-3 after:bg-orange-600 after:rounded-sm after:-left-4 after:top-1" />{" "}
              Ready to Move
            </p>
          </div>
          <div className="w-full h-[1px] bg-gray-300 my-2" />
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center gap-2">
              <IconLocation className="text-orange-600" />{" "}
              <p className="text-gray-500">{location}</p>
            </div>
          </div>
          <h3 className="text-2xl font-bold">$ {highestBid}</h3>
        </div>
      </div>
    </div>
  );
};

const SearchPropertyCard = (
  image = "https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.8,gy-1,q-75,rh-3264,rw-5824,th-1080,tw-1920/1263413515398680636.jpeg",
  title = "SunnySlope Suites",
  location = "Meadowshire park, Greenfield, USA",
  highestBid = 250000,
  totalArea = "891 sqft",
  status = "Ready to move",
  biddingRange = ["200k", "400k"]
) => {
  return (
    <div
      className="w-[85%] max-md:mx-4 md:min-w-[680px] max-w-4xl "
      style={{
        marginInline: "auto",
      }}
    >
      <div className="w-full flex max-md:flex-col min-h-56">
        <div className="object-cover md:max-w-56">
          <Image
            src={
              "https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.8,gy-1,q-75,rh-3264,rw-5824,th-1080,tw-1920/1263413515398680636.jpeg"
            }
            height={400}
            width={330}
            alt={title}
            className="w-full h-full rounded-md max-md:max-w-fit "
          />
        </div>
        <div className="flex w-full flex-col  md:px-5 lg:px-10 justify-between">
          <div className="w-full flex justify-between max-md:flex-col">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{title}</h3>
              <div className="flex items-center gap-2">
                <IconLocation className="text-orange-600" />{" "}
                <p className="text-gray-500">{location}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                {" "}
                <h3 className="text-2xl font-bold">$ {highestBid}</h3>
              </div>
              <div>
                <button className="px-4 mx-auto py-2 rounded-md bg-white text-black font-medium transition duration-200 hover:bg-white hover:text-black border-2 border-black">
                  Bid Property
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-8">
            <div className="w-full flex items-center gap-5  max-md:max-w-[380px]">
              <h5 className="text-xl min-w-max max-md:mt-2">
                Property details
              </h5>{" "}
              <div className="w-full h-[1px] bg-gray-300 my-2" />
            </div>
            <div className="flex justify-between md:items-center max-md:flex-col">
              <div className="flex gap-2 ">
                <div className="size-12 rounded-md bg-orange-600 text-white flex items-center justify-center">
                  <IconLoader />
                </div>
                <div>
                  <h4 className="text-lg">Total Area</h4>
                  <h4 className="text-neutral-500">{totalArea}</h4>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="size-12 rounded-md bg-orange-600 text-white flex items-center justify-center">
                  <IconLoader />
                </div>
                <div>
                  <h4 className="text-lg">Total Area</h4>
                  <h4 className="text-neutral-500">{totalArea}</h4>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="size-12 rounded-md bg-orange-600 text-white flex items-center justify-center">
                  <IconLoader />
                </div>
                <div>
                  <h4 className="text-lg">Total Area</h4>
                  <h4 className="text-neutral-500">{totalArea}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PropertyCard, SearchPropertyCard };
