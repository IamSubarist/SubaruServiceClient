import React from "react";
import axios from "axios";
import { API_BASE_URL, CATEGORIES_URL } from "../constants";
// import BurgerMenu from "./NavBar/ui/BurgerMenu";
// import { CATALOG_NAVBAR_MOCK } from "../constants";
// import { useGetTypeCollectionQuery } from "../model";

export const CategoryBar = ({ onClick, functionalVariable }) => {
  const [activeItem, setActiveItem] = React.useState(null);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${CATEGORIES_URL}`);
        const { data } = response;
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClick(categories[index].id);
  };

  // const { response } = useGetTypeCollectionQuery();
  // console.log(response);
  return (
    <div>
      <div className="flex flex-wrap">
        {categories.map(({ id, name }, index) => (
          <a
            onClick={() => onSelectItem(index)}
            key={id}
            className={
              activeItem === index
                ? "link-focus"
                : "link-active translate-all duration-500"
            }
          >
            {name}
          </a>
        ))}
      </div>
      {/* <div>
        <BurgerMenu functionalVariable={CATALOG_NAVBAR_MOCK} />
      </div> */}
    </div>
  );
};
