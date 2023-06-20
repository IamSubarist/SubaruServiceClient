import React from "react";
import axios from "axios";
import Link from "next/link";
import { API_BASE_URL, CARTS_URL, BRANDS_URL } from "../constants";
import { ProductSlider } from "./Swiper/ProductSlider";

const ProductItem = ({ product }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [brandName, setBrandName] = React.useState("");

  React.useEffect(() => {
    const fetchBrandName = async () => {
      const brandResponse = await axios.get(
        `${API_BASE_URL}${BRANDS_URL}/${product.brandId}`
      );
      const brandData = brandResponse.data;
      setBrandName(brandData.name);
    };
    fetchBrandName();
  }, []);

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
    <div className="rounded-lg p-4 w-50 sm:w-60 max-w-md bg-white shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:border hover:border-blue-900">
      <Link href={`/product/${product.id}`}>
        <ProductSlider product={product} />
        <div>
          <p className="font-bold text-xl mt-4">
            {product.name.length > 30
              ? product.name.slice(0, 30) + "..."
              : product.name}
          </p>
          <p className="font-bold text-gray-400 mb-2">{brandName}</p>
          <p className="mb-2">
            {product.description.length > 30
              ? product.description.slice(0, 30) + "..."
              : product.description}
          </p>
        </div>
        <div>
          <div className="flex gap-2 mb-2">
            <div className="font-bold">{product.price} ₽</div>
            <div className=" text-gray-400 line-through">
              {product.oldPrice} ₽
            </div>
          </div>
          <div></div>
        </div>
      </Link>
      <div>
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
                ? "px-2 sm:px-6 py-0 sm:py-2 border border-blue-900 rounded-md hover:bg-blue-900 hover:text-white ease-in-out"
                : "px-2 sm:px-6 py-0 sm:py-2 border border-blue-900 rounded-md hover:bg-blue-900 hover:text-white ease-in-out transition-all duration-500"
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
