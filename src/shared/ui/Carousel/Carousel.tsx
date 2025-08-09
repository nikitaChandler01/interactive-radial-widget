import React from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import "./Carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ICarousel<T> {
  swiperRef?: React.RefObject<SwiperRef | null>;
  items: T[];
  itemRenderer: (item: T) => React.ReactNode;
}

const Carousel = <T,>({ items, itemRenderer, swiperRef }: ICarousel<T>) => {
  return (
    <Swiper
      ref={swiperRef}
      className="my-carousel"
      slidesPerView={"auto"}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{itemRenderer(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
