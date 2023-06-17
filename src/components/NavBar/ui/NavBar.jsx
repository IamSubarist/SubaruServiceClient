import React from "react";
import axios from "axios";
import Link from "next/link";
// import { useGetTypeCollectionQuery } from "../model";

export const NavBar = ({ onClick, functionalVariable }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    // onClick(functionalVariable[index].id);
  };

  return (
    <div className="flex items-center">
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
    </div>
  );
};
