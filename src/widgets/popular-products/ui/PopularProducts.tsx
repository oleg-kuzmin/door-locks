import cn from 'classnames';
import { ProductCard } from '@/entities/product-card';
import { Content, SectionTitle, Slider, useSlider } from '@/shared/ui';
import { popularProductsSliderConfig } from '../config';
import { ButtonSlide } from './ButtonSlide/ButtonSlide';
import styles from './PopularProducts.module.scss';

interface PopularProductsProps {
  className?: string;
}

const slides = Array.from({ length: 8 }, (_, index) => {
  return <ProductCard key={index} />;
});

export function PopularProducts({ className }: Readonly<PopularProductsProps>) {
  const { onNext, onPrev, onSwiper } = useSlider();

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
        slides={slides}
        swiperConfig={popularProductsSliderConfig}
        onSwiper={onSwiper}
      />
    </section>
  );
}
