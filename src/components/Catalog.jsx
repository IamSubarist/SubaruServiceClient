import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import ProductItem from "./ProductItem";
import axios from "axios";
import { CategoryBar } from "./CategoryBar";
import {
  API_BASE_URL,
  DEVICES_URL,
  BRANDS_URL,
  CATEGORIES_URL,
} from "../constants";

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${DEVICES_URL}`, {
          params: {
            page: currentPage,
            typeId: selectedCategory,
            brandId: selectedBrand,
          },
        });
        const { data } = response;

        if (data.rows && Array.isArray(data.rows)) {
          setFilteredProducts(data.rows);
          setTotalPages(data.totalPages);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [currentPage, selectedCategory, selectedBrand]);

  const filterProducts = () => {
    const filteredData = filteredProducts.filter((product) => {
      let priceInRange = true;
      if (minPrice !== "" && maxPrice !== "") {
        priceInRange = product.price >= minPrice && product.price <= maxPrice;
      } else if (minPrice !== "") {
        priceInRange = product.price >= minPrice;
      } else if (maxPrice !== "") {
        priceInRange = product.price <= maxPrice;
      }

      return priceInRange;
    });

    setFilteredProducts(filteredData);
  };

  const handlePriceFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    filterProducts();
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id="catalog" className="container mx-auto mt-28">
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
        <div className="flex flex-col sm:flex-row gap-10 mt-6">
          <div className="w-full sm:w-64">
            <Filter handlePriceFilter={handlePriceFilter} brands={brands} />
            {/* <Image
              className="absolute -left-full sm:-left-60"
              src={Disk}
              alt={Disk}
            /> */}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
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
