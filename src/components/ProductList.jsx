import React from "react";
import ProductCard from "./ui/ProductCard";

export default function ProductList({products}) {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.map((product)=>{
           return <ProductCard key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} rating={product.rating} thumbnail={product.thumbnail}/>
        })}
        
    </div>
  );
}
