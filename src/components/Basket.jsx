import Image from "next/image";
import React from "react";
import BasketProduct from "./BasketProduct";

const Basket = ({ onClose }) => {
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-black/50 z-10">
      <div className="absolute right-0 w-1/4 h-full bg-white pt-8 overflow-auto flex flex-col justify-between">
        <div className="flex flex-col mx-8 gap-6">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">Корзина</p>
            <button
              onClick={onClose}
              className="border border-black rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <BasketProduct />
            <BasketProduct />
          </div>
          <div className="">
            <div>
              <p>Итого</p>
              <div></div>
              <p>15110 руб.</p>
            </div>
            <button className="text-white bg-blue-900 rounded-md w-full py-2 mb-1">
              Оплатить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
