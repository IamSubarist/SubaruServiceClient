import React from "react";

const SearchItem = () => {
  return (
    <div className="w-1/4 p-4">
      <img
        src="https://bipbap.ru/wp-content/uploads/2021/11/421727f6e487de8597eb560ce7cb862a-1-730x548.jpg"
        alt=""
      />
      <div className="mt-2">
        <p>
          1211 р. <span className="line-through text-gray-400">1500 р.</span>
        </p>
        <div className="flex">
          <p>AutoHimDetal</p>
          <p className="text-gray-400">/ Подарочный набор...</p>
        </div>
        <div>
          <button className="mt-4 bg-blue-900 text-white rounded-md px-4 py-2 mb-10">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
