import React from "react";
import { Slider } from "./Swiper";

export const Utp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="w-full sm:w-3/4">
          <p className="text-4xl sm:text-7xl">
            Предлагаем только качественные{" "}
            <span className="text-blue-900">запчасти</span>
            <br /> для иномарок
          </p>
          <div className="mt-10 flex items-center flex-col sm:flex-row">
            <button className="w-full sm:w-96 rounded-md px-14 py-3 sm:py-5 bg-gradient-to-t from-red-500 to-red-400 text-white">
              Посмотреть каталог
            </button>
            <p className="ml-4 text-sm text-gray-500">Более 50 товаров</p>
          </div>
        </div>
        <Slider />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <p className="rounded-md text-center w-full sm:w-1/3 py-3 sm:py-5 bg-gradient-to-t from-blue-900 to-blue-800 text-white">
          Высокое качество
        </p>
        <p className="rounded-md text-center w-full sm:w-1/3 py-3 sm:py-5 bg-gradient-to-t from-blue-900 to-blue-800 text-white">
          Лучшие на рынке
        </p>
        <p className="rounded-md text-center w-full sm:w-1/3 py-3 sm:py-5 bg-gradient-to-t from-blue-900 to-blue-800 text-white">
          Большой выбор
        </p>
      </div>
    </div>
  );
};
