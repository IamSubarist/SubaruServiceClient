import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { API_BASE_URL, DEVICES_URL } from "@/src/constants";
import ProductItem from "@/src/components/ProductItem";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}${DEVICES_URL}search`,
          {
            params: { query },
          }
        );
        const data = response.data;
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <>
      <h1 className="main-title">Результаты поиска для запроса: {query}</h1>
      <div className="flex flex-wrap gap-6">
        {results.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
