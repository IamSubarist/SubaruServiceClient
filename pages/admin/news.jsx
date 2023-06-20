import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@/src/components/Modal";
import { API_BASE_URL, NEWS_URL } from "@/src/constants";

const News = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [remainingTime, setRemainingTime] = useState(3);
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

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

  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages([...images, ...uploadedImages]);

    const uploadedPreviewImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages([...previewImages, ...uploadedPreviewImages]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (title.trim() === "") {
      errors.title = "Это обязательное поле";
    }
    if (description.trim() === "") {
      errors.description = "Это обязательное поле";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);

      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          formData.append("img", images[i]);
        }
      }
      try {
        await axios.post(`${API_BASE_URL}${NEWS_URL}add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setTitle("");
        setSubtitle("");
        setDescription("");
        setImages([]);
        setPreviewImages([]);
        setShowModal(true);
        setTimeout(() => {
          setIsTransitioned(true);
        }, 100);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="shadow-box">
      <h1 className="main-title">Добавить новость</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          placeholder="Заголовок новости"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`${errors.title && "border-red-500"} input`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mb-2">{errors.title}</p>
        )}
        <input
          placeholder="Подзаголовок новости"
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="border-gray-300 input"
        />
        <textarea
          placeholder="Описание новости"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`${errors.description && "border-red-500"} input`}
          rows="3"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mb-2">{errors.description}</p>
        )}
        <input
          multiple
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleImageUpload}
          className="mb-2"
        />
        {errors.img && (
          <p className="text-red-500 text-sm mb-2">{errors.img}</p>
        )}
        {previewImages.length > 0 && (
          <div className="flex flex-wrap mb-2">
            {previewImages.map((previewImage) => (
              <img
                key={previewImage}
                src={previewImage}
                alt="Preview"
                className="w-16 h-16 object-cover mr-2 mb-2"
              />
            ))}
          </div>
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
          title={["Успешно!", "Новость добавлена в базу данных"]}
        />
      )}
    </div>
  );
};

export default News;
