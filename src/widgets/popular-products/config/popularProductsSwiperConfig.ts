import type { SwiperProps } from 'swiper/react';

export const popularProductsSwiperConfig: SwiperProps = {
  slidesPerView: 'auto',
  spaceBetween: 0,
  speed: 1000,
  watchSlidesProgress: true,
  breakpointsBase: 'container',
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      allowTouchMove: true,
      centeredSlides: false,
    },
    636: {
      slidesPerGroup: 2,
      allowTouchMove: true,
      centeredSlides: false,
    },
    954: {
      slidesPerGroup: 3,
      allowTouchMove: true,
      centeredSlides: false,
    },
    1272: {
      slidesPerGroup: 4,
      allowTouchMove: false,
      centeredSlides: false,
    },
  },
};
