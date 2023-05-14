import SearchItem from "@/src/components/SearchItem";
import React from "react";

const search_page = () => {
  return (
    <div>
      <div className="mb-10 text-4xl">
        По запросу "автомобиль" найдено 50 товаров
      </div>
      <div className="flex flex-wrap">
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>
    </div>
  );
};

export default search_page;
