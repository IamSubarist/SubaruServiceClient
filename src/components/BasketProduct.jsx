import React from "react";

const BasketProduct = () => {
  return (
    <div className="flex items-center border rounded-md p-4">
      <img
        src="https://avatars.mds.yandex.net/get-mpic/4955516/img_id2974642615251689402.jpeg/orig"
        width={70}
        height={70}
        className="bg-no-repeat bg-contain mr-4 rounded-md"
      />
      <div>
        <p>Мужские кроссовки Nike Air Max 270</p>
        <p className="font-bold">12 999 руб.</p>
      </div>
      <button className="border rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="gray"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default BasketProduct;
