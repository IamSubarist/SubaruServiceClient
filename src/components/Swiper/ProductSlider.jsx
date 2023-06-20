import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { API_BASE_URL } from "@/src/constants";

export const ProductSlider = ({ product }) => (
  <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper rounded-lg"
  >
    {product.img.map((img) => (
      <SwiperSlide key={img}>
        <img
          className="w-full h-full"
          src={`${API_BASE_URL}${img}`}
          alt={product.name}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
