import cn from 'classnames';
import { addWhiteSpaceToPrice } from '@/shared/lib';
import { ButtonMain } from '@/shared/ui';
import styles from './HeroCard.module.scss';

interface HeroCardProps {
  className?: string;
}

const heroCards = [
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
      <img className={styles.heroCard__image} src={image} alt={description} />
      <div className={styles.heroCard__content}>
        <h2 className={styles.heroCard__title}>{title}</h2>
        <p className={styles.heroCard__description}>{description}</p>
        <span className={styles.heroCard__priceTitle}>Цена</span>
        <div className={styles.heroCard__price}>
          <ins className={styles.heroCard__newPrice}>{addWhiteSpaceToPrice(newPrice)}</ins>
          <del className={styles.heroCard__oldPrice}>{addWhiteSpaceToPrice(oldPrice)}</del>
        </div>
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
