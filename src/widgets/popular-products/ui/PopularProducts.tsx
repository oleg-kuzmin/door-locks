import cn from 'classnames';
import { type ObjectProduct, ProductCard } from '@/entities/product-card';
import { Content, SectionTitle, Slider } from '@/shared/ui';
import { popularProductsSwiperConfig } from '../config';
import styles from './PopularProducts.module.scss';

const products: ObjectProduct[] = [
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

interface PopularProductsProps {
  className?: string;
}

export function PopularProducts({ className }: Readonly<PopularProductsProps>) {
  const productElements = products.map(product => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <section className={cn(styles.popularProducts, className)}>
      <Slider.Container swiperConfig={popularProductsSwiperConfig}>
        <Content className={styles.popularProducts__topContent}>
          <SectionTitle>Наши популярные продукты</SectionTitle>
          <div className={styles.popularProducts__actions}>
            <Slider.ButtonPrev
              className={cn(styles.popularProducts__button, styles.popularProducts__button_prev)}
            />
            <Slider.ButtonNext
              className={cn(styles.popularProducts__button, styles.popularProducts__button_next)}
            />
          </div>
        </Content>
        <Content className={styles.popularProducts__sliderContent}>
          <Slider
            slides={productElements}
            className={styles.popularProducts__slider}
            classSlide={styles.popularProducts__slide}
          />
        </Content>
      </Slider.Container>
    </section>
  );
}
