"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import SliderItem from "./SliderItem";

const Slider = () => {
  const images = useMemo(
    () => ["/sample1.jpeg", "/sample2.jpg", "/sample3.jpg", "/sample4.jpg"],
    []
  );
  return (
    <Swiper
      style={{
        // @ts-ignore
        "--swiper-navigation-color": "white",
      }}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      className="h-[50vh] bg-white relative"
    >
      <h1 className="absolute left-1/2 top-0 -translate-x-[50%] z-10 uppercase text-3xl text-center bg-black text-white p-3">
        New technologies are around the corner
      </h1>
      {images.map((item) => (
        <SwiperSlide key={item}>
          <SliderItem image={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
