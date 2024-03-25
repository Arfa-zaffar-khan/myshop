import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductListSkeleton from "../components/ProductListSkeleton";

export default function HomeScreen() {
  const [products, setProducts] = useState();

  function getAllProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {products ? (
        <ProductList products={[...products]} />
      ) : (
        <ProductListSkeleton />
      )}
    </div>
  );
}
