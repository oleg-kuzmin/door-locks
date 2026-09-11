import type { SwiperClass, SwiperProps } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SliderProps {
  swiperConfig: SwiperProps;
  slides: { [key: string]: unknown }[];
  render: (slide: any) => React.ReactNode;
  onSwiper: (swiper: SwiperClass) => void;
  className?: string;
  classSlide?: string;
}

// use with "useSlider" hook
export function Slider({
  slides,
  render,
  onSwiper,
  swiperConfig,
  className,
  classSlide,
}: Readonly<SliderProps>) {
  const slideElements = slides.map(render);

  return (
    <Swiper className={className} onSwiper={onSwiper} onSlideChange={onSwiper} {...swiperConfig}>
      {slideElements.map((slide, index) => (
        <SwiperSlide key={index} className={classSlide}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
