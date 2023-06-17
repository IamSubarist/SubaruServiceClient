import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { ProductSlider } from "@/src/components/Swiper/ProductSlider";
import Link from "next/link";
import { API_BASE_URL, DEVICES_URL } from "@/src/constants";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${DEVICES_URL}${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="shadow-box h-full w-full">
          <div className="main-title">{product.name}</div>
          <ProductSlider product={product} />
        </div>
        <div className="shadow-box h-full w-2/3">
          <div className="main-title">Характеристики товара</div>
          <div>{product.description}</div>
          {product.info.map((i) => {
            return (
              <div className="flex justify-between">
                <p className="w-full">{i.title}</p>
                <p className="w-full">{i.description}</p>
              </div>
            );
          })}
        </div>
        <div className="shadow-box h-full w-1/5">
          <div className="flex gap-2">
            <div className="main-title">{product.price} ₽</div>
            <div className="text-2xl text-gray-400 line-through mb-10">
              {product.oldPrice} ₽
            </div>
          </div>
          <button
            onClick={() => setIsAdded(true)}
            className={
              isAdded
                ? "border-2 border-blue-900 outline-none rounded-md px-2 py-1"
                : "text-white bg-gradient-to-t from-blue-900 to-blue-800 rounded-md px-2 py-1"
            }
            disabled={isAdded}
          >
            {isAdded ? "В корзине" : "В корзину"}
          </button>
          <Link
            href={`/order/${product.id}`}
            className="text-white bg-gradient-to-t from-blue-900 to-blue-800 rounded-md px-2 py-1 mt-4"
          >
            Купить
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
