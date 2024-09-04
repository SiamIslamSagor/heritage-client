import Testimonials from "@/components/shared/Testimonials";
import BuyPageHero from "@/components/ui/BuyPageHero";
import PropertyCard from "@/components/ui/PropertyCard";
import React from "react";

const BuyPage = () => {
  return (
    <main>
      <BuyPageHero />
      <div className=" m-20">
        <PropertyCard />
      </div>

      <div className="mx-5 my-20">
        <Testimonials />
      </div>
    </main>
  );
};

export default BuyPage;
