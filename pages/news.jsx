import React, { useState, useEffect } from "react";
import NewsItem from "@/src/components/NewsItem";
import axios from "axios";
import { API_BASE_URL, NEWS_URL } from "@/src/constants";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${NEWS_URL}`);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="main-title">Новостной блог</div>
      <div className="flex flex-wrap gap-5">
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
      </div>
    </>
  );
};

export default News;
