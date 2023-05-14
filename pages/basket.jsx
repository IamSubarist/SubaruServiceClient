import CartProductItem from "@/src/components/CartProductItem";
import ProductItem from "@/src/components/ProductItem";
import React from "react";

const Basket = ({ items = [] }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-2/3">
        <p className="mb-10 text-4xl">Корзина</p>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <CartProductItem />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-1/3">
        <p className="mb-10 text-4xl">Доставка по адресу:</p>
        <div className="flex flex-col gap-8 border border-blue-900 rounded-md p-6">
          <div className="flex flex-col">
            <input
              className="border-b outline-none border-blue-900 h-10"
              type="text"
              placeholder="Город"
            />
            <input
              className="border-b outline-none border-blue-900 h-10"
              type="text"
              placeholder="Улица"
            />
            <input
              className="border-b outline-none border-blue-900 h-10"
              type="text"
              placeholder="Дом"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Итого:</p>
              <p>24999 $</p>
            </div>
            <button className="text-white bg-blue-900 rounded-md w-full py-2 mb-1">
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
