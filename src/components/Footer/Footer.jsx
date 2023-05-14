import React from "react";
import Account from "./Account";
import Company from "./Company";
import Contact from "./Contact";
import Main from "./Main";

const Footer = () => {
  return (
    <footer className="mt-36 pb-10 pt-10 flex gap-44 justify-center bg-gray-100/80">
      <Company />
      <Main />
      <Account />
      <Contact />
    </footer>
  );
};

export default Footer;
