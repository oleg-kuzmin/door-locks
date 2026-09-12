import cn from 'classnames';
import { HeroCard, type ObjectHero } from '@/entities/hero-card';
import { Content, Slider } from '@/shared/ui';
import { heroSwiperConfig } from '../config';
import styles from './Hero.module.scss';

const slides: ObjectHero[] = [
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
  const slideElements = slides.map(slide => <HeroCard key={slide.id} card={slide} />);

  return (
    <section className={cn(styles.hero, className)}>
      <Slider.Container swiperConfig={heroSwiperConfig}>
        <Content className={styles.hero__content}>
          <Slider slides={slideElements} classSlide={styles.hero__slide} />
          <div className={styles.hero__actions}>
            <Slider.ButtonPrev className={cn(styles.hero__button, styles.hero__button_prev)} />
            <Slider.Pagination
              className={styles.hero__bullets}
              classBullet={styles.hero__bullet}
              classBulletActive={styles.hero__bullet_active}
            />
            <Slider.ButtonNext className={cn(styles.hero__button, styles.hero__button_next)} />
          </div>
        </Content>
      </Slider.Container>
    </section>
  );
}
