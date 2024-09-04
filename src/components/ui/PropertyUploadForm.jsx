import React from "react";

const PropertyUploadForm = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div>
        {/* <input
          className="w-full border pl-10 p-2 my-2 rounded-md"
          type="text"
          placeholder="Search Properties"
        /> */}
        <form className="w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Property Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="url"
                placeholder="Property Image URL"
                name="propertyImg"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Property Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Property Title"
                name="propertyTitle"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Property Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Property Location"
                name="propertyLocation"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Latitude (optional Example: 42)
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                //   placeholder="Property Title"
                name="locationDetailsLatitude"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Longitude (optional Example: -71)
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                //   placeholder="Property Title"
                name="locationDetailsLongitude"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Property Features (optional)
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Property Features"
                name="propertyFeatures"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Property Beauty (optional)
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Property Beauty"
                name="propertyBeauty"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Location Description (optional)
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Property Location Description"
                name="locationDescription"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Property Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                required
                placeholder="Property Description"
                name="propertyDescription"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Minimum Price Range ($)
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                required
                //   placeholder="Property Title"
                name="propertyPriceRangeMin"
              />
            </div>
            <div className="w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                Maximum Price Range ($)
              </label>
              <input
                className="appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                required
                //   placeholder="Property Title"
                name="propertyPriceRangeMax"
              />
            </div>
          </div>

          <div className="text-center">
            {/* <SecondaryBtn btnType="submit" btnText="add"></SecondaryBtn> */}
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyUploadForm;
