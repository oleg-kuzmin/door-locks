import cn from 'classnames';
import styles from './ProductSale.module.scss';

interface ProductSaleProps {
  className?: string;
}

export function ProductSale({ className }: Readonly<ProductSaleProps>) {
  return <div className={cn(styles.productSale, className)}>SALE</div>;
}
