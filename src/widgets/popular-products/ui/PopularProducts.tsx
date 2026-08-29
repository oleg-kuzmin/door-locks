import cn from 'classnames';
import { type ObjectProduct, ProductCard } from '@/entities/product-card';
import { Content, SectionTitle, Slider, useSlider } from '@/shared/ui';
import { popularProductsSliderConfig } from '../config';
import { ButtonSlide } from './ButtonSlide/ButtonSlide';
import styles from './PopularProducts.module.scss';

interface PopularProductsProps {
  className?: string;
}

const slides: ObjectProduct[] = [
  {
    id: '1',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
  {
    id: '2',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
  {
    id: '3',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
  {
    id: '4',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
  {
    id: '5',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
  {
    id: '6',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
  {
    id: '7',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
  {
    id: '8',
    title: 'Дверной Замок Golden Soft для отеля',
    image: '/test.png',
    newPrice: 33000,
    oldPrice: 37000,
    inStock: true,
    present: true,
    sale: true,
  },
];

export function PopularProducts({ className }: Readonly<PopularProductsProps>) {
  const { onNext, onPrev, onSwiper } = useSlider();

  const slideElements = slides.map(slide => <ProductCard key={slide.id} product={slide} />);

  return (
    <section className={cn(styles.popularProducts, className)}>
      <Content>
        <div className={styles.popularProducts__top}>
          <SectionTitle>Наши популярные продукты</SectionTitle>
          <div className={styles.popularProducts__actions}>
            <ButtonSlide type="prev" onClick={onPrev} />
            <ButtonSlide type="next" onClick={onNext} />
          </div>
        </div>
      </Content>
      <Slider
        className={styles.popularProducts__slider}
        classSlide={styles.popularProducts__slide}
        slides={slideElements}
        swiperConfig={popularProductsSliderConfig}
        onSwiper={onSwiper}
      />
    </section>
  );
}
