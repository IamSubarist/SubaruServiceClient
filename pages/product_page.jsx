import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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
    <>
      <div className="flex justify-between flex-col gap-6 sm:flex-row">
        <div className="shadow-box h-full w-full">
          <div className="main-title">{product.name}</div>
          <ProductSlider product={product} />
        </div>
        <div className="shadow-box h-full w-full">
          <div className="main-title">Характеристики товара</div>
          <div className="mb-10">{product.description}</div>
          {product.info.map((i) => {
            return (
              <div className="mb-2">
                <div className="flex justify-between gap-6 shadow-box">
                  <p className="w-full text-justify">{i.title}</p>
                  <p className="w-full text-justify">{i.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="shadow-box h-full w-full sm:w-1/5">
          <div className="main-title">Стоимость</div>
          <div className="flex gap-2">
            <div className="font-bold text-xl">{product.price} ₽</div>
            <div className="text-gray-400 line-through">
              {product.oldPrice} ₽
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setIsAdded(true)}
              className={
                isAdded
                  ? "main-btn text-white bg-blue-900"
                  : "main-btn transition-all duration-500"
              }
              disabled={isAdded}
            >
              {isAdded ? "В корзине" : "В корзину"}
            </button>
            <Link
              href={`/order/${product.id}`}
              className="main-btn transition-all duration-500"
            >
              Купить
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
