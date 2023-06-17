import Image from "next/image";
import React from "react";
import tire from "../../public/assets/tire.png";
import axios from "axios";
import { useUser } from "./UserContext";
import Link from "next/link";
import { API_BASE_URL, CARTS_URL } from "../constants";

const ProductItem = ({ product }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const user = useUser();

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = async () => {
    try {
      setIsAdded(true);
      const token = localStorage.getItem("token");

      await axios.post(`${API_BASE_URL}${CARTS_URL}add`, {
        productId: product.id,
      });

      console.log(product);
      console.log(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-lg p-4 w-50 sm:w-60 max-w-md bg-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:border hover:border-blue-900">
      <Image
        className=" object-cover"
        width={200}
        height={200}
        src={`${API_BASE_URL}${product.img[0]}`}
        alt={product.title}
      />
      <div>
        <p className="font-bold text-xl mt-4 mb-1">
          {product.name.slice(0, 30) + "..."}
        </p>
        <p className="mb-2">{product.description.slice(0, 30) + "..."}</p>
      </div>
      <div>
        <div>
          {/* <p className="uppercase text-sm text-gray-400">Стоимость:</p> */}
          <div className="flex gap-2 mb-2">
            <div className="font-bold">{product.price} ₽</div>
            <div className=" text-gray-400 line-through">
              {product.oldPrice} ₽
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={onClickFavorite}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorite ? "pink" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              color={isFavorite ? "pink" : "gray"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          <button
            onClick={addToCart}
            className={
              isAdded
                ? "border-2 border-blue-900 outline-none rounded-md px-2 py-1"
                : "text-white bg-gradient-to-t from-blue-900 to-blue-800 rounded-md px-2 py-1"
            }
            disabled={isAdded}
          >
            {isAdded ? "В корзине" : "В корзину"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
