import type { SwiperClass, SwiperProps } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SliderProps {
  swiperConfig: SwiperProps;
  slides: React.ReactElement[];
  onSwiper: (swiper: SwiperClass) => void;
}

// need useSlider hook
export function Slider({ slides, onSwiper, swiperConfig }: SliderProps) {
  return (
    <Swiper onSwiper={onSwiper} onSlideChange={onSwiper} {...swiperConfig}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
