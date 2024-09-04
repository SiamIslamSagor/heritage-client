import BuyPageHero from "@/components/ui/BuyPageHero";
import PropertyCard from "@/components/ui/PropertyCard";
import React from "react";

const BuyPage = () => {
  return (
    <div>
      <BuyPageHero />
      <div className=" m-20">
        <PropertyCard />
      </div>
    </div>
  );
};

export default BuyPage;
