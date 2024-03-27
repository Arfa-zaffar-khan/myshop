import React, { useCallback, useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductListSkeleton from "../components/ProductListSkeleton";
import ErrorScreen from "./ErrorScreen";
import Pagination from "../components/Pagination";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [iserror, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;

  const paginate = (pagenumber) => {
    if (pagenumber != page) {
      setLoading(true);
      setProducts([]);
      setPage(pagenumber);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
          page * itemsPerPage - itemsPerPage
        }`
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
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
  }, [page]);

  return (
    <div>
      {isloading && <ProductListSkeleton />}
      {products.length > 0 && <ProductList products={[...products]} />}
   
        <Pagination
          totalPages={totalPages}
          paginate={paginate}
          currentPage={page}
        />

      {iserror && <ErrorScreen errorMessage={errorMessage} />}
    </div>
  );
}
