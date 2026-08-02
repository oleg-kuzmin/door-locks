import cn from 'classnames';
import { ButtonMain, SectionTitle } from '@/shared/ui';
import type { Card } from '../model';
import { CardDescription } from './CardDescription/CardDescription';
import { CardImage } from './CardImage/CardImage';
import { CardPrice } from './CardPrice/CardPrice';
import { CardPriceTitle } from './CardPriceTitle/CardPriceTitle';
import styles from './HeroCard.module.scss';

interface HeroCardProps {
  className?: string;
}

// todo: delete after api
const heroCards: Card[] = [
  {
    id: '3290421369',
    title: 'Golden Soft \nGS-200Z-5 для офиса',
    description:
      'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы',
    image: 'categories/default.png',
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

export function HeroCard({ className }: Readonly<HeroCardProps>) {
  const { title, image, description, newPrice, oldPrice } = heroCards[0];

  return (
    <article className={cn(styles.heroCard, className)}>
      <CardImage src={image} alt={description} />

      <div className={styles.heroCard__content}>
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
    </article>
  );
}
