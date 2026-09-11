import { useRef, useState } from 'react';
import type { SwiperClass } from 'swiper/react';

export function useSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function onNext() {
    if (swiperRef) {
      swiperRef.current?.slideNext();
    }
  }

  function onPrev() {
    if (swiperRef) {
      swiperRef.current?.slidePrev();
    }
  }

  function onSwiper(swiper: SwiperClass) {
    swiperRef.current = swiper;
    setActiveIndex(swiper.realIndex);
  }

  return { onNext, onPrev, onSwiper, activeIndex };
}
