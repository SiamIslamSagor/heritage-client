import { IconLocation } from "@tabler/icons-react";
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

export default PropertyCard;
