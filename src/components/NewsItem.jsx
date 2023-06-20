import Image from "next/image";
import Link from "next/link";
import React from "react";
import { API_BASE_URL } from "../constants";

const NewsItem = ({ news }) => {
  console.log(news.img);

  return (
    <div className="flex flex-col w-[310px] p-4 bg-white rounded-lg shadow-xl mb-8">
      <Image
        className="w-full h-1/3 object-cover"
        priority // {false} | {true}
        width={200}
        height={200}
        src={`${API_BASE_URL}${news.img[0]}`}
        alt={news.title}
      />
      <div className="mt-2 mb-2">
        <p className="text-lg">{news.title}</p>
        <p className="mb-2 text-sm">{news.subtitle}</p>
        <p className="text-justify text-sm">
          {news.description.slice(0, 200) + "..."}
        </p>
      </div>
      <Link
        className="main-btn transition-all duration-500"
        href={`/news/${news.id}`}
      >
        Подробнее...
      </Link>
    </div>
  );
};

export default NewsItem;
