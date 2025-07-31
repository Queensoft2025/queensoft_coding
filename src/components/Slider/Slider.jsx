import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import slider1 from "../../assets/slide1.png";
import slider2 from "../../assets/slider2.png";

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="Slide 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
