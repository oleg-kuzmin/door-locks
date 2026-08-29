import cn from 'classnames';
import styles from './ProductTitle.module.scss';

interface ProductTitleProps {
  children: string;
  className?: string;
}

export function ProductTitle({ children, className }: Readonly<ProductTitleProps>) {
  return <h3 className={cn(styles.productTitle, className)}>{children}</h3>;
}
