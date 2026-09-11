import type { SwiperProps } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export const popularProductsSliderConfig: SwiperProps = {
  slidesPerView: 'auto' as const,
  spaceBetween: 0,
  speed: 1000,
  watchSlidesProgress: true,
  breakpointsBase: 'container',
  navigation: true,
  modules: [Navigation],
  breakpoints: {
    0: {
      slidesPerGroup: 1,
      allowTouchMove: true,
      centeredSlides: true,
    },
    636: {
      slidesPerGroup: 2,
      centeredSlides: false,
    },
    954: {
      slidesPerGroup: 3,
    },
    1272: {
      slidesPerGroup: 4,
      allowTouchMove: false,
    },
  },

  // slidesPerView: 'auto',
  // spaceBetween: 0,
  // speed: 1000,
  // watchSlidesProgress: true,
  // navigation: true,
  // modules: [Navigation],
  // centeredSlides: false,
  // slidesPerGroup: 4,
  // allowTouchMove: false,

  // breakpoints: {
  //   0: {
  //     centeredSlides: true,
  //     slidesPerGroup: 1,
  //     allowTouchMove: true,
  //   },
  //   638: {
  //     centeredSlides: false,
  //     slidesPerGroup: 2,
  //     allowTouchMove: true,
  //   },
  //   956: {
  //     centeredSlides: false,
  //     slidesPerGroup: 3,
  //     allowTouchMove: true,
  //   },
  //   1342: {
  //     centeredSlides: false,
  //     slidesPerGroup: 4,
  //     allowTouchMove: true,
  //   },
  //   1440: {
  //     centeredSlides: false,
  //     slidesPerGroup: 4,
  //     allowTouchMove: false,
  //   },
  // },

  // todo: check and delete config
  // breakpointsBase: 'container',
  // breakpoints: {
  //   0: {
  //     centeredSlides: false,
  //     slidesPerGroup: 1,
  //   },
  //   636: {
  //     centeredSlides: false,
  //     slidesPerGroup: 2,
  //   },
  //   954: {
  //     slidesPerGroup: 3,
  //   },
  //   1272: {
  //     slidesPerGroup: 4,
  //   },
  // },
};
