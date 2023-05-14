import React from "react";

const Account = () => {
  return (
    <div className="">
      <h2 className="font-bold text-xl mb-4">Аккаунт</h2>
      <div className="flex flex-col">
        <a className="hover:underline" href={"/"}>
          Корзина
        </a>
        <a className="hover:underline" href={"/"}>
          Мои заказы
        </a>
      </div>
    </div>
  );
};

export default Account;
