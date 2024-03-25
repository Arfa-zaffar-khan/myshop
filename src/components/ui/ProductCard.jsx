import { Star } from "lucide-react";
import React from "react";

export default function ProductCard({
  id,
  title,
  description,
  price,
  rating,
  thumbnail,
}) {
  return (
    <div className="rounded-md border">
      <img
        src={thumbnail}
        alt={title}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        loading="lazy"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>

        <div className="mt-3 flex items-center justify-start">
        <span className="text-sm font-semibold">Ratings:</span>
        <span className="p-1 px-2 flex gap-1">{rating}<Star className="text-orange-500" /></span>
        </div>
      
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Price:</span>
          <span className="block cursor-pointer p-1 px-2 text-xs font-medium  relative">
            {price+" USD"}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
