import cn from 'classnames';
// import { HeroCard } from '@/entities/hero-card';
import { Content } from '@/shared/ui';
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

interface PaginationBulletProps {
  isActive?: boolean;
}

function PaginationBullet({ isActive }: Readonly<PaginationBulletProps>) {
  return (
    <div
      className={cn(styles.paginationBullet, { [styles.paginationBullet_active]: isActive })}></div>
  );
}

interface ButtonSlideProps {
  type: 'prev' | 'next';
}

function ButtonSlide({ type }: Readonly<ButtonSlideProps>) {
  let className = styles.buttonSlide;

  switch (type) {
    case 'prev':
      className = cn(className, styles.buttonSlide_prev);
      break;
    case 'next':
      className = cn(className, styles.buttonSlide_next);
      break;
  }

  return <button className={className}></button>;
}
