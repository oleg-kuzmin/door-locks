import cn from 'classnames';
import { HeroCard } from '@/entities/hero-card';
import { Content } from '@/shared/ui';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: Readonly<HeroProps>) {
  return (
    <section className={cn(styles.hero, className)}>
      <Content className={styles.hero__content}>
        <HeroCard />
      </Content>
    </section>
  );
}
