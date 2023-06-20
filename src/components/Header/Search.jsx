import React, { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    try {
      router.push({
        pathname: "/search_page",
        query: { query },
      });
      setQuery("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-16 sm:mt-5 w-full border-2 border-blue-900 rounded-lg sm:w-1/3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-4/5 h-8 rounded-l-md pl-3 text-sm outline-none"
        placeholder="Поиск по названию"
        type="text"
      />
      <button
        className="w-1/5 h-9 bg-blue-900 text-white rounded-r-md"
        onClick={handleSearch}
      >
        Поиск
      </button>
    </div>
  );
};

export default Search;
