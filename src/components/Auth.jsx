import React, { useState } from "react";

const Auth = ({ onClose }) => {
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, email }),
        }
      );

      const data = await response.json();
      console.log(data.message);
      console.log(userData);
      // Здесь вы можете добавить код для обработки успешной регистрации, например, перенаправление на другую страницу
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        // Сохраните токен аутентификации в хранилище (localStorage, cookie и т. д.)
        localStorage.setItem("authToken", token);

        // Здесь вы можете добавить код для обработки успешной аутентификации, например, перенаправление на другую страницу
      } else {
        console.error("Ошибка аутентификации:", data.message);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
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
              {isLogin ? (
                <div></div>
              ) : (
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
                type="text"
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
                  Зарегестрируйтесь!
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
