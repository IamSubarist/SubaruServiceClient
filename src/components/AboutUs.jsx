import Image from "next/image";
import React from "react";
import photo from "../../public/assets/photo.png";
import About from "@/pages/about";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-3xl sm:text-5xl text-gray-700 font-bold mb-4 absolute -z-10">
        О компании
      </h2>
      <h2 className="text-5xl sm:text-9xl text-gray-200 font-bold mb-4 relative -z-20 -top-2 sm:-top-14">
        О компании
      </h2>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-4 flex flex-col justify-between">
          <p className="text-sm sm:text-base">
            Subaru Service: продажа запчастей и аксессуаров высокого качества
          </p>
          <p className="text-sm sm:text-base">
            Мы начали свою деятельность недавно, но уже успели заслужить хорошую
            репутацию среди покупателей. Количество положительных отзывов в
            адрес нашей компании от благодарных клиентов растет с каждым днем. В
            нашем интернет-магазине вы можете купить необходимые запчасти и
            аксессуары для своего автомобиля по выгодным ценам.
          </p>
          <p className="text-sm sm:text-base">Большой ассортимент</p>
          <p className="text-sm sm:text-base">
            В каталоге нашего магазина вы найдете автозапчасти для Subaru.
          </p>
          <Link
            href="/about"
            className="mt-6 w-full sm:w-1/2 font-bold text-sm p-4 sm:p-6 border border-black text-center cursor-pointer rounded-md transition-all duration-500 hover:bg-blue-900 hover:text-white"
          >
            Читать дальше
          </Link>
        </div>
        <div className="w-full sm:w-1/2">
          <Image src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};
