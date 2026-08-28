import cn from 'classnames';
import styles from './ProductPresent.module.scss';

interface ProductPresentProps {
  className?: string;
}

export function ProductPresent({ className }: Readonly<ProductPresentProps>) {
  return <div className={cn(styles.productPresent, className)}>Подарок</div>;
}
