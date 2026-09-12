import cn from 'classnames';
import styles from './StatElement.module.scss';

interface StatElementProps {
  quantity: string;
  caption: string;
  className?: string;
}

export function StatElement({ quantity, caption, className }: Readonly<StatElementProps>) {
  return (
    <li className={cn(styles.statElement, className)}>
      <span className={styles.statElement__quantity}>{quantity}</span>
      <span className={styles.statElement__caption}>{caption}</span>
    </li>
  );
}
