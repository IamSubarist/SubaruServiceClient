import React, { useState } from "react";
import Link from "next/link";
// import AuthButtons from "../../Header/AuthButtons";

const BurgerMenu = ({ functionalVariable }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onSelectItem = (index) => {
    setActiveItem(index);
    setIsOpen(false);
    // onClick(functionalVariable[index].id);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <div className="" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="fixed top-14 bottom-0 right-0 left-0 bg-white">
          <div className="flex flex-col m-10 h-full ">
            {functionalVariable.map(({ id, name, href }, index) => (
              <Link
                href={href}
                onClick={() => onSelectItem(index)}
                key={index}
                className={
                  activeItem === index
                    ? "link-focus"
                    : "link-active translate-all duration-500"
                }
              >
                {name}
              </Link>
            ))}
            {/* <AuthButtons /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
