import Modal from "@/src/components/Modal";
import { API_BASE_URL, MAILS_URL } from "@/src/constants";
import React, { useState, useEffect } from "react";

const Consultation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
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
    return () => clearInterval(timer);
  }, [showModal, remainingTime]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setIsTransitioned(false);

    const errors = {};
    if (name.trim() === "") {
      errors.name = "Это обязательное поле";
    }
    if (phone.trim() === "") {
      errors.phone = "Это обязательное поле";
    }
    if (email.trim() === "") {
      errors.email = "Это обязательное поле";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const payload = {
        name: name,
        phone: phone,
        email: email,
        type: selectedOption,
      };

      fetch(`${API_BASE_URL}${MAILS_URL}send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Обработка успешной отправки письма
          setShowModal(!showModal);
        })
        .catch((error) => {
          console.error(error);
          // Обработка ошибки
        });
      setShowModal(true);
      setTimeout(() => {
        // setShowModal(true);
        setIsTransitioned(true);
      }, 100);

      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
  };

  const handleOptionChange = (value) => setSelectedOption(value);

  return (
    <div className="shadow-box">
      <div className="main-title">Консультация / Запись на ТО</div>
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Ваше имя"
          type="text"
          className={`${errors.name && "border-red-500"} input`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Ваш телефон"
          type="tel"
          className={`${errors.phone && "border-red-500"} input`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mb-2">{errors.phone}</p>
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Ваш email"
          type="text"
          className={`${errors.email && "border-red-500"} input`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}
        <div className="flex gap-6 justify-center">
          <div className="flex items-center mb-4">
            <input
              className="mr-2"
              type="radio"
              id="consultationCheckbox"
              checked={selectedOption === "Консультация"}
              onChange={() => handleOptionChange("Консультация")}
            />
            <label htmlFor="consultationCheckbox">Консультация</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              className="mr-2"
              type="radio"
              id="toCheckbox"
              checked={selectedOption === "Запись на ТО"}
              onChange={() => handleOptionChange("Запись на ТО")}
            />
            <label htmlFor="toCheckbox">Запись на ТО</label>
          </div>
        </div>
        <button className="main-btn transition-all duration-500" type="submit">
          Отправить
        </button>
      </form>
      {showModal && (
        <Modal
          isTransitioned={isTransitioned}
          remainingTime={remainingTime}
          setShowModal={setShowModal}
          title={[
            "Заявка отправлена!",
            "Мы свяжемся с вами в ближайшее время.",
          ]}
        />
      )}
    </div>
  );
};

export default Consultation;
