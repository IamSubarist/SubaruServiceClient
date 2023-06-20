import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import CartProductItem from "@/src/components/CartProductItem";
import {
  API_BASE_URL,
  DEVICES_URL,
  ORDERMAILS_URL,
  ORDERS_URL,
} from "@/src/constants";
import Head from "next/head";
import YandexMetrica from "@/src/components/yandexMetrika";

const OrderPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${DEVICES_URL}${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}${ORDERS_URL}`, {
        quantity,
        paymentMethod,
        deliveryMethod,
        deliveryAddress,
        contactName,
        contactPhone,
        userId: 3,
        deviceId: product.id,
      });

      const payload = {
        quantity: quantity,
        paymentMethod: paymentMethod,
        deliveryMethod: deliveryMethod,
        deliveryAddress: deliveryAddress,
        contactName: contactName,
        contactPhone: contactPhone,
        userId: 3,
        deviceId: product.id,
      };

      fetch(`${API_BASE_URL}${ORDERMAILS_URL}send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div class="shadow-box p-4">
      <Head>
        <YandexMetrica />
      </Head>
      <h2 class="main-title">Оформление заказа</h2>

      <div>
        <CartProductItem class="mt-4" product={product} />
      </div>

      <h3 class="font-bold mt-4">Количество</h3>
      <input
        class="input"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <h3 class="font-bold mt-4">Способ оплаты</h3>
      <label class="flex items-center mt-2">
        <input
          class="mr-2"
          type="radio"
          value="cash"
          checked={paymentMethod === "Наличными"}
          onChange={() => setPaymentMethod("Наличными")}
        />
        Оплата наличными
      </label>
      <label class="flex items-center mt-2">
        <input
          class="mr-2"
          type="radio"
          value="card"
          checked={paymentMethod === "Картой"}
          onChange={() => setPaymentMethod("Картой")}
        />
        Оплата картой
      </label>

      <h3 class="font-bold mt-4">Способ доставки</h3>
      <label class="flex items-center mt-2">
        <input
          class="mr-2"
          type="radio"
          value="pickup"
          checked={deliveryMethod === "Заберу сам"}
          onChange={() => setDeliveryMethod("Заберу сам")}
        />
        Заберу сам
      </label>
      <label class="flex items-center mt-2">
        <input
          class="mr-2"
          type="radio"
          value="courier"
          checked={deliveryMethod === "Курьером"}
          onChange={() => setDeliveryMethod("Курьером")}
        />
        Доставка курьером
      </label>

      {deliveryMethod === "Курьером" && (
        <div class="mt-4">
          <h3 class="font-bold">Адрес доставки</h3>
          <input
            class="input"
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />

          <h3 class="font-bold mt-4">Имя</h3>
          <input
            class="input"
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />

          <h3 class="font-bold mt-4">Контактный телефон</h3>
          <input
            class="input"
            type="text"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />
        </div>
      )}

      <button
        class="main-btn transition-all duration-all"
        onClick={handleSubmit}
      >
        Подтвердить заказ
      </button>
    </div>
  );
};

export default OrderPage;
