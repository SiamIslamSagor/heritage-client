import { services } from "@/constant/constant";
import { IconHome } from "@tabler/icons-react";
import React from "react";
import SectionTitle from "../shared/SectionTitle";

const ServicesSection = () => {
  return (
    <div className="mb-10 xl:mb-20">
      <SectionTitle title={"Other Services"} />{" "}
      <div className="flex flex-wrap gap-10  justify-center">
        {services.map(service => (
          <div
            key={service.description}
            className="bg-blue-100 rounded-md p-5 m-2 flex max-w-[440px] justify-between gap-5 hover:shadow-md transition duration-300 group"
          >
            <div className="!size-14 min-w-14 group-hover:bg-transparent group-hover:text-orange-600 group-hover:border-orange-600 border-2 border-transparent transition duration-300 bg-orange-600 text-white rounded-md flex justify-center items-center">
              <IconHome />
            </div>
            <div className="space-y-4 max-w-80">
              <h3 className="text-xl sm:text-3xl font-semibold text-wrap">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-wrap">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
