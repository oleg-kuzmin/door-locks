import cn from 'classnames';
import styles from './CardPriceTitle.module.scss';

interface CardPriceTitleProps {
  className?: string;
}

export function CardPriceTitle({ className }: Readonly<CardPriceTitleProps>) {
  return <span className={cn(styles.cardPriceTitle, className)}>Цена</span>;
}
