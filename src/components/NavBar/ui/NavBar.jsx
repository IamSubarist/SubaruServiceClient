import React from "react";
import { useGetTypeCollectionQuery } from "../model";

export const NavBar = ({ functionalVariable, onClick }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  const { response } = useGetTypeCollectionQuery();
  console.log(response);
  return (
    <div className="flex items-center">
      {functionalVariable.map(({ href, name }, index) => (
        <a
          onClick={() => onSelectItem(index)}
          href={href}
          key={index}
          className={
            activeItem === index
              ? "py-2 px-2 mx-4 border-b-2 border-b-blue-900"
              : "py-2 px-2 mx-4 border-b-2 border-transparent translate-all duration-500 hover:border-b-blue-900 cursor-pointer"
          }
        >
          {name}
        </a>
      ))}
    </div>
  );
};
