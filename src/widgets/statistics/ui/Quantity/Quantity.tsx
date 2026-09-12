import cn from 'classnames';
import styles from './Quantity.module.scss';

interface QuantityProps {
  children: string;
  className?: string;
}

export function Quantity({ children, className }: Readonly<QuantityProps>) {
  return <span className={cn(styles.quantity, className)}>{children}</span>;
}
