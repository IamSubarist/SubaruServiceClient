import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { API_BASE_URL } from "@/src/constants";

export const ProductSlider = ({ product }) => (
  <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper rounded-lg"
  >
    {/* <SwiperSlide>
      <img
        src="https://i.pinimg.com/originals/59/22/88/5922881775ae8e6f2cfcb483ae5fe450.jpg"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://www.pressreleasefinder.com/primages/2016/lrg/SABICPR272a_3441111.jpg"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://cdn1.ozone.ru/s3/multimedia-v/6167085247.jpg" alt="" />
    </SwiperSlide> */}

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
