import Image from "next/image";
import React from "react";
import img1 from "@/assets/adimg1.jpg";
import img2 from "@/assets/adimg2.jpg";
import {
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerPlayFilled,
  IconSearch,
} from "@tabler/icons-react";
import Link from "next/link";

const AdvertiseSection = () => {
  return (
    <div className="mx-auto">
      <div className="my-20 md:my-40 mx-auto  flex max-md:flex-col justify-between gap-10 md:gap-20 lg:gap-40">
        <ImageWithPosition bigImg={img1} smallImg={img2} leftAlign={true} />
        <SideTextWithCTA title="Efficient and transparent home buying solutions" />
      </div>

      <div className="my-20 md:my-40 mx-auto  flex flex-row-reverse max-md:flex-col justify-between  gap-10 lg:gap-40">
        <ImageWithPosition bigImg={img1} smallImg={img2} leftAlign={false} />
        <SideTextWithCTA
          title="Upload Your Property in Minutes"
          btnText="Sell Property"
        />
      </div>

      <div className="my-20 md:my-40 mx-auto  flex max-md:flex-col justify-between gap-10 md:gap-20 lg:gap-40">
        <ImageWithPosition bigImg={img1} smallImg={img2} leftAlign={true} />
        <SideTextWithCTA />
      </div>

      <div className="my-20 md:my-40 mx-auto  flex flex-row-reverse max-md:flex-col justify-between  gap-10 lg:gap-40">
        <ImageWithPosition bigImg={img1} smallImg={img2} leftAlign={false} />
        <SideTextWithCTA
          leftAlign={false}
          title="Maximize Your Property’s Value"
          btnText="Sell Property"
        />
      </div>
    </div>
  );
};

const ImageWithPosition = ({ bigImg, smallImg, leftAlign = true }) => {
  return (
    <div
      className={`relative max-sm:h-full max-sm:w-full w-96 h-96 ${
        leftAlign ? "" : "mr-5"
      }`}
    >
      <div
        className={`bg-blue-600 size-16 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-opacity-80 transition active:scale-[0.97] absolute z-20 -translate-y-1/2 -translate-x-1/2 max-sm:left-1/2 max-sm:top-1/2 ${
          leftAlign ? "left-80 top-60" : "left-20 -top-0"
        }`}
      >
        <IconPlayerPlayFilled className="size-10 " />
      </div>
      <Image
        src={img1}
        alt="property image"
        className="size-full sm:w-80 sm:h-80 rounded-md relative"
      />
      <Image
        src={img2}
        alt="property image"
        className={`max-sm:hidden w-80 h-40 rounded-md relative  ${
          leftAlign ? "-top-20 -right-20" : "-top-[400px] -right-20"
        }  `}
      />
    </div>
  );
};

const SideTextWithCTA = ({
  subTitle = "Property buying",
  title = "Find Your Dream Home with Ease",
  description = "Explore a curated selection of properties tailored to your needs. Our platform offers advanced search and filter options, ensuring that your perfect home is just a few clicks away.",
  btnText = "Find Property",
  leftAlign = true,
}) => {
  return (
    <div
      className={`max-w-96 md:max-lg:max-w-64 space-y-5 ${
        leftAlign ? "ml-5 " : "ml-2"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-12 h-1 bg-orange-500" />
        <h4 className="text-orange-500 font-bold">{subTitle}</h4>
      </div>
      <h2 className="text-4xl font-semibold capitalize">{title}</h2>
      <p>{description}</p>
      <div className="w-fit">
        <Link href={"/buy"}>
          <button className="px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:text-white font-medium transition duration-200 hover:bg-blue-600  border-2 border-transparent hover:border-blue-600 flex items-center justify-center gap-2 active:scale-[0.97]">
            <IconSearch /> {btnText}
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default AdvertiseSection;
