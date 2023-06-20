import Modal from "@/src/components/Modal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, REVIEWS_URL } from "@/src/constants";

const createReview = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
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
    };
  }, [showModal, remainingTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (name.trim() === "") {
      errors.name = "Это обязательное поле";
    }
    if (description.trim() === "") {
      errors.description = "Это обязательное поле";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await axios.post(`${API_BASE_URL}${REVIEWS_URL}`, {
          name,
          description,
        });
        setName("");
        setDescription("");
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

  return (
    <div className="shadow-box">
      <h1 className="main-title">Создание отзыва</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          placeholder="Ваше имя"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className={`${errors.name && "border-red-500"} input`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}
        <textarea
          placeholder="Ваш отзыв"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className={`${errors.description && "border-red-500"} input`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mb-2">{errors.description}</p>
        )}
        <button type="submit" className="main-btn translate-all duration-500">
          Оставить отзыв
        </button>
      </form>
      {showModal && (
        <Modal
          isTransitioned={isTransitioned}
          remainingTime={remainingTime}
          setShowModal={setShowModal}
          title={["Успешно!", "Благодарим вас за отзыв"]}
        />
      )}
    </div>
  );
};

export default createReview;
