import type { SwiperProps } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const heroSwiperConfig: SwiperProps = {
  initialSlide: 0,
  loop: true,
  modules: [Autoplay],
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 1000,
  watchSlidesProgress: true,

  // todo: dev
  autoplay: false,

  // todo: prod
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
