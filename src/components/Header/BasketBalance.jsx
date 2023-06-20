import Image from "next/image";
import React from "react";
import basket from "../../../public/assets/basket.svg";
import Link from "next/link";

const BasketBalance = () => {
  return (
    <Link href={"/basket"} className="flex items-center">
      <Image className="" src={basket} alt="" />
      <p className="ml-2">0 ₽</p>
    </Link>
  );
};

export default BasketBalance;
