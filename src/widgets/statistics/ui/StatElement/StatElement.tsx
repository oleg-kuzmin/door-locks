import cn from 'classnames';
import type { ObjectStat } from '../../model';
import { StatCaption } from '../StatCaption/StatCaption';
import { StatQuantity } from '../StatQuantity/StatQuantity';
import styles from './StatElement.module.scss';

interface StatElementProps extends ObjectStat {
  className?: string;
}

export function StatElement({ quantity, caption, className }: Readonly<StatElementProps>) {
  return (
    <li className={cn(styles.statElement, className)}>
      <StatQuantity>{quantity}</StatQuantity>
      <StatCaption>{caption}</StatCaption>
    </li>
  );
}
