import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

export const Slider = () => (
  <Swiper
    pagination={{
      type: "fraction",
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper w-1/4 rounded-lg"
  >
    <SwiperSlide>
      <img
        src="https://remzonamsk.ru/wp-content/uploads/2018/06/tire1-768x768.jpg"
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://cdn1.ozone.ru/s3/multimedia-w/6240818612.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img
        className=" h-full"
        src="https://lookw.ru/11/1117/1567185203-124.jpg"
        alt=""
      />
    </SwiperSlide>
  </Swiper>
);
