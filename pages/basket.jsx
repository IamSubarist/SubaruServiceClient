import React, { useEffect, useState } from "react";
import axios from "axios";
import CartProductItem from "@/src/components/CartProductItem";
import { useDispatch } from "react-redux";
import { loadCart } from "../src/store/actions/authActions";
import { API_BASE_URL, CARTS_URL } from "@/src/constants";

const Basket = () => {
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
    dispatch(loadCart());
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${CARTS_URL}`);
      setCartItems(response.data);
      dispatch(loadCart()); // Добавьте вызов экшена loadCart
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`${API_BASE_URL}${CARTS_URL}${itemId}`);
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-2/3">
        <p className="main-title">Корзина</p>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id}>
              <CartProductItem item={item} removeFromCart={removeFromCart} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-1/3">
        <p className="main-title">Доставка по адресу:</p>
        <div className="flex flex-col gap-8 border border-blue-900 rounded-md p-6">
          <div className="flex flex-col">
            <input className="input" type="text" placeholder="Город" />
            <input className="input" type="text" placeholder="Улица" />
            <input className="input" type="text" placeholder="Дом" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Итого:</p>
              <p>24999 $</p>
            </div>
            <button className="main-btn transition-all duration-500">
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
