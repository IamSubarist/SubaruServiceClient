import Image from "next/image";
import React, { useState } from "react";
import tire from "../../public/assets/tire.png";

const CartProductItem = ({ product, removeFromCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickAdd = () => {
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="w-5/6">
      <div className="flex items-center border border-blue-900 rounded-md p-4">
        <Image width={150} src={tire} alt="" />
        <div className="">
          <div>
            <p className="font-bold text-xl mt-4 mb-1">{product.name}</p>
            <p className="mb-2">{product.description}</p>
          </div>
          <div className="flex gap-2">
            <div className=" font-bold mb-10">{product.price} ₽</div>
            <div className=" text-gray-400 line-through mb-10">
              {product.oldPrice} ₽
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
