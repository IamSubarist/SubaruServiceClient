import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col m-auto w-10/12 mt-5">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
