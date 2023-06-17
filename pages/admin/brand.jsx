import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@/src/components/Modal";
import { API_BASE_URL, BRANDS_URL } from "@/src/constants";

const Brand = () => {
  const [name, setName] = React.useState("");
  const [brands, setBrands] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [remainingTime, setRemainingTime] = useState(3);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let timer;
    if (showModal && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
      fetchBrands();
    };
  }, [showModal, remainingTime]);

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${BRANDS_URL}`);
      setBrands(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (brandId) => {
    try {
      await axios.delete(`${API_BASE_URL}${BRANDS_URL}`, {
        data: { id: brandId },
      });
      fetchBrands(); // Обновляем список категорий после удаления
      // Другие действия после успешного удаления
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (name.trim() === "") {
      errors.name = "Это обязательное поле";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await axios.post(`${API_BASE_URL}${BRANDS_URL}`, { name });
        // Категория успешно добавлена
        // Можете выполнить какие-то дополнительные действия, например очистить форму
        setName("");
        fetchBrands();
        setTimeout(() => {
          setIsTransitioned(true);
        }, 100);

        setTimeout(() => {
          setShowModal(false);
        }, 3000);
        setShowModal(true);
      } catch (error) {
        // Обработка ошибки при добавлении категории
        console.log(error);
      }
    }
  };

  return (
    <div className="flex gap-10">
      <div className="shadow-box">
        <h1 className="main-title">Добавить бренд</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Название бренда"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mb-2 px-4 py-2 border ${
              errors.name && "border-red-500"
            } input`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
          )}
          <button
            type="submit"
            className="main-btn translate-all duration-500 hover:bg-blue-900 hover:text-white"
          >
            Добавить
          </button>
        </form>
        {showModal && (
          <Modal
            isTransitioned={isTransitioned}
            remainingTime={remainingTime}
            setShowModal={setShowModal}
            title={["Успешно!", "Бренд добавлен в базу данных"]}
          />
        )}
      </div>
      <div className="shadow-box">
        <h2 className="main-title">Существующие бренды:</h2>
        <ul>
          {brands.map((brand) => (
            <li
              key={brand.id}
              className="flex items-center mt-2 justify-between"
            >
              <span className="mr-2">{brand.name}</span>
              <button
                onClick={() => handleDelete(brand.id)}
                className="btn-delete translate-all duration-500"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brand;
