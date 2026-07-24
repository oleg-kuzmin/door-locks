import cn from 'classnames';
import { addWhiteSpaceToPrice } from '@/shared/lib';
import styles from './CardPrice.module.scss';

interface CardPriceProps {
  newPrice: string | number;
  oldPrice: string | number;
  className?: string;
}

export function CardPrice({ newPrice, oldPrice, className }: Readonly<CardPriceProps>) {
  return (
    <div className={cn(styles.cardPrice, className)}>
      <ins className={styles.cardPrice__new}>{addWhiteSpaceToPrice(newPrice)}</ins>
      <del className={styles.cardPrice__old}>{addWhiteSpaceToPrice(oldPrice)}</del>
    </div>
  );
}
