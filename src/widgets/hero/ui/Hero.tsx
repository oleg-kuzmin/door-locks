import cn from 'classnames';
import { HeroCard } from '@/entities/hero-card';
import { Content, Slider, useSlider } from '@/shared/ui';
import { heroSliderConfig } from '../config';
import { Pagination } from './Pagination/Pagination';
import styles from './Hero.module.scss';

const slides = [
  {
    id: '3290421369',
    title: 'Golden Soft \nGS-200Z-5 для офиса',
    description:
      'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы',
    image: '/categories/default.png',
    newPrice: 33000,
    oldPrice: 37000,
  },
  {
    id: '4290421369',
    title: 'Golden Soft \nGS-200Z-5 для офиса',
    description:
      'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы',
    image: '/categories/default.png',
    newPrice: 33000,
    oldPrice: 37000,
  },
  {
    id: '5290421369',
    title: 'Golden Soft \nGS-200Z-5 для офиса',
    description:
      'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы',
    image: '/categories/default.png',
    newPrice: 33000,
    oldPrice: 37000,
  },
];

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  const { onNext, onPrev, onSwiper, activeIndex } = useSlider();

  const slideElements = slides.map(slide => <HeroCard key={slide.id} card={slide} />);

  return (
    <section className={cn(styles.hero, className)}>
      <Content className={styles.hero__content}>
        <Slider
          className={styles.hero__slider}
          swiperConfig={heroSliderConfig}
          slides={slideElements}
          onSwiper={onSwiper}
        />
        <Pagination
          className={styles.hero__pagination}
          length={slides.length}
          activeIndex={activeIndex}
          onNext={onNext}
          onPrev={onPrev}
        />
      </Content>
    </section>
  );
}
