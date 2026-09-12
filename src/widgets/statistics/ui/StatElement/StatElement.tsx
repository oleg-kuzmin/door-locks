import cn from 'classnames';
import { Caption } from '../Caption/Caption';
import { Quantity } from '../Quantity/Quantity';
import styles from './StatElement.module.scss';

interface StatElementProps {
  quantity: string;
  caption: string;
  className?: string;
}

export function StatElement({ quantity, caption, className }: Readonly<StatElementProps>) {
  return (
    <li className={cn(styles.statElement, className)}>
      <Quantity>{quantity}</Quantity>
      <Caption>{caption}</Caption>
    </li>
  );
}
