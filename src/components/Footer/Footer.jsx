import React from "react";
import Account from "./Account";
import Company from "./Company";
import Contact from "./Contact";
import Main from "./Main";

const Footer = () => {
  return (
    <footer className="mt-36 p-10 flex flex-col gap-10 justify-center bg-gray-100/80 sm:flex-row sm:justify-around">
      <Company />
      <Main />
      <Account />
      <Contact />
    </footer>
  );
};

export default Footer;
