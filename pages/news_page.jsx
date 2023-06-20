import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import NewsItem from "@/src/components/NewsItem";
import { NewsSlider } from "@/src/components/Swiper/NewsSlider";
import { API_BASE_URL, NEWS_URL } from "@/src/constants";

const NewsPage = () => {
  const router = useRouter();
  const [news, setNews] = useState(null);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      fetchNews(router.query.id);
    }
    fetchAllNews();
  }, [router.query.id]);

  const fetchAllNews = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${NEWS_URL}`);
      setAllNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNews = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${NEWS_URL}${id}`);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-10 flex-col sm:flex-row">
      <div className="bg-white rounded-lg shadow-xl p-10 w-full h-full">
        <h1 className="main-title">{news.title}</h1>
        <p className="">{news.subtitle}</p>
        <div className="shadow-box h-full w-full">
          <NewsSlider news={news} />
        </div>
        <p className="text-gray-700 text-justify mt-10">{news.description}</p>
      </div>
      <div className="flex flex-col">
        <div className="main-title">Другие новости</div>
        {allNews.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
