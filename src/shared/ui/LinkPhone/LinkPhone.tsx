import cn from 'classnames';
import styles from './LinkPhone.module.scss';

interface LinkPhoneProps {
  className?: string;
}

export function LinkPhone({ className }: Readonly<LinkPhoneProps>) {
  return (
    <a href="tel:+79665588499" className={cn(styles.linkPhone, className)}>
      +7 (966) 55 88 499
    </a>
  );
}
