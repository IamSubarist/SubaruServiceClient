import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SearchItem from "@/src/components/SearchItem";
import { API_BASE_URL, DEVICES_URL } from "@/src/constants";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Получите результаты поиска здесь, например, с помощью API-запроса
    // и установите их в состояние setResults
    // Здесь вы можете использовать `query` для выполнения поиска
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
    <div>
      <h1>Результаты поиска для запроса: {query}</h1>
      <div>
        {results.map((product) => (
          <SearchItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
