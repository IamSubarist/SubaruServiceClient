import React, { useState } from "react";
import userIcon from "../../../public/assets/user.svg";
import logoutIcon from "../../../public/assets/logout.svg";
import Image from "next/image";

const AuthButtons = ({ onAuthClick, onLogoutClick, isAuthenticated }) => {
  const handleLoginClick = () => {
    onAuthClick("login", true);
  };

  const handleLogoutClick = () => {
    onLogoutClick();
  };

  return (
    <div className="ml-10 flex">
      {isAuthenticated ? (
        <div className="flex gap-4">
          <Image onClick={handleLogoutClick} src={logoutIcon} />
        </div>
      ) : (
        <div className="flex gap-4">
          <Image onClick={handleLoginClick} src={userIcon} />
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
