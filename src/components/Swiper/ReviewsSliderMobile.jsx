import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

export const ReviewsSliderMobile = ({ reviews }) => (
  <Swiper
    slidesPerView={1}
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
      <SwiperSlide className="shadow-box mb-10" key={review.id}>
        <div className="text-center">
          <p className="text-xl font-bold mb-4">{review.name}</p>
          <p className="text-justify">{review.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
