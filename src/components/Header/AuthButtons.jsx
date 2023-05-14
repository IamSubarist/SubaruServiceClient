// import Image from "next/image";
import React from "react";
// import user from "../../../public/assets/user.svg";
import Link from "next/link";

const AuthButtons = ({ onClickAuth }) => {
  return (
    <>
      <div className="ml-10 flex">
        {/* <Image className="" src={user} alt="" /> */}
        <div className="flex gap-4">
          <button
            onClick={onClickAuth}
            className="px-4 py-1 rounded-md bg-blue-900 text-white"
          >
            Войти
          </button>

          <button
            onClick={onClickAuth}
            className="px-4 py-1 border-2 border-blue-900 rounded-md"
          >
            Регистрация
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthButtons;
