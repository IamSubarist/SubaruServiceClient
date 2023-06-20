import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Основное</h2>
      <div className="flex flex-col">
        <Link className="hover:underline" href={"/"}>
          Главная
        </Link>
        <Link className="hover:underline" href={"/news"}>
          Новости
        </Link>
        <Link className="hover:underline" href={"/about"}>
          О нас
        </Link>
        <Link className="hover:underline" href={"/contacts"}>
          Контакты
        </Link>
        <Link className="hover:underline" href={"/consultation"}>
          Консультация/ТО
        </Link>
      </div>
    </div>
  );
};

export default Main;
