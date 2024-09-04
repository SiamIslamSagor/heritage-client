import { IconStar, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  return (
    <div>
      <SectionTitle title={"Testimonials"} />
      <div className="flex flex-wrap gap-10 max-w-7xl mx-auto">
        <div className="bg-blue-100 p-2 sm:p-5 lg:p-8 flex-1 min-w-72">
          <div className="space-y-8 text-neutral-600">
            <div className="flex items-center justify-center">
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStar className="text-yellow-500 md:size-8 lg:size-10" />
            </div>
            <div>
              <p className="text-center md:text-xl">
                &quot;Working with this platform has completely transformed the
                way I manage property listings.I highly recommend this service
                to anyone in the real estate industry.&quot;
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div>
                <Image
                  src={
                    "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725321600&semt=ais_hybrid"
                  }
                  width={70}
                  height={70}
                  alt="author image"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-2xl font-semibold text-black">
                Sarah Mitchell
              </h4>
              <p className="text-xl">Real Estate Agent</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-2 sm:p-5 lg:p-8 flex-1 min-w-72">
          <div className="space-y-8 text-neutral-600">
            <div className="flex items-center justify-center">
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStarFilled className="text-yellow-500 md:size-8 lg:size-10" />
              <IconStar className="text-yellow-500 md:size-8 lg:size-10" />
            </div>
            <div>
              <p className="text-center md:text-xl">
                &quot;As a homeowner looking to sell, I was impressed by how
                simple it was to list my property. The platform&apos;s search
                and filter I was able to sell my home at a great price with
                minimal hassle.&quot;{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div>
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2gsHNpIAGy3YzsXS0w2013XZHUuAOBbqaHsxyyRV1ZnCNNTTwCLVDVBvN05_6OFKBI4&usqp=CAU"
                  }
                  width={70}
                  height={70}
                  alt="author image"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-2xl font-semibold text-black">
                James Carter
              </h4>
              <p className="text-xl">Homeowner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
