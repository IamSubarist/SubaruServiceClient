import Link from "next/link";
import React from "react";

const Account = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Аккаунт</h2>
      <div className="flex flex-col">
        <a className="hover:underline" href={"/"}>
          Корзина
        </a>
        <a className="hover:underline" href={"/"}>
          Мои заказы
        </a>
        <Link className="hover:underline" href={"/create_review"}>
          Оставить отзыв
        </Link>
      </div>
    </div>
  );
};

export default Account;
