import cn from 'classnames';
import { Price } from '@/shared/ui';
import type { ObjectProduct } from '../model';
import { ProductImage } from './ProductImage/ProductImage';
import { ProductPresent } from './ProductPresent/ProductPresent';
import { ProductRating } from './ProductRating/ProductRating';
import { ProductSale } from './ProductSale/ProductSale';
import { ProductStock } from './ProductStock/ProductStock';
import { ProductTitle } from './ProductTitle/ProductTitle';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: ObjectProduct;
  className?: string;
}

export function ProductCard({ product, className }: Readonly<ProductCardProps>) {
  const { inStock, sale, present, rating, reviewsCount, title, newPrice, oldPrice, image } =
    product;

  return (
    <div className={cn(styles.productCard, className)}>
      <div className={styles.productCard__imageContainer}>
        <ProductStock className={styles.productCard__stock} inStock={inStock} />
        {sale && <ProductSale className={styles.productCard__sale} />}
        {present && <ProductPresent className={styles.productCard__present} />}
        <ProductImage className={styles.productCard__image} src={image} alt={title} />
      </div>

      <div className={styles.productCard__info}>
        {rating && (
          <ProductRating
            className={styles.productCard__rating}
            rating={rating}
            reviewsCount={reviewsCount}
          />
        )}
        <ProductTitle className={styles.productCard__title}>{title}</ProductTitle>
        <Price className={styles.productCard__price}>
          <Price.New className={styles.productCard__newPrice}>{newPrice}</Price.New>
          <Price.Old className={styles.productCard__oldPrice}>{oldPrice}</Price.Old>
        </Price>
      </div>
    </div>
  );
}
