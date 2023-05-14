import NewsItem from "@/src/components/NewsItem";
import React from "react";

const News = () => {
  return (
    <div>
      <div className="mb-10 text-4xl">Новости</div>
      <div className="flex flex-wrap">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
};

export default News;
