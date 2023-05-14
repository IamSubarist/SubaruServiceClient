import React from "react";
import logo from "../../../public/assets/logo.png";
import AuthButtons from "./AuthButtons";
import BasketBalance from "./BasketBalance";
import { NavBar } from "../NavBar/ui/NavBar";
import Image from "next/image";
import { HEADER_NAVBAR_MOCK } from "@/src/constants";
import Auth from "../Auth";
import Basket from "../Basket";

const Header = () => {
  const [AuthOpened, setAuthOpened] = React.useState(false);
  const [CartOpened, setCartOpened] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className="flex flex-col items-center mb-20">
      <div className="container mx-auto flex justify-between items-center ">
        <a href="/">
          <Image width={200} heigth={200} src={logo} alt="" />
        </a>
        <NavBar functionalVariable={HEADER_NAVBAR_MOCK} />
        <div className="flex">
          <BasketBalance onClickCart={() => setCartOpened(true)} />
          <AuthButtons onClickAuth={() => setAuthOpened(true)} />
        </div>
      </div>
      <div className="mt-5 w-1/3 border-2 border-blue-900 rounded-lg">
        <input
          value={searchValue}
          onChange={onChangeSearchInput}
          className="w-4/5 h-8 rounded-l-md pl-3 text-sm outline-none"
          placeholder="Поиск по названию/артикулу"
          type="text"
        />
        <button className="w-1/5 h-9 bg-blue-900 text-white rounded-r-md">
          Поиск
        </button>
      </div>
      {/* <Test /> */}
      {AuthOpened && <Auth onClose={() => setAuthOpened(false)} />}
      {CartOpened && <Basket onClose={() => setCartOpened(false)} />}
    </header>
  );
};

export default Header;
