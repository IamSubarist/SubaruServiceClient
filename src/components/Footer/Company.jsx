import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.png";

const Company = () => {
  return (
    <div className="w-96">
      <Image width={200} heigth={200} src={logo} alt="" />
      <div className="mt-4">
        <a href={"/"}>2023 &copy; Subaru Service | Все права защищены</a>
      </div>
    </div>
  );
};

export default Company;
