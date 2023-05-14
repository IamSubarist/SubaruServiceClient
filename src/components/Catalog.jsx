import React from "react";
import Filter from "./Filter";
import { NavBar } from "./NavBar/ui/NavBar";
import Pagination from "./Pagination";
import ProductItem from "./ProductItem";
import { CATALOG_NAVBAR_MOCK } from "../constants";

const wheel = [
  { id: 1, title: "Michelin" },
  { id: 2, title: "Toyo Tires" },
  { id: 3, title: "Yokohama" },
  { id: 4, title: "Кама" },
];

export const Catalog = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div className="container mx-auto mt-36">
      <h2 className="text-5xl text-gray-700 font-bold absolute">Каталог</h2>
      <h2 className="text-gray-200 font-bold text-9xl relative -z-10 -top-14">
        Каталог
      </h2>
      <div className="flex flex-col items-center">
        <NavBar
          onClick={(name) => console.log(name)}
          functionalVariable={CATALOG_NAVBAR_MOCK}
        />
        <div className="flex mt-6">
          <div>
            <Filter />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {items.map((item) => (
              <ProductItem key={item.id} title={item.title} />
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};
