import type { SwiperProps } from 'swiper/react';
import cn from 'classnames';
import { Autoplay } from 'swiper/modules';
import { Content, Slider, useSlider } from '@/shared/ui';
import { ButtonSlide } from './ButtonSlide/ButtonSlide';
import { PaginationBullet } from './PaginationBullet/PaginationBullet';
import styles from './Hero.module.scss';

const slides = [
  {
    id: '3290421369',
    title: 'Golden Soft \nGS-200Z-5 для офиса',
    description:
      'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы',
    images: ['/category-alpha/default.png'],
    newPrice: 33000,
    oldPrice: 37000,
  },
  {
    id: '4290421369',
    title: 'Golden Soft \nGS-200Z-5 для офиса',
    description:
      'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы',
    images: ['/category-alpha/default.png'],
    newPrice: 33000,
    oldPrice: 37000,
  },
  {
    id: '5290421369',
    title: 'Golden Soft \nGS-200Z-5 для офиса',
    description:
      'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы',
    images: ['/category-alpha/default.png'],
    newPrice: 33000,
    oldPrice: 37000,
  },
];

const swiperConfig: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 1000,
  loop: true,
  initialSlide: 0,
  modules: [Autoplay],
  autoplay: false, // todo: delete on prod
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  breakpoints: {
    0: {
      // allowTouchMove: true,
    },
    1440: {
      // allowTouchMove: false,
    },
  },
};

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  const { onNext, onPrev, onSwiper, activeIndex } = useSlider();

  const slideElements = slides.map(slide => (
    <TestSlide key={slide.id}>{slide.description}</TestSlide>
  ));

  return (
    <section className={cn(styles.hero, className)}>
      <Content className={styles.hero__content}>
        <Slider swiperConfig={swiperConfig} slides={slideElements} onSwiper={onSwiper} />
      </Content>
      <Pagination
        length={slides.length}
        activeIndex={activeIndex}
        onNext={onNext}
        onPrev={onPrev}
      />
    </section>
  );
}

interface PaginationProps {
  length: number;
  activeIndex: number;
  onPrev: VoidFunction;
  onNext: VoidFunction;
}

function Pagination({ length, activeIndex, onPrev, onNext }: Readonly<PaginationProps>) {
  return (
    <div className={styles.pagination}>
      <ButtonSlide type="prev" onClick={onPrev} />
      <div className={styles.pagination__bullets}>
        {Array.from({ length: length }, (_, index) => (
          <PaginationBullet isActive={activeIndex === index} key={index} />
        ))}
      </div>
      <ButtonSlide type="next" onClick={onNext} />
    </div>
  );
}

interface TestSlideProps {
  children: React.ReactNode;
}

function TestSlide({ children }: Readonly<TestSlideProps>) {
  return <div className={styles.testSlide}>{children}</div>;
}
