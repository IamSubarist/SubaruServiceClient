import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login, register } from "../store/actions/authActions";

const Auth = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  const handleRegister = () => {
    const userData = {
      email: email,
      password: password,
      role: "user",
    };

    dispatch(register(userData));
  };

  const handleLogin = () => {
    const userData = {
      email: email,
      password: password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="absolute left-0 top-0 w-full h-full bg-black/50 z-10">
      <div className="absolute right-0 w-1/4 h-full bg-white pt-8">
        <div className="flex flex-col mx-8 gap-6">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">
              {isLogin ? "Авторизация" : "Регистрация"}
            </p>
            <button
              onClick={onClose}
              className="border border-black rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col border rounded-md border-blue-900 p-4">
            <div className="flex flex-col gap-2 w-full">
              {!isLogin && (
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="outline-none border-b border-blue-900 h-10"
                  placeholder="Ваше имя"
                  type="text"
                />
              )}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none border-b border-blue-900 h-10"
                placeholder="Введите email"
                type="text"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none border-b border-blue-900 h-10"
                placeholder="Введите пароль"
                type="password"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={isLogin ? handleLogin : handleRegister}
              className="text-white bg-blue-900 rounded-md w-full py-2 mb-1"
            >
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-900"
                >
                  Зарегистрируйтесь!
                </button>
              </div>
            ) : (
              <div>
                Есть аккаунт?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-900"
                >
                  Войдите!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
