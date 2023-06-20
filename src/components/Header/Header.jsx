import React from "react";
import logo from "../../../public/assets/logo.png";
import AuthButtons from "./AuthButtons";
import BasketBalance from "./BasketBalance";
import { NavBar } from "../NavBar/ui/NavBar";
import Image from "next/image";
import { HEADER_NAVBAR } from "@/src/constants";
import Auth from "../Auth";
import Basket from "../Basket";
import BurgerMenu from "../NavBar/ui/BurgerMenu";
import Link from "next/link";
import Search from "./Search";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout, autoLogin } from "../../store/actions/authActions";

const Header = () => {
  const [authOpened, setAuthOpened] = React.useState(false);
  const [cartOpened, setCartOpened] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        // Выполняем автоматическую авторизацию при наличии токена
        dispatch(autoLogin());
      }
    }
  }, []);

  const handleSearch = async () => {
    try {
      //...
      router.push({
        pathname: "/search_page",
        query: { query },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuthClick = () => {
    setAuthOpened(true);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header className="flex flex-col items-center mb-20">
      <div className="flex sm:w-full sm:justify-between items-center">
        <Link className="hidden sm:block" href="/">
          <Image width={200} height={200} src={logo} alt="" />
        </Link>
        <div className="flex fixed justify-between bg-white h-16 w-full items-center top-0 right-0 pl-8 pr-8 sm:hidden z-10">
          <BurgerMenu functionalVariable={HEADER_NAVBAR} />
          <Link href="/">
            <Image width={200} height={200} src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <NavBar functionalVariable={HEADER_NAVBAR} />
        </div>
        <div className="hidden sm:flex">
          <BasketBalance onClickCart={() => setCartOpened(true)} />
          {isAuthenticated ? (
            <button onClick={handleLogoutClick}>Выйти</button>
          ) : (
            <AuthButtons onAuthClick={handleAuthClick} />
          )}
        </div>
      </div>
      <Search onSearch={handleSearch} />
      {authOpened && <Auth onClose={() => setAuthOpened(false)} />}
      {cartOpened && <Basket onClose={() => setCartOpened(false)} />}
    </header>
  );
};

export default Header;
