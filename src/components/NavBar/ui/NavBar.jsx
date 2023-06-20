import React from "react";
import Link from "next/link";

export const NavBar = ({ functionalVariable }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
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
