import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";

const Company = () => {
  return (
    <div className="relative w-96">
      <Link href={"/"}>
        <Image width={200} heigth={200} src={logo} alt="" />
      </Link>
      <div className="mt-4">
        <div>2023 &copy; Subaru Service | Все права защищены</div>
      </div>
    </div>
  );
};

export default Company;
