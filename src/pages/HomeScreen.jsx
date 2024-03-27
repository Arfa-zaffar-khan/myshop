import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductListSkeleton from "../components/ProductListSkeleton";
import ErrorScreen from "./ErrorScreen";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [iserror, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        setError(true);
        setErrorMessage("Error fetching products: " + response.status);
      }
    } catch (error) {
      setError(true);
      setErrorMessage("Error fetching products: " + error.message);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {isloading && <ProductListSkeleton />}
      {products.length > 0 && <ProductList products={[...products]} />}
      {iserror && <ErrorScreen errorMessage={errorMessage}/>}
    </div>
  );
}
