import Image from "next/image";
import React from "react";
import { API_BASE_URL } from "../constants";

const SearchItem = ({ product }) => {
  return (
    <div className="w-1/4 p-4">
      <Image
        className=" object-cover"
        width={200}
        height={200}
        src={`${API_BASE_URL}${product.img[0]}`}
        alt={product.title}
      />
      <div className="mt-2">
        <div className="flex gap-2 mb-2">
          <div className="font-bold">{product.price} ₽</div>
          <div className=" text-gray-400 line-through">
            {product.oldPrice} ₽
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mt-4 mb-1">
            {product.name.slice(0, 30) + "..."}
          </p>
          <p className="mb-2">{product.description.slice(0, 30) + "..."}</p>
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
