// useAuthentication.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:5000/api/user/auth",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Здесь вы можете обработать полученные данные о пользователе
          console.log(response);

          setAuthenticated(true); // Установите флаг аутентификации в true
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthentication();
  }, []);

  const login = async (email, password) => {
    try {
      // Выполните запрос на сервер для авторизации и получения токена
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      const { token } = response.data;

      localStorage.setItem("token", token); // Сохраните токен в localStorage
      setAuthenticated(true); // Установите флаг аутентификации в true

      // Продолжите выполнение необходимых действий после авторизации
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token"); // Удалите токен из localStorage
    setAuthenticated(false); // Установите флаг аутентификации в false

    // Продолжите выполнение необходимых действий после выхода из учетной записи
  };

  return { authenticated, login, logout };
};
