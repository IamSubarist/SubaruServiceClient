import Image from "next/image";
import React from "react";
import { API_BASE_URL } from "../constants";

const SearchItem = ({ product }) => {
  return (
    <div className="w-1/4 p-4">
      <Image
        priority // {false} | {true}
        width={700}
        height={700}
        src={`${API_BASE_URL}${product.img}`}
        alt={product.name}
      />
      <div className="mt-2">
        <p>
          {product.price} р.{" "}
          <span className="line-through text-gray-400">1500 р.</span>
        </p>
        <div className="flex">
          <p>{product.name}</p>
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
