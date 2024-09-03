import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/heritage_heroimg.jpeg";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div>
      <div className="w-full h-[calc(100vh-88px)]  overflow-hidden heroBanner text-white flex items-center justify-center relative">
        <div className="text-center space-y-8">
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-semibold">
            Your Portal to India&apos;s <br />
            Exquisite Real Estate
          </h3>
          <p>
            Seamlessly connecting you to the heartbeat of india&apos;s prime
            properties.
          </p>
          <div className="space-y-4">
            <Link href={"/buy"}>
              <button className="px-4 mx-auto py-2 rounded-md bg-blue-600 text-white font-medium transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-600 flex items-center justify-center gap-2">
                <IconSearch /> Find Property
              </button>
            </Link>
            {/* <button className="px-4 mx-auto py-2 rounded-md bg-blue-50 text-blue-600 hover:text-white font-medium transition duration-200 hover:bg-blue-600  border-2 border-transparent hover:border-blue-600 flex items-center justify-center gap-2">
              <IconSearch /> Find Property
            </button>
            <button className="px-4 mx-auto py-2 rounded-md bg-white text-black font-medium transition duration-200 hover:bg-white hover:text-black border-2 border-black flex items-center justify-center gap-2">
              <IconSearch /> Find Property
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
