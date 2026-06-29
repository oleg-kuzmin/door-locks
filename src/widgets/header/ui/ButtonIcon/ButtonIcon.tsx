import cn from 'classnames';
import styles from './ButtonIcon.module.scss';

interface ButtonIconProps {
  type: 'cart' | 'like';
  onClick: VoidFunction;
  counter?: number;
  className?: string;
}

export function ButtonIcon({ type, onClick, counter = 0, className }: Readonly<ButtonIconProps>) {
  let modifier: string = '';

  switch (type) {
    case 'cart':
      modifier = styles.buttonIcon_cart;
      break;
    case 'like':
      modifier = styles.buttonIcon_like;
      break;
  }

  return (
    <button className={cn(styles.buttonIcon, modifier, className)} onClick={onClick}>
      <span className={styles.buttonIcon__counter}>
        {counter < 100 ? counter : `${String(counter)[0]}..`}
      </span>
    </button>
  );
}
