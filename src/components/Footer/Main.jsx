import React from "react";

const Main = () => {
  return (
    <div className="">
      <h2 className="font-bold text-xl mb-4">Основное</h2>
      <div className="flex flex-col">
        <a className="hover:underline" href={"/"}>
          Главная
        </a>
        <a className="hover:underline" href={"/"}>
          Новости
        </a>
        <a className="hover:underline" href={"/"}>
          О нас
        </a>
        <a className="hover:underline" href={"/"}>
          Контакты
        </a>
        <a className="hover:underline" href={"/"}>
          Консультация/ТО
        </a>
      </div>
    </div>
  );
};

export default Main;
