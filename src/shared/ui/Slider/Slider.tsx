import type { SwiperClass, SwiperProps } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SliderProps {
  swiperConfig: SwiperProps;
  slides: React.ReactElement[];
  onSwiper: (swiper: SwiperClass) => void;
  className?: string;
}

// use with "useSlider" hook
export function Slider({ slides, onSwiper, swiperConfig, className }: Readonly<SliderProps>) {
  return (
    <Swiper className={className} onSwiper={onSwiper} onSlideChange={onSwiper} {...swiperConfig}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
