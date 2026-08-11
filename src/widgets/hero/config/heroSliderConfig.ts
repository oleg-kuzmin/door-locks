import type { SwiperProps } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const heroSliderConfig: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 1000,
  loop: true,
  initialSlide: 0,
  modules: [Autoplay, Pagination],
  autoplay: false, // todo: prod
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
    1440: {
      allowTouchMove: false,
    },
  },
};
