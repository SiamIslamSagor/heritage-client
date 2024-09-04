"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRef, useState } from "react";

// todo: add key on env
const image_hosting_key = "0aee1bb03bebe9430916f501aa7158b9";

/* 
images
title
priceRange (allwayes USDT)
description
amenities
location
propertyType
listingType
area
city
country
bedrooms
bathrooms
parkingSpace

*/

export default function PropertyUploadForm() {
  const imageInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrls, setImageUrls] = useState([]);
  const [imagesErr, setImagesErr] = useState("");

  const uploadImages = async images => {
    if (images.length < 2) {
      alert("Please upload at least 2 images.");
      if (imageInputRef.current) imageInputRef.current.value = null;
      return;
    }
    if (images.length > 4) {
      alert("You can upload a maximum of 4 images.");
      if (imageInputRef.current) imageInputRef.current.value = null;
      return;
    }

    const uploadedImageUrls = [];

    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.append("image", images[i]);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
          formData
        );
        console.log(response.data.data);
        uploadedImageUrls.push(response.data.data.display_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setImageUrls(uploadedImageUrls);
  };

  const onSubmit = data => {
    if (imageUrls.length <= 1) {
      setImagesErr("Images is required, min 2 max 4.");
      return;
    }
    console.log("Form submitted:", { ...data, imageUrls });
    // Handle form submission, such as sending data to the backend
  };

  const handleFileChange = e => {
    const images = e.target.files;
    uploadImages(images);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-4 sm:p-8 bg-gray-100 shadow-lg rounded-lg my-20 max-sm:mx-3"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Property Upload Form
      </h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Price Range (USDT)
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            {...register("priceRange.min", {
              required: "Minimum price is required",
            })}
            className="mt-1 p-3 block w-1/2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max"
            {...register("priceRange.max", {
              required: "Maximum price is required",
            })}
            className="mt-1 p-3 block w-1/2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {errors.priceRange?.min && (
          <p className="text-red-500 text-sm mt-1">
            {errors.priceRange.min.message}
          </p>
        )}
        {errors.priceRange?.max && (
          <p className="text-red-500 text-sm mt-1">
            {errors.priceRange.max.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Amenities */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Amenities
        </label>
        <input
          type="text"
          {...register("amenities", { required: "Amenities are required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.amenities && (
          <p className="text-red-500 text-sm mt-1">
            {errors.amenities.message}
          </p>
        )}
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          {...register("location", { required: "Location is required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      {/* Property Images */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Property Images
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          required
          ref={imageInputRef}
          onChange={handleFileChange}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {imagesErr && <p className="text-red-500 text-sm mt-1">{imagesErr}</p>}
        {imageUrls.length > 0 && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Uploaded Images:</p>
            <ul className="list-disc ml-5">
              {imageUrls.map((url, index) => (
                <a href={url} key={index}>
                  <li className="text-blue-500">{url}</li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Property Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Property Type
        </label>
        <select
          {...register("propertyType", {
            required: "Property type is required",
          })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
        {errors.propertyType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.propertyType.message}
          </p>
        )}
      </div>

      {/* Listing Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Listing Type
        </label>
        <select
          {...register("listingType", { required: "Listing type is required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Listing Type</option>
          <option value="Buy">Sale</option>
          <option value="Rent">Rent</option>
          <option value="Commercial">Commercial</option>
        </select>
        {errors.listingType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.listingType.message}
          </p>
        )}
      </div>

      {/* Area */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Area (sq ft)
        </label>
        <input
          type="number"
          {...register("area", { required: "Area is required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.area && (
          <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>
        )}
      </div>

      {/* City */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          {...register("city", { required: "City is required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>

      {/* Country */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <input
          type="text"
          {...register("country", { required: "Country is required" })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Bedrooms
        </label>
        <input
          type="number"
          {...register("bedrooms", {
            required: "Number of bedrooms is required",
          })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.bedrooms && (
          <p className="text-red-500 text-sm mt-1">{errors.bedrooms.message}</p>
        )}
      </div>

      {/* Bathrooms */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Bathrooms
        </label>
        <input
          type="number"
          {...register("bathrooms", {
            required: "Number of bathrooms is required",
          })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.bathrooms && (
          <p className="text-red-500 text-sm mt-1">
            {errors.bathrooms.message}
          </p>
        )}
      </div>

      {/* Parking Space */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Parking Space
        </label>
        <input
          type="number"
          {...register("parkingSpace", {
            required: "Parking space is required",
          })}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.parkingSpace && (
          <p className="text-red-500 text-sm mt-1">
            {errors.parkingSpace.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
