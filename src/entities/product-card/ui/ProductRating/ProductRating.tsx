import cn from 'classnames';
import styles from './ProductRating.module.scss';

interface ProductRatingProps {
  rating: number;
  reviewsCount?: number;
  className?: string;
}

export function ProductRating({
  rating,
  reviewsCount = 0,
  className,
}: Readonly<ProductRatingProps>) {
  const ratingTrunc = Math.trunc(rating);

  const starElements = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className={cn(styles.productRating__star, {
        [styles.productRating__star_full]: i + 1 <= ratingTrunc,
      })}></div>
  ));

  return (
    <div className={cn(styles.productRating, className)}>
      <div className={styles.productRating__stars}>{starElements}</div>
      <span className={styles.productRating__text}>({reviewsCount}) отзывы</span>
    </div>
  );
}
