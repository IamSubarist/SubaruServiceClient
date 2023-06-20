import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@/src/components/Modal";
import { API_BASE_URL, CATEGORIES_URL } from "@/src/constants";

const Type = () => {
  const [name, setName] = React.useState("");
  const [categories, setCategories] = useState([]);
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
      fetchCategories();
    };
  }, [showModal, remainingTime]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${CATEGORIES_URL}`);
      setCategories(response.data);
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
        await axios.post(`${API_BASE_URL}${CATEGORIES_URL}`, { name });
        setName("");
        fetchCategories();
        setTimeout(() => {
          setIsTransitioned(true);
        }, 100);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
        setShowModal(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`${API_BASE_URL}${CATEGORIES_URL}`, {
        data: { id: categoryId },
      });
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-10">
      <div className="w-full md:w-auto h-full shadow-box mb-6 md:mb-0">
        <h1 className="main-title">Добавить категорию</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Название категории"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${errors.name && "border-red-500"} input`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
          )}
          <button type="submit" className="main-btn translate-all duration-500">
            Добавить
          </button>
        </form>
        {showModal && (
          <Modal
            isTransitioned={isTransitioned}
            remainingTime={remainingTime}
            setShowModal={setShowModal}
            title={["Успешно!", "Категория добавлена в базу данных"]}
          />
        )}
      </div>
      <div className="shadow-box h-full">
        <h2 className="main-title">Существующие категории:</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              className="flex items-center mt-2 justify-between"
            >
              <span className="mr-2">{category.name}</span>
              <button
                onClick={() => handleDelete(category.id)}
                className="btn-delete transition-all duration-500"
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

export default Type;
