import cn from 'classnames';
import { Content, SectionTitle, Slider, useSlider } from '@/shared/ui';
import { popularProductsSliderConfig } from '../config';
import { ButtonSlide } from './ButtonSlide/ButtonSlide';
import styles from './PopularProducts.module.scss';

interface PopularProductsProps {
  className?: string;
}

export function PopularProducts({ className }: Readonly<PopularProductsProps>) {
  const { onNext, onPrev, onSwiper } = useSlider();

  const slideElements = Array.from({ length: 8 }, (_, index) => {
    return <TestCard key={index}>{index + 1}</TestCard>;
  });

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

function TestCard({ children }) {
  return (
    <div className={styles.testCard}>
      <h1>{children}</h1>
    </div>
  );
}
