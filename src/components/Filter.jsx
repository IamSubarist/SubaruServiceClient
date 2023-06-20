import React, { useState } from "react";

const Filter = ({ handlePriceFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handlePriceSubmit = (e) => {
    e.preventDefault();
    handlePriceFilter(minPrice, maxPrice);
  };

  return (
    <div className="max-w-md p-4 bg-white rounded-lg shadow-xl">
      <div className="main-title">Фильтр</div>
      <div className="">
        <p className="text-xl font-bold text-gray-800 mb-2">Цена</p>
        <form onSubmit={handlePriceSubmit}>
          <div className="flex justify-between gap-4">
            <input
              type="number"
              className="input w-1/2 mb-0"
              placeholder="Мин"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="number"
              className="input w-1/2 mb-0"
              placeholder="Макс"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
          <button
            type="submit"
            className="main-btn mt-2 w-full transition-all duration-500"
          >
            Применить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
