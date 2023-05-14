import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container mx-auto">
      <p className="text-3xl font-bold">
        {isLogin ? "Авторизация" : "Регистрация"}
      </p>
      <div className="mt-14 flex flex-col gap-3">
        {isLogin ? (
          <div></div>
        ) : (
          <input
            className="outline-none border-b border-blue-900  h-10 w-96 p-3 active:border-blue-900"
            placeholder="Ваше имя"
            type="text"
          />
        )}
        <input
          className="outline-none border-b border-blue-900  h-10 w-96 p-3"
          placeholder="Введите email"
          type="text"
        />
        <input
          className="outline-none border-b border-blue-900  h-10 w-96 p-3"
          placeholder="Введите пароль"
          type="text"
        />
      </div>
      <div className="w-96">
        <button
          onClick={() => setIsLogin(true)}
          className="p-3 text-white bg-blue-900 rounded-md mt-5 mb-1"
        >
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
        {isLogin ? (
          <div className="mt-1">
            Нет аккаунта?{" "}
            <a className="text-blue-900" href={"/"}>
              Зарегестрируйтесь!
            </a>
          </div>
        ) : (
          <div className="mt-1">
            Есть аккаунт?{" "}
            <a className="text-blue-900" href={"/"}>
              Войдите!
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
