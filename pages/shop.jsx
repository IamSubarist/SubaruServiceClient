import { AboutUs } from "@/src/components/AboutUs";
import { Catalog } from "@/src/components/Catalog";
import Reviews from "@/src/components/Reviews";
import { Utp } from "@/src/components/Utp";
import React from "react";

const Shop = () => {
  return (
    <div>
      <Utp />
      <AboutUs />
      <Catalog />
      <Reviews />
    </div>
  );
};

export default Shop;
