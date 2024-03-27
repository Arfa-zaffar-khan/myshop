import React from "react";
import ProductCardSkeleton from "./ui/ProductCardSkeleton";

export default function ProductListSkeleton() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 20 }).map((_, i) => {
        return <ProductCardSkeleton key={i}/>;
      })}
    </div>
  );
}
