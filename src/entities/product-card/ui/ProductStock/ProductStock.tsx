import cn from 'classnames';
import styles from './ProductStock.module.scss';

interface ProductStockProps {
  inStock: boolean;
  className?: string;
}

export function ProductStock({ inStock, className }: Readonly<ProductStockProps>) {
  const modifier = inStock ? styles.productStock_true : styles.productStock_false;

  return (
    <span className={cn(styles.productStock, modifier, className)}>
      {inStock ? 'В наличии' : 'Нет в наличии'}
    </span>
  );
}
