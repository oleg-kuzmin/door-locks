import cn from 'classnames';
import { ButtonMain, SectionTitle } from '@/shared/ui';
import type { ObjectHero } from '../model';
import { CardDescription } from './CardDescription/CardDescription';
import { CardImage } from './CardImage/CardImage';
import { CardPrice } from './CardPrice/CardPrice';
import { CardPriceTitle } from './CardPriceTitle/CardPriceTitle';
import styles from './HeroCard.module.scss';

interface HeroCardProps {
  card: ObjectHero;
  className?: string;
}

export function HeroCard({ card, className }: Readonly<HeroCardProps>) {
  const { title, image, description, newPrice, oldPrice } = card;

  return (
    <article className={cn(styles.heroCard, className)}>
      <div className={styles.heroCard__content}>
        <CardImage src={image} alt={description} />

        <div className={styles.heroCard__info}>
          <SectionTitle className={styles.heroCard__title}>{title}</SectionTitle>
          <CardDescription className={styles.heroCard__description}>{description}</CardDescription>
          <CardPriceTitle className={styles.heroCard__priceTitle} />
          <CardPrice className={styles.heroCard__price} newPrice={newPrice} oldPrice={oldPrice} />
          <ButtonMain
            className={styles.heroCard__buttonMain}
            onClick={() => alert('Add to cart')}
            tabIndex={-1}>
            Добавить в корзину
          </ButtonMain>
        </div>
      </div>
    </article>
  );
}
