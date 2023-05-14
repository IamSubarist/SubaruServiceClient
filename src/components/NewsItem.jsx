import Link from "next/link";
import React from "react";

const NewsItem = () => {
  return (
    <div className="flex flex-col w-1/3 p-4 mb-20">
      <img
        src="https://phonoteka.org/uploads/posts/2021-07/1625202270_10-phonoteka-org-p-shkolnie-novosti-zastavka-krasivie-zastavk-10.jpg"
        alt=""
      />
      <div className="mt-2 mb-2">
        <p className="text-lg">Заголовок новости</p>
        <p className="mb-2 text-sm">Подзаголовок новости</p>
        <p className="text-justify text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          magnam voluptatum illum repellendus animi doloremque, laboriosam
          praesentium beatae...
        </p>
      </div>
      <Link href="/news_page">Подробнее...</Link>
    </div>
  );
};

export default NewsItem;
