import Testimonials from "@/components/shared/Testimonials";
import BuyPageHero from "@/components/ui/BuyPageHero";
import { PropertyCard, SearchPropertyCard } from "@/components/ui/PropertyCard";
import React from "react";

const BuyPage = () => {
  return (
    <main>
      <BuyPageHero />
      <div className=" m-20">
        <PropertyCard />
      </div>

      <div className="max-w-7xl mx-auto">
        <SearchPropertyCard />
      </div>

      <div className="mx-auto my-20">
        <Testimonials />
      </div>
    </main>
  );
};

export default BuyPage;
