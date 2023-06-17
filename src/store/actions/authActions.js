import axios from "axios";

// Действие для регистрации пользователя
export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/registration",
      userData
    );
    const { token, cartId } = response.data;

    // Сохраняем токен в локальном хранилище
    localStorage.setItem("token", token);
    // Добавляем токен в заголовки запросов
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Выполняем действие для сохранения токена и корзины в Redux-хранилище
    dispatch(setUserToken(token));
    dispatch(setCartId(cartId));
  } catch (error) {
    // Обработка ошибок регистрации
    console.error(error);
  }
};

// Действие для авторизации пользователя
export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/login",
      userData
    );
    const { token } = response.data;

    // Сохраняем токен в локальном хранилище
    localStorage.setItem("token", token);
    // Добавляем токен в заголовки запросов
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Выполняем действие для сохранения токена в Redux-хранилище
    dispatch(setUserToken(token));
  } catch (error) {
    // Обработка ошибок авторизации
    console.error(error);
  }
};

// Действие для проверки аутентификации пользователя
export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/user/auth");
    const { token, userId } = response.data;

    // Добавляем токен в заголовки запросов
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Выполняем действие для сохранения токена и идентификатора пользователя в Redux-хранилище
    dispatch(setUserToken(token));
    dispatch(setUserId(userId));
  } catch (error) {
    // Обработка ошибок проверки аутентификации
    console.error(error);
  }
};

// Действие для разлогинивания пользователя
export const logout = () => async (dispatch) => {
  try {
    // Удаляем токен из локального хранилища
    localStorage.removeItem("token");
    // Удаляем токен из заголовков запросов
    delete axios.defaults.headers.common["Authorization"];

    // Выполняем действие для очистки данных пользователя в Redux-хранилище
    dispatch(clearUserData());
  } catch (error) {
    // Обработка ошибок разлогинивания
    console.error(error);
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/user/auth");
    const { token, userId } = response.data;

    // Сохраняем токен в локальном хранилище
    localStorage.setItem("token", token);
    // Добавляем токен в заголовки запросов
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Выполняем действие для сохранения токена и идентификатора пользователя в Redux-хранилище
    dispatch(setUserToken(token));
    dispatch(setUserId(userId));
  } catch (error) {
    // Обработка ошибок проверки аутентификации
    console.error(error);
  }
};

// Действие для очистки данных пользователя в Redux-хранилище
export const clearUserData = () => ({
  type: "CLEAR_USER_DATA",
});

// Действие для сохранения токена пользователя в Redux-хранилище
export const setUserToken = (token) => ({
  type: "SET_USER_TOKEN",
  payload: token,
});

// Действие для сохранения идентификатора пользователя в Redux-хранилище
export const setUserId = (userId) => ({
  type: "SET_USER_ID",
  payload: userId,
});

// Действие для сохранения идентификатора корзины в Redux-хранилище
export const setCartId = (cartId) => ({
  type: "SET_CART_ID",
  payload: cartId,
});
