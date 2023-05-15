import Image from "next/image";
import React from "react";
import photo from "../../public/assets/photo.png";
import About from "@/pages/about";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <div className="container mx-auto mt-36">
      <h2 className="text-5xl text-gray-700 font-bold absolute">О компании</h2>
      <h2 className="text-gray-200 font-bold text-9xl relative -z-10 -top-14">
        О компании
      </h2>
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-between">
          <p>
            Subaru Service: продажа запчастей и аксессуаров высокого качества
          </p>
          <p>
            Мы начали свою деятельность недавно, но уже успели заслужить хорошую
            репутацию среди покупателей. Количество положительных отзывов в
            адрес нашей компании от благодарных клиентов растет с каждым днем. В
            нашем интернет-магазине вы можете купить необходимые запчасти и
            аксессуары для своего автомобиля по выгодным ценам.
          </p>
          <p>Большой ассортимент</p>
          <p>В каталоге нашего магазина вы найдете автозапчасти для Subaru.</p>
          <Link
            href="/about"
            className="mt-10 w-1/2 font-bold text-sm p-6 border border-black text-center cursor-pointer rounded-md transition-all duration-500 hover:bg-blue-900 hover:text-white"
          >
            Читать дальше
          </Link>
        </div>
        <div className="w-1/2">
          <Image src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};
