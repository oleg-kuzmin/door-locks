import cn from 'classnames';
import styles from './CardDescription.module.scss';

interface CardDescriptionProps {
  children: string;
  className?: string;
}

export function CardDescription({ children, className }: Readonly<CardDescriptionProps>) {
  return <p className={cn(styles.cardDescription, className)}>{children}</p>;
}
