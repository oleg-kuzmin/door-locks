import cn from 'classnames';
import styles from './StatQuantity.module.scss';

interface StatQuantityProps {
  children: string;
  className?: string;
}

export function StatQuantity({ children, className }: Readonly<StatQuantityProps>) {
  return <span className={cn(styles.statQuantity, className)}>{children}</span>;
}
