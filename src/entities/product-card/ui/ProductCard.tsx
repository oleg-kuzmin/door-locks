import cn from 'classnames';
import { ProductSale } from './ProductSale/ProductSale';
import { ProductStock } from './ProductStock/ProductStock';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  className?: string;
}

export function ProductCard({ className }: Readonly<ProductCardProps>) {
  return (
    <div className={cn(styles.productCard, className)}>
      {/* <ProductStock inStock={true} /> */}
      <ProductSale />
    </div>
  );
}
