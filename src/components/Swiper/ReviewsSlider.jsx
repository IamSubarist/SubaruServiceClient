import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

export const ReviewsSlider = ({ reviews }) => (
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper"
  >
    {reviews.map((review) => (
      <SwiperSlide
        className="max-w-md p-4 mb-10 bg-white rounded-lg shadow-xl"
        key={review.id}
      >
        <div className="text-center">
          <p className="text-xl font-bold mb-4">{review.name}</p>
          <p className="text-justify">{review.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);