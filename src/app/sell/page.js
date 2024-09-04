import SectionTitle from "@/components/shared/SectionTitle";
import PropertyUploadForm from "@/components/ui/PropertyUploadForm";
import UploadProperty from "@/components/ui/UploadProperty";
import React from "react";

const SellPage = () => {
  return (
    <div>
      <div className="mt-20">
        <SectionTitle title={"Upload Your Property"} />
      </div>
      <div>
        {/* <PropertyUploadForm /> */}
        <UploadProperty />
      </div>
    </div>
  );
};

export default SellPage;
