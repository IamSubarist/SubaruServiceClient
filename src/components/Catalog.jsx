import React from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductItem from "./ProductItem";
import axios from "axios";
import Link from "next/link";
import { CategoryBar } from "./CategoryBar";
import BurgerMenu from "./NavBar/ui/BurgerMenu";
import { API_BASE_URL, DEVICES_URL } from "../constants";

export const Catalog = () => {
  const [products, setProducts] = React.useState([]);
  const [authenticated, setAuthenticated] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${DEVICES_URL}`, {
          params: {
            page: currentPage,
            typeId: selectedCategory, // Добавьте выбранную категорию в параметры запроса
          },
        });
        const { data } = response;
        // console.log(selectedCategory);

        if (data.rows && Array.isArray(data.rows)) {
          setProducts(data.rows);
          setTotalPages(data.totalPages);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // const fetchCurrentUser = async () => {
    //   try {
    //     const token = localStorage.getItem("token");
    //     console.log(token);
    //     const response = await axios.get(
    //       "http://localhost:5000/api/user/auth",
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );

    //     // Здесь вы можете обработать полученные данные о пользователе
    //     console.log(response);
    //     setAuthenticated(true);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // Вызов функции для получения данных о текущем пользователе

    fetchProducts();
    // fetchCurrentUser();
  }, [currentPage, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // console.log(category);

    // Выполняем запрос к серверу
    // axios
    //   .get("http://localhost:5000/api/device", {
    //     params: {
    //       typeId: category.id,
    //     },
    //   })
    //   .then((response) => {
    //     // Обрабатываем полученные данные
    //     const { data } = response;
    //     setProducts(data); // Обновляем список товаров с полученными данными
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-3xl sm:text-5xl text-gray-700 font-bold mb-4 absolute -z-10">
        Каталог
      </h2>
      <h2 className="text-5xl sm:text-9xl text-gray-200 font-bold mb-4 relative -z-20 -top-2 sm:-top-14">
        Каталог
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex bg-white rounded-lg shadow-md">
          <CategoryBar onClick={handleCategoryClick} />
        </div>
        {/* <BurgerMenu catalogCategories={} /> */}
        <div className="flex flex-col sm:flex-row gap-10 mt-6">
          <div className="w-full sm:w-64">
            <Filter />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <ProductItem product={product} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
