import React from "react";
import { ReviewsSlider } from "@/src/components/Swiper/ReviewsSlider";
import axios from "axios";
import { API_BASE_URL, REVIEWS_URL } from "../constants";
import Disk from "../../public/assets/Disk.png";
import Image from "next/image";
import { ReviewsSliderMobile } from "./Swiper/ReviewsSliderMobile";

const Reviews = () => {
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${REVIEWS_URL}`);
        const { data } = response;
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-3xl sm:text-5xl text-gray-700 font-bold mb-4 absolute -z-10">
        Отзывы
      </h2>
      <h2 className="text-5xl sm:text-9xl text-gray-200 font-bold mb-4 relative -z-20 -top-2 sm:-top-14">
        Отзывы
      </h2>
      <div className="hidden sm:block">
        <ReviewsSlider reviews={reviews} />
      </div>
      <div className="block sm:hidden">
        <ReviewsSliderMobile reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;
