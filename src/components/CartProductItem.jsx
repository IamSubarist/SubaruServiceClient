import Image from "next/image";
import React from "react";
import tire from "../../public/assets/tire.png";

const CartProductItem = ({ title }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickAdd = () => {
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <a className="w-5/6" href="/">
      <div className="flex items-center border border-blue-900 rounded-md p-4">
        <Image width={150} src={tire} alt="" />
        <div className="">
          <div>
            <p className="font-bold text-xl mt-4 mb-1">Michelin</p>
            <p className="mb-2">Шина летняя "Primacy 3 GRNX 205/55R16 91V"</p>
          </div>
          <div>
            {/* <p className="uppercase text-sm text-gray-400">Стоимость:</p> */}
            <p>
              1211 ₽ <span className="line-through text-gray-400">1500 ₽</span>
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <button onClick={onClickFavorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isFavorite ? "pink" : "none"}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                color={isFavorite ? "pink" : "gray"}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <button
              onClick={onClickAdd}
              className={
                isAdded
                  ? "border-2 border-blue-900 outline-none rounded-md px-2 py-1"
                  : "text-white bg-gradient-to-t from-blue-900 to-blue-800 rounded-md px-2 py-1"
              }
            >
              {isAdded ? "В корзине" : "В корзину"}
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CartProductItem;
