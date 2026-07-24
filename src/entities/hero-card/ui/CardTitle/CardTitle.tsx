import cn from 'classnames';
import styles from './CardTitle.module.scss';

interface CardTitleProps {
  children: string;
  className?: string;
}

export function CardTitle({ children, className }: Readonly<CardTitleProps>) {
  return <h2 className={cn(styles.cardTitle, className)}>{children}</h2>;
}
