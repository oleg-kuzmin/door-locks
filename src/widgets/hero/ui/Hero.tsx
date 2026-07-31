import cn from 'classnames';
// import { HeroCard } from '@/entities/hero-card';
import { Content } from '@/shared/ui';
import { ButtonSlide } from './ButtonSlide/ButtonSlide';
import { PaginationBullet } from './PaginationBullet/PaginationBullet';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.hero, className)}>
      <Content className={styles.hero__content}>
        {/* <HeroCard /> */}
        <Pagination />
      </Content>
    </section>
  );
}

function Pagination() {
  return (
    <div className={styles.pagination}>
      <ButtonSlide type="prev" />
      <div className={styles.pagination__bullets}>
        <PaginationBullet />
        <PaginationBullet isActive />
        <PaginationBullet />
      </div>
      <ButtonSlide type="next" />
    </div>
  );
}
