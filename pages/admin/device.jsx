import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@/src/components/Modal";
import {
  API_BASE_URL,
  BRANDS_URL,
  CATEGORIES_URL,
  DEVICES_URL,
} from "@/src/constants";

const Device = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [brandId, setBrandId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [info, setInfo] = useState([]);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const brandsResponse = await axios.get(`${API_BASE_URL}${BRANDS_URL}`);
        setBrands(brandsResponse.data);

        const categoriesResponse = await axios.get(
          `${API_BASE_URL}${CATEGORIES_URL}`
        );
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
    fetchData();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${DEVICES_URL}`);
      setProducts(response.data.rows);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (deviceId) => {
    try {
      await axios.delete(`${API_BASE_URL}${DEVICES_URL}${deviceId}`);
      console.log(deviceId);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

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
    if (name.trim() === "") {
      errors.name = "Это обязательное поле";
    }
    if (description.trim() === "") {
      errors.description = "Это обязательное поле";
    }
    if (price.trim() === "") {
      errors.price = "Это обязательное поле";
    }
    if (oldPrice.trim() === "") {
      errors.oldPrice = "Это обязательное поле";
    }
    if (brandId.trim() === "") {
      errors.brandId = "Это обязательное поле";
    }
    if (typeId.trim() === "") {
      errors.typeId = "Это обязательное поле";
    }
    if (images.length === 0) {
      errors.img = "Это обязательное поле";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("oldPrice", oldPrice);
      formData.append("brandId", brandId);
      formData.append("typeId", typeId);
      formData.append("info", JSON.stringify(info));

      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          formData.append("img", images[i]);
        }
      }
      try {
        const response = await axios.post(
          `${API_BASE_URL}${DEVICES_URL}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          setName("");
          setDescription("");
          setPrice("");
          setOldPrice("");
          setBrandId("");
          setTypeId("");
          setInfo([]);
          setImages([]);
          setPreviewImages([]);
          setIsTransitioned(true);
          setTimeout(() => {
            setIsTransitioned(true);
          }, 100);
          setTimeout(() => {
            setShowModal(false);
          }, 3000);
          setShowModal(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-10">
      <div className="w-full md:w-auto shadow-box mb-6 md:mb-0">
        <h1 className="main-title">Добавить товар</h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border ${errors.name && "border-red-500"} input`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
          )}
          <textarea
            type="text"
            placeholder="Описание товара"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`border ${errors.description && "border-red-500"} input`}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mb-2">{errors.description}</p>
          )}
          <input
            type="number"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`border ${errors.price && "border-red-500"} input`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mb-2">{errors.price}</p>
          )}
          <input
            type="number"
            placeholder="Старая цена"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            className={`border ${errors.oldPrice && "border-red-500"} input`}
          />
          {errors.oldPrice && (
            <p className="text-red-500 text-sm mb-2">{errors.oldPrice}</p>
          )}
          <select
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
            className={`border ${errors.brandId && "border-red-500"} input`}
          >
            <option value="">Выберите бренд</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          {errors.brandId && (
            <p className="text-red-500 text-sm mb-2">{errors.brandId}</p>
          )}
          <select
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            className={`border ${errors.typeId && "border-red-500"} input`}
          >
            <option value="">Выберите категорию</option>
            {categories.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          {errors.typeId && (
            <p className="text-red-500 text-sm mb-2">{errors.typeId}</p>
          )}
          <div className="flex gap-6 justify-center">
            <div className="flex items-center mb-4">
              <input
                className="mr-2"
                type="radio"
                id="isAvailableTrueCheckbox"
                checked={selectedOption === "true"}
                onChange={() => handleOptionChange("true")}
              />
              <label htmlFor="isAvailableTrueCheckbox">Да</label>
            </div>
            <div className="flex items-center mb-4">
              <input
                className="mr-2"
                type="radio"
                id="isAvailableFalseCheckbox"
                checked={selectedOption === "false"}
                onChange={() => handleOptionChange("false")}
              />
              <label htmlFor="isAvailableFalseCheckbox">Нет</label>
            </div>
          </div>
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
          <button onClick={addInfo} className="input">
            Добавить новую характеристику
          </button>
          {info.map((i) => (
            <div key={i.number} className="flex gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Название характеристики"
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  className="input w-full"
                />
                <input
                  type="text"
                  placeholder="Описание характеристики"
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  className="input w-full"
                />
              </div>
              <button
                onClick={() => removeInfo(i.number)}
                className="btn-delete transition-all duration-500 px-4 py-2 mb-2 focus:border-red-500 text-red-500"
              >
                Удалить
              </button>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="main-btn translate-all duration-500"
          >
            Добавить
          </button>
        </div>
        {showModal && (
          <Modal
            isTransitioned={isTransitioned}
            remainingTime={remainingTime}
            setShowModal={setShowModal}
            title={["Успешно!", "Товар добавлен в базу данных"]}
          />
        )}
      </div>
      <div className="shadow-box">
        <h2 className="main-title">Существующие товары:</h2>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center mt-2 justify-between"
            >
              <span className="mr-2">{product.name}</span>
              <button
                onClick={() => handleDelete(product.id)}
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

export default Device;
